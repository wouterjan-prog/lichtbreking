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
   - verhaal     optioneel, een paar zinnen over de plek. Komt naast het
                 kaartje te staan onder het beeld.
   - opname      optioneel blok met opnamegegevens, komt op de detailpagina te
                 staan. Laat `tools/srt-lezen.py` los op de .SRT die DJI naast
                 de opname zet, dan rolt er een kant en klare regel uit:
                   opname: {
                     datum: '2026-08-09', tijd: '19:21', plek: 'Playa Grandi',
                     lat: 12.198475, lon: -69.078781,
                     hoogte: 48, iso: '1600', sluiter: '1/30',
                     diafragma: 'f/1.8', profiel: 'dlog_m',
                   }
                 De coördinaten komen niet op de pagina te staan. Ze worden
                 gebruikt om de stand van de zon uit te rekenen.
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
    verhaal:
      'Vissers noemen deze plek Playa Piskadó. Ze maken er hun vangst schoon en gooien de resten ' +
      'overboord, en daar komen de zeeschildpadden op af. Vanaf achttien meter hoogte zie je vooral ' +
      'het patroon: het vlot, de rode boot, en de schaduwen die scherp op de zandbodem vallen.',
    opname: {
      datum: '2026-08-06', tijd: '15:38', plek: 'Playa Grandi, Curaçao',
      lat: 12.369358, lon: -69.154348,
      hoogte: 18, iso: '100', sluiter: '1/4000', diafragma: 'f/1.8', profiel: 'dlog_m',
    },
  },
  {
    slug: 'fort', titel: 'Fort Beekenburg',
    element: 'land', toestel: 'mini', type: 'video', verhouding: '16/9',
    bestand: 'fort.jpg',
    alt: 'Fort Beekenburg op de klif boven Caracasbaai, met het Spaanse Water erachter',
    video: { hevc: '/video/werk/fort.hevc.mp4', h264: '/video/werk/fort.mp4' },
    verhaal:
      'De ronde toren linksonder is Fort Beekenburg, op de klif bij de ingang van Caracasbaai. ' +
      'Daarachter ligt het Spaanse Water vol zeilboten. Het fort is begin achttiende eeuw gebouwd ' +
      'door de West-Indische Compagnie om de baai te bewaken. Vanaf eenennegentig meter zie je in ' +
      'één beeld waarom het daar staat: wie de baai in wil, moet erlangs.',
    opname: {
      datum: '2026-08-13', tijd: '14:40', plek: 'Caracasbaai, Curaçao',
      lat: 12.072006, lon: -68.863401,
      hoogte: 91, iso: '100', sluiter: '1/5000', diafragma: 'f/1.8', profiel: 'dlog_m',
    },
  },
  {
    slug: 'baai', titel: 'Baai',
    element: 'water', toestel: 'mini', type: 'video', verhouding: '16/9',
    bestand: 'baai.jpg',
    alt: 'Kleine baai met wit strand, parasols en helder turkoois water, van boven gezien',
    video: { hevc: '/video/werk/baai.hevc.mp4', h264: '/video/werk/baai.mp4' },
    opname: {
      /* Plek nog te bepalen: dit is de westkust, tussen Coral Estate en Porto Marie. */
      datum: '2026-08-14', tijd: '11:30', plek: 'Westkust, Curaçao',
      lat: 12.211680, lon: -69.085389,
      hoogte: 119, iso: '100', sluiter: '1/8000', diafragma: 'f/1.8', profiel: 'dlog_m',
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

/* Zolang er nog niets is, tonen we de lege tegels: dan is de opzet van de
   pagina tenminste te zien. Zodra er echt beeld is verdwijnen ze, want lege
   vakken naast echt werk ogen onaf. */
const heeftBestand = (s) => Boolean(s.bestand);
const gevuld = shots.some(heeftBestand);
const zichtbaar = gevuld ? shots.filter(heeftBestand) : shots;

export const rasterShots = zichtbaar.filter((s) => s.verhouding !== '9/16');
export const verticaleShots = zichtbaar.filter((s) => s.verhouding === '9/16');
export const aantalBeelden = zichtbaar.length;

/* Zolang geen enkel beeld een bestand heeft, toont de site een korte
   melding in plaats van te doen alsof het archief al gevuld is. */
export const heeftBeeldmateriaal = shots.some((s) => Boolean(s.bestand));
