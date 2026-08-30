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
| Originele foto's (bron voor WebP/AVIF) | `src/beelden/werk/` |
| Posters bij films | `src/beelden/films/` |
| Films | `src/data/films.js` |
| Kleuren, spacing, glas, animaties | `src/styles/v4.css` |
| Pagina's | `src/pages/` |

## Beeld toevoegen

1. Zet het originele bestand in `src/beelden/werk/`, onbewerkt is prima.
2. Voeg in `src/data/shots.js` een regel toe met `bestand: 'naam.jpg'`, alleen de
   bestandsnaam dus.
3. `verhouding: '16/9'` loopt over twee kolommen, `'9/16'` gaat naar de
   Verticaal-scroller, `'4/5'` en `'1/1'` staan in één kolom.

De build maakt er zelf AVIF en WebP van in vijf breedtes, met een `srcset`, zodat
een telefoon geen bestand van 2400 pixels breed hoeft te laden. Er is dus geen
apart exportscript nodig.

Elk beeld met een bestand krijgt automatisch een eigen pagina op `/werk/<slug>/`
en komt in de sitemap. Beelden zonder bestand krijgen dat niet, zodat er geen
lege pagina's ontstaan. Klikken op een tegel opent de lightbox.

Zolang `bestand: null` staat, toont de site een rustige lege tegel en verschijnt
er onder de filterbalk één regel dat het archief nog gevuld wordt. Zodra het
eerste beeld erin staat, verdwijnt die regel vanzelf.

## Film toevoegen

1. Video in `public/video/`, stilstaand beeld in `src/beelden/films/`.
2. In `src/data/films.js` `bron` (pad in public) en `poster` (bestandsnaam) invullen. Extern gehost? Vul `extern`
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

## Privacy

De site laadt niets van derden. Albert Sans staat zelf in `public/fonts/`
(SIL Open Font License), er zijn geen cookies en geen analytics. Houd dat zo, of
werk anders `src/pages/privacy/index.astro` bij, want daar staat het beschreven.
