export const languages = ['nl', 'en'];
export const defaultLang = 'nl';

/* lang afleiden uit pad: /en/... => 'en', anders 'nl' */
export function getLang(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'nl';
}
/* een nl-pad lokaliseren (path begint met '/') */
export function locUrl(path, lang) {
  if (lang !== 'en') return path;
  return path === '/' ? '/en/' : '/en' + path;
}
/* huidige pad omzetten naar de andere taal */
export function switchUrl(pathname, toLang) {
  let base = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  if (!base.startsWith('/')) base = '/' + base;
  return toLang === 'en' ? (base === '/' ? '/en/' : '/en' + base) : base;
}

export const t = {
  nl: {
    locale: 'nl_NL', htmlLang: 'nl', langName: 'NL', otherName: 'EN',
    nav: { start: 'Start hier', werk: 'Werk', cursus: 'Cursus', tools: 'Gereedschap', nd: 'ND-calculator', golden: 'Gouden-uur-planner', spots: 'Spots', allSpots: 'Alle bestemmingen', over: 'Over', contact: 'Contact', articles: 'Artikelen', news: 'Wat is nieuw', showreel: 'Showreel', search: 'Zoeken', home: 'Lichtbreking — home', menu: 'Menu', theme: 'Wissel licht/donker' },
    foot: { tagline: 'Waar licht breekt — cinematische drone, foto & film.', site: 'Site', more: 'Meer', start: 'Start hier', spots: 'Spots', search: 'Zoeken', werk: 'Werk', cursussen: 'Cursussen', showreel: 'Showreel', over: 'Over', contact: 'Contact', begrippen: 'Begrippenlijst', curacaoGuide: 'Curaçao-gids', heerdeGuide: 'Drone rond Heerde', pocketGuide: 'Pocket 4-gids', actionGuide: 'Action 6-gids', faq: 'FAQ', articles: 'Artikelen', news: 'Wat is nieuw', privacy: 'Privacy', rights: 'Drone · foto · film · NL' },
    home: {
      title: 'Lichtbreking — cinematische drone, foto & film',
      desc: 'Cinematische drone-, foto- en videobeelden, plus vier gratis cursussen voor drone, Pocket 4 en Osmo Action 6. Waar licht breekt.',
      kicker: 'Drone · foto · film', h1a: 'Waar licht', h1b: 'breekt',
      lead: 'Cinematische beelden uit de lucht, op ooghoogte en onder water — en gratis cursussen om het zelf te leren.',
      ctaWork: 'Bekijk het werk', ctaReel: '▶ Showreel', scroll: 'Scroll ↓',
      selKicker: 'Selectie', selTitle: 'Het werk', selAll: 'Alles bekijken →',
      cFree: 'Gratis cursussen', cTitle: 'Vier gratis cursussen,<br>van opstart tot grade.',
      cSub: 'Drone, Pocket 4 en Osmo Action 6 — instellingen, techniek, beweging, kleur en montage. Kies je toestel en begin.', cBtn: 'Naar de cursussen →',
      sKicker: 'Spots', sTitle: 'Waar vlieg & film je?', sAll: 'Alle bestemmingen →',
      sCur: 'Caribbean · 34 spots, exacte kaart & deelbare gids', sHee: 'Veluwe & IJssel · waar het wél en niet mag',
      gKicker: 'Gratis gereedschap', gTitle: 'Reken het zelf uit', gAll: 'Naar het gereedschap →',
      gFlight: 'Vliegtijd & bereik', gCheat: 'Pro-cheatsheet',
    },
    werk: {
      title: 'Werk', desc: 'Een selectie cinematische drone-, foto- en filmbeelden van Lichtbreking.',
      kicker: 'Selectie', h1: 'Het werk', note: 'Beeld ter illustratie — mijn eigen portfolio groeit met elke reis.',
      filters: { alles: 'Alles', drone: 'Drone', video: 'Film', photo: 'Foto' },
    },
    cursussen: {
      title: 'Cursussen', desc: 'Gratis cinematische cursussen: De Vluchtfilmer (drone), De Grondfilmer (Pocket 4), De Kleurfilmer (grading) en De Actiefilmer (Osmo Action 6, action & onderwater). Vier cursussen, alles gratis.',
      kicker: 'Leren', h1: 'Cursussen',
      lead: 'Tutorials zat gekeken en je beeld blijft vlak? Dat ligt niet aan jou — losse video’s geven fragmenten, geen systeem. Hier leer je het hele plaatje: van locatie en licht tot beweging, montage en kleur. Gratis en praktisch — kies je toestel, of volg ze allebei.',
      free: 'Gratis', soon: 'Binnenkort', open: 'Open de cursus →', soonBtn: 'Binnenkort',
      note: 'Deze cursussen groeien mee terwijl ik zelf leer. Ik kocht net een nieuwe drone en deel alles wat ik onderweg uitzoek over gebruik, instellingen en techniek — zodat jij die zoektocht niet opnieuw hoeft te doen.',
      c1: { kicker: 'Drone · DJI Mini 5 Pro', title: 'De Vluchtfilmer', meta: '14 modules · ~6 uur', desc: 'Leer je drone filmen, niet alleen vliegen. Van eerste opstart tot afgemonteerde cinematische film — met shot-recepten, beslisbomen en een veldgids.' },
      c2: { kicker: 'Camera · DJI Osmo Pocket 4', title: 'De Grondfilmer', meta: '12 modules · veldgids', desc: 'De beelden op ooghoogte die je drone compleet maken. Cinematische gimbal-techniek en hoe je lucht en grond samensmelt tot één film.' },
      c3: { kicker: 'Post · DaVinci + Final Cut', title: 'De Kleurfilmer', meta: '8 modules · DaVinci + Final Cut', desc: 'Van plat D-Log naar een cinematische look. Werkvolgorde, scopes, D-Log ontwikkelen, curves, shots matchen en exporteren — met de exacte stappen in DaVinci Resolve én Final Cut Pro.' },
      c4: { kicker: 'Action & onderwater · DJI Osmo Action 6', title: 'De Actiefilmer', meta: '7 modules · action & onderwater', desc: 'Beheers de Osmo Action 6: instellingen, het variabele diafragma, stabilisatie, en onder water de kleuren terughalen zónder kleurfilter — met de onderwater-witbalans en Dive-modus.' },
    },
    showreel: {
      title: 'Showreel', desc: 'De showreel van Lichtbreking — een jaar cinematische drone- en filmbeelden in beeld.',
      kicker: 'Een jaar in beeld', h1: 'Showreel', play: 'Speel showreel af',
      lt: 'Lichtbreking — 2026', meta: 'DRONE · D-LOG M · 24FPS · 2:30',
      chapters: 'Hoofdstukken', back: '← Terug naar het werk',
      ch: [['00:00', 'Opening — gouden uur boven zee'], ['00:42', 'Kustlijn & ruige rotsen'], ['01:28', 'Tropisch — palmen en turquoise'], ['02:05', 'Aftiteling']],
      alert: 'Showreel-video volgt — zet je eigen bestand op /public/video/showreel.mp4 of koppel een YouTube/Vimeo-embed.',
    },
    over: {
      title: 'Over', desc: 'Het verhaal achter Lichtbreking: één idee dat lens, drone en glas verbindt — de breking van licht.',
      kicker: 'Over', h1a: 'Scherp zien,', h1b: 'mooi vastleggen.',
      p1: 'Lichtbreking komt voort uit twee werelden die dichter bij elkaar liggen dan ze lijken: het scherp leren zien, en het mooi vastleggen. Beide draaien om hetzelfde — het sturen van licht.',
      p2: 'Een lens buigt licht zodat het samenkomt in een scherp beeld. Een drone vangt datzelfde licht, honderd meter hoger. En glas — het materiaal van deze site — breekt licht in al zijn kleuren. Dat is geen toeval, dat is de rode draad. Vandaar de naam.',
      p3: 'Wat je hier vindt is het werk dat daaruit ontstaat: cinematische beelden uit de lucht en op ooghoogte. De portfolio groeit met elke reis; de gratis cursussen delen alles wat nodig is om zelf cinematisch te leren vliegen en filmen.',
      p4: 'Eerlijk gezegd is dit ook mijn eigen leerproces. Ik schafte net een nieuwe drone aan en merkte hoe versnipperd de informatie over gebruik, instellingen en techniek is. Alles wat ik onderweg uitzoek en test, verzamel en deel ik hier — zodat jij die zoektocht niet opnieuw hoeft te doen. De cursussen en veldkaarten groeien dus mee terwijl ik zelf verder leer.',
      gearTitle: 'Gereedschap',
      gear: [['Drone', 'DJI Mini 5 Pro · RC 2'], ['Camera', 'DJI Osmo Pocket 4'], ['Action', 'DJI Osmo Action 6'], ['Montage', 'Final Cut · DaVinci Resolve'], ['Werk', 'Drone, foto & film']],
    },
    contact: {
      title: 'Contact', desc: 'Neem contact op met Lichtbreking voor drone- en videowerk, samenwerkingen of vragen over de cursus.',
      kicker: 'Contact', h1: 'Laten we iets moois maken.',
      lead: 'Een opdracht, een samenwerking, of gewoon een vraag over de cursus? Stuur gerust een bericht.',
      cards: [['E-mail', 'hallo@lichtbreking.nl', 'mailto:hallo@lichtbreking.nl'], ['Instagram', '@lichtbreking', 'https://www.instagram.com/lichtbreking/'], ['Werkgebied', 'Nederland & op reis', null]],
    },
    work: {
      'curacao-topdown': { title: 'Turquoise', place: 'Curaçao', cat: 'DRONE', alt: 'Drone-opname recht naar beneden boven turquoise zeewater bij Curaçao' },
      'golden-coast': { title: 'Gouden uur', place: 'Boven open zee', cat: 'DRONE', alt: 'Luchtfoto van de oceaan tijdens het gouden uur met warm laag licht' },
      'showreel': { title: 'Showreel', place: 'Een jaar in beeld', cat: 'DRONE', alt: 'Filmische kustlijn vanuit de lucht — still uit de showreel' },
      'rugged-coast': { title: 'Ruige kust', place: 'Noordkust', cat: 'REIZEN', alt: 'Ruige rotskust met brekende golven tijdens het gouden uur' },
      'palm-shadows': { title: 'Palmschaduwen', place: 'Tropisch strand', cat: 'REIZEN', alt: 'Tropisch strand met turquoise water en palmbomen van bovenaf' },
    },
    project: {
      next: 'Volgend project', backDesc: 'Cinematisch werk van Lichtbreking.',
      labels: { Locatie: 'Locatie', Jaar: 'Jaar', Categorie: 'Categorie', Gear: 'Gear', Profiel: 'Profiel' },
      lead: ' — gevangen op het moment dat het licht het zachtst is. Een beeld dat de afstand tussen lucht en grond laat verdwijnen.',
      body: 'Onderdeel van een doorlopende reeks waarin drone en camera samen \u00e9\u00e9n cinematische taal vormen: het epische overzicht van boven, het intieme detail op ooghoogte. Gefilmd in het gouden uur en gegraded naar \u00e9\u00e9n samenhangende look.',
    },
  },

  en: {
    locale: 'en_GB', htmlLang: 'en', langName: 'EN', otherName: 'NL',
    nav: { start: 'Start here', werk: 'Work', cursus: 'Courses', tools: 'Tools', nd: 'ND calculator', golden: 'Golden hour planner', spots: 'Spots', allSpots: 'All destinations', over: 'About', contact: 'Contact', articles: 'Articles', news: "What's new", showreel: 'Showreel', search: 'Search', home: 'Lichtbreking — home', menu: 'Menu', theme: 'Toggle light/dark' },
    foot: { tagline: 'Where light breaks — cinematic drone, photo & film.', site: 'Site', more: 'More', start: 'Start here', spots: 'Spots', search: 'Search', werk: 'Work', cursussen: 'Courses', showreel: 'Showreel', over: 'About', contact: 'Contact', begrippen: 'Glossary', curacaoGuide: 'Curaçao guide', heerdeGuide: 'Drone around Heerde', pocketGuide: 'Pocket 4 guide', actionGuide: 'Action 6 guide', faq: 'FAQ', articles: 'Articles', news: "What's new", privacy: 'Privacy', rights: 'Drone · photo · film · NL' },
    home: {
      title: 'Lichtbreking — cinematic drone, photo & film',
      desc: 'Cinematic drone, photo and video work, plus four free courses for drone, Pocket 4 and Osmo Action 6. Where light breaks.',
      kicker: 'Drone · photo · film', h1a: 'Where light', h1b: 'breaks',
      lead: 'Cinematic imagery from the air, at eye level and underwater — plus free courses to learn it yourself.',
      ctaWork: 'View the work', ctaReel: '▶ Showreel', scroll: 'Scroll ↓',
      selKicker: 'Selection', selTitle: 'The work', selAll: 'View all →',
      cFree: 'Free courses', cTitle: 'Four free courses,<br>from power-on to grade.',
      cSub: 'Drone, Pocket 4 and Osmo Action 6 — settings, technique, movement, colour and editing. Pick your device and start.', cBtn: 'To the courses →',
      sKicker: 'Spots', sTitle: 'Where to fly & film', sAll: 'All destinations →',
      sCur: 'Caribbean · 34 spots, exact map & shareable guide', sHee: 'Veluwe & IJssel · where you can and can’t fly',
      gKicker: 'Free tools', gTitle: 'Work it out yourself', gAll: 'To the tools →',
      gFlight: 'Flight time & range', gCheat: 'Pro cheat sheet',
    },
    werk: {
      title: 'Work', desc: 'A selection of cinematic drone, photo and film work by Lichtbreking.',
      kicker: 'Selection', h1: 'The work', note: 'Imagery for illustration — my own portfolio grows with every trip.',
      filters: { alles: 'All', drone: 'Drone', video: 'Film', photo: 'Photo' },
    },
    cursussen: {
      title: 'Courses', desc: 'Free cinematic courses: The Flight Filmer (drone), The Ground Filmer (Pocket 4), The Colour Filmer (grading) and The Action Filmer (Osmo Action 6, action & underwater). Four courses, all free.',
      kicker: 'Learning', h1: 'Courses',
      lead: 'Watched plenty of tutorials and your footage still looks flat? That’s not on you — loose videos give fragments, not a system. Here you learn the whole picture: from location and light to the move, the edit and the colour. Free and practical — pick your device, or follow both.',
      free: 'Free', soon: 'Coming soon', open: 'Open the course →', soonBtn: 'Coming soon',
      note: 'These courses grow as I learn. I just bought a new drone and share everything I figure out about use, settings and technique — so you don’t have to repeat that search.',
      c1: { kicker: 'Drone · DJI Mini 5 Pro', title: 'De Vluchtfilmer', meta: '14 modules · ~6 hrs', desc: 'Learn to film with your drone, not just fly it. From first power-on to a finished cinematic film — with shot recipes, decision trees and a field guide.' },
      c2: { kicker: 'Camera · DJI Osmo Pocket 4', title: 'De Grondfilmer', meta: '12 modules · field guide', desc: 'The eye-level imagery that completes your drone. Cinematic gimbal technique and how to merge air and ground into one film.' },
      c3: { kicker: 'Post · DaVinci + Final Cut', title: 'De Kleurfilmer', meta: '8 modules · DaVinci + Final Cut', desc: 'From flat D-Log to a cinematic look. Workflow, scopes, developing D-Log, curves, matching shots and exporting — with the exact steps in both DaVinci Resolve and Final Cut Pro.' },
      c4: { kicker: 'Action & underwater · DJI Osmo Action 6', title: 'De Actiefilmer', meta: '7 modules · action & underwater', desc: 'Master the Osmo Action 6: settings, the variable aperture, stabilisation, and bringing back colour underwater without a colour filter — using the underwater white balance and Dive mode.' },
    },
    showreel: {
      title: 'Showreel', desc: 'The Lichtbreking showreel — a year of cinematic drone and film imagery.',
      kicker: 'A year in frames', h1: 'Showreel', play: 'Play showreel',
      lt: 'Lichtbreking — 2026', meta: 'DRONE · D-LOG M · 24FPS · 2:30',
      chapters: 'Chapters', back: '← Back to the work',
      ch: [['00:00', 'Opening — golden hour over the sea'], ['00:42', 'Coastline & rugged rocks'], ['01:28', 'Tropical — palms and turquoise'], ['02:05', 'End titles']],
      alert: 'Showreel video to follow — drop your own file at /public/video/showreel.mp4 or link a YouTube/Vimeo embed.',
    },
    over: {
      title: 'About', desc: 'The story behind Lichtbreking: one idea connecting lens, drone and glass — the refraction of light.',
      kicker: 'About', h1a: 'See sharply,', h1b: 'capture beautifully.',
      p1: 'Lichtbreking grows from two worlds that sit closer together than they seem: learning to see sharply, and capturing beautifully. Both come down to the same thing — steering light.',
      p2: 'A lens bends light so it converges into a sharp image. A drone catches that same light, a hundred metres higher. And glass — the material of this site — breaks light into all its colours. That is no coincidence; it is the thread. Hence the name.',
      p3: 'What you find here is the work that comes from it: cinematic imagery from the air and at eye level. The portfolio grows with every trip; the free courses share everything you need to learn cinematic flying and filming yourself.',
      p4: 'Honestly, this is my own learning process too. I just bought a new drone and noticed how scattered the information on use, settings and technique really is. Everything I figure out and test along the way, I gather and share here — so you don’t have to repeat that search. The courses and field cards keep growing as I keep learning.',
      gearTitle: 'Gear',
      gear: [['Drone', 'DJI Mini 5 Pro · RC 2'], ['Camera', 'DJI Osmo Pocket 4'], ['Action', 'DJI Osmo Action 6'], ['Editing', 'Final Cut · DaVinci Resolve'], ['Work', 'Drone, photo & film']],
    },
    contact: {
      title: 'Contact', desc: 'Get in touch with Lichtbreking for drone and video work, collaborations or course questions.',
      kicker: 'Contact', h1: 'Let’s make something beautiful.',
      lead: 'A commission, a collaboration, or just a question about the course? Feel free to send a message.',
      cards: [['Email', 'hallo@lichtbreking.nl', 'mailto:hallo@lichtbreking.nl'], ['Instagram', '@lichtbreking', 'https://www.instagram.com/lichtbreking/'], ['Service area', 'Netherlands & traveling', null]],
    },
    work: {
      'curacao-topdown': { title: 'Turquoise', place: 'Curaçao', cat: 'DRONE', alt: 'Top-down drone shot over turquoise sea water near Curaçao' },
      'golden-coast': { title: 'Golden hour', place: 'Over open sea', cat: 'DRONE', alt: 'Aerial of the ocean during golden hour with warm low light' },
      'showreel': { title: 'Showreel', place: 'A year in frames', cat: 'DRONE', alt: 'Cinematic coastline from the air — still from the showreel' },
      'rugged-coast': { title: 'Rugged coast', place: 'North coast', cat: 'TRAVEL', alt: 'Rugged rocky coast with breaking waves during golden hour' },
      'palm-shadows': { title: 'Palm shadows', place: 'Tropical beach', cat: 'TRAVEL', alt: 'Tropical beach with turquoise water and palm trees from above' },
    },
    project: {
      next: 'Next project', backDesc: 'Cinematic work by Lichtbreking.',
      labels: { Locatie: 'Location', Jaar: 'Year', Categorie: 'Category', Gear: 'Gear', Profiel: 'Profile' },
      lead: ' — caught at the moment the light is softest. An image that dissolves the distance between air and ground.',
      body: 'Part of an ongoing series where drone and camera form one cinematic language: the epic overview from above, the intimate detail at eye level. Shot in golden hour and graded to one coherent look.',
    },
  },
};
