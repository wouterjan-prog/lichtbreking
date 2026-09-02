/* Vaste gegevens van de site. Hier pas je merk- en contactinfo aan. */

export const site = {
  naam: 'lichtbreking',
  url: 'https://www.lichtbreking.nl',
  email: 'hallo@lichtbreking.nl',
  instagram: 'https://www.instagram.com/lichtbreking/',
  instagramNaam: '@lichtbreking',
  jaar: 2026,
  beschrijving:
    'Beeldarchief van Lichtbreking. Lucht, land, water en nacht, gefilmd en gefotografeerd met DJI Mini 5 Pro, Action 6, Pocket 4 en iPhone.',
};

/* De vier elementen. Kleuren liggen vast in het ontwerp (spectrum). */
export const elementen = [
  { id: 'lucht', naam: 'Lucht', kleur: '#2F7CF0' },
  { id: 'land',  naam: 'Land',  kleur: '#46C95F' },
  { id: 'water', naam: 'Water', kleur: '#FFD23E' },
  { id: 'nacht', naam: 'Nacht', kleur: '#9B4DDB' },
];

export const elementKleur = (id) =>
  elementen.find((e) => e.id === id)?.kleur ?? 'rgba(245,244,241,.4)';

/* Toestellen, in de volgorde waarin ze in de over-band staan. */
export const toestellen = [
  { id: 'mini',   naam: 'DJI Mini 5 Pro', kort: 'Mini 5 Pro',   element: 'lucht', rol: 'de lucht' },
  { id: 'action', naam: 'DJI Action 6',   kort: 'Action 6',     element: 'water', rol: 'het water' },
  { id: 'pocket', naam: 'DJI Pocket 4',   kort: 'Pocket 4',     element: 'land',  rol: 'het land' },
  { id: 'iphone', naam: 'iPhone 17 Pro',  kort: 'iPhone 17 Pro', element: 'nacht', rol: 'de nacht' },
];

export const toestelNaam = (id) => toestellen.find((t) => t.id === id)?.naam ?? id;

/* Hoofdmenu. Volgorde = volgorde in de glas-pil rechtsboven. */
export const menu = [
  /* Het logo linksboven gaat naar de homepage, dus die staat niet in het menu. */
  { label: 'Beeld',   href: '/werk/' },
  { label: 'Films',   href: '/films/' },
  { label: 'Over',    href: '/over/' },
  { label: 'Contact', href: '/contact/' },
];

/* De hero op de homepage. Titel en meta pas je hier aan zodra er een
   nieuwe serie of hero-video is. De video zelf hoort in public/video/hero.mp4
   (met public/video/poster.jpg als stilstaand beeld). */
export const hero = {
  /* De hero draagt niet de naam van de clip maar waar de site over gaat. */
  badge: null,
  titel: 'Licht neemt de snelste weg, niet de kortste',
  meta: 'Daarom buigt het zodra het water raakt.',
  /* De hero-video speelt altijd zonder geluid. Zet dit op true zodra er een
     hero-video met een écht geluidsspoor staat, dan verschijnt de geluidsknop. */
  videoHeeftGeluid: false,
};
