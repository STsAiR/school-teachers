# ssc-kla-directory

This project is a Vite + React app with a bundled server component.

## ✅ Goal

Deploy the **frontend** to **GitHub Pages** using **GitHub Actions**.

## 🔧 What was added

- ✅ A GitHub Actions workflow: `.github/workflows/deploy-pages.yml`
- ✅ Vite base URL configuration via `VITE_BASE` (for repo pages)

## 🚀 Quick setup (create GitHub repo + push)

1. Create a new repository on GitHub (e.g., `ssc-kla-directory`).
2. Add the GitHub remote and push:

```sh
# replace <ORG_OR_USER> and <REPO> with your values
git remote add origin git@github.com:<ORG_OR_USER>/<REPO>.git
git branch -M main
git push -u origin main
```

> Tip: If you use GitHub CLI, you can run:
>
> ```sh
> gh repo create <ORG_OR_USER>/<REPO> --public --source=. --remote=origin --push
> ```

```

## 🛠️ Deploying to GitHub Pages
### 1) Set the base path (if using repo pages)
If you serve from `https://<user>.github.io/<repo>/`, set `VITE_BASE` in the Action.

The workflow already supports this via `VITE_BASE`:
- `VITE_BASE="/<repo>/"`

If you're deploying to a user/org site (`https://<user>.github.io/`), keep it as `/`.

### 2) Enable GitHub Pages
1. Go to **Settings > Pages** in your repo.
2. Under **Build and deployment**, choose **GitHub Actions**.
3. Save.

Then every push to `main` will trigger a build and deploy to GitHub Pages.

## 🧪 Local run
- `pnpm install`
- `pnpm dev` (runs Vite dev server)
- `pnpm run build` (builds into `dist/public`)

---

If you want the **server** piece deployed (Node backend), you'll need a platform that supports Node (e.g., Vercel, Fly, Render, etc.). GitHub Pages only hosts static assets.
```
