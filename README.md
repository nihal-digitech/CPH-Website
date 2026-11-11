# Cannanore Plastic House website

The official static website for Cannanore Plastic House (CPH), Kannur. It is built with Astro and designed for GitHub Pages.

## Everyday updates

- Business details and shared links: `src/data/site.ts`
- Category names and product lists: `src/data/catalogue.ts`
- Page content: `src/pages/`
- Shared header, footer and product cards: `src/components/`
- Showroom images: `public/images/showroom/`
- Category images: `public/images/categories/`

The `.webp` images are the fast-loading versions used by the website. Original image copies are retained alongside them and the original supplied showroom images remain in `CPH Showroom Photos/`.

## Local development

Install dependencies once:

```sh
pnpm install
```

Start the site locally:

```sh
pnpm dev
```

Create a production build:

```sh
pnpm build
```

Recreate WebP versions after adding source `.png` or `.jpeg` files to either image directory:

```sh
pnpm images:optimize
```

## Bulk enquiry form

The form intentionally does not submit until a verified Formspree endpoint is configured. This prevents visitors from being shown a form that silently fails.

1. Create a Formspree form with notifications sent to `cannanoreplastics@gmail.com`.
2. Verify the recipient email address in Formspree.
3. In the GitHub repository, open **Settings → Secrets and variables → Actions → Variables**.
4. Add a repository variable named `PUBLIC_FORMSPREE_ENDPOINT` containing the endpoint, for example `https://formspree.io/f/abcdwxyz`.
5. Push to `main`, then submit a real test enquiry on the deployed site.

The endpoint is a public form URL, so it belongs in an Actions **variable**, not a secret. Enable Formspree's available spam protection before launch.

## GitHub Pages publishing

1. Create a GitHub repository and push this folder to its `main` branch.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. The workflow at `.github/workflows/deploy.yml` builds and publishes the site on each push to `main`.
4. For a custom domain later, add the repository variable `SITE_URL` with the final `https://` URL. The workflow will then publish links, canonical URLs, sitemap URLs and robots directives against that domain.

Before launch, test the contact links, map, WhatsApp messages and live Formspree submission on mobile.
