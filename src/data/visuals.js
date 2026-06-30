// Herbruikbare, geanimeerde SVG-diagrammen (SMIL — werkt zonder JS, ook bij injectie).
// viz(name) geeft een zelfstandige SVG-string terug. Kleuren = huisstijl, achtergrond transparant.
// Gebruik: <div class="lb-viz-box" set:html={viz('shutter')} />

const BONE = '#F4F3EF', SKY = '#7FB4D6', MIST = '#9aa0a8', ORANGE = '#FF9A2E', GREEN = '#46C95F', RED = '#e0584d';
const wrap = (inner, vb = '0 0 800 300') =>
  `<svg viewBox="${vb}" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid meet" style="display:block">${inner}</svg>`;
const cap = (x, y, t, fill = MIST, size = 13, anchor = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" fill="${fill}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="${size}" text-anchor="${anchor}" font-weight="${weight}">${t}</text>`;
const kick = (x, y, t) =>
  `<text x="${x}" y="${y}" fill="${SKY}" font-family="ui-monospace,monospace" font-size="12" letter-spacing="2">${t}</text>`;
const spec = `<linearGradient id="lbspec" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF5147"/><stop offset=".25" stop-color="#FF9A2E"/><stop offset=".5" stop-color="#FFD23E"/><stop offset=".7" stop-color="#46C95F"/><stop offset=".85" stop-color="#2F7CF0"/><stop offset="1" stop-color="#9B4DDB"/></linearGradient>`;

const V = {
  // 180°-regel: roterende sluiter
  shutter: () => wrap(`
    ${kick(40, 42, 'DE 180°-REGEL')}
    ${cap(40, 70, 'Sluitertijd ≈ 2× je framerate', BONE, 20, 'start', '600')}
    ${cap(40, 96, '25 fps → 1/50 s · natuurlijke bewegingsonscherpte')}
    <g transform="translate(610 150)">
      <circle r="86" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="2"/>
      <circle r="86" fill="#16171B"/>
      <path d="M0 0 L0 -86 A86 86 0 0 1 74 -43 Z" fill="${SKY}" opacity=".85">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3.5s" repeatCount="indefinite"/>
      </path>
      <circle r="10" fill="${BONE}"/>
      ${cap(0, 120, '1/50 s', SKY, 15, 'middle', '700')}
    </g>`),

  // ND-filter: dichtheid loopt op
  nd: () => wrap(`
    ${kick(40, 42, 'ND-FILTER')}
    ${cap(40, 70, 'Houd licht tegen, blijf op 1/50 s', BONE, 20, 'start', '600')}
    ${cap(40, 96, 'Hoe feller het licht, hoe sterker de ND')}
    <g transform="translate(40 130)">
      ${['ND8', 'ND16', 'ND32', 'ND64'].map((n, i) =>
        `<rect x="${i * 180}" y="0" width="160" height="100" rx="12" fill="#000" opacity="${0.18 + i * 0.2}"/>
         <rect x="${i * 180}" y="0" width="160" height="100" rx="12" fill="none" stroke="rgba(255,255,255,.16)"/>
         ${cap(i * 180 + 80, 58, n, BONE, 17, 'middle', '700')}
         ${cap(i * 180 + 80, 80, ['bewolkt', 'zon', 'felle zon', 'wit zand'][i], MIST, 11, 'middle')}`).join('')}
      <circle cx="80" cy="50" r="22" fill="${ORANGE}" opacity=".9"><animate attributeName="cx" values="80;620" dur="5s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;.25" dur="5s" repeatCount="indefinite"/></circle>
    </g>`),

  // Gouden uur: zon boog
  sunarc: () => wrap(`
    ${kick(40, 42, 'HET GOUDEN UUR')}
    ${cap(40, 70, 'Warm, zacht, laag licht', BONE, 20, 'start', '600')}
    <line x1="40" y1="250" x2="760" y2="250" stroke="rgba(255,255,255,.2)" stroke-width="2"/>
    <path id="arc" d="M70 250 A330 330 0 0 1 730 250" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="2" stroke-dasharray="4 8"/>
    <circle r="26" fill="${ORANGE}"><animateMotion dur="6s" repeatCount="indefinite" rotate="0"><mpath href="#arc"/></animateMotion><animate attributeName="fill" values="#FF9A2E;#FFD23E;#FF6a3e;#FF9A2E" dur="6s" repeatCount="indefinite"/></circle>
    ${cap(120, 240, 'zonsopkomst', MIST, 12, 'middle')}${cap(680, 240, 'zonsondergang', MIST, 12, 'middle')}`),

  // Drone-orbit
  orbit: () => wrap(`
    ${kick(40, 42, 'CAMERABEWEGING')}
    ${cap(40, 70, 'De orbit — cirkel rond je onderwerp', BONE, 20, 'start', '600')}
    <g transform="translate(560 165)">
      <circle r="95" fill="none" stroke="url(#lbspec)" stroke-width="2" stroke-dasharray="5 7"/>
      <defs>${spec}</defs>
      <circle r="20" fill="#16171B" stroke="${SKY}" stroke-width="1.5"/>
      <circle r="20" fill="none" stroke="${SKY}" stroke-width="1.5"><animate attributeName="r" values="20;30;20" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values=".6;0;.6" dur="3s" repeatCount="indefinite"/></circle>
      <g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite"/>
        <line x1="0" y1="-95" x2="0" y2="0" stroke="${BONE}" stroke-width="1" stroke-dasharray="3 4" opacity=".5"/>
        <g transform="translate(0 -95)"><rect x="-11" y="-7" width="22" height="14" rx="4" fill="${BONE}"/><circle cx="-13" cy="-9" r="4.5" fill="none" stroke="${BONE}" stroke-width="1.4"/><circle cx="13" cy="-9" r="4.5" fill="none" stroke="${BONE}" stroke-width="1.4"/><circle cx="-13" cy="9" r="4.5" fill="none" stroke="${BONE}" stroke-width="1.4"/><circle cx="13" cy="9" r="4.5" fill="none" stroke="${BONE}" stroke-width="1.4"/></g>
      </g>
    </g>
    ${cap(40, 110, 'Eén vloeiende cirkel, camera naar binnen.', MIST)}`),

  // Shot-groottes
  shotsizes: () => wrap(`
    ${kick(40, 42, 'VARIEER JE SHOTS')}
    ${cap(40, 70, 'Wijd → medium → detail', BONE, 20, 'start', '600')}
    <g transform="translate(40 110)">
      ${[['Wijd', 0], ['Medium', 250], ['Detail', 500]].map(([t, x], i) =>
        `<rect x="${x}" y="0" width="220" height="130" rx="12" fill="#16171B" stroke="rgba(255,255,255,.14)"/>
         <rect x="${x}" y="0" width="220" height="130" rx="12" fill="none" stroke="${SKY}" stroke-width="3" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="3.6s" begin="${i * 1.2}s" repeatCount="indefinite"/></rect>
         <circle cx="${x + 110}" cy="65" r="${[10, 26, 50][i]}" fill="${SKY}" opacity=".85"/>
         ${cap(x + 110, 152, t, MIST, 12, 'middle')}`).join('')}
    </g>`),

  // Drone <250g
  dronecompare: () => wrap(`
    ${kick(40, 42, 'WELKE DRONE?')}
    ${cap(40, 70, 'Begin licht: onder 250 gram', BONE, 20, 'start', '600')}
    ${cap(40, 96, 'Past in een jaszak · soepelste regels', MIST)}
    <g transform="translate(560 175)">
      <g transform="translate(0 0)"><animateTransform attributeName="transform" type="translate" values="0 0;0 -10;0 0" dur="3s" repeatCount="indefinite"/>
        <ellipse cx="-60" cy="-26" rx="26" ry="6" fill="${SKY}" opacity=".5"/><ellipse cx="60" cy="-26" rx="26" ry="6" fill="${SKY}" opacity=".5"/>
        <rect x="-34" y="-22" width="68" height="34" rx="10" fill="${BONE}"/>
        <line x1="-60" y1="-22" x2="-34" y2="-8" stroke="${BONE}" stroke-width="4"/><line x1="60" y1="-22" x2="34" y2="-8" stroke="${BONE}" stroke-width="4"/>
        <circle cx="0" cy="14" r="6" fill="#16171B" stroke="${SKY}" stroke-width="2"/>
      </g>
      ${cap(0, 80, '<250 g', GREEN, 17, 'middle', '700')}
    </g>`),

  // Regelzones
  regelszones: () => wrap(`
    ${kick(40, 42, 'WAAR MAG JE VLIEGEN?')}
    ${cap(40, 70, 'Open terrein ja — natuurgebied nee', BONE, 20, 'start', '600')}
    <g transform="translate(40 96)">
      <rect x="0" y="0" width="720" height="170" rx="14" fill="#16171B" stroke="rgba(255,255,255,.12)"/>
      <path d="M40 30 h300 v110 h-300 Z" fill="${GREEN}" opacity=".14" stroke="${GREEN}" stroke-dasharray="4 5"/>
      <path d="M400 24 q120 -10 200 40 q40 60 -30 100 q-120 20 -180 -40 Z" fill="${RED}" opacity=".15" stroke="${RED}" stroke-dasharray="4 5"/>
      ${cap(190, 95, 'open boerenland ✓', GREEN, 14, 'middle', '600')}
      ${cap(520, 95, 'Natura 2000 ✕', RED, 14, 'middle', '600')}
      <g><animateMotion dur="6s" repeatCount="indefinite" path="M120 60 H280 V120 H120 Z"/><circle r="7" fill="${BONE}"/><circle r="7" fill="none" stroke="${BONE}"><animate attributeName="r" values="7;13;7" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".7;0;.7" dur="2s" repeatCount="indefinite"/></circle></g>
    </g>`),

  // Vloeiende stick
  smoothstick: () => wrap(`
    ${kick(40, 42, 'VLOEIENDER VLIEGEN')}
    ${cap(40, 70, 'Zacht in, zacht uit — nooit schoksgewijs', BONE, 20, 'start', '600')}
    <g transform="translate(120 175)">
      <circle r="70" fill="#16171B" stroke="rgba(255,255,255,.14)" stroke-width="2"/>
      <line x1="-70" y1="0" x2="70" y2="0" stroke="rgba(255,255,255,.1)"/><line x1="0" y1="-70" x2="0" y2="70" stroke="rgba(255,255,255,.1)"/>
      <circle r="16" fill="${SKY}"><animateTransform attributeName="transform" type="translate" values="0 0; 48 0; 48 0; 0 0; -48 0; 0 0" keyTimes="0;0.25;0.4;0.6;0.8;1" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1" dur="5s" repeatCount="indefinite"/></circle>
    </g>
    ${cap(250, 160, 'Easing = de digitale gimbal van je duim.', MIST)}
    ${cap(250, 190, 'In Cine-modus reageert de stick trager en zachter.', MIST)}`),

  // Gimbalmodi: horizon blijft recht
  gimbalmodes: () => wrap(`
    ${kick(40, 42, 'GIMBAL')}
    ${cap(40, 70, 'De horizon blijft recht — jij beweegt', BONE, 20, 'start', '600')}
    <g transform="translate(560 170)">
      <g><animateTransform attributeName="transform" type="rotate" values="-14;14;-14" dur="4s" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1;0.4 0 0.2 1" repeatCount="indefinite"/>
        <rect x="-12" y="-2" width="24" height="78" rx="10" fill="rgba(255,255,255,.18)"/>
        <circle cx="0" cy="76" r="9" fill="${MIST}"/>
      </g>
      <g transform="translate(0 -8)">
        <rect x="-46" y="-30" width="92" height="58" rx="12" fill="${BONE}"/>
        <circle cx="0" cy="-1" r="17" fill="#16171B"/><circle cx="0" cy="-1" r="9" fill="${SKY}"/>
        <line x1="-60" y1="-1" x2="60" y2="-1" stroke="${SKY}" stroke-width="2" stroke-dasharray="4 5"/>
      </g>
    </g>
    ${cap(40, 110, 'Follow · Tilt-locked · FPV', MIST)}`),

  // Regel van derden
  thirds: () => wrap(`
    ${kick(40, 42, 'COMPOSITIE')}
    ${cap(40, 70, 'Regel van derden', BONE, 20, 'start', '600')}
    <g transform="translate(220 96)">
      <rect x="0" y="0" width="360" height="180" rx="10" fill="#16171B" stroke="rgba(255,255,255,.16)"/>
      <line x1="120" y1="0" x2="120" y2="180" stroke="rgba(255,255,255,.22)"/><line x1="240" y1="0" x2="240" y2="180" stroke="rgba(255,255,255,.22)"/>
      <line x1="0" y1="60" x2="360" y2="60" stroke="rgba(255,255,255,.22)"/><line x1="0" y1="120" x2="360" y2="120" stroke="rgba(255,255,255,.22)"/>
      <circle r="15" fill="${ORANGE}"><animateTransform attributeName="transform" type="translate" values="180 90;240 60;240 60;180 90" keyTimes="0;0.35;0.75;1" dur="4s" repeatCount="indefinite"/></circle>
      <circle cx="240" cy="60" r="22" fill="none" stroke="${SKY}" stroke-dasharray="3 4"/>
    </g>
    ${cap(40, 230, 'Onderwerp op een snijpunt,', MIST)}${cap(40, 252, 'niet in het midden.', MIST)}`),

  // Slow-motion / framerate
  slowmo: () => wrap(`
    ${kick(40, 42, 'FRAMERATE')}
    ${cap(40, 70, '24/25 = bioscoop · 50/60 = slow-motion', BONE, 20, 'start', '600')}
    <g transform="translate(40 110)">
      ${cap(0, 14, '25 fps', SKY, 13, 'start', '700')}
      ${[0, 1, 2, 3, 4].map(i => `<rect x="${i * 140}" y="26" width="120" height="60" rx="8" fill="#16171B" stroke="rgba(255,255,255,.14)"/>`).join('')}
      <circle cy="56" r="11" fill="${ORANGE}"><animate attributeName="cx" values="60;200;340;480;620" dur="2.5s" calcMode="discrete" repeatCount="indefinite"/></circle>
      ${cap(0, 120, '60 fps → afgespeeld op 25', GREEN, 13, 'start', '700')}
      ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${i * 86}" y="132" width="74" height="44" rx="7" fill="#16171B" stroke="rgba(255,255,255,.1)"/>`).join('')}
      <circle cy="154" r="9" fill="${GREEN}"><animate attributeName="cx" values="37;640" dur="5s" repeatCount="indefinite"/></circle>
    </g>`),

  // Audio: beat + knip
  beat: () => wrap(`
    ${kick(40, 42, 'AUDIO & MUZIEK')}
    ${cap(40, 70, 'Knip op de beat', BONE, 20, 'start', '600')}
    <g transform="translate(40 120)">
      ${Array.from({ length: 46 }).map((_, i) => {
        const h = 12 + Math.abs(Math.sin(i * 0.7)) * (i % 6 === 0 ? 64 : 34);
        return `<rect x="${i * 15}" y="${70 - h / 2}" width="7" height="${h}" rx="3" fill="${i % 6 === 0 ? SKY : 'rgba(255,255,255,.3)'}"/>`;
      }).join('')}
      ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<line x1="${i * 90}" y1="0" x2="${i * 90}" y2="140" stroke="${ORANGE}" stroke-width="2" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="3.6s" begin="${i * 0.45}s" repeatCount="indefinite"/></line>`).join('')}
      ${cap(0, 165, 'Sneden vallen samen met de beat = strak ritme.', MIST)}
    </g>`),

  // Voor/na grade (auto-wipe)
  grade: () => wrap(`
    <defs>
      <linearGradient id="gsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b4a7a"/><stop offset=".55" stop-color="#c98a52"/><stop offset="1" stop-color="#f2c27a"/></linearGradient>
      <clipPath id="gclip"><rect x="0" y="0" width="800" height="300"><animate attributeName="width" values="120;800;800;120;120" keyTimes="0;0.4;0.6;0.95;1" dur="7s" repeatCount="indefinite"/></rect></clipPath>
      <filter id="flat"><feColorMatrix type="saturate" values="0.45"/><feComponentTransfer><feFuncR type="linear" slope="0.8" intercept="0.12"/><feFuncG type="linear" slope="0.8" intercept="0.12"/><feFuncB type="linear" slope="0.8" intercept="0.13"/></feComponentTransfer></filter>
    </defs>
    <g id="scene">
      <rect width="800" height="190" fill="url(#gsky)"/><circle cx="540" cy="150" r="42" fill="#ffe7b0"/>
      <rect y="190" width="800" height="110" fill="#2f6f93"/><ellipse cx="540" cy="210" rx="48" ry="30" fill="#ffe7b0" opacity=".5"/>
      <path d="M0 190 L150 190 L110 130 L60 165 L20 120 Z" fill="#20303d"/>
    </g>
    <g filter="url(#flat)"><use href="#scene"/></g>
    <g clip-path="url(#gclip)"><use href="#scene"/><rect width="800" height="300" fill="#2F7CF0" opacity=".10"/><rect width="800" height="300" fill="#FF9A2E" opacity=".08"/></g>
    <rect x="20" y="20" width="120" height="26" rx="6" fill="rgba(8,8,10,.6)"/>${cap(34, 38, 'Plat D-Log', '#cdd2d8', 12)}
    <rect x="640" y="20" width="140" height="26" rx="6" fill="rgba(8,8,10,.6)"/>${cap(654, 38, 'Gegradeerd', '#cdd2d8', 12)}`),

  // Generiek
  default: () => wrap(`
    <defs>${spec}</defs>
    <g transform="translate(400 150)">
      <polygon points="0,-70 61,-35 61,35 0,70 -61,35 -61,-35" fill="none" stroke="url(#lbspec)" stroke-width="4" stroke-linejoin="round"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite"/></polygon>
      <polygon points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19" fill="none" stroke="${BONE}" stroke-width="2" opacity=".7"/>
    </g>`),
};

