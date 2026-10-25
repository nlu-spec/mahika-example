# MAHIKA — React Edition ("More Than Fashion")

Premium saree-brand website built with **React 18 + Vite + GSAP (ScrollTrigger) + Lenis**.

## 1. Setup (2 minutes)

Requirements: **Node.js 18+** (https://nodejs.org)

```bash
cd mahika-react
npm install
npm run dev        # http://localhost:5173  (live reload)
```

Production build:
```bash
npm run build      # outputs /dist  (static files, ready to host)
npm run preview    # test the production build locally
```
A prebuilt `dist/` is included, so you can also upload it straight to Netlify / Vercel / GitHub Pages / any static host (paths are relative).

> Google Fonts (Cormorant Garamond + Jost) load from the internet; offline it falls back to Georgia / system sans.

## 2. What's inside

- **Preloader:** crimson velvet curtains, self-drawing logo mark, letter-by-letter "MAHIKA", live 000→100% counter, gold progress line, then the curtains part and the hero blooms in.
- **Hero:** masked line reveal, floating gold-dust canvas, mouse-parallax, scroll-parallax, rotating gold ring.
- **Scroll motion:** Lenis smooth scroll, top progress bar, auto-hiding header, split-text reveals (lines / words), image clip-path + scale reveals, parallax images, scrubbed word-by-word text highlight, SVG line that draws on scroll, count-up numbers.
- **Interactions:** custom cursor with labels ("Explore", "View", "Look"), magnetic buttons, 3D tilt + glare cards, velocity-reactive double marquee, expanding Lookbook accordion, pinned horizontal Best Sellers (swipe carousel on mobile), wishlist hearts, animated mobile menu.
- **Responsive:** desktop, tablet and phone layouts; touch devices skip cursor/tilt effects.

## 3. Images — important

The saree visuals are **built-in vector illustrations** (`src/art/SareeArt.jsx`), so the site works with zero external files and no broken images.

To use **your own photography**, drop files into `src/assets/img/` with these names (jpg / jpeg / png / webp). Any file present replaces its illustration automatically; missing ones keep the illustration:

| File | Slot |
|---|---|
| `hero` | Hero model (portrait, ~1200×1600) |
| `explore-bg` | Background of "Explore the Collection" |
| `women`, `kalakari` | Two large tiles (4:5) |
| `kala-1`, `kala-2`, `kala-3` | Kalakari cards (3:4.4) |
| `look-1` … `look-5` | Lookbook panels (tall) |
| `sarees` | Left half of "Sarees, draped in every mood" |
| `printed`, `collection` | Two thumbnails (3:4) |
| `p1` … `p6` | Best-seller products (3:4.3) |
| `story` | Background of "Our Story" |

Keep each under ~300 KB (compress with squoosh.app). Restart `npm run dev` after adding new files.

## 4. Customise

- Copy & products: `src/components/*.jsx` (e.g. `BestSellers.jsx` → `prods` array).
- Colours / fonts / spacing: CSS variables at the top of `src/styles.css`.
- Illustration colours: `PALETTES` in `src/art/SareeArt.jsx`.
- Preloader timing: timeline in `src/components/Preloader.jsx` (counter = 2.8s, curtains open at 3.7s).
- Section order: `src/App.jsx`.

## 5. Structure
```
src/
  App.jsx            page + Lenis + preloader flow
  useAnims.js        shared scroll-animation hook
  styles.css
  art/SareeArt.jsx   SVG saree illustrations
  components/        Preloader, Header, Hero, Marquee, Explore, Kalakari,
                     Lookbook, Arrivals, BestSellers, Craft, Story, Footer,
                     Cursor, Progress, Tilt, Magnetic, Particles, Media, Split
  assets/img/        <- your photos
```
