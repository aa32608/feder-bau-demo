# Feder Bau Demo Website

Demo website interface for Feder Bau, a mattress store and producer in Golema Rechica, Tetovo.

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

## GitHub Pages

**Fixed main.jsx 404 – June 2026 update**

The `main.jsx:1 Failed to load resource: 404` error was caused by:

1. **Wrong base path**: `index.html` used `/src/main.jsx` (absolute root). On GitHub Pages project sites the app lives at `https://aa32608.github.io/feder-bau-demo/`, so `/src/main.jsx` resolved to `https://aa32608.github.io/src/main.jsx` → 404.
2. **Deploying source instead of build**: GitHub Pages was serving raw `main` branch files, not the Vite `dist/` output.

**Fix applied:**

- `vite.config.js`: `base: '/feder-bau-demo/'`
- React Router with `HashRouter` for GitHub Pages SPA support
- Multi-page structure: `/`, `/products`, `/collections`, `/about`, `/contact`
- GitHub Actions auto-deploy: `.github/workflows/deploy.yml`
- `404.html` SPA fallback + `.nojekyll`

### Deploy – Option A (Recommended – GitHub Actions)

1. In repo **Settings → Pages → Build and deployment**: set **Source = GitHub Actions**.
2. Push to `main`. The workflow builds and deploys automatically.
3. Live at: https://aa32608.github.io/feder-bau-demo/

### Deploy – Option B (manual gh-pages branch)

```bash
npm run deploy
```
Requires `gh-pages` package (already added). Then in **Settings → Pages**: Source = `Deploy from a branch`, Branch = `gh-pages`, Folder = `/ (root)`.

### Local preview of production build

```bash
npm run build
npm run preview
```
