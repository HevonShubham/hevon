# HEVON — Go Live Guide

## 1. Test locally

```bash
npm install
npm run lint
npm run build
npm run dev
```

Open `http://localhost:3000` and test:
- desktop and mobile navigation
- all anchor links
- waitlist form
- flavour voting form
- success page
- privacy and terms pages

## 2. Push to GitHub

Create a new private or public GitHub repository, then run:

```bash
git init
git add .
git commit -m "Launch HEVON website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 3. Deploy to Netlify

1. Sign in to Netlify.
2. Select **Add new site → Import an existing project**.
3. Connect GitHub and choose the HEVON repository.
4. Netlify should read `netlify.toml` automatically.
5. Confirm the build command is `npm run build`.
6. Deploy the site.

## 4. Verify forms

After deployment:
1. Open **Netlify → Forms**.
2. Confirm forms named `waitlist` and `flavour-vote` are detected.
3. Submit one test entry through each form on the live site.
4. Confirm both submissions appear in Netlify.
5. Configure form notification emails to `hello@hevon.in`.

## 5. Connect hevon.in

In Netlify:
1. Open **Domain management**.
2. Select **Add a domain** and enter `hevon.in`.
3. Add `www.hevon.in` as an alias.
4. Netlify will display the DNS records required.

In GoDaddy:
1. Open the DNS manager for `hevon.in`.
2. Remove conflicting old website records only after noting them down.
3. Add the exact A/CNAME records shown by Netlify.
4. Wait for DNS propagation. This can take a few minutes to 48 hours.
5. Set `hevon.in` as the primary domain in Netlify.
6. Verify HTTPS is active under Netlify domain settings.

## 6. Final live checks

- `https://hevon.in`
- `https://www.hevon.in`
- favicon and social preview
- mobile menu
- waitlist submission
- flavour vote submission
- `hello@hevon.in` links
- privacy and terms pages
- no console errors

## Important pre-launch accuracy note

The website describes nutrition figures as formulation targets. Replace these with final tested and regulator-approved values before product sales begin.
