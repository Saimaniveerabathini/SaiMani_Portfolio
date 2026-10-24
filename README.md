# SaiMani Veerabathini — Portfolio

A responsive, dark-themed Full Stack Java Developer portfolio built with plain HTML, CSS, and JavaScript. It has no build step, framework, API key, or server requirement and can be hosted on GitHub Pages.

## Project structure

```text
.
├── index.html
├── styles.css
├── portfolio.config.js
├── script.js
├── README.md
└── assets/
    ├── Saimani.jpeg
    └── Saimani_Veerabathini_Professional_Resume.pdf
```

## Run locally

Open `index.html` in a browser. For a local HTTP preview, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Personalize before publishing

Update the single content file, [`portfolio.config.js`](./portfolio.config.js), to change your name, summary, contact details, social profiles, skills, experience, education, and project descriptions. The current content reflects the information supplied for this portfolio; review it for accuracy before publishing.

- The supplied profile photo is `assets/Saimani.jpeg`; the resume button downloads `assets/Saimani_Veerabathini_Professional_Resume.pdf`.
- GitHub and LinkedIn links are configured in `portfolio.config.js`.
- Add repository or demo URLs only for projects you can publicly share. The supplied work experience is presented as professional project experience, not as public sample repositories.
- Remove or edit skills and project details you do not want to claim.
- Replace the page title, description, and social preview defaults in `index.html` if desired.

## Publish with GitHub Pages

1. Create a new repository on GitHub. For a user site, name it `<your-username>.github.io`; otherwise, use any repository name.
2. From this folder, add the remote and push the `main` branch:

   ```bash
   git remote add origin https://github.com/<your-username>/<repository-name>.git
   git add .
   git commit -m "Create developer portfolio"
   git push -u origin main
   ```

   If this project already has an `origin`, update it with `git remote set-url origin https://github.com/<your-username>/<repository-name>.git` instead of adding a second remote.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for the Pages deployment and open the URL shown in the Pages settings.

All page navigation and asset URLs are relative, so the site works both at a user-site root and under a project-repository path.
