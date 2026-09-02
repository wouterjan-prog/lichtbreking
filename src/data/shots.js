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
   - verhaal     optioneel, een paar zinnen over de plek. Komt onder het beeld.
   - weetje      optioneel, één feit dat je van boven niet ziet. Krijgt een
                 eigen kadertje. Alleen wat je zeker weet.
   - opname      hoogte is altijd de hoogte boven zeeniveau (abs_alt in de
                 telemetrie), niet boven het startpunt. Anders is het niet
                 vergelijkbaar: bij Santa Martha steeg de drone op vanaf een
                 klif en vloog hij dus lager dan zijn startpunt.
                 optioneel blok met opnamegegevens, komt op de detailpagina te
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
    weetje:
      'Vissers noemen deze plek Playa Piskadó. Ze maken er hun vangst schoon en gooien de resten ' +
      'overboord, en daar komen de zeeschildpadden op af.',
    opname: {
      datum: '2026-08-06', tijd: '15:38', plek: 'Playa Grandi, Curaçao',
      lat: 12.369358, lon: -69.154348,
      hoogte: 32, iso: '100', sluiter: '1/4000', diafragma: 'f/1.8', profiel: 'dlog_m',
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
    weetje:
      'Het fort is begin achttiende eeuw gebouwd door de West-Indische Compagnie. Wie de baai in ' +
      'wilde, moest erlangs.',
    opname: {
      datum: '2026-08-13', tijd: '14:40', plek: 'Caracasbaai, Curaçao',
      lat: 12.072006, lon: -68.863401,
      hoogte: 115, iso: '100', sluiter: '1/5000', diafragma: 'f/1.8', profiel: 'dlog_m',
    },
  },
  {
    slug: 'daaibooi', titel: 'Daaibooibaai',
    element: 'water', toestel: 'mini', type: 'video', verhouding: '16/9',
    bestand: 'daaibooi.jpg',
    alt: 'Kleine baai met wit strand, parasols en helder turkoois water, van boven gezien',
    video: { hevc: '/video/werk/daaibooi.hevc.mp4', h264: '/video/werk/daaibooi.mp4' },
    verhaal:
      'Daaibooi ligt in een inham tussen twee rotswanden, bij Sint Willibrordus aan de westkust. ' +
      'Van boven zie je vooral hoe ver de lichte zandbodem de baai in loopt voordat het water ' +
      'dieper wordt. De parasols staan op een strook van hooguit honderd meter, en daarachter ' +
      'begint meteen de begroeiing op de rotsen.',
    weetje:
      'De weg ernaartoe heet simpelweg Weg naar Daaibooi. Veel meer aanwijzing heb je niet nodig.',
    opname: {
      datum: '2026-08-14', tijd: '11:30', plek: 'Daaibooi, Sint Willibrordus',
      lat: 12.211680, lon: -69.085389,
      hoogte: 113, iso: '100', sluiter: '1/8000', diafragma: 'f/1.8', profiel: 'dlog_m',
    },
  },
  {
    slug: 'santa-martha', titel: 'Santa Martha Baai',
    element: 'land', toestel: 'mini', type: 'video', verhouding: '16/9',
    bestand: 'santa-martha.jpg',
    alt: 'Santa Martha Baai met afgemeerde boten, cactussen op de oever en heuvels op de achtergrond',
    video: { hevc: '/video/werk/santa-martha.hevc.mp4', h264: '/video/werk/santa-martha.mp4' },
    verhaal:
      'Santa Martha Baai snijdt diep het land in, zodat het water er stil ligt terwijl de open zee ' +
      'vlakbij is. Daar liggen de boten dan ook. Het licht is hier heel anders dan aan de westkust: ' +
      'bewolkt, en daardoor gedempt groen in plaats van turkoois. Opgestegen vanaf de klifrand, ' +
      'want de drone vloog veertien meter lager dan het startpunt.',
    weetje:
      'De baai ligt zo beschut dat het water er stil is terwijl de open zee om de hoek ligt. ' +
      'Daarom liggen de boten juist hier.',
    opname: {
      datum: '2026-08-15', tijd: '12:24', plek: 'Santa Martha Baai, Soto',
      lat: 12.270628, lon: -69.124215,
      hoogte: 50, iso: '100', sluiter: '1/500', diafragma: 'f/1.8', profiel: 'dlog_m',
    },
  },
  {
    slug: 'kleine-knip', titel: 'Kleine Knip',
    element: 'water', toestel: 'mini', type: 'video', verhouding: '16/9',
    bestand: 'kleine-knip.jpg',
    alt: 'Kleine Knip van boven: turkoois water tegen een rotskust, met rijen rode parasols op het strand',
    video: { hevc: '/video/werk/kleine-knip.hevc.mp4', h264: '/video/werk/kleine-knip.mp4' },
    verhaal:
      'Kleine Knip ligt in een kom tussen twee kliffen, ruim een kilometer ten zuiden van Grote ' +
      'Knip. Van boven zie je hoe klein het strand eigenlijk is: een sikkel zand met twee rijen ' +
      'parasols, en daarachter meteen de parkeerplaats. Het water loopt in een paar meter van wit ' +
      'naar diep turkoois.',
    weetje:
      'Er is ook een Grote Knip, precies één kilometer noordelijker. Deze is de kleine van de twee.',
    opname: {
      datum: '2026-08-17', tijd: '13:04', plek: 'Kleine Knip, Curaçao',
      lat: 12.341837, lon: -69.153128,
      hoogte: 143, iso: '100', sluiter: '1/100 tot 1/160', diafragma: 'f/1.8', profiel: 'dlog_m',
    },
  },
  {
    slug: 'grote-knip', titel: 'Grote Knip',
    element: 'water', toestel: 'mini', type: 'video', verhouding: '16/9',
    bestand: 'grote-knip.jpg',
    alt: 'Grote Knip van boven: een brede turkooizen baai met wit strand en rijen parasols',
    video: { hevc: '/video/werk/grote-knip.hevc.mp4', h264: '/video/werk/grote-knip.mp4' },
    verhaal:
      'De grootste van de twee Knippen, met een strand dat een stuk breder is dan dat van zijn ' +
      'kleine buur. De drone staat hier vrijwel stil en klimt alleen, waardoor de baai zich van ' +
      'onderaf opent. Rechts zie je meteen waarom het er druk is: de parkeerplaats ligt er pal ' +
      'naast.',
    weetje:
      'Er is ook een Kleine Knip, een kilometer zuidelijker. Deze is de grote.',
    opname: {
      datum: '2026-08-17', tijd: '13:54', plek: 'Grote Knip, Curaçao',
      lat: 12.350928, lon: -69.152246,
      hoogte: 119, iso: '120', sluiter: '1/100', diafragma: 'f/1.8', profiel: 'dlog_m',
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
