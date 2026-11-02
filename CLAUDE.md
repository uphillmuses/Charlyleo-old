# Charly Leo & Studio · website

Instructions for Claude Code. Read this before every change.
Set up by Hilda Ruijs (Uphill Muses), 2 November 2026. The site is Charlotte's: Charly Leo & Studio (always written exactly like that).

## What this is

A plain static website exported from the approved Mockup 8 design. HTML, one CSS file and a little JavaScript. No build step, no framework. The `main` branch is the live site: the host publishes it automatically.

| Page | File |
|---|---|
| Home | `index.html` |
| Astrology | `astrology.html` |
| Energy at Home | `energy-at-home.html` |
| Studio | `studio.html` |
| About | `about.html` |
| Journal (overview with filters) | `journal.html` |
| Get your chart | `chart.html` |
| Journal posts | `journal/*.html` |

- `assets/css/site.css`: all styling, desktop and phone in one file (phone rules sit under `@media(max-width:760px)`).
- `assets/js/site.js`: starts the banner videos, gives the menu its background on scroll, smooth scroll for in-page links.
- `assets/img/`, `assets/video/`, `assets/fonts/agare.otf`. Newsreader and Montserrat load from Google Fonts.

## Golden rules

1. Do not change the design (layout, colours, fonts, spacing, components) unless Hilda asks for it. Reuse the classes that already exist in `site.css`. Never add a framework, build tool or JavaScript library.
2. One change per request. Keep commits small and describe them in plain words.
3. Every page serves desktop and phone from the same file. Check both widths (1280 and 390 px) after a change.
4. Relative links only. Pages at the top level use `assets/...` and `page.html`. Pages in `journal/` use `../assets/...` and `../page.html`.
5. Keep `<meta name="robots" content="noindex">` on every page until Hilda says the site launches.
6. When you finish, list which pages changed and what Hilda should check.

## Brand

- Colours: paper `#FBFAF6` (page ground), cream `#F7F1E8`, sand `#EBDDC9`, ink `#3A2A20` (text), gold `#A9733F` (headings and quotes), terracotta `#B1582C` (labels, buttons, links), line `#D9C8B2`.
- Fonts: Agare for headings (class `ag`), Newsreader for reading text and quotes, Montserrat for labels, buttons and small caps.
- Quotes: gold Newsreader italic, centred, with a small "Charlotte" label underneath.
- Ribbons: the sun ribbon mid-page (`rib8 sun`) and the stripe above the newsletter (`rib8 stripe`). The turning seal appears once, on Home.
- Buttons: a filled button ("Book a reading", "Book a session", "Book a consultation") plus the underlined "Message me" link with the WhatsApp icon.
- Never put text over a face.

## Voice

Charlotte writes her own texts, in English. Keep her words.

- First person ("I"), the reader is "you". Warm, narrative, direct. A paragraph often ends on one short sentence that lands.
- Fix spelling and grammar mistakes, nothing more. Never rewrite her into smooth marketing English. Never invent quotes, client words, facts or numbers.
- Never use: empowerment, high vibe, abundance, holistic, mindset, divine feminine, sacred, self-love, glow-up, journey (as a noun), healing (clearing is fine). Never call her a coach or offer coaching (her study list may mention it).
- No em dashes or en dashes as punctuation. Use a comma, a full stop or `·`.
- No emoji on the site.
- Facts as she wants them: "Three times Leo", "Projector 2/4", "Fifteen years of study". Systems as written on the site now: Vedic astrology, spiritual astrology, Human design.
- Do not add the word "magic" anywhere new. It belongs to the Astrology banner, the Magic story and her line "Where energy flows, beauty appears, and magic follows."
- No prices for readings or feng shui on the site: prices go by WhatsApp. Any price that does appear is in euros.
- Where she lives and her children: only what is already published, and nothing new without Charlotte's OK.

## WhatsApp links

All booking runs through WhatsApp. Format: `https://wa.me/?text=` plus the URL-encoded message, which starts with "Hi Charlotte, I'd love to ...".
Her number is not in the links yet. When Hilda gives it: replace `https://wa.me/` with `https://wa.me/<number>` everywhere (international format, digits only, no + or spaces) and keep the `?text=` part.

## Photos and video

- Only Charlotte's own photos or licensed images. Never add images from Pinterest or other found sources.
- Known placeholders to replace: `studio-leopard-moodboard.jpg` (Home and Studio), `magic-water-light.jpg` (Pinterest, credited on the Magic post), `studio-vintage-interior.jpg` (shows a small mute icon).
- Before a photo goes in: JPG, upright (apply the camera rotation), metadata removed, colour profile kept, longest side at most 2000 px (1250 px for small cards and the silks), under about 300 KB.
- File names: lowercase words with hyphens that say what is in the photo, like `her-home-sauna.jpg`.
- Replacing a photo: update every page that uses it. Ask before deleting the old file.
- New images get short alt text describing the photo. Purely decorative ones keep `alt=""`.
- Video: MP4 (H.264), muted, looping, under about 3 MB, always with a poster JPG.

## Adding a Journal post

1. Copy the closest existing post in `journal/` as the template. It already has the header, photo, text, author box, "read next" cards, newsletter and footer.
2. File name: `journal/<title-in-lowercase-with-hyphens>.html`. Set `<title>` to "Title · Journal · Charly Leo & Studio" and the meta description to the first paragraph (at most 155 characters).
3. Category: Astrology, Energy or About Charlotte. Label format: "Astrology · 2 minute read". Read time: words in the post divided by 225, rounded, at least 1.
4. Text goes in `<section class="prose">`: the first paragraph as `<p class="lede">`, then `<p>`. A pull quote is a `<blockquote>`.
5. On `journal.html`, add a card to the `pgrid`: `<article class="pcard cat-astro">` (or `cat-energy`, `cat-about`) following the pattern of the other cards: photo, label, title, one-line teaser, "Read more →". The filters work from that class.
6. Add the post to the "read next" cards (`pnext`) of one or two related posts. Each post keeps two "read next" cards.
7. Home shows three posts under "Stories in her own words". Only change them when asked.
8. The same label and read time everywhere the post appears.

## Still placeholders (do not fill these in yourself)

- Client quotes on Astrology and Energy at Home.
- "Years of practice" and the four "Before you book" answers on Astrology.
- The chart tool on Chart.
- Instagram and Privacy statement links (`href="#"`).
- The newsletter "Subscribe" is design only, not connected to a mailing service.

## Before the real launch

Remove the noindex line, add the WhatsApp number, fill the placeholders, replace the moodboard images, get Charlotte's OK on place names and the photo with her children, and check the Agare web licence. Later: load the Google fonts from this repository, add alt text everywhere, and stop phones from also downloading the desktop banner video.
