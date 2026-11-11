import type { APIRoute } from 'astro';
import { categories } from '../data/catalogue';

export const prerender = true;

const staticRoutes = ['/', '/products/', '/business-solutions/', '/about/', '/visit-us/', '/bulk-enquiry/'];

function xmlEscape(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] ?? character);
}

export const GET: APIRoute = () => {
  const baseUrl = new URL(import.meta.env.SITE);
  const routes = [...staticRoutes, ...categories.map((category) => `/products/${category.slug}/`)];
  const urls = routes
    .map((route) => `<url><loc>${xmlEscape(new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}${route}`, baseUrl).href)}</loc></url>`)
    .join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
