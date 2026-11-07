# L'eau Academy — Website

Static site (HTML + CSS + vanilla JS). No build step, no backend.
Open `index.html` directly, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Edit everything in ONE place: `js/config.js`
| What | Where in config.js |
|---|---|
| WhatsApp numbers (digits only, with country code, e.g. `201001234567`) | `whatsapp.numbers[0..2]` → replace `WHATSAPP_NUMBER_1/2/3` |
| Which number each topic opens | `whatsapp.topicNumber` |
| WhatsApp group invite link | `whatsapp.groupInviteLink` → replace `WHATSAPP_GROUP_LINK` |
| Google Maps link / embed | `location.mapsLink`, `location.mapsEmbed`, `location.mapsQuery` |
| Social media links | `social.*` (empty = icon hidden) |
| Site URL (SEO canonical) | `brand.siteUrl` |
| Images | `images.*` (or just overwrite files in `assets/images/`) |
| Stroke photos/videos (optional) | `strokeImages.*` |
| Hero background video (optional) | `heroVideo` |

Until a number is filled in, WhatsApp buttons show a "number not added yet" message instead of opening a broken link.

## Text / translations (Arabic · English · French)
All copy lives in `js/language.js`. The 7-level curriculum (skills, requirements) lives in `js/levels.js`.

## Files
```
index.html
css/  style.css  responsive.css  animations.css
js/   config.js  language.js  levels.js  animations.js  main.js
assets/  logo.png  logo-transparent.png  logo-light.png  icons/  images/  videos/
```

## Replace before launch
1. WhatsApp numbers + group link (config.js).
2. Photos: current images are crops from your two posters (AI-generated pictures). Replace with real academy photos, keeping the same file names in `assets/images/`:
   `hero-pool.jpg, about-pool.jpg, kids-jump.jpg, kids-dive.jpg, family-water.jpg, adult-swim.jpg, women-swim.jpg, parent-child.jpg, athlete.jpg`
   (hero: wide, ≥1920px; others ≥1200px). Optional hero video in `assets/videos/`.
3. Four stroke visuals and six kids-technique illustrations are built-in animated drawings; replace with real photos/video via `strokeImages` if you have them.
4. Exact club name/address and Google Maps link.
5. Champions: the achievements section deliberately contains no names, medals or numbers. Add real ones only when you have them.
6. Social links, site URL.
7. Pricing and schedules are intentionally not shown (handled via WhatsApp).
