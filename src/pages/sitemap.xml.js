import { courses, getLessons } from '../data/courses.js';
import { articles } from '../data/articles.js';

const SITE = 'https://www.lichtbreking.nl';

export async function GET() {
  const urls = [];
  const add = (p, pr) => urls.push({ loc: SITE + p, pr });

  ['/', '/werk/', '/cursussen/', '/showreel/', '/over/', '/contact/', '/shotlist/', '/gereedschap/', '/gouden-uur/', '/dronespots/', '/curacao/', '/heerde/', '/faq/', '/zoeken/', '/start/', '/begrippen/', '/privacy/', '/gids/pocket-4/', '/gids/action-6/', '/wat-is-nieuw/', '/artikelen/'].forEach((p) => add(p, p === '/' ? '1.0' : '0.7'));
  for (const a of articles) add(`/artikelen/${a.slug}/`, '0.6');
  ['/en/', '/en/werk/', '/en/cursussen/', '/en/showreel/', '/en/over/', '/en/contact/', '/en/pro-settings/'].forEach((p) => add(p, '0.5'));

  for (const c of courses) {
    add(`/cursus/${c.slug}/`, '0.8');
    for (const l of getLessons(c)) add(`/cursus/${c.slug}/les/${l.key}/`, '0.6');
  }

  const body = '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + urls.map((u) => `  <url><loc>${u.loc}</loc><priority>${u.pr}</priority></url>`).join('\n')
    + '\n</urlset>\n';

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
