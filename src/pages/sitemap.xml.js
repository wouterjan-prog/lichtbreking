import { site } from '../data/site.js';
import { shots } from '../data/shots.js';

const vaste = ['/', '/werk/', '/films/', '/over/', '/contact/', '/privacy/'];

/* Detailpagina's bestaan alleen voor beelden die er echt zijn. */
const beelden = shots.filter((s) => Boolean(s.bestand)).map((s) => `/werk/${s.slug}/`);

export async function GET() {
  const paden = [...vaste, ...beelden];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paden.map((p) => `  <url><loc>${site.url}${p}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
