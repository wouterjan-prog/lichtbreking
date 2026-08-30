/* ==========================================================================
   Films. De bovenste film staat groot in het spectrumkader op de homepage.

   Een film toevoegen:
   1. Zet de video in  public/video/   en een stilstaand beeld in  public/img/films/
   2. Vul  bron: '/video/onder-de-waterlijn.mp4'  en  poster: '/img/films/onder-de-waterlijn.jpg'
   3. Zolang beide null zijn, toont de site een nette lege kaart.
   Extern gehost (YouTube/Vimeo)? Zet de link in  extern  en laat bron leeg.
   ========================================================================== */

export const films = [
  {
    slug: 'onder-de-waterlijn',
    titel: 'Onder de waterlijn',
    toestel: 'action',
    element: 'water',
    duur: null,          // bv. '03:07'
    formaat: null,       // bv. '4K120'
    beschrijving: 'Een middag onder water, gefilmd zonder filters.',
    poster: null,
    bron: null,
    extern: null,
  },
  {
    slug: 'boven-de-kustlijn',
    titel: 'Boven de kustlijn',
    toestel: 'mini',
    element: 'lucht',
    duur: null,
    formaat: null,
    beschrijving: 'De kustlijn van boven, in het laatste uur licht.',
    poster: null,
    bron: null,
    extern: null,
  },
  {
    slug: 'landinwaarts',
    titel: 'Landinwaarts',
    toestel: 'pocket',
    element: 'land',
    duur: null,
    formaat: null,
    beschrijving: 'Lopend beeld door bos en polder.',
    poster: null,
    bron: null,
    extern: null,
  },
];

export const aantalFilms = films.length;
