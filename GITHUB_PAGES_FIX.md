# Feder Bau – GitHub Pages 404 fix + multi-page refactor

Date: 2026-07-02

## The bug you saw

```
main.jsx:1 Failed to load resource: the server responded with a status of 404 ()
```

**Root cause, 2 parts:**

1. `index.html` was:
   ```html
   <script type="module" src="/src/main.jsx"></script>
   ```
   On a GitHub Pages **project site** (`https://aa32608.github.io/feder-bau-demo/`)
   that absolute `/src/main.jsx` resolves to:
   `https://aa32608.github.io/src/main.jsx` → 404.
   It should be `/feder-bau-demo/src/main.jsx`, or better: a built asset.

2. You were publishing the **source** `main` branch to Pages.
   Vite apps must publish the built `dist/` folder. Raw `.jsx` files are not
   runnable in browsers without Vite dev server.

## Fix applied

1. **vite.config.js**
   ```js
   base: '/feder-bau-demo/',
   ```
   was `'./'` – now matches repo name exactly.

2. **Build output is now correct:**
   ```
   dist/index.html
   <script type="module" crossorigin src="/feder-bau-demo/assets/index-CP_FTCrr.js">
   ```
   No more `/src/main.jsx`.

3. **GitHub Actions auto-deploy**
   `.github/workflows/deploy.yml` – push to main → builds → Pages.
   In Settings → Pages set **Source: GitHub Actions**.

4. **SPA routing safe for GH Pages**
   - Switched to `HashRouter`
   - URLs: `https://aa32608.github.io/feder-bau-demo/#/products`
     avoids 404 on refresh.
   - `public/404.html` + build step `cp dist/index.html dist/404.html`

5. **.nojekyll** in `public/` – prevents Jekyll stripping `_` assets.

Manual deploy still works:
```
npm run deploy
```
→ pushes `dist` to `gh-pages` branch.

---

## Single-page vs Multi-page – my decision

For **Feder Bau – local mattress manufacturer / showroom in Tetovo**:

I converted to **multi-page SPA, 5 routes**, keeping single-page feel:

- `/` **Home** – hero carousel, categories, 3 featured products, about teaser, benefits
- `/products` **Dyshekët** – full 6-product grid, filters, help CTA
- `/collections` **Koleksionet** – collection cards, 6 items
- `/about` **Përvoja** – 1997 story, stats, craftsmanship
- `/contact` **Kontakt** – form + showroom map + hours

Why multi-page wins here:
- **SEO**: separate URLs: `/products`, `/about` indexable in SQ/MK/EN. Single-page hash anchors are invisible to Google.
- **Analytics / Ads**: distinct pageviews, conversion funnels.
- **Scalability**: ready for `/products/elegance-viscoline` detail pages later.
- **UX**: still fast SPA navigation, scroll-to-top, persistent language (localStorage).
- **GitHub Pages friendly**: HashRouter = zero server config.

Single-page is only better for a pure 1-section landing/demo. You already have 7 content sections, 3 languages, 6 products – that deserves routes.

Nav mapping (preserving your translations):
- Kreu / Почетна / Home → `/`
- Dyshekët / Душеци / Mattresses → `/products`
- Koleksionet / Колекции / Collections → `/collections`
- Përvoja / Искуство / Experience → `/about`
- Kontakt / Контакт / Contact → `/contact`

Showroom map is merged into Contact (industry standard – reduces to 5 pages, “not too many”).

---

## Files changed / added

- `package.json` – added `react-router-dom`, `gh-pages`, deploy scripts, homepage
- `vite.config.js` – `base: '/feder-bau-demo/'`
- `src/main.jsx` – HashRouter + LanguageProvider
- `src/App.jsx` – Routes wrapper
- `src/context/LanguageContext.jsx` – global SQ/MK/EN
- `src/components/Layout.jsx, Header.jsx, Footer.jsx, UI.jsx`
- `src/pages/Home.jsx, Products.jsx, Collections.jsx, About.jsx, Contact.jsx, NotFound.jsx`
- `src/App.css` – +280 lines multi-page styles, mobile hamburger
- `.github/workflows/deploy.yml`
- `public/404.html`, `public/.nojekyll`

Build passes: `261.85 kB JS / 83.44 kB gzip`.

## Next deploy steps

1. Commit & push this refactor to `main`
2. GitHub → Settings → Pages → **Source: GitHub Actions**
3. Wait ~90s → https://aa32608.github.io/feder-bau-demo/#/
   – no more main.jsx 404

If you *must* stay single-page, I kept all sections modular – easy to revert – but I strongly recommend the 5-page structure above for a real business site.
