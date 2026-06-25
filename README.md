# Daniel in the Lions' Den — Website

A single, self-contained website. Everything (fonts, images, styles) is embedded
in `index.html`, so it works offline and needs no build step.

## What's in this folder
- `index.html` — the entire website. This is the only file the live site needs.
- `.nojekyll` — tells GitHub Pages to serve the files as-is (no processing).
- `README.md` — this file.

## Put it on GitHub (web browser, no command line)
1. Go to https://github.com/new and create a new repository (e.g. `daniel-lions-den`).
   Leave it Public if you want free GitHub Pages hosting.
2. On the new repo page, click **uploading an existing file**.
3. Drag in `index.html` and `.nojekyll` from this folder. Click **Commit changes**.
4. Go to **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **Deploy from a branch**.
6. Pick branch **main** and folder **/ (root)**. Click **Save**.
7. Wait ~1 minute. Your site goes live at:
   `https://YOUR-USERNAME.github.io/daniel-lions-den/`

## Put it on GitHub (command line)
```bash
cd site
git init
git add .
git commit -m "Daniel in the Lions' Den website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
Then enable Pages in **Settings → Pages** (steps 4–7 above).

## Custom domain (optional)
In **Settings → Pages → Custom domain**, enter your domain (e.g. `danielinthelionsden.com`)
and follow GitHub's DNS instructions with your domain registrar.

## Updating the site later
Replace `index.html` with a new version and commit. GitHub Pages redeploys automatically
within a minute or two.
