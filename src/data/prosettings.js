// Eén bron voor de handmatige Pro-instellingen — gebruikt door de cheatsheet-component,
// de gereedschap-pagina en (als tekst) het artikel. Waarden komen overeen met de cursus-veldkaarten.
export const proSettings = [
  {
    cam: 'mini',
    name: 'DJI Mini 5 Pro',
    kind: 'Drone · Pro-modus',
    rows: [
      { k: 'Resolutie', v: '4K', why: 'Scherp en future-proof; geeft ruimte om later bij te snijden of te stabiliseren.' },
      { k: 'Framerate', v: '24–30 fps', why: '24/25 fps = bioscoop-look. Kies 50/60 fps alleen als je de beelden later wilt vertragen.' },
      { k: 'Sluitertijd', v: '1/50 s', why: '180°-regel: sluiter ≈ 2× je framerate. Geeft natuurlijke bewegingsonscherpte i.p.v. een schokkerig beeld.' },
      { k: 'ISO', v: '100', why: 'Zo laag mogelijk = minste ruis. Verhoog pas als het écht te donker is, niet om belichting te corrigeren.' },
      { k: 'Witbalans', v: '5500 K — vast', why: 'Handmatig vastzetten, nooit op auto tijdens een shot — anders verspringt de kleur halverwege een draai. ~3200 K bij kunstlicht.' },
      { k: 'Kleurprofiel', v: 'Normal (10-bit)', why: 'Direct bruikbaar zonder bewerken. Kies D-Log alléén als je later kleurt: meer dynamisch bereik, maar nabewerking verplicht.' },
      { k: 'Scherpte', v: '−1', why: 'Zachter oogt filmischer. Scherpte kun je later toevoegen; te veel scherpte krijg je er nooit meer uit.' },
      { k: 'Ruisreductie', v: '0', why: 'Voorkomt het “plastic” smeer-effect waarbij fijne details verdwijnen.' },
      { k: 'ND-filter', v: 'volgens licht', why: 'ND8 bewolkt · ND16 zonnig · ND32 felle zon · ND64 wit zand of spiegelend water. Houdt je op 1/50 s.' },
    ],
  },
  {
    cam: 'pocket',
    name: 'DJI Osmo Pocket 4',
    kind: 'Handheld · Pro-modus',
    rows: [
      { k: 'Resolutie', v: '4K', why: 'Scherp en veelzijdig; 4K/60 voor strakke slow-motion van bewegende onderwerpen.' },
      { k: 'Framerate', v: '24–30 fps', why: '24/25 fps voor de bioscoop-look; 50/60 fps als je wilt kunnen vertragen.' },
      { k: 'Sluitertijd', v: '1/50 s', why: '180°-regel. Buiten in fel licht heb je een ND nodig om op deze trage sluiter te blijven.' },
      { k: 'ISO', v: '100', why: 'Laag houden — de kleine sensor ruist sneller. Regel liever het licht of zet een ND op dan ISO omhoog.' },
      { k: 'Witbalans', v: '5500 K — vast', why: 'Handmatig vast; ~3200 K binnen bij kunstlicht. Auto verspringt tijdens een wandelende shot.' },
      { k: 'Kleurprofiel', v: 'Normal of D-Log M', why: 'Normal = meteen klaar. D-Log M geeft meer dynamiek voor lastig licht, maar je moet de beelden dan kleuren.' },
      { k: 'Scherpte', v: '−1', why: 'Filmischer beeld; achteraf bij te scherpen, niet te ontscherpen.' },
      { k: 'Stabilisatie', v: 'aan (gimbal)', why: 'De gimbal doet het zware werk. Zet je sluiter niet te traag, anders wordt beweging toch schokkerig.' },
      { k: 'ND-filter', v: 'buiten bij zon', why: 'Zelfde logica als de drone: ND houdt het licht tegen zodat je op 1/50 s blijft zonder overbelichting.' },
    ],
  },
];
