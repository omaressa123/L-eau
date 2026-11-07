/* ==========================================================================
   L'eau Academy — MAIN
   Applies js/config.js to the page, wires WhatsApp links, navigation,
   map/directions, social icons and boots every module.
   ========================================================================== */
(function () {
  "use strict";

  const cfg = window.ACADEMY_CONFIG;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const L = () => window.LeauLang;
  const t = (k) => L().t(k);

  /* ---------------- Config → page ---------------- */
  function applyConfig() {
    $$("[data-img-logo]").forEach((i) => { i.src = cfg.brand.logo; });
    $$("[data-img-logo-original]").forEach((i) => { i.src = cfg.brand.logoOriginal; });
    $$("[data-img]").forEach((i) => { const p = cfg.images[i.getAttribute("data-img")]; if (p) i.src = p; });
    const fav = $('link[rel="icon"]'); if (fav && cfg.brand.favicon) fav.href = cfg.brand.favicon;
    if (cfg.brand.siteUrl) {
      const c = document.createElement("link"); c.rel = "canonical"; c.href = cfg.brand.siteUrl; document.head.appendChild(c);
    }
    if (cfg.heroVideo) {
      const v = $("#heroVideo");
      if (v) { v.src = cfg.heroVideo; v.hidden = false; v.preload = "auto"; v.play().catch(() => {}); }
    }
    const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------------- WhatsApp ---------------- */
  const isNumber = (n) => /^\d{8,15}$/.test(String(n || "").replace(/[\s+()-]/g, ""));
  const clean = (n) => String(n).replace(/[\s+()-]/g, "");

  function numberFor(topic) {
    const list = cfg.whatsapp.numbers;
    const idx = cfg.whatsapp.topicNumber[topic];
    const pref = list[idx != null ? idx : 0];
    if (pref && isNumber(pref.number)) return clean(pref.number);
    const any = list.find((n) => isNumber(n.number));
    return any ? clean(any.number) : null;
  }
  function waUrl(topic, custom) {
    const num = numberFor(topic); if (!num) return null;
    const msg = custom || t("wa." + topic);
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
  }
  const groupUrl = () => (/^https?:\/\//i.test(cfg.whatsapp.groupInviteLink || "") ? cfg.whatsapp.groupInviteLink : null);

  let toastTimer;
  function toast(msg) {
    const el = $("#toast"); if (!el) return;
    el.textContent = msg; el.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 4200);
  }

  function wireWhatsApp() {
    $$("[data-wa]").forEach((a) => {
      const topic = a.getAttribute("data-wa");
      const url = waUrl(topic, a.dataset.message);
      if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; }
      else { a.href = "#contact"; a.removeAttribute("target"); a.dataset.unset = "1"; }
    });
    ["groupBtn", "groupBtn2"].forEach((id) => {
      const b = document.getElementById(id); if (!b) return;
      const g = groupUrl();
      if (g) { b.href = g; b.dataset.unset = ""; } else { b.href = "#contact"; b.removeAttribute("target"); b.dataset.unset = "group"; }
    });
  }

  function wireClicks() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-wa], #groupBtn, #groupBtn2"); if (!a) return;
      // The assessment button builds its message from the ticked skills at click time
      if (a.id === "assessWa") {
        const url = waUrl("schedule", a.dataset.message);
        if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; return; }
      }
      if (a.dataset.unset === "1") { e.preventDefault(); toast(t("toast.noNumber")); }
      else if (a.dataset.unset === "group") { e.preventDefault(); toast(t("toast.noGroup")); }
    });
  }

  function buildLines() {
    const box = $("#waLines"); if (!box) return;
    box.innerHTML = "";
    cfg.whatsapp.numbers.forEach((n, i) => {
      const ok = isNumber(n.number);
      const a = document.createElement(ok ? "a" : "button");
      a.className = "line-card" + (ok ? "" : " is-unset"); a.type = ok ? undefined : "button";
      if (ok) { a.href = "https://wa.me/" + clean(n.number) + "?text=" + encodeURIComponent(t("wa.general")); a.target = "_blank"; a.rel = "noopener noreferrer"; }
      else a.addEventListener("click", () => toast(t("toast.noNumber")));
      const pretty = ok ? "+" + clean(n.number).replace(/^(\d{2})(\d{3})(\d{3})(\d+)$/, "$1 $2 $3 $4") : n.number;
      a.innerHTML = '<svg class="ic"><use href="#i-whatsapp"/></svg><span><small>' + t("contact.line") + " " + (i + 1) + "</small><b>" + pretty + "</b></span>";
      box.appendChild(a);
    });
  }

  /* ---------------- Location ---------------- */
  function wireLocation() {
    const q = encodeURIComponent(cfg.location.mapsQuery);
    const dir = cfg.location.mapsLink || "https://www.google.com/maps/dir/?api=1&destination=" + q;
    const d = $("#directionsBtn"); if (d) d.href = dir;
    const f = $("#mapFrame");
    if (f) {
      const src = cfg.location.mapsEmbed || "https://www.google.com/maps?q=" + q + "&output=embed";
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((en) => { if (en[0].isIntersecting) { f.src = src; io.disconnect(); } }, { rootMargin: "400px" });
        io.observe(f);
      } else f.src = src;
    }
  }

  /* ---------------- Social ---------------- */
  function buildSocial() {
    const box = $("#socialLinks"); if (!box) return;
    const names = { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok", youtube: "YouTube" };
    box.innerHTML = "";
    Object.keys(names).forEach((k) => {
      const url = cfg.social[k]; if (!url) return;
      const a = document.createElement("a");
      a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.setAttribute("aria-label", names[k]);
      a.innerHTML = '<svg class="ic"><use href="#i-' + k + '"/></svg>';
      box.appendChild(a);
    });
    if (!box.children.length) box.hidden = true;
  }

  /* ---------------- Navigation ---------------- */
  function nav() {
    const header = $("#siteHeader"), burger = $("#burger"), menu = $("#mobileMenu");
    const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

    const setMenu = (open) => {
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", open ? "false" : "true");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.querySelector("use").setAttribute("href", open ? "#i-close" : "#i-menu");
      if (document.getElementById("intro") && !document.getElementById("intro").classList.contains("is-gone")) return;
      document.body.classList.toggle("is-locked", open);
    };
    burger.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); burger.focus(); } });
    window.addEventListener("resize", () => { if (window.innerWidth > 1180 && menu.classList.contains("is-open")) setMenu(false); });

    // Current section highlight
    const links = $$(".nav a");
    const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((a) => a.classList.remove("is-current"));
          const a = map.get(en.target.id); if (a) a.classList.add("is-current");
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      $$("main section[id]").forEach((s) => io.observe(s));
    }
  }

  /* ---------------- Boot ---------------- */
  function boot() {
    document.documentElement.classList.remove("no-js");
    applyConfig();

    L().onChange(() => { wireWhatsApp(); buildLines(); if (window.LeauLevels) window.LeauLevels.renderAll(); });
    L().init();                       // sets language, direction, fills all text
    window.LeauLevels.init();         // levels rail + card + assessment
    wireWhatsApp(); buildLines(); wireClicks();
    wireLocation(); buildSocial(); nav();
    window.LeauAnim.init();           // intro, canvas, strokes, reveals
    L().refresh();                    // translate nodes created by animations

    // The assessment button must re-evaluate its link whenever its message changes
    const wa = $("#assessWa"); if (wa) wa.addEventListener("pointerdown", () => { wireWhatsApp(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
