# edwardzhang2.github.io/portfolio

Personal site. React + Vite, plain CSS, prerendered to static HTML.

- `src/content.js` — all copy (experience, projects, about, links). Edit this to update the site.
- `src/App.jsx`, `src/styles.css` — layout and styles.
- `scripts/prerender.mjs` — after `vite build`, renders the page once in headless Chromium and writes the markup into `dist/index.html`, so the page has content before JavaScript runs. Skipped automatically if Playwright isn't installed (`npx playwright install chromium` to enable).
- `public/resume.pdf` — replace to update the resume.

```
npm install
npm run dev      # local preview
npm run build    # dist/
npm run deploy   # build and push dist/ to the gh-pages branch
```
