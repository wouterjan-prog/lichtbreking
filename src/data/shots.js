/* ==========================================================================
   Beelden (foto's en losse videobeelden) in het raster.

   Een beeld toevoegen:
   1. Zet het bestand in  public/img/werk/   (bv. kustlijn-01.jpg)
   2. Voeg hieronder een regel toe met  bestand: '/img/werk/kustlijn-01.jpg'
   3. Zolang  bestand: null  staat, toont de site een nette lege tegel.

   Velden
   - slug        uniek, kleine letters, streepjes
   - titel       korte naam, komt in het glas-labeltje op brede tegels
   - element     'lucht' | 'land' | 'water' | 'nacht'  (bepaalt de filterkleur)
   - toestel     'mini' | 'action' | 'pocket' | 'iphone'
   - type        'foto' | 'video'  (video krijgt een klein afspeelknopje)
   - verhouding  '16/9' (loopt over twee kolommen) | '4/5' | '1/1' | '9/16'
                 '9/16' komt automatisch in de Verticaal-scroller
   - bestand     pad in /public, of null
   - alt         beschrijving voor schermlezers en zoekmachines
   - opname      optioneel blok met opnamegegevens, komt op de detailpagina te
                 staan. Laat `tools/srt-lezen.py` los op de .SRT die DJI naast
                 de opname zet, dan rolt er een kant en klare regel uit:
                   opname: {
                     datum: '2026-08-09', tijd: '19:21', plek: 'Playa Grandi',
                     hoogte: 48, iso: '1600', sluiter: '1/30',
                     diafragma: 'f/1.8', profiel: 'dlog_m',
                   }
                 Let op: de klok in die bestanden is die van je controller. Het
                 script rekent om naar de tijd op de plek zelf.
   ========================================================================== */

export const shots = [
  {
    slug: 'playa-grandi', titel: 'Playa Grandi',
    element: 'water', toestel: 'mini', type: 'video', verhouding: '16/9',
    bestand: 'playa-grandi.jpg',
    alt: 'Vlot en een rode boot in helder turkoois water, van boven gezien',
    video: { hevc: '/video/werk/playa-grandi.hevc.mp4', h264: '/video/werk/playa-grandi.mp4' },
    opname: {
      datum: '2026-08-06', tijd: '15:38', plek: 'Playa Grandi, Curaçao',
      hoogte: 18, iso: '100', sluiter: '1/4000', diafragma: 'f/1.8', profiel: 'dlog_m',
    },
  },
  { slug: 'duinrand',          titel: 'Duinrand',          element: 'land',  toestel: 'pocket', type: 'foto',  verhouding: '4/5',  bestand: null, alt: '' },
  { slug: 'branding',          titel: 'Branding',          element: 'water', toestel: 'action', type: 'foto',  verhouding: '4/5',  bestand: null, alt: '' },
  { slug: 'rif',               titel: 'Rif',               element: 'water', toestel: 'action', type: 'video', verhouding: '1/1',  bestand: null, alt: '' },
  { slug: 'lantaarn',          titel: 'Lantaarn',          element: 'nacht', toestel: 'iphone', type: 'foto',  verhouding: '1/1',  bestand: null, alt: '' },
  { slug: 'polderlicht',       titel: 'Polderlicht',       element: 'land',  toestel: 'mini',   type: 'foto',  verhouding: '16/9', bestand: null, alt: '' },
  { slug: 'zandbank',          titel: 'Zandbank',          element: 'lucht', toestel: 'mini',   type: 'foto',  verhouding: '16/9', bestand: null, alt: '' },
  { slug: 'kreek',             titel: 'Kreek',             element: 'water', toestel: 'mini',   type: 'foto',  verhouding: '4/5',  bestand: null, alt: '' },
  { slug: 'bosrand',           titel: 'Bosrand',           element: 'land',  toestel: 'pocket', type: 'foto',  verhouding: '4/5',  bestand: null, alt: '' },
  { slug: 'sterrenspoor',      titel: 'Sterrenspoor',      element: 'nacht', toestel: 'iphone', type: 'foto',  verhouding: '1/1',  bestand: null, alt: '' },
  { slug: 'ondiepte',          titel: 'Ondiepte',          element: 'water', toestel: 'action', type: 'foto',  verhouding: '1/1',  bestand: null, alt: '' },
  { slug: 'avondkust',         titel: 'Avondkust',         element: 'nacht', toestel: 'mini',   type: 'video', verhouding: '16/9', bestand: null, alt: '' },

  /* Verticaal (9/16) — komt in de scroller onderaan */
  { slug: 'v-golfslag',   titel: 'Golfslag',   element: 'water', toestel: 'action', type: 'video', verhouding: '9/16', bestand: null, alt: '' },
  { slug: 'v-pier',       titel: 'Pier',       element: 'land',  toestel: 'pocket', type: 'video', verhouding: '9/16', bestand: null, alt: '' },
  { slug: 'v-opstijgen',  titel: 'Opstijgen',  element: 'lucht', toestel: 'mini',   type: 'video', verhouding: '9/16', bestand: null, alt: '' },
  { slug: 'v-blauwuur',   titel: 'Blauwuur',   element: 'nacht', toestel: 'iphone', type: 'video', verhouding: '9/16', bestand: null, alt: '' },
  { slug: 'v-zwembad',    titel: 'Zwembad',    element: 'water', toestel: 'action', type: 'video', verhouding: '9/16', bestand: null, alt: '' },
];

export const rasterShots = shots.filter((s) => s.verhouding !== '9/16');
export const verticaleShots = shots.filter((s) => s.verhouding === '9/16');
export const aantalBeelden = shots.length;

/* Zolang geen enkel beeld een bestand heeft, toont de site een korte
   melding in plaats van te doen alsof het archief al gevuld is. */
export const heeftBeeldmateriaal = shots.some((s) => Boolean(s.bestand));
