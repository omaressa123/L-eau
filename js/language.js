/* ==========================================================================
   L'eau Academy — LANGUAGE (Arabic / English / French)
   All site copy lives in I18N below. Edit the text here.
   HTML elements use: data-i18n="key"           → replaces text
                      data-i18n-attr="attr=key" → sets an attribute (alt, aria-label…)
   ========================================================================== */
(function () {
  "use strict";

  const I18N = {
    en: {
      "meta.title": "L'eau Academy — Swim Beyond Limits | Swimming Academy in Maadi, Cairo",
      "meta.desc": "L'eau Academy: professional swimming training for kids, adults, women and international swimmers at Maadi Club. Seven-level programme, experienced coaches.",
      "common.skip": "Skip to content", "common.skipIntro": "Skip intro", "common.scroll": "Scroll down",
      "common.discover": "Discover", "common.seeLevels": "See the 7 levels", "common.prev": "Previous", "common.next": "Next",
      "nav.about": "About", "nav.programs": "Programs", "nav.kids": "Kids", "nav.adults": "Adults", "nav.women": "Women", "nav.international": "International",
      "nav.strokes": "Strokes", "nav.levels": "Levels", "nav.assessment": "Assessment", "nav.achievements": "Champions", "nav.location": "Location", "nav.contact": "Contact",
      "nav.join": "Join Now", "nav.menu": "Menu",

      "hero.eyebrow": "Maadi Club", "hero.title": "SWIM BEYOND LIMITS",
      "hero.lead": "Professional Swimming Training for Every Age and Every Level.",
      "hero.ctaPrograms": "Explore Our Programs", "hero.ctaJoin": "Join Our Academy",
      "hero.fact1": "Kids · Adults · Women · International", "hero.fact2": "7-level progression", "hero.fact3": "AR · EN · FR",

      "about.eyebrow": "About the academy", "about.title": "Water is where confidence begins.",
      "about.p1": "L'eau — \"water\" in French — is the idea behind everything we teach. We are a swimming academy for every age and every level, training in one place: Maadi Club.",
      "about.p2": "Our coaches build swimmers step by step: comfort first, then technique, then endurance and speed. Every swimmer is assessed individually, so nobody is rushed and nobody is held back.",
      "about.t1": "Experienced coaches and swimmers", "about.t2": "Safe, encouraging learning environment", "about.t3": "Clear 7-level pathway from first splash to competition",
      "about.alt": "Swimmers of different ages training in the pool",

      "prog.eyebrow": "Programs", "prog.title": "A pool for every swimmer.", "prog.lead": "Four programs, one academy. Choose yours.",
      "prog.kids": "Kids Swimming", "prog.kidsD": "Water confidence, floating and first strokes in a fun, safe setting.",
      "prog.adults": "Adult Swimming", "prog.adultsD": "From first lengths to refined technique and fitness swimming.",
      "prog.women": "Women's Swimming", "prog.womenD": "A dedicated women's training program in a comfortable setting.",
      "prog.intl": "International Swimmers", "prog.intlD": "Welcome to English- and French-speaking swimmers, men and women.",

      "kids.eyebrow": "Kids swimming", "kids.title": "Little swimmers, big confidence.",
      "kids.p1": "Swimming lessons for children built around water confidence, floating, breathing and bubbles, and basic swimming skills — in a fun and safe learning environment.",
      "kids.c1": "Water confidence", "kids.c2": "Floating", "kids.c3": "Breathing & bubbles", "kids.c4": "Basic swimming skills", "kids.c5": "Fun & safe",
      "kids.ageTitle": "Starting young.", "kids.ageText": "Children around 2–4 years old can begin with short 30-minute sessions, depending on their readiness and ability.",
      "kids.levelsNote": "Levels 1 to 3 are designed primarily for children and focus on gradual water familiarization and foundational skills. Every child learns at their own pace — we never promise mastery within a fixed period.",
      "kids.cta": "Ask About Children's Training", "kids.alt": "A happy child jumping into the pool",

      "tech.eyebrow": "Kids swimming techniques", "tech.title": "What children learn first.",
      "tech.vFront": "Front view", "tech.vBack": "Back view", "tech.front": "Front floating", "tech.frontD": "Face in the water, body long and relaxed, arms forward.",
      "tech.back": "Back floating", "tech.backD": "Face up, ears in the water, tummy up and head still.",
      "tech.superman": "Superman position", "tech.supermanD": "Arms stretched forward, body flat — the first step to gliding.",
      "tech.kick": "Kicking techniques", "tech.kickD": "Small, quick kicks from the hips, usually with a kickboard.",
      "tech.breath": "Basic breathing", "tech.breathD": "Breathe in above the water, blow bubbles out below it.",
      "tech.confidence": "Water confidence", "tech.confidenceD": "Entering, splashing and moving in the water with a smile.",

      "adults.eyebrow": "Adult swimming", "adults.title": "Professional training, at your level.",
      "adults.p1": "Whether you are learning to float or chasing cleaner technique, our coaches build a plan around the swimmer — not the other way round.",
      "adults.r1": "Beginners", "adults.r1d": "Never swum, or never felt comfortable? We start where you are.",
      "adults.r2": "Intermediate swimmers", "adults.r2d": "Link the strokes, learn to breathe well, swim further with control.",
      "adults.r3": "Advanced swimmers", "adults.r3d": "Refine all four strokes, turns and pacing.",
      "adults.r4": "Fitness swimming", "adults.r4d": "Structured sessions for endurance, strength and health.",
      "adults.r5": "Technique improvement", "adults.r5d": "Targeted coaching to swim easier, faster and more efficiently.",
      "adults.cta": "Ask About Adult Training", "adults.alt": "Adult swimmers training",

      "women.eyebrow": "Women's swimming", "women.title": "Her own lane. Her own pace.",
      "women.p1": "A dedicated section for women's swimming training: learn to swim, improve your technique or train for fitness with professional coaching, in a comfortable and respectful setting.",
      "women.t1": "Beginner to advanced groups", "women.t2": "Technique, fitness and confidence", "women.t3": "Ask us about available groups and schedules",
      "women.cta": "Ask About Women's Training", "women.alt": "A woman swimming with a smile",

      "intl.eyebrow": "International swimmers", "intl.title": "Swimmers from everywhere are welcome.",
      "intl.lead": "We welcome international swimmers to train with us in Cairo. Choose the language you are most comfortable in.",
      "intl.men": "Foreign men", "intl.menD": "Adult training for visiting and resident swimmers, at every level.",
      "intl.women": "Foreign women", "intl.womenD": "Women's training open to international swimmers.",
      "intl.en": "English-speaking swimmers", "intl.enD": "Instructions and support in English.", "intl.switchEn": "View this site in English",
      "intl.fr": "French-speaking swimmers", "intl.frD": "Instructions and support in French.", "intl.switchFr": "Voir ce site en français",
      "intl.cta": "Ask About International Training",

      "strokes.eyebrow": "The four strokes", "strokes.title": "Four strokes. One language of water.",
      "strokes.lead": "Explore the four official competitive strokes. Use the tabs, arrows or your keyboard.",
      "strokes.free": "Freestyle", "strokes.freeD": "The fastest and most efficient stroke: long, alternating arm pulls with a steady flutter kick and rhythmic side breathing.",
      "strokes.free1": "Arms alternate — one reaches while the other pulls.", "strokes.free2": "Flutter kick from the hips, with relaxed ankles.", "strokes.free3": "Roll the body and turn the head to breathe.",
      "strokes.back": "Backstroke", "strokes.backD": "Swum on the back with a continuous alternating arm motion. The face stays out of the water, which makes breathing natural.",
      "strokes.back1": "Lie flat with the hips near the surface.", "strokes.back2": "Arms windmill, entering the water little finger first.", "strokes.back3": "Steady flutter kick and eyes looking up.",
      "strokes.fly": "Butterfly", "strokes.flyD": "A powerful stroke where both arms move together and the whole body flows in a dolphin wave, driven by the kick.",
      "strokes.fly1": "Both arms pull and recover at the same time.", "strokes.fly2": "Dolphin movement starts at the chest and flows to the feet.", "strokes.fly3": "Two kicks per arm cycle, with timing that builds over time.",
      "strokes.breast": "Breaststroke", "strokes.breastD": "A symmetrical stroke: arms sweep and the legs kick in a frog-like motion, followed by a long, streamlined glide.",
      "strokes.breast1": "Pull, breathe, kick, glide — in that order.", "strokes.breast2": "Knees bend, feet turn out, then snap together.", "strokes.breast3": "Stay long and streamlined during the glide.",

      "levels.eyebrow": "The L'eau pathway", "levels.title": "Seven levels, from first splash to competition.",
      "levels.lead": "Select a level to see its focus, its skills and what swimmers need before moving up.",
      "levels.disclaimer": "The levels are a proposed teaching progression. Coaches evaluate every swimmer individually and may adjust placement. Not every swimmer masters every skill at the same speed.",

      "assess.eyebrow": "Level assessment", "assess.title": "What can your swimmer do today?",
      "assess.lead": "Tick the skills a swimmer can already do comfortably. We'll show where they are on the pathway and what to learn next.",
      "assess.summary": "Progress summary", "assess.overall": "Overall pathway", "assess.send": "Send result to the coaches", "assess.reset": "Reset",
      "assess.disclaimer": "This is an informational guide, not a professional swimming certification. Final placement is decided by our coaches after an in-water evaluation.",

      "ach.eyebrow": "Our champions & achievements", "ach.title": "Built by swimmers who know the podium.",
      "ach.lead": "Our academy includes experienced swimmers, among them Republic Championship athletes and medalists.",
      "ach.p1": "Republic Championship athletes", "ach.p1d": "Swimmers who have competed at national level, and medalists, are part of our academy.",
      "ach.p2": "Professional experience", "ach.p2d": "Real competitive experience, brought into every lesson.",
      "ach.p3": "Beginners to advanced", "ach.p3d": "The same standard of coaching for a first float and for a race plan.",
      "ach.p4": "Developing future champions", "ach.p4d": "A clear pathway, from Level 1 to competitive preparation at Level 7.",

      "loc.eyebrow": "Training location", "loc.lead": "One location. Everything happens here.", "loc.where": "Where", "loc.city": "Cairo, Egypt",
      "loc.when": "Schedules", "loc.whenD": "Training days, times and available groups — ask us on WhatsApp.",
      "loc.kids": "Kids sessions", "loc.kidsD": "Short 30-minute sessions are available for the youngest swimmers.",
      "loc.directions": "Get Directions", "loc.schedule": "Ask About Schedules", "loc.mapTitle": "Map of the training location",

      "contact.eyebrow": "Join the academy", "contact.title": "Start swimming with us.",
      "contact.lead": "Message us on WhatsApp for monthly subscriptions, schedules and available groups. We reply as soon as we can.",
      "contact.main": "Contact Us on WhatsApp", "contact.askSubs": "Ask About Subscriptions", "contact.group": "Join Our WhatsApp Group",
      "contact.topics": "What would you like to ask about?", "contact.lines": "Choose a WhatsApp line", "contact.line": "WhatsApp line",
      "contact.t.subs": "Monthly subscriptions", "contact.t.schedule": "Training schedules", "contact.t.groups": "Available groups", "contact.t.kids": "Children's training",
      "contact.t.adults": "Adult training", "contact.t.women": "Women's training", "contact.t.private": "Private training", "contact.t.intl": "International swimmers",

      "footer.tag": "Professional swimming training for every age and every level.", "footer.explore": "Explore", "footer.visit": "Visit & contact",
      "footer.rights": "All rights reserved.", "footer.top": "Back to top",

      "toast.noNumber": "This WhatsApp number has not been added yet. Set it in js/config.js.",
      "toast.noGroup": "The WhatsApp group link has not been added yet. Set it in js/config.js.",

      "wa.general": "Hello L'eau Academy, I would like to get in touch.",
      "wa.subscriptions": "Hello L'eau Academy, I would like to ask about monthly subscriptions.",
      "wa.schedule": "Hello L'eau Academy, could you share the training schedules?",
      "wa.groups": "Hello L'eau Academy, which groups are currently available?",
      "wa.kids": "Hello L'eau Academy, I would like to ask about children's training.",
      "wa.adults": "Hello L'eau Academy, I would like to ask about adult training.",
      "wa.women": "Hello L'eau Academy, I would like to ask about women's training.",
      "wa.private": "Hello L'eau Academy, I would like to ask about private training.",
      "wa.international": "Hello L'eau Academy, I am an international swimmer and would like to ask about training."
    },

    ar: {
      "meta.title": "أكاديمية L'eau — اسبح بلا حدود | أكاديمية سباحة في المعادي، القاهرة",
      "meta.desc": "أكاديمية L'eau: تدريب سباحة احترافي للأطفال والكبار والسيدات والسباحين الأجانب في نادي المعادي. برنامج من سبعة مستويات ومدربون ذوو خبرة.",
      "common.skip": "تخطَّ إلى المحتوى", "common.skipIntro": "تخطي المقدمة", "common.scroll": "مرّر للأسفل",
      "common.discover": "اكتشف", "common.seeLevels": "شاهد المستويات السبعة", "common.prev": "السابق", "common.next": "التالي",
      "nav.about": "عن الأكاديمية", "nav.programs": "البرامج", "nav.kids": "الأطفال", "nav.adults": "الكبار", "nav.women": "السيدات", "nav.international": "الأجانب",
      "nav.strokes": "أنواع السباحة", "nav.levels": "المستويات", "nav.assessment": "التقييم", "nav.achievements": "الأبطال", "nav.location": "الموقع", "nav.contact": "تواصل معنا",
      "nav.join": "انضم الآن", "nav.menu": "القائمة",

      "hero.eyebrow": "نادي المعادي", "hero.title": "اسبح بلا حدود",
      "hero.lead": "تدريب سباحة احترافي لكل الأعمار ولكل المستويات.",
      "hero.ctaPrograms": "استكشف برامجنا", "hero.ctaJoin": "انضم إلى أكاديميتنا",
      "hero.fact1": "أطفال · كبار · سيدات · أجانب", "hero.fact2": "مسار من 7 مستويات", "hero.fact3": "عربي · English · Français",

      "about.eyebrow": "عن الأكاديمية", "about.title": "من الماء تبدأ الثقة.",
      "about.p1": "L'eau تعني \"الماء\" بالفرنسية، وهي الفكرة وراء كل ما نُعلّمه. نحن أكاديمية سباحة لكل الأعمار ولكل المستويات، ونتدرب في مكان واحد: نادي المعادي.",
      "about.p2": "يبني مدربونا السباحين خطوة بخطوة: الراحة أولًا، ثم التقنية، ثم التحمّل والسرعة. نقيّم كل سباح على حدة، فلا أحد يُستعجل ولا أحد يتأخر.",
      "about.t1": "مدربون وسباحون ذوو خبرة", "about.t2": "بيئة تعلّم آمنة ومشجعة", "about.t3": "مسار واضح من 7 مستويات، من أول رشّة ماء إلى المنافسة",
      "about.alt": "سباحون من أعمار مختلفة يتدربون في المسبح",

      "prog.eyebrow": "البرامج", "prog.title": "مسبح لكل سباح.", "prog.lead": "أربعة برامج وأكاديمية واحدة. اختر برنامجك.",
      "prog.kids": "سباحة الأطفال", "prog.kidsD": "ثقة في الماء وطفو وأولى ضربات السباحة في أجواء ممتعة وآمنة.",
      "prog.adults": "سباحة الكبار", "prog.adultsD": "من أول مسافة إلى تقنية متقنة وسباحة اللياقة.",
      "prog.women": "سباحة السيدات", "prog.womenD": "برنامج تدريب مخصص للسيدات في أجواء مريحة.",
      "prog.intl": "السباحون الأجانب", "prog.intlD": "نرحب بالسباحين الناطقين بالإنجليزية والفرنسية، رجالًا ونساءً.",

      "kids.eyebrow": "سباحة الأطفال", "kids.title": "سباحون صغار، وثقة كبيرة.",
      "kids.p1": "دروس سباحة للأطفال مبنية على الثقة في الماء والطفو والتنفس والفقاعات ومهارات السباحة الأساسية، في بيئة تعلّم ممتعة وآمنة.",
      "kids.c1": "الثقة في الماء", "kids.c2": "الطفو", "kids.c3": "التنفس والفقاعات", "kids.c4": "مهارات السباحة الأساسية", "kids.c5": "متعة وأمان",
      "kids.ageTitle": "البداية المبكرة.", "kids.ageText": "يمكن للأطفال من عمر 2 إلى 4 سنوات تقريبًا البدء بحصص قصيرة مدتها 30 دقيقة، بحسب جاهزية الطفل وقدرته.",
      "kids.levelsNote": "المستويات من 1 إلى 3 مخصصة أساسًا للأطفال وتركز على التعوّد التدريجي على الماء والمهارات الأساسية. كل طفل يتعلم بوتيرته، ولا نعد بإتقان المهارات خلال مدة محددة.",
      "kids.cta": "اسأل عن تدريب الأطفال", "kids.alt": "طفل سعيد يقفز في المسبح",

      "tech.eyebrow": "تقنيات سباحة الأطفال", "tech.title": "ما يتعلمه الأطفال أولًا.",
      "tech.vFront": "منظر أمامي", "tech.vBack": "منظر خلفي", "tech.front": "الطفو على البطن", "tech.frontD": "الوجه في الماء والجسم ممدود ومسترخٍ والذراعان للأمام.",
      "tech.back": "الطفو على الظهر", "tech.backD": "الوجه لأعلى والأذنان في الماء والبطن لأعلى والرأس ثابت.",
      "tech.superman": "وضعية السوبرمان", "tech.supermanD": "الذراعان ممدودتان للأمام والجسم مسطّح، وهي أول خطوة نحو الانزلاق.",
      "tech.kick": "تقنيات ضربات الرجلين", "tech.kickD": "ضربات صغيرة وسريعة من الورك، غالبًا بمساعدة لوح الطفو.",
      "tech.breath": "التنفس الأساسي", "tech.breathD": "شهيق فوق الماء وزفير فقاعات تحته.",
      "tech.confidence": "الثقة في الماء", "tech.confidenceD": "الدخول والتناثر والحركة في الماء بابتسامة.",

      "adults.eyebrow": "سباحة الكبار", "adults.title": "تدريب احترافي بحسب مستواك.",
      "adults.p1": "سواء كنت تتعلم الطفو أو تسعى لتقنية أنظف، يبني مدربونا خطة حول السباح، لا العكس.",
      "adults.r1": "المبتدئون", "adults.r1d": "لم تسبح من قبل أو لم ترتح في الماء؟ نبدأ من حيث أنت.",
      "adults.r2": "السباحون المتوسطون", "adults.r2d": "اربط بين الضربات وتعلّم التنفس الجيد واسبح مسافات أطول بتحكم.",
      "adults.r3": "السباحون المتقدمون", "adults.r3d": "صقل الضربات الأربع والدورانات وتوزيع الجهد.",
      "adults.r4": "سباحة اللياقة", "adults.r4d": "حصص منظمة لبناء التحمّل والقوة والصحة.",
      "adults.r5": "تحسين التقنية", "adults.r5d": "تدريب موجّه لتسبح بسهولة وسرعة وكفاءة أكبر.",
      "adults.cta": "اسأل عن تدريب الكبار", "adults.alt": "سباحون بالغون يتدربون",

      "women.eyebrow": "سباحة السيدات", "women.title": "مسارها الخاص. وإيقاعها الخاص.",
      "women.p1": "قسم مخصص لتدريب السيدات على السباحة: تعلّمي السباحة أو حسّني تقنيتك أو تدرّبي للياقة مع تدريب احترافي وفي أجواء مريحة ومحترمة.",
      "women.t1": "مجموعات من المبتدئات إلى المتقدمات", "women.t2": "التقنية واللياقة والثقة", "women.t3": "اسألينا عن المجموعات والمواعيد المتاحة",
      "women.cta": "اسألي عن تدريب السيدات", "women.alt": "سيدة تسبح بابتسامة",

      "intl.eyebrow": "السباحون الأجانب", "intl.title": "السباحون من كل مكان مرحَّب بهم.",
      "intl.lead": "نرحب بالسباحين الأجانب للتدرب معنا في القاهرة. اختر اللغة التي ترتاح لها.",
      "intl.men": "رجال أجانب", "intl.menD": "تدريب للكبار للسباحين الزائرين والمقيمين على كل المستويات.",
      "intl.women": "سيدات أجنبيات", "intl.womenD": "تدريب السيدات مفتوح للسباحات الأجنبيات.",
      "intl.en": "الناطقون بالإنجليزية", "intl.enD": "تعليمات ودعم باللغة الإنجليزية.", "intl.switchEn": "View this site in English",
      "intl.fr": "الناطقون بالفرنسية", "intl.frD": "تعليمات ودعم باللغة الفرنسية.", "intl.switchFr": "Voir ce site en français",
      "intl.cta": "اسأل عن تدريب الأجانب",

      "strokes.eyebrow": "الضربات الأربع", "strokes.title": "أربع ضربات. ولغة واحدة للماء.",
      "strokes.lead": "اكتشف ضربات السباحة التنافسية الأربع. استخدم التبويبات أو الأسهم أو لوحة المفاتيح.",
      "strokes.free": "السباحة الحرة", "strokes.freeD": "أسرع الضربات وأكفؤها: سحبات طويلة متبادلة للذراعين مع رفرفة ثابتة للرجلين وتنفس جانبي منتظم.",
      "strokes.free1": "الذراعان تتبادلان؛ واحدة تمتد والأخرى تسحب.", "strokes.free2": "رفرفة الرجلين من الورك مع كاحلين مسترخيين.", "strokes.free3": "دوّر الجسم والتفت برأسك لتتنفس.",
      "strokes.back": "السباحة على الظهر", "strokes.backD": "تُسبح على الظهر بحركة متبادلة مستمرة للذراعين. يبقى الوجه خارج الماء فيصبح التنفس طبيعيًا.",
      "strokes.back1": "استلقِ بشكل مسطح مع بقاء الوركين قرب السطح.", "strokes.back2": "تدور الذراعان كالطاحونة وتدخلان الماء بالخنصر أولًا.", "strokes.back3": "رفرفة ثابتة للرجلين والنظر للأعلى.",
      "strokes.fly": "الفراشة", "strokes.flyD": "ضربة قوية تتحرك فيها الذراعان معًا ويتموّج الجسم كله كالدولفين بدفع من ضربات الرجلين.",
      "strokes.fly1": "الذراعان تسحبان وتعودان في الوقت نفسه.", "strokes.fly2": "حركة الدولفين تبدأ من الصدر وتنتقل إلى القدمين.", "strokes.fly3": "ضربتا رجلين لكل دورة ذراعين، ويتحسن التوقيت مع الوقت.",
      "strokes.breast": "سباحة الصدر", "strokes.breastD": "ضربة متماثلة: تفتح الذراعان وتضرب الرجلان بحركة تشبه الضفدع، يتبعها انزلاق طويل انسيابي.",
      "strokes.breast1": "اسحب، تنفّس، اضرب، انزلق، بهذا الترتيب.", "strokes.breast2": "تنثني الركبتان وتدور القدمان للخارج ثم تلتقيان بسرعة.", "strokes.breast3": "حافظ على جسم ممدود وانسيابي أثناء الانزلاق.",

      "levels.eyebrow": "مسار L'eau", "levels.title": "سبعة مستويات، من أول رشّة ماء إلى المنافسة.",
      "levels.lead": "اختر مستوى لترى هدفه ومهاراته وما يحتاجه السباح قبل الانتقال.",
      "levels.disclaimer": "المستويات تدرّج تعليمي مقترح. يقيّم المدربون كل سباح على حدة وقد يعدّلون المستوى. ليس كل سباح يتقن كل مهارة بالسرعة نفسها.",

      "assess.eyebrow": "تقييم المستوى", "assess.title": "ماذا يستطيع سباحك أن يفعل اليوم؟",
      "assess.lead": "حدّد المهارات التي يستطيع السباح أداءها بارتياح. سنوضح موقعه على المسار وما يتعلمه بعد ذلك.",
      "assess.summary": "ملخص التقدم", "assess.overall": "المسار الكامل", "assess.send": "أرسل النتيجة إلى المدربين", "assess.reset": "إعادة ضبط",
      "assess.disclaimer": "هذا دليل إرشادي وليس شهادة سباحة احترافية. يحدد المدربون المستوى النهائي بعد تقييم داخل الماء.",

      "ach.eyebrow": "أبطالنا وإنجازاتنا", "ach.title": "صنعه سباحون يعرفون منصة التتويج.",
      "ach.lead": "تضم أكاديميتنا سباحين ذوي خبرة، من بينهم لاعبون في بطولة الجمهورية وحاصلون على ميداليات.",
      "ach.p1": "لاعبو بطولة الجمهورية", "ach.p1d": "سباحون شاركوا على المستوى الوطني وحاصلون على ميداليات ضمن أكاديميتنا.",
      "ach.p2": "خبرة احترافية", "ach.p2d": "خبرة تنافسية حقيقية في كل حصة.",
      "ach.p3": "من المبتدئين إلى المتقدمين", "ach.p3d": "المستوى نفسه من التدريب للطفو الأول ولخطة السباق.",
      "ach.p4": "نصنع أبطال المستقبل", "ach.p4d": "مسار واضح من المستوى 1 إلى الإعداد التنافسي في المستوى 7.",

      "loc.eyebrow": "مكان التدريب", "loc.lead": "موقع واحد. كل شيء يحدث هنا.", "loc.where": "أين", "loc.city": "القاهرة، مصر",
      "loc.when": "المواعيد", "loc.whenD": "أيام التدريب وأوقاته والمجموعات المتاحة، اسألنا عبر واتساب.",
      "loc.kids": "حصص الأطفال", "loc.kidsD": "تتوفر حصص قصيرة مدتها 30 دقيقة لأصغر السباحين.",
      "loc.directions": "احصل على الاتجاهات", "loc.schedule": "اسأل عن المواعيد", "loc.mapTitle": "خريطة مكان التدريب",

      "contact.eyebrow": "انضم إلى الأكاديمية", "contact.title": "ابدأ السباحة معنا.",
      "contact.lead": "راسلنا على واتساب للاشتراكات الشهرية والمواعيد والمجموعات المتاحة. نرد في أقرب وقت.",
      "contact.main": "تواصل معنا عبر واتساب", "contact.askSubs": "اسأل عن الاشتراكات", "contact.group": "انضم إلى مجموعة واتساب",
      "contact.topics": "عمّ تريد أن تسأل؟", "contact.lines": "اختر خط واتساب", "contact.line": "خط واتساب",
      "contact.t.subs": "الاشتراكات الشهرية", "contact.t.schedule": "مواعيد التدريب", "contact.t.groups": "المجموعات المتاحة", "contact.t.kids": "تدريب الأطفال",
      "contact.t.adults": "تدريب الكبار", "contact.t.women": "تدريب السيدات", "contact.t.private": "تدريب خاص", "contact.t.intl": "السباحون الأجانب",

      "footer.tag": "تدريب سباحة احترافي لكل الأعمار ولكل المستويات.", "footer.explore": "استكشف", "footer.visit": "الزيارة والتواصل",
      "footer.rights": "جميع الحقوق محفوظة.", "footer.top": "العودة للأعلى",

      "toast.noNumber": "لم تتم إضافة رقم واتساب هذا بعد. أضفه في الملف js/config.js.",
      "toast.noGroup": "لم تتم إضافة رابط مجموعة واتساب بعد. أضفه في الملف js/config.js.",

      "wa.general": "مرحبًا أكاديمية L'eau، أودّ التواصل معكم.",
      "wa.subscriptions": "مرحبًا أكاديمية L'eau، أودّ الاستفسار عن الاشتراكات الشهرية.",
      "wa.schedule": "مرحبًا أكاديمية L'eau، هل يمكنكم إرسال مواعيد التدريب؟",
      "wa.groups": "مرحبًا أكاديمية L'eau، ما المجموعات المتاحة حاليًا؟",
      "wa.kids": "مرحبًا أكاديمية L'eau، أودّ الاستفسار عن تدريب الأطفال.",
      "wa.adults": "مرحبًا أكاديمية L'eau، أودّ الاستفسار عن تدريب الكبار.",
      "wa.women": "مرحبًا أكاديمية L'eau، أودّ الاستفسار عن تدريب السيدات.",
      "wa.private": "مرحبًا أكاديمية L'eau، أودّ الاستفسار عن التدريب الخاص.",
      "wa.international": "مرحبًا أكاديمية L'eau، أنا سباح أجنبي وأودّ الاستفسار عن التدريب."
    },

    fr: {
      "meta.title": "L'eau Academy — Nagez au-delà des limites | Académie de natation à Maadi, Le Caire",
      "meta.desc": "L'eau Academy : entraînement de natation professionnel pour enfants, adultes, femmes et nageurs internationaux au Club Maadi. Programme en sept niveaux, coachs expérimentés.",
      "common.skip": "Aller au contenu", "common.skipIntro": "Passer l'intro", "common.scroll": "Défiler vers le bas",
      "common.discover": "Découvrir", "common.seeLevels": "Voir les 7 niveaux", "common.prev": "Précédent", "common.next": "Suivant",
      "nav.about": "À propos", "nav.programs": "Programmes", "nav.kids": "Enfants", "nav.adults": "Adultes", "nav.women": "Femmes", "nav.international": "International",
      "nav.strokes": "Les nages", "nav.levels": "Niveaux", "nav.assessment": "Évaluation", "nav.achievements": "Champions", "nav.location": "Lieu", "nav.contact": "Contact",
      "nav.join": "Rejoindre", "nav.menu": "Menu",

      "hero.eyebrow": "Club Maadi", "hero.title": "NAGEZ AU-DELÀ DES LIMITES",
      "hero.lead": "Un entraînement de natation professionnel pour tous les âges et tous les niveaux.",
      "hero.ctaPrograms": "Découvrir nos programmes", "hero.ctaJoin": "Rejoindre l'académie",
      "hero.fact1": "Enfants · Adultes · Femmes · International", "hero.fact2": "Parcours en 7 niveaux", "hero.fact3": "AR · EN · FR",

      "about.eyebrow": "À propos de l'académie", "about.title": "C'est dans l'eau que naît la confiance.",
      "about.p1": "L'eau est l'idée qui guide tout ce que nous enseignons. Nous sommes une académie de natation pour tous les âges et tous les niveaux, avec un seul lieu d'entraînement : le Club Maadi.",
      "about.p2": "Nos coachs font progresser chaque nageur pas à pas : d'abord l'aisance, puis la technique, puis l'endurance et la vitesse. Chaque nageur est évalué individuellement : personne n'est pressé, personne n'est freiné.",
      "about.t1": "Coachs et nageurs expérimentés", "about.t2": "Un cadre d'apprentissage sûr et encourageant", "about.t3": "Un parcours clair en 7 niveaux, de la première éclaboussure à la compétition",
      "about.alt": "Des nageurs de tous âges à l'entraînement dans le bassin",

      "prog.eyebrow": "Programmes", "prog.title": "Un bassin pour chaque nageur.", "prog.lead": "Quatre programmes, une seule académie. Choisissez le vôtre.",
      "prog.kids": "Natation enfants", "prog.kidsD": "Confiance dans l'eau, flottaison et premières nages dans un cadre ludique et sûr.",
      "prog.adults": "Natation adultes", "prog.adultsD": "Des premières longueurs à la technique affinée et à la natation fitness.",
      "prog.women": "Natation femmes", "prog.womenD": "Un programme d'entraînement dédié aux femmes, dans un cadre confortable.",
      "prog.intl": "Nageurs internationaux", "prog.intlD": "Bienvenue aux nageurs anglophones et francophones, hommes et femmes.",

      "kids.eyebrow": "Natation enfants", "kids.title": "Petits nageurs, grande confiance.",
      "kids.p1": "Des cours de natation pour enfants centrés sur la confiance dans l'eau, la flottaison, la respiration et les bulles, et les bases de la nage — dans un cadre ludique et sûr.",
      "kids.c1": "Confiance dans l'eau", "kids.c2": "Flottaison", "kids.c3": "Respiration et bulles", "kids.c4": "Bases de la natation", "kids.c5": "Ludique et sûr",
      "kids.ageTitle": "Commencer tôt.", "kids.ageText": "Les enfants d'environ 2 à 4 ans peuvent débuter par de courtes séances de 30 minutes, selon leur préparation et leurs capacités.",
      "kids.levelsNote": "Les niveaux 1 à 3 sont conçus principalement pour les enfants et visent une familiarisation progressive avec l'eau et les compétences de base. Chaque enfant avance à son rythme : nous ne promettons jamais une maîtrise en un temps donné.",
      "kids.cta": "Se renseigner sur les cours enfants", "kids.alt": "Un enfant joyeux saute dans la piscine",

      "tech.eyebrow": "Techniques de natation pour enfants", "tech.title": "Ce que les enfants apprennent d'abord.",
      "tech.vFront": "Vue de face", "tech.vBack": "Vue de dos", "tech.front": "Flottaison ventrale", "tech.frontD": "Visage dans l'eau, corps long et détendu, bras tendus devant.",
      "tech.back": "Flottaison dorsale", "tech.backD": "Visage vers le ciel, oreilles dans l'eau, ventre en haut et tête immobile.",
      "tech.superman": "Position Superman", "tech.supermanD": "Bras tendus devant, corps à plat — la première étape vers la glisse.",
      "tech.kick": "Techniques de battements", "tech.kickD": "Petits battements rapides depuis les hanches, souvent avec une planche.",
      "tech.breath": "Respiration de base", "tech.breathD": "Inspirer hors de l'eau, souffler des bulles dans l'eau.",
      "tech.confidence": "Confiance dans l'eau", "tech.confidenceD": "Entrer, éclabousser et se déplacer dans l'eau avec le sourire.",

      "adults.eyebrow": "Natation adultes", "adults.title": "Un entraînement professionnel, à votre niveau.",
      "adults.p1": "Que vous appreniez à flotter ou que vous cherchiez une technique plus propre, nos coachs construisent un plan autour du nageur, pas l'inverse.",
      "adults.r1": "Débutants", "adults.r1d": "Jamais nagé, ou jamais à l'aise ? Nous partons de là où vous en êtes.",
      "adults.r2": "Nageurs intermédiaires", "adults.r2d": "Enchaîner les nages, bien respirer, nager plus loin avec contrôle.",
      "adults.r3": "Nageurs avancés", "adults.r3d": "Affiner les quatre nages, les virages et la gestion de l'allure.",
      "adults.r4": "Natation fitness", "adults.r4d": "Des séances structurées pour l'endurance, la force et la santé.",
      "adults.r5": "Amélioration technique", "adults.r5d": "Un coaching ciblé pour nager plus facilement, plus vite et plus efficacement.",
      "adults.cta": "Se renseigner sur les cours adultes", "adults.alt": "Des nageurs adultes à l'entraînement",

      "women.eyebrow": "Natation femmes", "women.title": "Son couloir. Son rythme.",
      "women.p1": "Une section dédiée à la natation féminine : apprenez à nager, améliorez votre technique ou entraînez-vous pour la forme, avec un coaching professionnel dans un cadre confortable et respectueux.",
      "women.t1": "Groupes du niveau débutant au niveau avancé", "women.t2": "Technique, forme et confiance", "women.t3": "Demandez-nous les groupes et horaires disponibles",
      "women.cta": "Se renseigner sur les cours femmes", "women.alt": "Une femme qui nage en souriant",

      "intl.eyebrow": "Nageurs internationaux", "intl.title": "Les nageurs du monde entier sont les bienvenus.",
      "intl.lead": "Nous accueillons les nageurs internationaux pour s'entraîner avec nous au Caire. Choisissez la langue dans laquelle vous êtes le plus à l'aise.",
      "intl.men": "Hommes étrangers", "intl.menD": "Entraînement adultes pour nageurs de passage ou résidents, à tous les niveaux.",
      "intl.women": "Femmes étrangères", "intl.womenD": "Entraînement féminin ouvert aux nageuses internationales.",
      "intl.en": "Nageurs anglophones", "intl.enD": "Consignes et accompagnement en anglais.", "intl.switchEn": "View this site in English",
      "intl.fr": "Nageurs francophones", "intl.frD": "Consignes et accompagnement en français.", "intl.switchFr": "Voir ce site en français",
      "intl.cta": "Se renseigner sur l'entraînement international",

      "strokes.eyebrow": "Les quatre nages", "strokes.title": "Quatre nages. Un seul langage : l'eau.",
      "strokes.lead": "Découvrez les quatre nages officielles de compétition. Utilisez les onglets, les flèches ou le clavier.",
      "strokes.free": "Crawl", "strokes.freeD": "La nage la plus rapide et la plus efficace : de longues tractions alternées des bras, un battement de jambes régulier et une respiration latérale rythmée.",
      "strokes.free1": "Les bras alternent : l'un s'allonge pendant que l'autre tire.", "strokes.free2": "Battement de jambes depuis les hanches, chevilles relâchées.", "strokes.free3": "Faire rouler le corps et tourner la tête pour respirer.",
      "strokes.back": "Dos crawlé", "strokes.backD": "Nagé sur le dos avec un mouvement alterné continu des bras. Le visage reste hors de l'eau, ce qui rend la respiration naturelle.",
      "strokes.back1": "Rester à plat, hanches près de la surface.", "strokes.back2": "Les bras tournent comme un moulin et entrent dans l'eau par le petit doigt.", "strokes.back3": "Battement de jambes régulier, regard vers le haut.",
      "strokes.fly": "Papillon", "strokes.flyD": "Une nage puissante où les deux bras bougent ensemble et où tout le corps ondule comme un dauphin, porté par les battements.",
      "strokes.fly1": "Les deux bras tirent et reviennent en même temps.", "strokes.fly2": "L'ondulation part de la poitrine et se propage jusqu'aux pieds.", "strokes.fly3": "Deux battements par cycle de bras, avec un timing qui s'affine avec le temps.",
      "strokes.breast": "Brasse", "strokes.breastD": "Une nage symétrique : les bras balaient l'eau et les jambes battent comme une grenouille, suivis d'une longue glisse profilée.",
      "strokes.breast1": "Tirer, respirer, battre, glisser — dans cet ordre.", "strokes.breast2": "Les genoux se plient, les pieds s'ouvrent, puis se rejoignent d'un coup.", "strokes.breast3": "Rester long et profilé pendant la glisse.",

      "levels.eyebrow": "Le parcours L'eau", "levels.title": "Sept niveaux, de la première éclaboussure à la compétition.",
      "levels.lead": "Sélectionnez un niveau pour voir son objectif, ses compétences et ce qu'il faut avant de passer au suivant.",
      "levels.disclaimer": "Les niveaux sont une progression pédagogique proposée. Les coachs évaluent chaque nageur individuellement et peuvent ajuster son placement. Tous les nageurs ne maîtrisent pas chaque compétence à la même vitesse.",

      "assess.eyebrow": "Évaluation de niveau", "assess.title": "Que sait faire votre nageur aujourd'hui ?",
      "assess.lead": "Cochez les compétences que le nageur réalise déjà à l'aise. Nous montrons où il en est sur le parcours et ce qu'il doit apprendre ensuite.",
      "assess.summary": "Résumé de la progression", "assess.overall": "Parcours global", "assess.send": "Envoyer le résultat aux coachs", "assess.reset": "Réinitialiser",
      "assess.disclaimer": "Ce guide est informatif et ne constitue pas une certification professionnelle de natation. Le placement final est décidé par nos coachs après une évaluation dans l'eau.",

      "ach.eyebrow": "Nos champions et réussites", "ach.title": "Construite par des nageurs qui connaissent le podium.",
      "ach.lead": "Notre académie compte des nageurs expérimentés, dont des athlètes du Championnat de la République et des médaillés.",
      "ach.p1": "Athlètes du Championnat de la République", "ach.p1d": "Des nageurs ayant concouru au niveau national, ainsi que des médaillés, font partie de notre académie.",
      "ach.p2": "Expérience professionnelle", "ach.p2d": "Une vraie expérience de compétition, apportée dans chaque séance.",
      "ach.p3": "Du débutant à l'avancé", "ach.p3d": "Le même niveau d'exigence pour une première flottaison et pour un plan de course.",
      "ach.p4": "Former les champions de demain", "ach.p4d": "Un parcours clair, du niveau 1 à la préparation compétition au niveau 7.",

      "loc.eyebrow": "Lieu d'entraînement", "loc.lead": "Un seul lieu. Tout se passe ici.", "loc.where": "Où", "loc.city": "Le Caire, Égypte",
      "loc.when": "Horaires", "loc.whenD": "Jours, horaires et groupes disponibles — demandez-nous sur WhatsApp.",
      "loc.kids": "Séances enfants", "loc.kidsD": "De courtes séances de 30 minutes sont proposées aux plus jeunes nageurs.",
      "loc.directions": "Itinéraire", "loc.schedule": "Demander les horaires", "loc.mapTitle": "Carte du lieu d'entraînement",

      "contact.eyebrow": "Rejoindre l'académie", "contact.title": "Venez nager avec nous.",
      "contact.lead": "Écrivez-nous sur WhatsApp pour les abonnements mensuels, les horaires et les groupes disponibles. Nous répondons dès que possible.",
      "contact.main": "Nous contacter sur WhatsApp", "contact.askSubs": "Se renseigner sur les abonnements", "contact.group": "Rejoindre notre groupe WhatsApp",
      "contact.topics": "Que souhaitez-vous demander ?", "contact.lines": "Choisissez une ligne WhatsApp", "contact.line": "Ligne WhatsApp",
      "contact.t.subs": "Abonnements mensuels", "contact.t.schedule": "Horaires d'entraînement", "contact.t.groups": "Groupes disponibles", "contact.t.kids": "Cours pour enfants",
      "contact.t.adults": "Cours pour adultes", "contact.t.women": "Cours pour femmes", "contact.t.private": "Cours particuliers", "contact.t.intl": "Nageurs internationaux",

      "footer.tag": "Un entraînement de natation professionnel pour tous les âges et tous les niveaux.", "footer.explore": "Explorer", "footer.visit": "Venir et contacter",
      "footer.rights": "Tous droits réservés.", "footer.top": "Retour en haut",

      "toast.noNumber": "Ce numéro WhatsApp n'a pas encore été ajouté. Renseignez-le dans js/config.js.",
      "toast.noGroup": "Le lien du groupe WhatsApp n'a pas encore été ajouté. Renseignez-le dans js/config.js.",

      "wa.general": "Bonjour L'eau Academy, je souhaite vous contacter.",
      "wa.subscriptions": "Bonjour L'eau Academy, je souhaite me renseigner sur les abonnements mensuels.",
      "wa.schedule": "Bonjour L'eau Academy, pouvez-vous m'envoyer les horaires d'entraînement ?",
      "wa.groups": "Bonjour L'eau Academy, quels groupes sont actuellement disponibles ?",
      "wa.kids": "Bonjour L'eau Academy, je souhaite me renseigner sur les cours pour enfants.",
      "wa.adults": "Bonjour L'eau Academy, je souhaite me renseigner sur les cours pour adultes.",
      "wa.women": "Bonjour L'eau Academy, je souhaite me renseigner sur les cours pour femmes.",
      "wa.private": "Bonjour L'eau Academy, je souhaite me renseigner sur les cours particuliers.",
      "wa.international": "Bonjour L'eau Academy, je suis un nageur international et je souhaite me renseigner sur l'entraînement."
    }
  };

  const cfg = window.ACADEMY_CONFIG;
  const STORE = "leau.lang";
  const AVAILABLE = (cfg && cfg.languages && cfg.languages.available) || ["ar", "en", "fr"];
  const listeners = [];

  const api = {
    current: "en",
    dict: I18N,
    t(key, lang) { const d = I18N[lang || api.current] || I18N.en; return d[key] != null ? d[key] : (I18N.en[key] != null ? I18N.en[key] : key); },
    onChange(fn) { listeners.push(fn); },
    set(lang, opts) {
      if (AVAILABLE.indexOf(lang) === -1) lang = "en";
      api.current = lang;
      const root = document.documentElement;
      root.lang = lang; root.dir = lang === "ar" ? "rtl" : "ltr";
      try { if (!opts || !opts.silent) localStorage.setItem(STORE, lang); } catch (e) { /* ignore */ }
      apply();
      listeners.forEach((fn) => { try { fn(lang); } catch (e) { console.error(e); } });
    }
  };

  function apply() {
    const lang = api.current;
    document.querySelectorAll("[data-i18n]").forEach((n) => { n.textContent = api.t(n.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-attr]").forEach((n) => {
      n.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const i = pair.indexOf("="); if (i < 0) return;
        n.setAttribute(pair.slice(0, i).trim(), api.t(pair.slice(i + 1).trim()));
      });
    });
    document.title = api.t("meta.title");
    const md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", api.t("meta.desc"));
    const og = document.querySelector('meta[property="og:title"]'); if (og) og.setAttribute("content", api.t("meta.title"));
    document.querySelectorAll("[data-config-location-name]").forEach((n) => {
      const names = cfg && cfg.location && cfg.location.name;
      if (names) n.textContent = names[lang] || names.en;
    });
    const mf = document.getElementById("mapFrame"); if (mf) mf.title = api.t("loc.mapTitle");
    document.querySelectorAll("[data-lang]").forEach((b) => {
      const on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function detect() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && AVAILABLE.indexOf(q) > -1) return q;
    try { const s = localStorage.getItem(STORE); if (s && AVAILABLE.indexOf(s) > -1) return s; } catch (e) { /* ignore */ }
    const nav = (navigator.language || "").slice(0, 2).toLowerCase();
    if (AVAILABLE.indexOf(nav) > -1) return nav;
    return (cfg && cfg.languages && cfg.languages.default) || "en";
  }

  function init() {
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-lang],[data-set-lang]");
      if (!b) return;
      api.set(b.getAttribute("data-lang") || b.getAttribute("data-set-lang"));
    });
    api.set(detect(), { silent: true });
  }

  api.init = init;
  api.refresh = apply;
  window.LeauLang = api;
})();
