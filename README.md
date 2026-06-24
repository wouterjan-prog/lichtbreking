# Lichtbreking

Cinematische portfolio-, foto- en videosite met de cursus *De Vluchtfilmer*. Gebouwd met Astro in een filmische, bijna-zwarte stijl met full-screen beeldscènes, parallax en automatische licht/donker-modus (iOS-stijl).

## Pagina's
- **Home** (`/`) — filmische hero (video-ready) + full-screen portfolio-scènes + cursus-teaser
- **Cursus** (`/cursus/`) — landingspagina naar de volledige cursus
- **De Vluchtfilmer** (`/cursus/vluchtfilmer/`) — de complete cursus (statisch HTML)
- **Over** (`/over/`) en **Contact** (`/contact/`)

## Lokaal draaien
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # bouwt naar dist/
```

## Online zetten (GitHub → Vercel → lichtbreking.nl)
1. Nieuwe GitHub-repo `lichtbreking`; upload de inhoud van deze map via "Add file → Upload files" (alles behalve `node_modules/` en `dist/` — die staan in `.gitignore`).
2. [vercel.com](https://vercel.com) → "Add New → Project" → kies de repo. Astro wordt automatisch herkend.
3. Deploy. In Vercel → Settings → Domains: voeg `lichtbreking.nl` en `www.lichtbreking.nl` toe en volg de DNS-stappen.

## Wat er is geoptimaliseerd

**SEO & vindbaarheid**
- Per pagina unieke `<title>` + meta-description (in `src/components/Seo.astro`)
- JSON-LD structured data: WebSite + Person (home), Course (cursus)
- Open Graph + Twitter Card met deelbeeld `public/img/og.jpg`
- Canonical-URL's, `robots.txt`, en `sitemap.xml` (in `public/`)
- Semantische HTML (`<main>`, `<article>`, `<figure>`), zinvolle `alt`-teksten

**Snelheid**
- Responsive beelden met `srcset` (640–2600px): elk scherm laadt de juiste resolutie
- Hero met `fetchpriority="high"`; overige beelden `loading="lazy"`
- `preconnect`/`dns-prefetch` naar de beeld-CDN
- Vrijwel geen JavaScript; CSS is licht en zonder framework
- `width`/`height` op beelden tegen layout-shift (goede CLS)

**Responsive**
- Vloeiende type-schalen (`clamp()`) en geteste breakpoints voor mobiel, tablet, desktop
- `viewport-fit=cover` + `svh`-units voor correcte full-screen op mobiel (notch/adresbalk)
- `prefers-reduced-motion` gerespecteerd (parallax/animaties uit)

## Eigen beelden & video toevoegen
- **Portfolio:** pas `src/data/work.js` aan. Voor eigen foto's: zet ze in `public/img/` — je kunt de Unsplash-`photo`-id's vervangen.
- **Hero-video:** zet je clip op `public/video/hero.mp4` — die speelt dan automatisch (zacht, geloopt). Zonder video toont het posterbeeld.
- **Showreel:** in `work.js` bij het showreel-item een YouTube/Vimeo-`embed`-URL invullen (opent in lightbox), of een `video`-pad voor een meespelende achtergrond.
- **OG-deelbeeld:** vervang `public/img/og.jpg` (1200×630) door een eigen beeld voor mooiere social-previews.

## Designsysteem
Alles op CSS-variabelen in `src/styles/global.css`. De spectrale gradient (`--spectrum`) is de "lichtbreking" — spaarzaam gebruiken. Donker is de default (filmisch); de toggle in de nav onthoudt een handmatige keuze. De nav is transparant boven de hero en wordt glas bij scroll.

## Domein wijzigen
Pas `site` aan in `astro.config.mjs`, de URL's in `public/sitemap.xml` + `public/robots.txt`, en de `path`-props in de pagina's.
