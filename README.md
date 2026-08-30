# lichtbreking.nl

Statische site (Astro 4, geen framework-runtime in de browser). Vercel bouwt
automatisch vanaf `main` en zet live op lichtbreking.nl.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # naar dist/
```

## Waar staat wat

| Wat | Bestand |
| --- | --- |
| Merk, contact, menu, hero-tekst | `src/data/site.js` |
| Beelden in het raster en de verticale scroller | `src/data/shots.js` |
| Films | `src/data/films.js` |
| Kleuren, spacing, glas, animaties | `src/styles/v4.css` |
| Pagina's | `src/pages/` |

## Beeld toevoegen

1. Zet het bestand in `public/img/werk/`.
2. Voeg in `src/data/shots.js` een regel toe en vul `bestand: '/img/werk/naam.jpg'`.
3. `verhouding: '16/9'` loopt over twee kolommen, `'9/16'` gaat naar de
   Verticaal-scroller, `'4/5'` en `'1/1'` staan in één kolom.

Zolang `bestand: null` staat, toont de site een nette lege tegel met de naam van
het veld dat gevuld moet worden. Zo blijft de layout kloppen voordat er media is.

## Film toevoegen

1. Video in `public/video/`, stilstaand beeld in `public/img/films/`.
2. In `src/data/films.js` `bron` en `poster` invullen. Extern gehost? Vul `extern`
   met de link, dan wordt de afspeelknop een doorverwijzing.

De bovenste film uit de lijst staat groot in het spectrumkader op de homepage.

## Hero-video

De hero draait op `public/video/hero.mp4` met `public/video/poster.jpg` als
stilstaand beeld. Ontbreken die, dan toont de hero een rustig verloopvlak in
plaats van een gat. De geluidsknop verschijnt alleen als de video er is.

## Ontwerp

Donker, beeld-eerst, één thema (geen licht/donker-schakelaar). Vaste
spectrumvolgorde `#FF5147 · #FF9A2E · #FFD23E · #46C95F · #2F7CF0 · #9B4DDB`.
Elementkleuren: lucht `#2F7CF0`, land `#46C95F`, water `#FFD23E`, nacht `#9B4DDB`.
Alle animaties staan uit bij `prefers-reduced-motion: reduce`.
