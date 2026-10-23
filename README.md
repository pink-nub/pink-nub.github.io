# Ruqaiya Motagam — portfolio website

Portfolio site for Ruqaiya Motagam, an energy economist — her background, her research
reports and the working models behind them.

Deploys to **[pink-nub.github.io](https://pink-nub.github.io)**.

## Stack

Vue 3 (`<script setup>` SFCs), Vite, Vue Router 4 and Tailwind CSS v4. No backend; the
build is plain static files. Needs Node 22 or newer.

## Running locally

```bash
npm install
npm run dev              # dev server on http://localhost:5173
npm run dev -- --host    # also reachable from other devices on the same network
npm run build            # static build into dist/
npm run preview          # serve the built site
```

There is no linter or test suite — `npm run build` is the only automated check.

## Pages

- **`/`** — one scrolling page: Home, About, Projects and Contact. The nav tabs scroll to
  a section rather than loading a new page.
- **`/projects/:slug`** — a page per research project with the write-up, the key figures
  and downloads for the report (PDF) and the working model.

## Editing the content

All personal content lives in two files, and the views only render it:

- **`src/data/profile.js`** — bio, skills, experience, education, contact details, CV link
- **`src/data/projects.js`** — the research projects and their download links

Report PDFs, working models and the CV belong in `public/reports/`; images go in
`public/images/`.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages. It can also be run by hand from
the Actions tab.

One-time setup on a new repository: under **Settings → Pages**, set **Source** to
**GitHub Actions**. Nothing deploys until that is done.

GitHub Pages has no SPA rewrite, so `npm run build` also copies `index.html` to
`404.html`. Without that, opening a `/projects/...` link directly would 404.
