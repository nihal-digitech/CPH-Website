import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const baseUrl = new URL(import.meta.env.SITE);
  const sitemapUrl = new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, baseUrl);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
