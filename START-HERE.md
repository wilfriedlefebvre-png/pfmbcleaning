# PFMB website update

This folder contains the updated editable source and a ready-built dist folder.
Your live website has NOT been changed.

## Changes
- Prerendered all nine city pages, homepage, commercial page and service-area index.
- Initial HTML contains real content, titles, descriptions, canonical URLs and city JSON-LD.
- React hydrates the existing content after loading.
- Repaired dependency lockfile and retained the existing page design.
- Fixed trailing-slash routing and modifier-click navigation.
- Removed visitor-facing configuration instructions from the quote form; added accessible labels and a no-JavaScript contact option.
- Mail fallback says explicitly that the visitor must send the email draft.

## Open and edit
Open this folder in Cursor. Use Node 22.12+ (or a compatible newer Node release).
Run `npm ci`, then `npm run dev`.
Run `npm run build` to regenerate dist after edits; `npm run preview` previews that build.

## Publish
The uploaded project includes an Apache .htaccess file mentioning Namecheap.
That does not prove which provider currently hosts the live domain. Confirm in your hosting account.

Apache / Namecheap cPanel:
1. Back up the current website document root.
2. Upload the CONTENTS of dist to the document root for pfmbcleaning.com.
3. Include dist/.htaccess (a hidden file) and all city folders and assets.
4. Do not upload src or node_modules into the public website directory.
5. Open a city URL directly, refresh it, and check the quote button and phone link.

Vercel:
Use the existing connected project. Commit the source changes, set the build command to npm run build and output directory to dist, then deploy through that project. Verify direct city URLs after deployment. Do not rely on Apache .htaccess on Vercel.

## Direct quote delivery still needs setup
Copy .env.example to .env locally and set VITE_WEB3FORMS_ACCESS_KEY to the access key for your business inbox. For hosted builds set the same environment variable in the existing hosting project, then rebuild.
Do not put private account credentials into VITE_ variables: those values are included in browser code.
Until configured, the form opens the visitor's email app and the visitor must send the draft. No direct form delivery has been verified and no test messages were sent.

## Verification performed
Production build and ESLint passed. All 12 generated HTML pages were checked for one H1, unique route canonicals, a description and existing local assets. All nine city pages contain parseable business and FAQ JSON-LD; sitemap contains all 12 routes.
Desktop/mobile visual checks and live hosting/form checks remain to be performed.
Existing pricing and business claims were preserved; review them before publishing.
