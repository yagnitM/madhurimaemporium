<<<<<<< HEAD
# Madhurima Emporium

Landing page for **Madhurima Emporium**, a home furnishing store in Maheshwar, Madhya Pradesh.
React + Vite + Tailwind CSS, Framer Motion, Lucide icons. Frontend-only static site, no backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build
```

## What you need to fill in

Everything below is currently a **placeholder**. Nothing has been invented.

### 1. Business details: `src/data/siteConfig.js`

| Field | Example | Effect when empty |
|---|---|---|
| `address` | `Shop 12, Main Road, Maheshwar, MP 451224` | "to be added" shown |
| `phone` | `+919XXXXXXXXX` | "Call the Store" button disabled |
| `whatsapp` | `919XXXXXXXXX` | WhatsApp button disabled, floating button hidden |
| `hours` | `Mon – Sat, 10 am – 8 pm` | "to be added" shown |
| `mapsUrl` | Google Maps "Share → Copy link" | Falls back to a Maps search for the shop name + town |

### 2. Photographs

All current images are labelled SVG placeholders in `public/images/`.

- **Hero**: `public/images/hero/hero.jpg`, used in `src/components/Hero.jsx`
- **Categories**: `public/images/categories/`, paths set in `src/data/categories.js`
- **About**: `public/images/showroom/about-showroom.svg`, used in `src/components/About.jsx`
- **Gallery**: `public/images/gallery/`, paths set in `src/data/gallery.js`

To swap one: add your photo (JPG/WebP, ideally under 300 KB, about 1600 px wide for the hero and 1000 px for the rest), then update the `src` and `alt` text. Keep real showroom photos in `gallery/` and `showroom/`, and lifestyle reference images in `hero/` and `categories/`, so the two stay separate. Add or remove gallery photos by editing the array; the layout adapts.

Hide a category the shop doesn't stock with `visible: false` in `categories.js`.

### 3. SEO details: `index.html`

- The LocalBusiness JSON-LD currently includes only name, town, state and country. Add `streetAddress`, `postalCode`, `telephone`, `openingHours` and `url` once confirmed.
- Add `og:url` and an absolute `og:image` (1200×630) after deployment.
- Add a `Sitemap:` line to `public/robots.txt` once the live URL is known.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project**, import the repo. Vite is detected automatically (`npm run build`, output `dist`).
3. Deploy. The site is live on a `*.vercel.app` URL.

`public/404.html` is served automatically for unknown URLs.

## Project structure

```
public/            favicon, robots.txt, 404.html, images/
scripts/           generate-placeholders.mjs (regenerates the SVG placeholders)
src/
  components/      Navbar, Hero, CategorySection, CategoryCard, About,
                   WhyChooseUs, Gallery, Contact, Footer, WhatsAppButton, ui
  data/            siteConfig.js, categories.js, gallery.js
```

## Future expansion

Category and gallery content lives in data files, so a product catalogue can later be added by extending `categories.js` with per-category product lists and adding routes.
=======
# madhurimaemporium
>>>>>>> 5d6d64dd8f505384414f6217f388a63b23c6e16d