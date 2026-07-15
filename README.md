# Mohammad Ahmadi — Resume & Portfolio

A static resume + portfolio site built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

See the full walkthrough in the chat, or the short version:

1. Push this project to a GitHub repo.
2. In `vite.config.js`, set `base: '/your-repo-name/'`.
3. In the repo: **Settings → Pages → Source → GitHub Actions**.
4. Push to `main` — the included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically.
5. Your site goes live at `https://<username>.github.io/<repo-name>/`.
