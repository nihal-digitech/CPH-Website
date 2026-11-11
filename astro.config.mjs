import { defineConfig } from 'astro/config';

// Set SITE_URL and BASE_PATH in the GitHub Pages workflow once the repository
// owner/name are confirmed. Local development deliberately stays at the root.
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  output: 'static',
  site,
  base,
  trailingSlash: 'always',
});
