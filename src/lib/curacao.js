/* ==========================================================================
   Omtrek van Curaçao, om een stip te kunnen zetten op de plek van een opname.

   Bron: Natural Earth, 1:10m kustlijnen. Publiek domein, dus vrij te gebruiken
   zonder bronvermelding. De omtrek is één keer opgehaald en hier vastgelegd,
   zodat de site tijdens een bezoek nog steeds niets van derden laadt.

   De projectie is equirectangular met een correctie voor de breedtegraad. Voor
   een eiland van veertig kilometer is dat ruim nauwkeurig genoeg.
   ========================================================================== */

export const kaart = {
  breedte: 1000.0,
  hoogte: 829.4,
  pad: 'M905.1,695.6 L987.3,779.8 L1000.0,801.6 L979.4,815.9 L930.3,825.6 L872.7,829.4 L826.2,825.0 L765.2,795.8 L644.2,712.9 L525.5,677.1 L449.0,632.2 L380.3,576.3 L350.7,525.2 L334.6,477.0 L296.6,461.4 L252.0,457.3 L215.6,443.5 L184.8,406.5 L113.6,290.1 L86.5,270.4 L54.7,253.6 L28.3,232.4 L17.2,200.3 L22.6,115.3 L18.4,70.2 L0.0,29.9 L13.0,8.7 L24.4,0.0 L35.9,2.1 L48.9,13.7 L148.1,56.1 L190.2,82.0 L232.0,118.7 L257.7,163.3 L281.9,273.3 L303.2,320.8 L388.2,402.3 L487.1,450.3 L778.8,522.1 L812.4,542.8 L826.2,572.9 L833.1,620.9 L851.2,650.1 L905.1,695.6 Z',
};

const LON0 = -69.171742;
const LAT1 = 12.391506;
const K = 0.9773553049681261;
const SCHAAL = 2368.4092111462905;

/* Zet een coördinaat om naar een punt in de kaart. Buiten het eiland geeft dit
   gewoon een punt buiten de omtrek, dus controleer zelf of het zinnig is. */
export function naarPunt(lat, lon) {
  if (lat == null || lon == null) return null;
  return {
    x: Math.round((lon - LON0) * K * SCHAAL * 10) / 10,
    y: Math.round((LAT1 - lat) * SCHAAL * 10) / 10,
  };
}
