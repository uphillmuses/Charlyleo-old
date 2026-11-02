# Charly Leo & Studio · website, test version 1

Exported on 2 November 2026 from the approved Mockup 8 canvas (canvas version 1793622167-0c43).
Plain HTML, CSS and a little JavaScript. No build step, no framework: what is in this folder is the website.

## What is in here

| Page | File |
|---|---|
| Home | `index.html` |
| Astrology | `astrology.html` |
| Energy at Home | `energy-at-home.html` |
| Studio | `studio.html` |
| About | `about.html` |
| Journal | `journal.html` |
| Get your chart | `chart.html` |
| The seven Journal posts | `journal/*.html` |

- `assets/css/site.css` holds all styling for every page (desktop and phone in one file).
- `assets/js/site.js` starts the banner videos, gives the menu its background on scroll, and makes "See the readings" scroll smoothly.
- `assets/img/` photos, logo, ribbons and favicon. `assets/video/` the three moving images (H.264 MP4, they play in every current browser). `assets/fonts/agare.otf` the heading font.
- Newsreader and Montserrat load from Google Fonts.

The phone layout is not a separate site: every page adapts to the screen width.

## Upload to GitHub (once)

1. Create a new, empty, private repository (no README, no licence).
2. On the empty repository page, click "uploading an existing file".
3. Open this folder on your computer, select everything inside it (`index.html`, the other pages, the `assets` and `journal` folders, this README) and drag it all onto the upload area. Drag the contents, not the outer folder, so `index.html` ends up at the top level. Chrome or Edge works best for dragging folders.
4. Commit with the message "Version 1, exported from Mockup 8".
5. Check: the repository shows `index.html` at the top, plus the folders `assets` and `journal`.

65 files, about 9 MB, the largest file 1.2 MB: one upload, within GitHub's browser limits (100 files at a time, 25 MB per file).

## Put it online

Connect the repository to a host that publishes on every change, for example Netlify or Cloudflare Pages (both free, both work with private repositories). Publish directory: the root. Build command: none.
GitHub Pages also works, but on a free GitHub account only for public repositories.
Then point charlyleo.com to it, or send the folder to whoever hosts charlyleo.com now.

## Making changes

Use Claude Code on the web (claude.ai/code) with this repository. Each change becomes its own commit, so any change can be undone. Examples:

- "Replace every `https://wa.me/` link with `https://wa.me/31XXXXXXXXX`, keep the `?text=` part."
- "On studio.html, change the intro to: …"
- "Use the new photo `assets/img/kimono-field.jpg` for Kimono No. 1 on index.html and studio.html, compress it under 300 KB first."
- "Remove the noindex line from every page."

## Before the real launch

- WhatsApp: none of the 188 WhatsApp links has Charlotte's number yet. They open WhatsApp with the right message, but without a contact.
- Remove `<meta name="robots" content="noindex">` from every page (it keeps search engines away while the test version has placeholders).
- Placeholders still visible: client quotes on Astrology and Energy at Home, "years of practice" and four FAQ answers on Astrology, the chart tool on Chart.
- Links that go nowhere yet: Instagram, Privacy statement. The newsletter "Subscribe" is a design only, not connected to a mailing service.
- Photos: replace images that are not Charlotte's own or licensed. Known moodboard images: `studio-leopard-moodboard.jpg` (Home and Studio) and `magic-water-light.jpg` (Pinterest). `studio-vintage-interior.jpg` still shows a small mute icon from a video screenshot. Check the source of every image that is not her own photo, her home or her pieces.
- Charlotte's yes on: the place names in the posts Magic, Motherhood and It started with my own room, and the photo with her children (`motherhood-family-beach.jpg`).
- Agare: a web licence for `agare.otf`.
- Later: load Newsreader and Montserrat from this folder instead of Google (privacy), add alt text to the photos, and stop phones from also downloading the desktop banner video.
