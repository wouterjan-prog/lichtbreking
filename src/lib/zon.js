/* ==========================================================================
   Stand van de zon uit tijd en plaats.

   Geen externe dienst nodig: dit rekent uit wat de zon deed op het moment van
   de opname. Daarmee kunnen we onder elk beeld zetten hoe hoog de zon stond,
   uit welke richting het licht kwam en hoe lang voor of na zonsondergang het
   was. Dat is precies waar deze site naar heet.

   Benadering volgens de gangbare NOAA-formules. Nauwkeurig tot ongeveer een
   halve graad, ruim genoeg voor een bijschrift.
   ========================================================================== */

const graden = (r) => (r * 180) / Math.PI;
const radialen = (g) => (g * Math.PI) / 180;

/* Zonshoogte en azimut op een moment (UTC), voor een plek op aarde. */
function stand(utcMs, lat, lon) {
  const jd = utcMs / 86400000 + 2440587.5;
  const n = jd - 2451545.0;

  const L = (280.46 + 0.9856474 * n) % 360;
  const g = radialen((357.528 + 0.9856003 * n) % 360);
  const lambda = radialen(L + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g));
  const eps = radialen(23.439 - 0.0000004 * n);

  const declinatie = Math.asin(Math.sin(eps) * Math.sin(lambda));
  const rechteKlimming = Math.atan2(Math.cos(eps) * Math.sin(lambda), Math.cos(lambda));

  const gmst = (18.697374558 + 24.06570982441908 * n) % 24;
  const sterrentijd = radialen((gmst * 15 + lon) % 360);
  const uurhoek = sterrentijd - rechteKlimming;

  const p = radialen(lat);
  const hoogte = Math.asin(
    Math.sin(p) * Math.sin(declinatie) + Math.cos(p) * Math.cos(declinatie) * Math.cos(uurhoek)
  );
  const azimut = Math.atan2(
    Math.sin(uurhoek),
    Math.cos(uurhoek) * Math.sin(p) - Math.tan(declinatie) * Math.cos(p)
  );
  return { hoogte: graden(hoogte), azimut: (graden(azimut) + 180) % 360 };
}

/* Zonsopkomst en zonsondergang: minuut voor minuut zoeken rond het middaguur.
   Simpel, maar exact genoeg en zonder afhankelijkheden. */
function opEnOnder(momentMs, lat, lon) {
  const middag = momentMs - (momentMs % 86400000) + 43200000;
  let vorige = null;
  let op = null;
  let onder = null;
  for (let m = -900; m <= 900; m++) {
    const t = middag + m * 60000;
    const h = stand(t, lat, lon).hoogte;
    if (vorige !== null) {
      if (vorige > -0.833 && h <= -0.833 && onder === null && m > 0) onder = t;
      if (vorige <= -0.833 && h > -0.833 && op === null) op = t;
    }
    vorige = h;
  }
  return { op, onder };
}

/* Vormen zoals je ze uitspreekt in "het licht kwam uit het ...". */
const KOMPAS = ['noorden', 'noordoosten', 'oosten', 'zuidoosten',
                'zuiden', 'zuidwesten', 'westen', 'noordwesten'];

/* Maakt van datum, tijd en gps een leesbaar blok voor onder het beeld.
   `datum` als '2026-08-09', `tijd` als '19:21', beide lokale tijd ter plaatse.
   `offsetUren` is het verschil van die plek met UTC (Curaçao is -4). */
export function lichtBij({ datum, tijd, lat, lon, offsetUren = -4 }) {
  if (!datum || !tijd || lat == null || lon == null) return null;

  const [jaar, maand, dag] = datum.split('-').map(Number);
  const [uur, minuut] = tijd.split(':').map(Number);
  const momentMs = Date.UTC(jaar, maand - 1, dag, uur - offsetUren, minuut);

  const { hoogte, azimut } = stand(momentMs, lat, lon);
  const { onder } = opEnOnder(momentMs, lat, lon);

  const richting = KOMPAS[Math.round(azimut / 45) % 8];

  let fase;
  if (hoogte < -6) fase = 'blauwe uur';
  else if (hoogte < -0.833) fase = 'schemer';
  else if (hoogte < 6) fase = 'gouden uur';
  else if (hoogte < 20) fase = 'laag licht';
  else fase = 'hoge zon';

  let tenOpzichte = null;
  if (onder !== null) {
    const minuten = Math.round((momentMs - onder) / 60000);
    const uren = Math.floor(Math.abs(minuten) / 60);
    const rest = Math.abs(minuten) % 60;
    const duur = uren > 0 ? `${uren} uur ${rest}` : `${rest} minuten`;
    tenOpzichte = minuten >= 0
      ? `${duur} na zonsondergang`
      : `${duur} voor zonsondergang`;
  }

  return {
    hoogte: Math.round(hoogte * 10) / 10,
    azimut: Math.round(azimut),
    richting,
    fase,
    tenOpzichte,
    /* Compacte variant voor in de feitenrij onder het beeld. */
    kort: hoogte < -0.833
      ? `${fase.charAt(0).toUpperCase() + fase.slice(1)} · ${tenOpzichte}`
      : `${fase.charAt(0).toUpperCase() + fase.slice(1)} · ${Math.round(hoogte)}° uit het ${richting}`,
    /* Korte zin voor onder het beeld. */
    zin: hoogte < -0.833
      ? `Zon ${Math.abs(Math.round(hoogte))} graden onder de horizon, ${tenOpzichte}`
      : `Zon ${Math.round(hoogte)} graden hoog uit het ${richting}, ${tenOpzichte}`,
  };
}
