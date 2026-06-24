// Centrale databron voor het portfolio — elke entry is een full-screen filmische scène.
// Vervang de Unsplash-id's later door je eigen werk: zet beelden in /public/img/
// en gebruik `localSrc: '/img/mijn-foto.jpg'` (dan wordt srcset overgeslagen).

// Bouwt een Unsplash-URL met de juiste breedte/kwaliteit.
const u = (id, w) => `https://images.unsplash.com/photo-${id}?w=${w}&q=72&auto=format&fit=crop`;

// Maakt een srcset voor responsive laden (mobiel → 4K).
export function srcset(id) {
  return [640, 1024, 1600, 2000, 2600]
    .map((w) => `${u(id, w)} ${w}w`)
    .join(', ');
}
export const src = (id, w = 1600) => u(id, w);

export const work = [
  {
    id: 'curacao-topdown',
    title: 'Turquoise',
    place: 'Curaçao',
    year: '2026',
    cat: 'drone',
    type: 'photo',
    photo: '1753618282728-f05ecfc5c9d6',
    alt: 'Drone-opname recht naar beneden boven turquoise zeewater bij Curaçao',
  },
  {
    id: 'golden-coast',
    title: 'Gouden uur',
    place: 'Boven open zee',
    year: '2026',
    cat: 'drone',
    type: 'photo',
    photo: '1576682953661-a056a5073019',
    alt: 'Luchtfoto van de oceaan tijdens het gouden uur met warm laag licht',
  },
  {
    id: 'showreel',
    title: 'Showreel',
    place: 'Een jaar in beeld',
    year: '2026',
    cat: 'drone',
    type: 'video',
    photo: '1507525428034-b723cf961d3e',
    alt: 'Filmische kustlijn vanuit de lucht — still uit de showreel',
    embed: '', // YouTube/Vimeo embed-URL voor de lightbox
    video: '', // of een meespelende achtergrondvideo: '/video/showreel.mp4'
  },
  {
    id: 'rugged-coast',
    title: 'Ruige kust',
    place: 'Noordkust',
    year: '2025',
    cat: 'reizen',
    type: 'photo',
    photo: '1762740522491-2a4f7c754816',
    alt: 'Ruige rotskust met brekende golven tijdens het gouden uur',
  },
  {
    id: 'palm-shadows',
    title: 'Palmschaduwen',
    place: 'Tropisch strand',
    year: '2025',
    cat: 'reizen',
    type: 'photo',
    photo: '1753588296403-be438eb432e5',
    alt: 'Tropisch strand met turquoise water en palmbomen van bovenaf',
  },
];
