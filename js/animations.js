/* ==========================================================================
   L'eau Academy — ANIMATIONS
   Intro (ripples + liquid reveal), hero water canvas, reveal-on-scroll,
   stroke scenes (animated SVG swimmers), kids technique illustrations.
   ========================================================================== */
(function () {
  "use strict";

  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const cfg = window.ACADEMY_CONFIG || {};
  const NS = "http://www.w3.org/2000/svg";

  /* ======================================================================
     1. CINEMATIC LOGO INTRO
     ====================================================================== */
  const Intro = {
    done: false, cbs: [],
    onDone(fn) { this.done ? fn() : this.cbs.push(fn); },
    finish(instant) {
      if (this.done) return;
      this.done = true;
      const el = $("#intro");
      cancelAnimationFrame(this.raf); cancelAnimationFrame(this.liquidRaf);
      const end = () => {
        if (el) el.classList.add("is-gone");
        document.body.classList.remove("is-locked");
        document.body.classList.add("is-ready");
        const main = $("#hero"); if (main && !instant) { try { main.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
        this.cbs.splice(0).forEach((f) => f());
      };
      try { sessionStorage.setItem("leau.intro", "1"); } catch (e) { /* ignore */ }
      if (!el || instant || reduced) { if (el) el.classList.add("is-leaving"); end(); return; }
      el.classList.add("is-leaving");
      setTimeout(end, 1100);
    },
    init() {
      const el = $("#intro");
      if (!el) { this.finish(true); return; }
      let seen = false;
      try { seen = sessionStorage.getItem("leau.intro") === "1"; } catch (e) { /* ignore */ }
      const force = new URLSearchParams(location.search).has("intro");
      if ((seen && !force) || new URLSearchParams(location.search).has("nointro")) { this.finish(true); return; }

      document.body.classList.add("is-locked");
      const skip = $("#introSkip");
      if (skip) { skip.addEventListener("click", () => this.finish()); try { skip.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
      document.addEventListener("keydown", (e) => { if (!this.done && (e.key === "Escape" || e.key === "Enter")) this.finish(); });

      if (reduced) { setTimeout(() => this.finish(), 900); return; }
      this.liquid();
      this.ripples(el);
      setTimeout(() => this.finish(), 5200);
    },
    /* The logo is revealed through a liquid displacement that settles to zero,
       then the filter is removed so the final logo is pixel-identical to the original. */
    liquid() {
      const map = $("#liquidMap"), noise = $("#liquidNoise"), logo = $("#introLogo");
      if (!map || !noise || !logo) return;
      const start = performance.now() + 350, dur = 2600;
      const tick = (now) => {
        const t = Math.min(Math.max((now - start) / dur, 0), 1);
        const e = 1 - Math.pow(1 - t, 3);
        const s = 70 * (1 - e);
        map.setAttribute("scale", s.toFixed(2));
        const bf = 0.012 + Math.sin(now / 420) * 0.003 * (1 - e);
        noise.setAttribute("baseFrequency", bf.toFixed(4) + " " + (bf * 1.7).toFixed(4));
        if (t < 1) this.liquidRaf = requestAnimationFrame(tick);
        else logo.style.filter = "none";
      };
      this.liquidRaf = requestAnimationFrame(tick);
    },
    ripples(el) {
      const cv = $("#introCanvas"); if (!cv) return;
      const ctx = cv.getContext("2d"); if (!ctx) return;
      let W = 0, H = 0; const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rings = [], bubbles = [];
      const size = () => { W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
      size(); window.addEventListener("resize", size);
      const addRing = (x, y, maxR) => rings.push({ x, y, r: 0, max: maxR || Math.max(W, H) * 0.75, born: performance.now() });
      [350, 1100, 1800, 2700, 3600].forEach((d) => setTimeout(() => { if (!this.done) addRing(W / 2, H / 2); }, d));
      el.addEventListener("pointerdown", (e) => addRing(e.clientX, e.clientY, Math.max(W, H) * 0.5));
      for (let i = 0; i < 42; i++) bubbles.push({ x: Math.random() * 1, y: Math.random() * 1.2, r: 1 + Math.random() * 3.5, v: .0004 + Math.random() * .0009, ph: Math.random() * 6 });
      let last = performance.now();
      const frame = (now) => {
        const dt = now - last; last = now;
        ctx.clearRect(0, 0, W, H);
        // light shafts
        const g = ctx.createRadialGradient(W / 2, -H * 0.1, 10, W / 2, H * 0.3, H * 0.9);
        g.addColorStop(0, "rgba(120,200,255,.28)"); g.addColorStop(1, "rgba(120,200,255,0)");
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
        // bubbles
        ctx.lineWidth = 1;
        bubbles.forEach((b) => {
          b.y -= b.v * dt; if (b.y < -0.05) { b.y = 1.05; b.x = Math.random(); }
          const x = (b.x + Math.sin(now / 900 + b.ph) * .012) * W, y = b.y * H;
          ctx.strokeStyle = "rgba(190,235,255,.45)"; ctx.beginPath(); ctx.arc(x, y, b.r, 0, 6.283); ctx.stroke();
          ctx.fillStyle = "rgba(255,255,255,.12)"; ctx.fill();
        });
        // ripples
        for (let i = rings.length - 1; i >= 0; i--) {
          const r = rings[i], age = (now - r.born) / 3200;
          if (age >= 1) { rings.splice(i, 1); continue; }
          r.r = r.max * (1 - Math.pow(1 - age, 2.2));
          const a = (1 - age) * 0.55;
          for (let k = 0; k < 3; k++) {
            const rr = r.r - k * 26; if (rr <= 0) continue;
            ctx.strokeStyle = "rgba(160,225,255," + (a / (1 + k * 0.7)).toFixed(3) + ")";
            ctx.lineWidth = 2 - k * 0.5;
            ctx.beginPath(); ctx.arc(r.x, r.y, rr, 0, 6.283); ctx.stroke();
          }
        }
        this.raf = requestAnimationFrame(frame);
      };
      this.raf = requestAnimationFrame(frame);
    }
  };

  /* ======================================================================
     2. HERO WATER CANVAS (caustic light + rising bubbles)
     ====================================================================== */
  function heroCanvas() {
    const cv = $("#heroCanvas"); if (!cv) return;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    let W = 0, H = 0, visible = true, raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const size = () => { W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size(); window.addEventListener("resize", size);
    const N = window.innerWidth < 700 ? 18 : 34;
    const bubbles = Array.from({ length: N }, () => ({ x: Math.random(), y: Math.random(), r: 1 + Math.random() * 4, v: .00004 + Math.random() * .00012, ph: Math.random() * 6.28 }));
    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      // caustic ribbons
      for (let i = 0; i < 7; i++) {
        ctx.beginPath();
        const y0 = H * (0.08 + i * 0.13), amp = 14 + i * 3;
        for (let x = -10; x <= W + 10; x += 14) {
          const y = y0 + Math.sin(x / (90 + i * 14) + t / (1300 + i * 140)) * amp + Math.sin(x / 47 - t / 900 + i) * 6;
          x === -10 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "rgba(110,210,255," + (0.035 + (i % 3) * 0.012) + ")";
        ctx.lineWidth = 12 + i * 2; ctx.stroke();
      }
      // light beams
      for (let i = 0; i < 4; i++) {
        const x = W * (0.15 + i * 0.25) + Math.sin(t / 3000 + i * 2) * 60;
        const g = ctx.createLinearGradient(x, 0, x + 140, H);
        g.addColorStop(0, "rgba(140,220,255,.09)"); g.addColorStop(1, "rgba(140,220,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x - 20, 0); ctx.lineTo(x + 50, 0); ctx.lineTo(x + 240, H); ctx.lineTo(x + 60, H); ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      // bubbles
      bubbles.forEach((b) => {
        b.y -= b.v * 16; if (b.y < -0.05) { b.y = 1.05; b.x = Math.random(); }
        const x = (b.x + Math.sin(t / 1100 + b.ph) * 0.01) * W, y = b.y * H;
        ctx.strokeStyle = "rgba(220,245,255,.5)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(x, y, b.r, 0, 6.283); ctx.stroke();
        ctx.fillStyle = "rgba(255,255,255,.08)"; ctx.fill();
      });
    };
    const loop = (t) => { if (visible) draw(t); raf = requestAnimationFrame(loop); };
    if (reduced) { draw(2000); return; }
    raf = requestAnimationFrame(loop);
    if ("IntersectionObserver" in window) new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(cv);
    document.addEventListener("visibilitychange", () => { visible = !document.hidden; });
  }

  /* Hero headline: split into words that rise out of a mask */
  function splitHeroTitle() {
    const span = $("#heroTitle [data-i18n]"); if (!span) return;
    const text = span.textContent.trim(); if (!text) return;
    const frag = document.createDocumentFragment();
    text.split(/\s+/).forEach((w, i) => {
      const wrap = document.createElement("span"); wrap.className = "w";
      const inner = document.createElement("span"); inner.textContent = w; inner.style.setProperty("--i", i);
      wrap.appendChild(inner); frag.appendChild(wrap);
    });
    const sr = document.createElement("span"); sr.className = "sr"; sr.textContent = text;
    span.textContent = ""; span.appendChild(sr); span.appendChild(frag);
    span.querySelectorAll(".w").forEach((w) => w.setAttribute("aria-hidden", "true"));
  }

  /* ======================================================================
     3. REVEAL ON SCROLL + MISC
     ====================================================================== */
  function reveals() {
    const items = $$(".reveal");
    // stagger siblings
    const groups = new Map();
    items.forEach((el) => { const p = el.parentElement; const n = groups.get(p) || 0; groups.set(p, n + 1); el.style.setProperty("--d", Math.min(n, 6) * 90 + "ms"); });
    if (!("IntersectionObserver" in window) || reduced) { items.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    items.forEach((e) => io.observe(e));
  }

  function pointerGlow() {
    document.addEventListener("pointermove", (e) => {
      const b = e.target.closest && e.target.closest(".btn"); if (!b) return;
      const r = b.getBoundingClientRect();
      b.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      b.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    }, { passive: true });
  }

  function heroParallax() {
    if (reduced) return;
    const img = $(".hero__img"), inner = $(".hero__inner"); if (!img || !inner) return;
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return; ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        inner.style.transform = "translateY(" + y * 0.12 + "px)"; inner.style.opacity = String(1 - y / (window.innerHeight * 1.1));
        ticking = false;
      });
    }, { passive: true });
  }

  /* ======================================================================
     4. STROKE SCENES (animated SVG swimmers)
     ====================================================================== */
  const SKIN = "#f1c7a4", SUIT = "#142f6e", CAP = "#ffffff", BODY = "#dbe8ff";

  function sceneShell(cls, num, inner, opts) {
    opts = opts || {};
    // lane floor markers repeat every 200px; surface wave repeats every 160px
    let floor = "", surf = "", flags = "";
    for (let x = -200; x < 1100; x += 200) floor += '<rect x="' + x + '" y="408" width="8" height="26" fill="#1a3b86" opacity=".55"/><rect x="' + (x + 100) + '" y="418" width="60" height="6" fill="#0a1a47" opacity=".5"/>';
    surf = "M-160 220" + Array.from({ length: 14 }, (_, i) => (i === 0 ? " q40 -9 80 0" : " t80 0")).join("");
    if (opts.flags) for (let x = -20; x < 860; x += 40) flags += '<path d="M' + x + ' 70l20 0l-10 22z" fill="' + (Math.floor((x + 20) / 40) % 2 ? "#ffffff" : "#58c4c6") + '" opacity=".8"/>';
    let caustics = "";
    for (let i = 0; i < 9; i++) caustics += '<ellipse class="caustic" cx="' + (60 + i * 90) + '" cy="' + (270 + (i % 3) * 38) + '" rx="' + (30 + (i % 4) * 8) + '" ry="5" fill="#bfeeff" opacity=".3"/>';
    const bubbles = [0, 1.1, 2.2].map((d, i) => '<circle class="bubble" cx="' + (572 + i * 14) + '" cy="262" r="' + (4 + i) + '" style="--bd:' + d + 's"/>').join("");
    return '<svg class="scene ' + cls + (opts.reverse ? " reverse" : "") + '" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true" focusable="false">' +
      '<defs>' +
      '<linearGradient id="sky-' + cls + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e2560"/><stop offset="1" stop-color="#1e5a8a"/></linearGradient>' +
      '<linearGradient id="wat-' + cls + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a8a96" stop-opacity=".55"/><stop offset="1" stop-color="#132f72" stop-opacity=".92"/></linearGradient>' +
      '<linearGradient id="deep-' + cls + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e728a"/><stop offset="1" stop-color="#132f72"/></linearGradient>' +
      '</defs>' +
      '<rect width="800" height="450" fill="url(#deep-' + cls + ')"/>' +
      '<rect width="800" height="220" fill="url(#sky-' + cls + ')"/>' +
      flags +
      '<g>' + caustics + '</g>' +
      '<g class="lanes">' + floor + '</g>' +
      '<g transform="translate(430 224) scale(1.5) translate(-430 -224)"><g class="swimmer">' + inner + '</g></g>' +
      '<rect y="220" width="800" height="230" fill="url(#wat-' + cls + ')"/>' +
      '<g class="surf"><path d="' + surf + '" fill="none" stroke="rgba(255,255,255,.75)" stroke-width="2.2"/><path d="' + surf + '" transform="translate(0 7)" fill="none" stroke="rgba(150,225,255,.4)" stroke-width="1.5"/></g>' +
      bubbles +
      '<text x="76" y="132" style="font:800 118px/1 Sora,Cairo,sans-serif;fill:none;stroke:rgba(255,255,255,.28);stroke-width:1.5px" aria-hidden="true">' + num + '</text>' +
      '</svg>';
  }

  const line = (x1, y1, x2, y2, w, c, extra) => '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + c + '" stroke-width="' + w + '" stroke-linecap="round" ' + (extra || "") + "/>";
  const head = (cx, cy, up) => '<circle cx="' + cx + '" cy="' + cy + '" r="21" fill="' + SKIN + '"/>' +
    '<path d="M' + (cx - 21) + " " + cy + "a21 21 0 0 1 42 0" + (up ? "" : "") + 'z" fill="' + CAP + '" transform="rotate(' + (up ? 180 : 0) + " " + cx + " " + cy + ')"/>' +
    (up ? '<path d="M' + (cx + 20) + " " + (cy - 2) + 'l9 3l-9 4z" fill="' + SKIN + '"/>' : '<rect x="' + (cx + 6) + '" y="' + (cy - 3) + '" width="14" height="8" rx="4" fill="#9fe7ff" stroke="#052a5a" stroke-width="2"/>');
  const hand = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + SKIN + '"/>';
  const arm = (cls, len, c) => '<g class="' + cls + '">' + line(505, 226, 505 + len, 226, 14, c || SKIN) + hand(505 + len, 226) + "</g>";

  const SCENES = {
    free() {
      return sceneShell("free", "01",
        '<g class="leg-b">' + line(330, 228, 258, 232, 15, "#b9cdee") + "</g>" +
        '<g class="leg-a">' + line(330, 228, 252, 224, 17, BODY) + "</g>" +
        line(330, 228, 395, 228, 38, SUIT) + line(390, 227, 505, 226, 34, BODY) +
        arm("arm-b", 94, "#b9cdee") + '<g class="head">' + head(532, 224) + "</g>" + arm("arm-a", 96, SKIN));
    },
    back() {
      return sceneShell("back", "02",
        '<g class="leg-b">' + line(330, 226, 258, 230, 15, "#b9cdee") + "</g>" +
        '<g class="leg-a">' + line(330, 226, 252, 222, 17, BODY) + "</g>" +
        line(330, 226, 395, 226, 38, SUIT) + line(390, 226, 505, 224, 34, BODY) +
        arm("arm-b", 94, "#b9cdee") + '<g class="head">' + head(534, 214, true) + "</g>" + arm("arm-a", 96, SKIN), { flags: true });
    },
    fly() {
      return sceneShell("fly", "03",
        '<g class="hips"><g class="tail">' + line(330, 226, 262, 232, 16, BODY) + line(330, 226, 262, 220, 14, "#b9cdee") + "</g>" + line(330, 226, 400, 226, 38, SUIT) + "</g>" +
        '<g class="torso">' + line(395, 226, 505, 226, 34, BODY) + '<g class="arms-b">' + arm("x", 94, "#b9cdee") + '</g><g class="head">' + head(532, 222) + "</g>" + '<g class="arms">' + line(505, 226, 603, 226, 14, SKIN) + hand(603, 226) + "</g></g>");
    },
    breast() {
      return sceneShell("breast", "04",
        '<g class="body-glide">' +
        '<g class="thigh">' + line(400, 230, 352, 236, 20, BODY) + '<g class="shank">' + line(352, 236, 300, 238, 16, BODY) + "<circle cx=\"298\" cy=\"238\" r=\"8\" fill=\"" + SKIN + '"/></g></g>' +
        line(340, 230, 400, 228, 36, SUIT) + line(395, 227, 505, 226, 34, BODY) +
        '<g class="arm-r">' + line(500, 228, 585, 228, 13, "#b9cdee") + hand(585, 228) + "</g>" +
        '<g class="head">' + head(532, 224) + "</g>" +
        '<g class="arm-l">' + line(500, 228, 590, 228, 14, SKIN) + hand(590, 228) + "</g></g>");
    }
  };

  function buildStrokes() {
    const imgs = cfg.strokeImages || {};
    $$("[data-stroke-svg]").forEach((box) => {
      const k = box.getAttribute("data-stroke-svg");
      const custom = imgs[k];
      if (custom) {
        const isVideo = /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(custom);
        if (isVideo) {
          box.innerHTML = '<video src="' + custom + '" autoplay muted loop playsinline preload="auto"></video>';
        } else {
          box.innerHTML = '<img src="' + custom + '" alt="" loading="lazy">';
        }
        return;
      }
      box.innerHTML = SCENES[k] ? SCENES[k]() : "";
    });

    const order = ["free", "back", "fly", "breast"];
    const tabs = order.map((k) => $("#tab-" + k)), panels = order.map((k) => $("#panel-" + k));
    const dots = $$("#strokeDots i"), wipe = $("#rippleWipe");
    let cur = 0;
    const go = (i, focus) => {
      i = (i + order.length) % order.length;
      if (i === cur && panels[i] && !panels[i].hidden) return;
      cur = i;
      tabs.forEach((t, n) => { t.setAttribute("aria-selected", n === i ? "true" : "false"); t.tabIndex = n === i ? 0 : -1; });
      panels.forEach((p, n) => {
        p.classList.remove("is-active");
        p.hidden = n !== i;
        const v = p.querySelector("video");
        if (v) {
          if (n === i) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        }
      });
      void panels[i].offsetWidth; panels[i].classList.add("is-active");
      dots.forEach((d, n) => d.classList.toggle("on", n === i));
      if (wipe && !reduced) { wipe.classList.remove("go"); void wipe.offsetWidth; wipe.classList.add("go"); }
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => go(i));
      t.addEventListener("keydown", (e) => {
        const rtl = document.documentElement.dir === "rtl";
        const next = rtl ? "ArrowLeft" : "ArrowRight", prev = rtl ? "ArrowRight" : "ArrowLeft";
        if (e.key === next) { e.preventDefault(); go(i + 1, true); }
        else if (e.key === prev) { e.preventDefault(); go(i - 1, true); }
        else if (e.key === "Home") { e.preventDefault(); go(0, true); }
        else if (e.key === "End") { e.preventDefault(); go(3, true); }
      });
    });
    const p = $("#strokePrev"), n = $("#strokeNext");
    if (p) p.addEventListener("click", () => go(cur - 1));
    if (n) n.addEventListener("click", () => go(cur + 1));

    // swipe on touch
    const stage = $("#strokeStage"); let sx = null;
    if (stage) {
      stage.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
      stage.addEventListener("touchend", (e) => {
        if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; sx = null;
        if (Math.abs(dx) > 60) { const rtl = document.documentElement.dir === "rtl"; go(cur + ((dx < 0) !== rtl ? 1 : -1)); }
      }, { passive: true });
    }
    // pause heavy animation when offscreen
    if ("IntersectionObserver" in window && stage) {
      new IntersectionObserver((e) => {
        const visible = e[0].isIntersecting;
        stage.classList.toggle("is-paused", !visible);
        const v = panels[cur] && panels[cur].querySelector("video");
        if (v) {
          if (visible) v.play().catch(() => {});
          else v.pause();
        }
      }).observe(stage);
    }
  }

  /* ======================================================================
     5. KIDS TECHNIQUE ILLUSTRATIONS
     ====================================================================== */
  function tShell(inner, extra) {
    let marks = "";
    for (let x = -80; x < 420; x += 80) marks += '<rect x="' + x + '" y="176" width="5" height="14" fill="#0a1a47" opacity=".35"/>';
    return '<svg viewBox="0 0 320 200" role="img" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="320" height="200" fill="#1e5a8a"/><rect width="320" height="96" fill="#1a3b86"/>' +
      '<rect y="96" width="320" height="104" fill="#2a8a96" opacity=".55"/>' +
      '<g class="lanes">' + marks + "</g>" + inner +
      '<rect y="96" width="320" height="104" fill="#1e728a" opacity=".38"/>' +
      '<path d="M0 96q20-5 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1.8"/>' +
      (extra || "") + "</svg>";
  }
  const kb = (cx, cy, d) => '<circle class="bubble" cx="' + cx + '" cy="' + cy + '" r="3" style="--bd:' + d + 's"/>';
  const kline = (x1, y1, x2, y2, w, c, cls) => '<line ' + (cls ? 'class="' + cls + '" ' : "") + 'x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + c + '" stroke-width="' + w + '" stroke-linecap="round"/>';
  const kcap = (cx, cy) => '<circle cx="' + cx + '" cy="' + cy + '" r="13" fill="' + SKIN + '"/><path d="M' + (cx - 13) + " " + cy + 'a13 13 0 0 1 26 0z" fill="#ffb347"/>';

  const TECH = [
    { k: "front", view: "front", svg: () => tShell('<g class="bob">' + kline(120, 102, 222, 100, 22, "#1e4296") + kline(120, 104, 70, 112, 11, BODY) + kline(214, 102, 214, 140, 9, SKIN) + kcap(238, 108) + "</g>", kb(255, 130, 0) + kb(262, 140, 1.2)) },
    { k: "back", view: "back", svg: () => tShell('<g class="bob">' + kline(80, 98, 220, 97, 22, "#ff7a59") + kline(220, 98, 270, 108, 10, SKIN) + kline(80, 100, 36, 100, 11, BODY) + kcap(240, 92) + '<circle cx="250" cy="90" r="2" fill="#052a5a"/></g>') },
    { k: "superman", view: "front", svg: () => tShell('<g class="bob">' + kline(110, 103, 215, 101, 21, "#1e4296") + kline(215, 100, 296, 100, 10, SKIN) + kline(110, 105, 60, 108, 11, BODY, "k-leg-a") + kcap(222, 108) + "</g>", kb(240, 128, .3)) },
    { k: "kick", view: "front", svg: () => tShell('<g class="bob">' + '<g class="k-leg-b" style="transform-origin:120px 104px">' + kline(120, 104, 54, 110, 11, "#b9cdee") + "</g>" + '<g class="k-leg-a" style="transform-origin:120px 104px">' + kline(120, 102, 54, 98, 12, BODY) + "</g>" + kline(120, 103, 212, 101, 21, "#1e4296") + kcap(226, 108) + '<rect x="236" y="92" width="64" height="12" rx="6" fill="#ffd166"/>' + kline(214, 102, 250, 98, 9, SKIN) + "</g>", kb(262, 118, .4) + kb(60, 124, 1.4)) },
    { k: "breath", view: "front", svg: () => tShell('<g class="bob">' + kline(80, 110, 190, 106, 22, "#1e4296") + '<g class="k-head" style="transform-origin:200px 108px">' + kcap(206, 104) + '<rect x="212" y="105" width="9" height="4" rx="2" fill="#052a5a"/></g></g>', kb(228, 120, 0) + kb(236, 132, .9) + kb(226, 144, 1.8) + '<path d="M236 70q14-22 34-6" fill="none" stroke="#58c4c6" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 5"/>') },
    { k: "confidence", view: null, svg: () => tShell('<g transform="translate(40 24) scale(.75)"><g class="k-jump">' + kline(160, 40, 160, 82, 20, "#1e4296") + kline(160, 82, 146, 108, 10, SKIN) + kline(160, 82, 178, 106, 10, SKIN) + kline(160, 50, 128, 28, 9, SKIN) + kline(160, 50, 192, 28, 9, SKIN) + '<circle cx="160" cy="26" r="13" fill="' + SKIN + '"/><path d="M147 26a13 13 0 0 1 26 0z" fill="#ffb347"/><path d="M154 30q6 6 12 0" stroke="#052a5a" stroke-width="2" fill="none" stroke-linecap="round"/></g></g>', '<circle class="ringA" cx="160" cy="98" r="4"/><circle class="ringB" cx="160" cy="98" r="4"/>') }
  ];

  function buildTech() {
    const grid = $("#techGrid"); if (!grid) return;
    grid.innerHTML = "";
    TECH.forEach((c) => {
      const card = document.createElement("article"); card.className = "tcard reveal";
      card.innerHTML = '<div class="tcard__viz">' + c.svg() +
        (c.view ? '<span class="tcard__view" data-i18n="tech.v' + (c.view === "front" ? "Front" : "Back") + '"></span>' : "") +
        '</div><div class="tcard__body"><h4 data-i18n="tech.' + (c.k === "breath" ? "breath" : c.k === "kick" ? "kick" : c.k) + '"></h4><p data-i18n="tech.' + (c.k === "breath" ? "breath" : c.k === "kick" ? "kick" : c.k) + 'D"></p></div>';
      grid.appendChild(card);
    });
    if (window.LeauLang && window.LeauLang.refresh) window.LeauLang.refresh();
  }

  /* ======================================================================
     PUBLIC
     ====================================================================== */
  window.LeauAnim = {
    init() {
      buildStrokes();
      buildTech();
      splitHeroTitle();
      if (window.LeauLang) window.LeauLang.onChange(() => { splitHeroTitle(); });
      heroCanvas();
      heroParallax();
      pointerGlow();
      Intro.init();
      Intro.onDone(reveals);
    }
  };
})();
