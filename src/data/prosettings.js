// Eén bron voor de handmatige Pro-instellingen — tweetalig (nl/en).
// Gebruikt door de cheatsheet-component, de gereedschap-pagina, de /en/-pagina en het artikel.
export const proSettings = [
  {
    cam: 'mini',
    name: 'DJI Mini 5 Pro',
    kind: { nl: 'Drone · Pro-modus', en: 'Drone · Pro mode' },
    rows: [
      { k: { nl: 'Resolutie', en: 'Resolution' }, v: '4K', why: { nl: 'Scherp en future-proof; geeft ruimte om later bij te snijden of te stabiliseren.', en: 'Sharp and future-proof; leaves room to crop or stabilise later.' } },
      { k: { nl: 'Framerate', en: 'Frame rate' }, v: '24–30 fps', why: { nl: '24/25 fps = bioscoop-look. Kies 50/60 fps alleen als je de beelden later wilt vertragen.', en: '24/25 fps = cinematic look. Use 50/60 fps only if you want to slow footage down later.' } },
      { k: { nl: 'Sluitertijd', en: 'Shutter' }, v: { nl: '1/50 s', en: '1/50 s' }, why: { nl: '180°-regel: sluiter ≈ 2× je framerate. Geeft natuurlijke bewegingsonscherpte i.p.v. een schokkerig beeld.', en: '180° rule: shutter ≈ 2× your frame rate. Gives natural motion blur instead of a stuttery image.' } },
      { k: { nl: 'ISO', en: 'ISO' }, v: '100', why: { nl: 'Zo laag mogelijk = minste ruis. Verhoog pas als het écht te donker is, niet om belichting te corrigeren.', en: 'As low as possible = least noise. Only raise it when it is truly too dark, not to fix exposure.' } },
      { k: { nl: 'Witbalans', en: 'White balance' }, v: { nl: '5500 K — vast', en: '5500 K — fixed' }, why: { nl: 'Handmatig vastzetten, nooit op auto tijdens een shot — anders verspringt de kleur halverwege een draai. ~3200 K bij kunstlicht.', en: 'Set it manually, never auto during a shot — otherwise the colour jumps mid-move. ~3200 K under artificial light.' } },
      { k: { nl: 'Kleurprofiel', en: 'Colour profile' }, v: { nl: 'Normal (10-bit)', en: 'Normal (10-bit)' }, why: { nl: 'Direct bruikbaar zonder bewerken. Kies D-Log alléén als je later kleurt: meer dynamisch bereik, maar nabewerking verplicht.', en: 'Ready to use without editing. Choose D-Log only if you grade later: more dynamic range, but grading required.' } },
      { k: { nl: 'Scherpte', en: 'Sharpness' }, v: '−1', why: { nl: 'Zachter oogt filmischer. Scherpte kun je later toevoegen; te veel scherpte krijg je er nooit meer uit.', en: 'Softer looks more cinematic. You can add sharpness later; too much can never be removed.' } },
      { k: { nl: 'Ruisreductie', en: 'Noise reduction' }, v: '0', why: { nl: 'Voorkomt het “plastic” smeer-effect waarbij fijne details verdwijnen.', en: 'Prevents the “plastic” smear that wipes out fine detail.' } },
      { k: { nl: 'ND-filter', en: 'ND filter' }, v: { nl: 'volgens licht', en: 'to suit the light' }, why: { nl: 'ND8 bewolkt · ND16 zonnig · ND32 felle zon · ND64 wit zand of spiegelend water. Houdt je op 1/50 s.', en: 'ND8 overcast · ND16 sunny · ND32 harsh sun · ND64 white sand or reflective water. Keeps you at 1/50 s.' } },
    ],
  },
  {
    cam: 'pocket',
    name: 'DJI Osmo Pocket 4',
    kind: { nl: 'Handheld · Pro-modus', en: 'Handheld · Pro mode' },
    rows: [
      { k: { nl: 'Resolutie', en: 'Resolution' }, v: '4K', why: { nl: 'Scherp en veelzijdig; 4K/60 voor strakke slow-motion van bewegende onderwerpen.', en: 'Sharp and versatile; 4K/60 for crisp slow-motion of moving subjects.' } },
      { k: { nl: 'Framerate', en: 'Frame rate' }, v: '24–30 fps', why: { nl: '24/25 fps voor de bioscoop-look; 50/60 fps als je wilt kunnen vertragen.', en: '24/25 fps for the cinematic look; 50/60 fps if you want to slow it down.' } },
      { k: { nl: 'Sluitertijd', en: 'Shutter' }, v: { nl: '1/50 s', en: '1/50 s' }, why: { nl: '180°-regel. Buiten in fel licht heb je een ND nodig om op deze trage sluiter te blijven.', en: '180° rule. In bright light outdoors you need an ND to keep this slow shutter.' } },
      { k: { nl: 'ISO', en: 'ISO' }, v: '100', why: { nl: 'Laag houden — de kleine sensor ruist sneller. Regel liever het licht of zet een ND op dan ISO omhoog.', en: 'Keep it low — the small sensor noises up quickly. Manage light or add an ND rather than raising ISO.' } },
      { k: { nl: 'Witbalans', en: 'White balance' }, v: { nl: '5500 K — vast', en: '5500 K — fixed' }, why: { nl: 'Handmatig vast; ~3200 K binnen bij kunstlicht. Auto verspringt tijdens een wandelende shot.', en: 'Fixed manually; ~3200 K indoors under artificial light. Auto jumps during a walking shot.' } },
      { k: { nl: 'Kleurprofiel', en: 'Colour profile' }, v: { nl: 'Normal of D-Log', en: 'Normal or D-Log' }, why: { nl: 'Normal = meteen klaar. De Pocket 4 heeft volledige 10-bit D-Log: meer dynamiek voor lastig licht, maar je moet de beelden dan kleuren.', en: 'Normal = ready instantly. The Pocket 4 has full 10-bit D-Log: more range for tricky light, but you must grade the footage.' } },
      { k: { nl: 'Scherpte', en: 'Sharpness' }, v: '−1', why: { nl: 'Filmischer beeld; achteraf bij te scherpen, niet te ontscherpen.', en: 'More cinematic; you can sharpen afterwards, not un-sharpen.' } },
      { k: { nl: 'Stabilisatie', en: 'Stabilisation' }, v: { nl: 'aan (gimbal)', en: 'on (gimbal)' }, why: { nl: 'De gimbal doet het zware werk. Zet je sluiter niet te traag, anders wordt beweging toch schokkerig.', en: 'The gimbal does the heavy lifting. Don’t set the shutter too slow or motion still stutters.' } },
      { k: { nl: 'ND-filter', en: 'ND filter' }, v: { nl: 'buiten bij zon', en: 'outdoors in sun' }, why: { nl: 'Zelfde logica als de drone: ND houdt het licht tegen zodat je op 1/50 s blijft zonder overbelichting.', en: 'Same logic as the drone: ND blocks light so you stay at 1/50 s without overexposing.' } },
    ],
  },
];
