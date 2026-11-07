/* ==========================================================================
   L'eau Academy — LEVEL DATA + INTERACTIVE LEVEL UI + ASSESSMENT
   Content for the 7-level pathway lives in LEVELS (3 languages each).
   ========================================================================== */
(function () {
  "use strict";

  const LEVELS = [
    {
      n: 1, kids: true,
      name: { en: "Water Familiarization", ar: "التعرّف على الماء", fr: "Familiarisation avec l'eau" },
      focus: { en: "Getting comfortable in the water.", ar: "الشعور بالراحة والأمان داخل الماء.", fr: "Se sentir à l'aise dans l'eau." },
      skills: {
        en: ["Entering the water comfortably", "Basic water confidence", "Blowing bubbles", "Putting the face in the water gradually", "Assisted front floating", "Assisted back floating", "Basic supported kicking", "Introduction to the Superman position"],
        ar: ["دخول الماء بارتياح", "ثقة أساسية في الماء", "نفخ الفقاعات", "وضع الوجه في الماء تدريجيًا", "الطفو على البطن بمساعدة", "الطفو على الظهر بمساعدة", "ضربات الرجلين الأساسية بدعم", "مقدمة لوضعية السوبرمان"],
        fr: ["Entrer dans l'eau avec confiance", "Confiance de base dans l'eau", "Souffler des bulles", "Mettre progressivement le visage dans l'eau", "Flottaison ventrale assistée", "Flottaison dorsale assistée", "Battements de jambes de base avec soutien", "Introduction à la position Superman"]
      },
      req: {
        en: "Comfortable entering the water, blowing bubbles with the face in the water, and floating with assistance. The coach confirms readiness.",
        ar: "الراحة في دخول الماء ونفخ الفقاعات مع وضع الوجه في الماء والطفو بمساعدة، وبتأكيد من المدرب.",
        fr: "À l'aise pour entrer dans l'eau, souffler des bulles le visage dans l'eau et flotter avec aide. Le coach confirme que l'enfant est prêt."
      }
    },
    {
      n: 2, kids: true,
      name: { en: "Basic Water Skills", ar: "مهارات الماء الأساسية", fr: "Compétences aquatiques de base" },
      focus: { en: "Developing basic independence.", ar: "بناء الاستقلالية الأساسية في الماء.", fr: "Développer l'autonomie de base." },
      skills: {
        en: ["Independent bubbles", "Front floating", "Basic Superman position", "Superman kicking", "Back floating", "Assisted back kicking", "Basic gliding", "Basic body balance"],
        ar: ["نفخ الفقاعات باستقلالية", "الطفو على البطن", "وضعية السوبرمان الأساسية", "ضربات الرجلين بوضعية السوبرمان", "الطفو على الظهر", "ضربات الرجلين على الظهر بمساعدة", "الانزلاق الأساسي", "التوازن الأساسي للجسم"],
        fr: ["Bulles en autonomie", "Flottaison ventrale", "Position Superman de base", "Battements de jambes en Superman", "Flottaison dorsale", "Battements dorsaux assistés", "Glisse de base", "Équilibre corporel de base"]
      },
      req: {
        en: "Floats on the front and back, glides, and kicks in the Superman position with growing independence.",
        ar: "الطفو على البطن والظهر والانزلاق وضربات الرجلين بوضعية السوبرمان باستقلالية متزايدة.",
        fr: "Flotte sur le ventre et sur le dos, glisse et bat des jambes en position Superman avec une autonomie croissante."
      }
    },
    {
      n: 3, kids: true,
      name: { en: "Foundation Swimming", ar: "أساسيات السباحة", fr: "Bases de la natation" },
      focus: { en: "Building basic swimming movements.", ar: "بناء حركات السباحة الأساسية.", fr: "Construire les mouvements de base de la nage." },
      skills: {
        en: ["Independent back floating", "Basic back kicking", "Superman kicking with improved control", "Side kicking", "Basic freestyle arm movements", "Introduction to catch-up drills", "Single-arm freestyle drills", "Dolphin body movement", "Basic dolphin kicking", "Introduction to breaststroke kicking"],
        ar: ["الطفو على الظهر باستقلالية", "ضربات الرجلين الأساسية على الظهر", "ضربات السوبرمان بتحكم أفضل", "ضربات الرجلين على الجانب", "حركات الذراعين الأساسية للسباحة الحرة", "مقدمة لتمارين اللحاق (Catch-up)", "تمارين الذراع الواحدة للسباحة الحرة", "حركة الجسم الدولفينية", "ضربات الدولفين الأساسية", "مقدمة لضربات الرجلين في سباحة الصدر"],
        fr: ["Flottaison dorsale en autonomie", "Battements dorsaux de base", "Battements Superman mieux contrôlés", "Battements sur le côté", "Mouvements de bras de base en crawl", "Introduction aux exercices de rattrapage", "Exercices de crawl à un bras", "Ondulation du corps en dauphin", "Battements de dauphin de base", "Introduction aux battements de brasse"]
      },
      req: {
        en: "Swims short distances with basic arm and leg movements, floats independently on the back, and shows early dolphin and breaststroke kick patterns.",
        ar: "السباحة لمسافات قصيرة بحركات أساسية للذراعين والرجلين، والطفو على الظهر باستقلالية، وبدايات حركة الدولفين وضربة الصدر.",
        fr: "Nage de courtes distances avec des mouvements de base, flotte seul sur le dos et montre les premiers schémas de dauphin et de brasse."
      }
    },
    {
      n: 4, kids: false,
      name: { en: "Beginner Swimming Technique", ar: "تقنية السباحة للمبتدئين", fr: "Technique de natation débutant" },
      focus: { en: "Learning coordinated swimming techniques.", ar: "تعلّم تقنيات السباحة المنسّقة.", fr: "Apprendre des techniques de nage coordonnées." },
      skills: {
        en: ["Freestyle coordination", "Freestyle breathing", "Backstroke coordination", "Backstroke kicking", "Dolphin kicking", "Basic butterfly coordination", "Breaststroke kicking", "Introduction to breaststroke coordination", "Swimming 25 meters with basic control"],
        ar: ["تنسيق حركات السباحة الحرة", "التنفس في السباحة الحرة", "تنسيق حركات السباحة على الظهر", "ضربات الرجلين في السباحة على الظهر", "ضربات الدولفين", "تنسيق أساسي لسباحة الفراشة", "ضربات الرجلين في سباحة الصدر", "مقدمة لتنسيق سباحة الصدر", "سباحة 25 مترًا بتحكم أساسي"],
        fr: ["Coordination du crawl", "Respiration en crawl", "Coordination du dos crawlé", "Battements de dos crawlé", "Battements de dauphin", "Coordination de base du papillon", "Battements de brasse", "Introduction à la coordination de la brasse", "Nager 25 mètres avec un contrôle de base"]
      },
      req: {
        en: "Coordinates freestyle with breathing, shows basic coordination in backstroke and butterfly, and swims 25 meters with basic control.",
        ar: "تنسيق السباحة الحرة مع التنفس، وتنسيق أساسي في الظهر والفراشة، وسباحة 25 مترًا بتحكم أساسي.",
        fr: "Coordonne le crawl avec la respiration, montre une coordination de base en dos et en papillon et nage 25 mètres avec contrôle."
      }
    },
    {
      n: 5, kids: false,
      name: { en: "Intermediate Swimming", ar: "السباحة المتوسطة", fr: "Natation intermédiaire" },
      focus: { en: "Improving technique and endurance.", ar: "تحسين التقنية والتحمّل.", fr: "Améliorer la technique et l'endurance." },
      skills: {
        en: ["Better freestyle technique", "Better backstroke technique", "Breaststroke coordination", "Butterfly coordination", "Improved dolphin movement", "Correct breathing patterns", "Swimming 50 meters freestyle", "Swimming 50 meters backstroke", "Swimming 25 meters breaststroke", "Introduction to longer swimming distances"],
        ar: ["تقنية أفضل في السباحة الحرة", "تقنية أفضل في السباحة على الظهر", "تنسيق سباحة الصدر", "تنسيق سباحة الفراشة", "حركة دولفين محسّنة", "أنماط تنفس صحيحة", "سباحة 50 مترًا حرة", "سباحة 50 مترًا على الظهر", "سباحة 25 مترًا صدر", "مقدمة للمسافات الأطول"],
        fr: ["Meilleure technique de crawl", "Meilleure technique de dos crawlé", "Coordination de la brasse", "Coordination du papillon", "Ondulation de dauphin améliorée", "Schémas respiratoires corrects", "Nager 50 mètres en crawl", "Nager 50 mètres en dos crawlé", "Nager 25 mètres en brasse", "Introduction aux distances plus longues"]
      },
      req: {
        en: "Swims 50 m freestyle and backstroke and 25 m breaststroke with good technique and correct breathing.",
        ar: "سباحة 50 م حرة وظهر و25 م صدر بتقنية جيدة وتنفس صحيح.",
        fr: "Nage 50 m en crawl et en dos et 25 m en brasse avec une bonne technique et une respiration correcte."
      }
    },
    {
      n: 6, kids: false,
      name: { en: "Advanced Swimming", ar: "السباحة المتقدمة", fr: "Natation avancée" },
      focus: { en: "Developing endurance and stroke efficiency.", ar: "تطوير التحمّل وكفاءة الضربات.", fr: "Développer l'endurance et l'efficacité des nages." },
      skills: {
        en: ["Advanced freestyle technique", "Advanced backstroke technique", "Improved butterfly technique", "Improved breaststroke technique", "Turns and wall push-offs", "Better swimming rhythm", "Swimming 100 meters", "Swimming 200 meters with appropriate stroke selection", "Endurance training"],
        ar: ["تقنية متقدمة في السباحة الحرة", "تقنية متقدمة في السباحة على الظهر", "تقنية محسّنة في الفراشة", "تقنية محسّنة في سباحة الصدر", "الدوران والدفع من الجدار", "إيقاع سباحة أفضل", "سباحة 100 متر", "سباحة 200 متر مع اختيار الضربة المناسبة", "تدريب التحمّل"],
        fr: ["Technique avancée de crawl", "Technique avancée de dos crawlé", "Technique de papillon améliorée", "Technique de brasse améliorée", "Virages et poussées au mur", "Meilleur rythme de nage", "Nager 100 mètres", "Nager 200 mètres avec un choix de nage adapté", "Entraînement d'endurance"]
      },
      req: {
        en: "Swims 100 m and 200 m with suitable stroke choice, uses turns and wall push-offs, and keeps an efficient rhythm.",
        ar: "سباحة 100 م و200 م مع اختيار الضربة المناسبة، واستخدام الدوران والدفع من الجدار، والحفاظ على إيقاع فعّال.",
        fr: "Nage 100 m et 200 m avec un choix de nage adapté, maîtrise virages et poussées, garde un rythme efficace."
      }
    },
    {
      n: 7, kids: false,
      name: { en: "Competitive Swimming", ar: "السباحة التنافسية", fr: "Natation de compétition" },
      focus: { en: "Competitive-level preparation.", ar: "الإعداد للمستوى التنافسي.", fr: "Préparation au niveau compétition." },
      skills: {
        en: ["Advanced technique in all four strokes", "Starts and turns", "Race preparation", "Swimming speed development", "Endurance development", "Stroke efficiency", "Training for 50-meter distances", "Training for 100-meter distances", "Training for 200-meter distances", "Competitive swimming preparation"],
        ar: ["تقنية متقدمة في الضربات الأربع", "البدايات والدورانات", "الإعداد للسباقات", "تطوير سرعة السباحة", "تطوير التحمّل", "كفاءة الضربات", "التدريب على مسافات 50 مترًا", "التدريب على مسافات 100 متر", "التدريب على مسافات 200 متر", "الإعداد للسباحة التنافسية"],
        fr: ["Technique avancée dans les quatre nages", "Départs et virages", "Préparation aux courses", "Développement de la vitesse", "Développement de l'endurance", "Efficacité de nage", "Entraînement aux 50 mètres", "Entraînement aux 100 mètres", "Entraînement aux 200 mètres", "Préparation à la compétition"]
      },
      req: {
        en: "This is the top level. Ongoing development and any competition squad placement are decided by the coaches.",
        ar: "هذا أعلى مستوى. يقرر المدربون استمرار التطوير وأي انضمام لفرق المنافسة.",
        fr: "C'est le niveau le plus élevé. Le suivi et toute sélection en groupe de compétition sont décidés par les coachs."
      }
    }
  ];

  const UI = {
    en: { level: "Level", skills: "Skills to master", next: "To move up to the next level", kids: "Primarily for children", prev: "Previous level", nextLvl: "Next level", of: "of", ticked: "skills ticked", mastered: "Pathway complete", startAt: "Suggested starting point", startNone: "Level 1 — Water Familiarization", learnNext: "Next skills to learn", allDone: "All listed skills are ticked. Our coaches will assess the right placement in the water.", msg: "Hello L'eau Academy, I used the level assessment on your website.", msgLevel: "Suggested level", msgProgress: "Ticked skills", askLevel: "Could you advise on the right group and schedule?", tickHint: "Tick the skills the swimmer can do comfortably." },
    ar: { level: "المستوى", skills: "المهارات المطلوب إتقانها", next: "للانتقال إلى المستوى التالي", kids: "مخصص أساسًا للأطفال", prev: "المستوى السابق", nextLvl: "المستوى التالي", of: "من", ticked: "مهارات مكتملة", mastered: "اكتمل المسار", startAt: "نقطة البداية المقترحة", startNone: "المستوى 1 — التعرّف على الماء", learnNext: "المهارات التالية للتعلّم", allDone: "تم تحديد كل المهارات. سيحدد المدربون المستوى المناسب بعد تقييم داخل الماء.", msg: "مرحبًا أكاديمية L'eau، استخدمت تقييم المستوى على موقعكم.", msgLevel: "المستوى المقترح", msgProgress: "المهارات المحددة", askLevel: "هل يمكنكم إرشادي إلى المجموعة والموعد المناسبين؟", tickHint: "حدّد المهارات التي يستطيع السباح أداءها بارتياح." },
    fr: { level: "Niveau", skills: "Compétences à maîtriser", next: "Pour passer au niveau suivant", kids: "Principalement pour les enfants", prev: "Niveau précédent", nextLvl: "Niveau suivant", of: "sur", ticked: "compétences cochées", mastered: "Parcours terminé", startAt: "Point de départ suggéré", startNone: "Niveau 1 — Familiarisation avec l'eau", learnNext: "Prochaines compétences à apprendre", allDone: "Toutes les compétences sont cochées. Nos coachs évalueront le bon placement dans l'eau.", msg: "Bonjour L'eau Academy, j'ai utilisé l'évaluation de niveau sur votre site.", msgLevel: "Niveau suggéré", msgProgress: "Compétences cochées", askLevel: "Pouvez-vous me conseiller le bon groupe et les horaires ?", tickHint: "Cochez les compétences que le nageur réalise à l'aise." }
  };

  const STORE_KEY = "leau.assessment.v1";
  const state = { active: 1, assessActive: 1, checked: {} };
  try { state.checked = JSON.parse(localStorage.getItem(STORE_KEY) || "{}") || {}; } catch (e) { state.checked = {}; }

  const lang = () => (window.LeauLang && window.LeauLang.current) || "en";
  const t = (k) => (UI[lang()] || UI.en)[k];
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(state.checked)); } catch (e) { /* storage unavailable */ } };
  const isOn = (lv, i) => !!state.checked[lv + "-" + i];
  const levelDone = (lv) => LEVELS[lv - 1].skills.en.reduce((a, _, i) => a + (isOn(lv, i) ? 1 : 0), 0);
  const levelTotal = (lv) => LEVELS[lv - 1].skills.en.length;
  const pct = (lv) => Math.round((levelDone(lv) / levelTotal(lv)) * 100);

  /* ------------------------------ LEVEL RAIL + CARD ------------------------------ */
  function renderRail() {
    const rail = $("#levelRail"); if (!rail) return;
    rail.innerHTML = "";
    LEVELS.forEach((L) => {
      const li = el("li", "rail__item" + (L.n === state.active ? " is-active" : "") + (L.n < state.active ? " is-passed" : ""));
      const b = el("button", "rail__btn");
      b.type = "button";
      b.setAttribute("aria-current", L.n === state.active ? "step" : "false");
      b.setAttribute("aria-label", t("level") + " " + L.n + ": " + L.name[lang()]);
      b.innerHTML = '<span class="rail__dot">' + L.n + '</span><span class="rail__name">' + esc(L.name[lang()]) + "</span>" + (L.kids ? '<span class="rail__kid" aria-hidden="true"></span>' : "");
      b.addEventListener("click", () => { state.active = L.n; renderRail(); renderCard(); });
      li.appendChild(b); rail.appendChild(li);
    });
    rail.style.setProperty("--rail-p", String((state.active - 1) / (LEVELS.length - 1)));
  }

  function renderCard() {
    const card = $("#levelCard"); if (!card) return;
    const L = LEVELS[state.active - 1], lg = lang();
    card.innerHTML =
      '<div class="level-card__head">' +
        '<div class="level-card__num" aria-hidden="true">' + String(L.n).padStart(2, "0") + "</div>" +
        '<div><p class="eyebrow">' + t("level") + " " + L.n + " " + t("of") + " 7" + (L.kids ? ' · <span class="tag">' + t("kids") + "</span>" : "") + "</p>" +
        "<h3>" + esc(L.name[lg]) + '</h3><p class="level-card__focus">' + esc(L.focus[lg]) + "</p></div>" +
      "</div>" +
      '<div class="level-card__body">' +
        '<div><h4 class="mini-title">' + t("skills") + "</h4><ul class=\"skills\">" +
          L.skills[lg].map((s, i) => '<li style="--i:' + i + '"><svg class="ic"><use href="#i-check"/></svg><span>' + esc(s) + "</span></li>").join("") +
        "</ul></div>" +
        '<div class="level-card__req"><h4 class="mini-title">' + t("next") + "</h4><p>" + esc(L.req[lg]) + "</p>" +
          '<div class="meter" role="img" aria-label="' + t("level") + " " + L.n + " / 7"+ '"><i style="width:' + (L.n / 7) * 100 + '%"></i></div>' +
          '<div class="level-card__nav">' +
            '<button type="button" class="btn btn--ghost btn--sm" id="lvPrev"' + (L.n === 1 ? " disabled" : "") + ">" + t("prev") + "</button>" +
            '<button type="button" class="btn btn--primary btn--sm" id="lvNext"' + (L.n === 7 ? " disabled" : "") + ">" + t("nextLvl") + "</button>" +
          "</div></div>" +
      "</div>";
    const p = $("#lvPrev"), n = $("#lvNext");
    if (p) p.addEventListener("click", () => { state.active = Math.max(1, state.active - 1); renderRail(); renderCard(); });
    if (n) n.addEventListener("click", () => { state.active = Math.min(7, state.active + 1); renderRail(); renderCard(); });
  }

  /* ------------------------------ ASSESSMENT ------------------------------ */
  function renderAssessTabs() {
    const tabs = $("#assessTabs"); if (!tabs) return;
    tabs.innerHTML = "";
    LEVELS.forEach((L) => {
      const b = el("button", "atab" + (L.n === state.assessActive ? " is-active" : ""));
      b.type = "button"; b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", L.n === state.assessActive ? "true" : "false");
      b.setAttribute("aria-label", t("level") + " " + L.n);
      b.id = "atab-" + L.n; b.tabIndex = L.n === state.assessActive ? 0 : -1;
      b.innerHTML = "<b>" + L.n + '</b><i style="--p:' + pct(L.n) + '%"></i>';
      b.addEventListener("click", () => { state.assessActive = L.n; renderAssessTabs(); renderChecklist(); });
      b.addEventListener("keydown", (e) => {
        let nx = null;
        if (e.key === "ArrowRight") nx = document.documentElement.dir === "rtl" ? L.n - 1 : L.n + 1;
        if (e.key === "ArrowLeft") nx = document.documentElement.dir === "rtl" ? L.n + 1 : L.n - 1;
        if (e.key === "Home") nx = 1; if (e.key === "End") nx = 7;
        if (nx && nx >= 1 && nx <= 7) { e.preventDefault(); state.assessActive = nx; renderAssessTabs(); renderChecklist(); const nb = $("#atab-" + nx); if (nb) nb.focus(); }
      });
      tabs.appendChild(b);
    });
  }

  function renderChecklist() {
    const box = $("#checklist"); if (!box) return;
    const L = LEVELS[state.assessActive - 1], lg = lang();
    box.setAttribute("role", "tabpanel"); box.setAttribute("aria-labelledby", "atab-" + L.n);
    box.innerHTML = '<legend class="sr-only">' + t("level") + " " + L.n + " — " + esc(L.name[lg]) + '</legend><div class="checklist__title"><span class="eyebrow">' + t("level") + " " + L.n + "</span><h3>" + esc(L.name[lg]) + '</h3></div><p class="fineprint">' + t("tickHint") + "</p>";
    const list = el("div", "checks");
    L.skills[lg].forEach((s, i) => {
      const id = "ck-" + L.n + "-" + i;
      const row = el("label", "check" + (isOn(L.n, i) ? " is-on" : ""));
      row.setAttribute("for", id);
      row.innerHTML = '<input type="checkbox" id="' + id + '"' + (isOn(L.n, i) ? " checked" : "") + '><span class="check__box"><svg class="ic"><use href="#i-check"/></svg></span><span class="check__txt">' + esc(s) + "</span>";
      row.querySelector("input").addEventListener("change", (e) => {
        state.checked[L.n + "-" + i] = e.target.checked; if (!e.target.checked) delete state.checked[L.n + "-" + i];
        row.classList.toggle("is-on", e.target.checked); save(); updateSummary(); renderAssessTabsProgressOnly();
      });
      list.appendChild(row);
    });
    box.appendChild(list);
    updateSummary();
  }

  function renderAssessTabsProgressOnly() {
    LEVELS.forEach((L) => { const i = document.querySelector("#atab-" + L.n + " i"); if (i) i.style.setProperty("--p", pct(L.n) + "%"); });
  }

  function suggested() {
    for (const L of LEVELS) { if (levelDone(L.n) < levelTotal(L.n)) return L.n; }
    return 7;
  }
  const allTicked = () => LEVELS.every((L) => levelDone(L.n) === levelTotal(L.n));
  const anyTicked = () => LEVELS.some((L) => levelDone(L.n) > 0);

  function updateSummary() {
    const lg = lang();
    const bars = $("#levelBars");
    if (bars) {
      bars.innerHTML = LEVELS.map((L) => '<li><span class="bars__l">' + L.n + '</span><span class="bars__t"><i style="width:' + pct(L.n) + '%"></i></span><span class="bars__p">' + levelDone(L.n) + "/" + levelTotal(L.n) + "</span></li>").join("");
    }
    const total = LEVELS.reduce((a, L) => a + levelTotal(L.n), 0);
    const done = LEVELS.reduce((a, L) => a + levelDone(L.n), 0);
    const p = Math.round((done / total) * 100);
    const ring = $("#overallRing"), pc = $("#overallPct");
    if (ring) ring.style.setProperty("--p", p + "%");
    if (pc) pc.textContent = p + "%";

    const v = $("#verdict"); if (!v) return;
    const sl = suggested(), L = LEVELS[sl - 1];
    if (!anyTicked()) {
      v.innerHTML = "<h4>" + t("startAt") + "</h4><p><strong>" + esc(t("startNone")) + "</strong></p>";
    } else if (allTicked()) {
      v.innerHTML = "<h4>" + t("mastered") + "</h4><p>" + esc(t("allDone")) + "</p>";
    } else {
      const todo = L.skills[lg].filter((_, i) => !isOn(L.n, i)).slice(0, 3);
      v.innerHTML = "<h4>" + t("startAt") + "</h4><p><strong>" + t("level") + " " + L.n + " — " + esc(L.name[lg]) + "</strong></p>" +
        "<h4>" + t("learnNext") + "</h4><ul>" + todo.map((s) => "<li>" + esc(s) + "</li>").join("") + "</ul>";
    }
    const wa = $("#assessWa");
    if (wa) {
      const lvTxt = !anyTicked() ? t("startNone") : (allTicked() ? t("mastered") : t("level") + " " + sl + " — " + L.name[lg]);
      wa.dataset.message = t("msg") + "\n" + t("msgLevel") + ": " + lvTxt + "\n" + t("msgProgress") + ": " + done + "/" + total + "\n" + t("askLevel");
    }
  }

  function resetAssess() { state.checked = {}; save(); renderAssessTabs(); renderChecklist(); }

  function renderAll() { renderRail(); renderCard(); renderAssessTabs(); renderChecklist(); }

  function init() {
    renderAll();
    const r = $("#assessReset"); if (r) r.addEventListener("click", resetAssess);
  }

  window.LeauLevels = { LEVELS, init, renderAll };
})();
