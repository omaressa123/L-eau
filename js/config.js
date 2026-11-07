/* ==========================================================================
   L'eau Academy — CENTRAL CONFIGURATION
   --------------------------------------------------------------------------
   Everything you need to replace lives in this one file.
   Search for "TODO" to find each item that still needs your real data.
   ========================================================================== */

window.ACADEMY_CONFIG = {

  /* ---- Brand ------------------------------------------------------------ */
  brand: {
    name: "L'eau Academy",
    /* The logo files live in /assets. Replace the files, keep the names. */
    logo: "assets/logo-transparent.png",      // logo with transparent background (used in the header, hero, footer)
    logoOriginal: "assets/logo.png",          // original logo (used in the cinematic intro)
    favicon: "assets/icons/favicon.png",
    siteUrl: ""                               // TODO: e.g. "https://www.leau-academy.com" (used for SEO tags only)
  },

  /* ---- WhatsApp --------------------------------------------------------- */
  /* Numbers must be digits only, with country code, no "+" or spaces.
     Example for Egypt: "201001234567"
     While a value still starts with "WHATSAPP_NUMBER", buttons show a friendly
     "number not set yet" message instead of opening a broken link.            */
  whatsapp: {
    numbers: [
      { id: "main",  number: "201021484537" },   // main number (default for all buttons)
      { id: "kids",  number: "201200240868" },   // second number
      { id: "adult", number: "201200240868" }    // third number
    ],
    /* Which number each topic opens (index into the list above). */
    topicNumber: {
      subscriptions: 0, schedule: 0, groups: 0,
      kids: 1, adults: 1, women: 1, private: 0, international: 0, general: 0
    },
    groupInviteLink: "https://chat.whatsapp.com/HSmmaSVzVlQC9r7dPJlwwU"
  },

  /* ---- Location (ONE location only) ------------------------------------- */
  location: {
    name: {
      en: "Maadi Club",
      fr: "Club Maadi",
      ar: "نادي المعادي"
    },
    /* Text Google Maps will search for. Replace with the exact club name/address,
       or paste a precise place name. */
    mapsQuery: "Maadi Club, Cairo, Egypt",
    /* Optional: paste your own "Share → Copy link" Google Maps URL to override the directions button. */
    mapsLink: "https://maps.app.goo.gl/j1ypfQHxrcszm18d7",
    /* Optional: paste the src="" URL from Google Maps → Share → Embed a map. Leave "" to use mapsQuery. */
    mapsEmbed: ""
  },

  /* ---- Social media (leave "" to hide an icon) -------------------------- */
  social: {
    instagram: "",     // TODO e.g. "https://instagram.com/leau.academy"
    facebook: "",      // TODO
    tiktok: "",        // TODO
    youtube: ""        // TODO
  },

  /* ---- Languages -------------------------------------------------------- */
  languages: { default: "en", available: ["ar", "en", "fr"] },

  /* ---- Images (replace the files, or change the paths) ------------------ */
  /* Current images are crops from the academy posters you supplied and are
     placeholders — swap in real academy photos using the same names.        */
  images: {
    hero:        "assets/images/hero-pool.jpg",
    about:       "assets/images/about-pool.jpg",
    kids:        "assets/images/kids-jump.jpg",
    kidsAlt:     "assets/images/kids-dive.jpg",
    family:      "assets/images/family-water.jpg",
    adults:      "assets/images/adult-swim.jpg",
    women:       "assets/images/women-swim.jpg",
    international: "assets/images/parent-child.jpg",
    athlete:     "assets/images/athlete.jpg",
    achievements:"assets/images/athlete.jpg"
  },

  /* Optional photos/videos for the four strokes. Leave "" to show the built-in animated swimmer.
     Put your own photos in /assets/images and set e.g. free: "assets/images/freestyle.jpg" */
  strokeImages: { free: "", back: "", fly: "assets/images/butterfly.jpg", breast: "assets/videos/breast.mp4" },

  /* Optional hero background video (put the file in /assets/videos). Leave "" for none. */
  heroVideo: ""    // TODO e.g. "assets/videos/hero.mp4"
};
