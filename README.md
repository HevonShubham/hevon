# HEVON Launch Website

Production-ready pre-launch website for **HEVON — The Future of Everyday Drinks**.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production verification

```bash
npm run lint
npm run build
```

## Deploy to Netlify

### Recommended: Git deployment

1. Create a GitHub repository and push the contents of this `hevon` folder.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the repository.
4. Build command: `npm run build`
5. Netlify detects Next.js automatically.
6. After deployment, open **Domain management** and add `hevon.in`.
7. Update the DNS records at GoDaddy using the values Netlify provides.

### Waitlist form

The form is named `hevon-waitlist` and uses Netlify Forms. After the first production deployment, submissions appear under **Site configuration → Forms**.

Test the form only on the deployed Netlify URL; local development cannot submit to Netlify Forms.

## Before public launch

- Confirm final nutrition and caffeine values with the manufacturer and regulatory advisor.
- Replace product-development targets with verified label values.
- Replace future concept flavours if the roadmap changes.
- Review Privacy and Terms with a qualified professional as the business develops.
- Add analytics only after choosing a consent/privacy approach.

## Brand contacts

- Website: `hevon.in`
- Email: `hello@hevon.in`
- Instagram: `@hevonofficial`