export function viz(name) {
  return (V[name] || V.default)();
}

// Welk artikel krijgt welke hero. photo = al-gevalideerde Unsplash-id; anders een viz-naam.
export const articleHero = {
  'gouden-uur-uitgelegd': { photo: '1576682953661-a056a5073019' },
  'onderwater-action-instellingen': { photo: '1753618282728-f05ecfc5c9d6' },
  'pro-instellingen-uitgelegd': { viz: 'shutter' },
  'nd-filters-uitgelegd': { viz: 'nd' },
  'dji-mini-5-pro-instellingen': { viz: 'orbit' },
  'montage-basis-een-film': { viz: 'shotsizes' },
  'welke-drone-en-accessoires': { viz: 'dronecompare' },
  'drone-regels-nederland-eu': { viz: 'regelszones' },
  'cinematische-besturing-veiligheid-mini-5-pro': { viz: 'smoothstick' },
  'osmo-pocket-4-instellingen': { viz: 'gimbalmodes' },
  'mini-5-pro-cinematische-bewegingen': { viz: 'orbit' },
  'pocket-4-gimbalbewegingen': { viz: 'gimbalmodes' },
  'compositie-cinematisch': { viz: 'thirds' },
  'framerate-keuzehulp': { viz: 'slowmo' },
  'audio-muziek-cinematisch': { viz: 'beat' },
  'shots-naar-verhaal': { viz: 'shotsizes' },
  'kleurprofielen-uitgelegd': { viz: 'grade' },
};
