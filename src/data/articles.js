// Artikelen (blog) — losse, evergreen vak-artikelen voor groei/SEO.
// ph = kleurklasse voor de placeholder-afbeelding (zie artikelen-styling).
export const articles = [
  {
    slug: 'gouden-uur-uitgelegd',
    cat: 'Licht',
    ph: 'l',
    featured: true,
    title: 'Het gouden uur: wat het is en hoe je het écht gebruikt',
    excerpt: 'Waarom het licht rond zonsopkomst en zonsondergang zo mooi is — en een praktisch plan om er elke keer klaar voor te zijn.',
    date: '2026-06-20',
    readMin: 7,
    body: `
<p>Vraag tien filmmakers naar hun favoriete licht en negen noemen het gouden uur. Niet voor niets: in dat korte raam wordt zelfs een gewone straat filmisch. Maar het duurt kort, en het mooiste moment mis je makkelijk. Hier lees je wat het precies is en hoe je er klaar voor staat.</p>
<h2>Wat is het gouden uur?</h2>
<p>Het gouden uur is het eerste uur na zonsopkomst en het laatste uur voor zonsondergang. De zon staat dan laag, dus het licht legt een langere weg af door de atmosfeer. Blauwe tinten worden weggefilterd en wat overblijft is warm, goudkleurig licht.</p>
<h2>Waarom het er zo goed uitziet</h2>
<ul>
<li><strong>Warme kleur</strong> — alles krijgt een gouden gloed, huid ziet er gezond uit.</li>
<li><strong>Zacht licht</strong> — het licht is diffuus, dus geen harde, lelijke schaduwen.</li>
<li><strong>Lange schaduwen</strong> — die geven diepte en textuur aan je beeld.</li>
<li><strong>Laag contrast</strong> — lucht en land liggen dichter bij elkaar, makkelijker goed te belichten.</li>
</ul>
<h2>Vergeet het blauwe uur niet</h2>
<p>Vlak voor zonsopkomst en vlak na zonsondergang valt het blauwe uur: twintig tot dertig minuten koel, egaal licht. Perfect voor steden en water, waar kunstlicht en de diepblauwe lucht elkaar mooi aanvullen.</p>
<h2>Praktisch: zo ben je op tijd</h2>
<ol>
<li><strong>Plan vooruit.</strong> Zoek je locatie en datum op in de <a href="/gouden-uur/">gouden-uur-planner</a> en noteer wanneer het venster valt.</li>
<li><strong>Wees vroeg.</strong> Sta er minstens een halfuur eerder, zodat je je kader en route al klaar hebt als het licht piekt.</li>
<li><strong>Check het weer.</strong> De planner toont per venster ook de wind en bewolking — bij heldere lucht krijg je het mooiste gouden uur.</li>
</ol>
<div class="callout tip"><div class="c-label">Onthoud dit</div><p>Het gouden uur beloont voorbereiding. Eén keer goed plannen scheelt een ochtend vroeg opstaan voor niets.</p></div>
<p>Wil je dit echt onder de knie krijgen, inclusief belichting en beweging? Dat leer je stap voor stap in <a href="/cursus/vluchtfilmer/">De Vluchtfilmer</a> en <a href="/cursus/grondfilmer/">De Grondfilmer</a> — beide gratis.</p>
`
  },
  {
    slug: 'pro-instellingen-uitgelegd',
    cat: 'Techniek',
    ph: 't',
    title: 'Alle Pro-instellingen uitgelegd — wat, welke waarde en waarom',
    excerpt: 'Framerate en ISO zijn maar het begin. Witbalans, kleurprofiel, sluiterhoek en scherpte bepalen net zo goed of je beeld er filmisch uitziet. Hier staat elke handmatige instelling, met de waarde én de reden.',
    date: '2026-06-28',
    readMin: 9,
    body: `
<p>De meeste mensen zetten hun camera op Pro, kiezen 4K en een framerate, en laten de rest op auto staan. Jammer, want juist die andere instellingen — witbalans, kleurprofiel, sluiterhoek, scherpte — maken het verschil tussen "een filmpje" en een beeld dat filmisch oogt. Hieronder loop je ze allemaal langs: wat het doet, welke waarde je kiest en waaróm.</p>

<h2>Begin bij de 180°-regel</h2>
<p>Alles draait om één principe: je <strong>sluitertijd</strong> hoort ongeveer twee keer je framerate te zijn (de "180°-regel"). Film je op 25 fps, dan zet je de sluiter op 1/50 s. Dat geeft natuurlijke bewegingsonscherpte — beweging voelt vloeiend in plaats van schokkerig of juist te strak. Een te snelle sluiter maakt beeld "stroboscopisch", een te trage maakt het wazig.</p>
<p>Het probleem: buiten in fel licht is 1/50 s veel te traag, je beeld wordt spierwit. Daarom film je met een <strong>ND-filter</strong> (een grijsfilter), zodat je die trage sluiter kunt houden zonder te overbelichten. ND lost geen scherpte op — het regelt alleen hoeveel licht er binnenkomt.</p>

<h2>Resolutie & framerate</h2>
<ul>
<li><strong>Resolutie 4K</strong> — scherp en future-proof, en je houdt ruimte over om bij te snijden of te stabiliseren.</li>
<li><strong>Framerate 24 of 25 fps</strong> — de klassieke bioscoop-look. Kies 50 of 60 fps alleen als je de beelden later wilt vertragen (50% slow-motion wordt dan boterzacht).</li>
</ul>

<h2>ISO — zo laag mogelijk</h2>
<p>ISO bepaalt hoe gevoelig de sensor is. Hoger ISO = helderder beeld, maar ook meer ruis (korrel). Houd ISO daarom zo laag mogelijk, <strong>100</strong> als het kan. Is het te donker? Regel dan eerst het licht of je ND, en verhoog ISO pas als laatste redmiddel. Verhoog ISO nóóit om een verkeerde belichting te "redden" — daar is je ND of de tijd van de dag voor.</p>

<h2>Belichting (EV)</h2>
<p>Veel piloten zetten de belichtingscompensatie (EV) een klein beetje lager — zo'n <strong>−0,3 tot −0,7</strong> — omdat het beeld snel net iets te licht is. Zo bescherm je je highlights (lucht, water, sneeuw) tegen uitbeten: een uitgebeten witte lucht krijg je er nooit meer in, terwijl een iets te donker beeld zich makkelijk laat terughalen. Hoeveel je verlaagt hangt af van de scène — experimenteer en kijk naar je histogram.</p>

<h2>Witbalans — handmatig vastzetten</h2>
<p>Witbalans bepaalt of je beeld warm (geel) of koel (blauw) oogt, gemeten in Kelvin. De grote valkuil is <strong>auto-witbalans</strong>: die past zich tijdens een shot aan, dus midden in een draai verspringt de kleur ineens. Dat ziet er onrustig uit en is in de montage lastig te repareren.</p>
<ul>
<li><strong>Zet de witbalans handmatig vast.</strong> Buiten bij daglicht zit je rond <strong>5500 K</strong>.</li>
<li><strong>Kunstlicht binnen</strong> (winkels, lampen) is warmer — daar kies je rond <strong>3200 K</strong>.</li>
<li>Hogere Kelvin = koeler beeld, lagere Kelvin = warmer. Kies wat bij het licht past en laat het staan.</li>
<li><strong>Speel ermee:</strong> bij sneeuw zet je 'm wat lager (~5000 K) voor een neutraler wit; bij een zonsondergang juist hoger voor een warmere gloed.</li>
</ul>

<h2>Kleurprofiel — Normal of D-Log</h2>
<p>Het kleurprofiel bepaalt hoeveel kleur en contrast de camera al "inbakt".</p>
<ul>
<li><strong>Normal (10-bit)</strong> — het beeld is meteen mooi en bruikbaar zonder bewerken. Voor de meeste mensen de beste keuze.</li>
<li><strong>D-Log / D-Log M</strong> — een vlak, grijzig profiel dat veel meer detail in lichte en donkere delen bewaart. Het geeft je meer ruimte om te kleuren, maar het is verplicht om het achteraf te bewerken (color grading). Kies dit alléén als je echt gaat nabewerken.</li>
</ul>

<h2>Scherpte & ruisreductie</h2>
<ul>
<li><strong>Scherpte −1 (−2 mag ook)</strong> — de standaardscherpte oogt vaak te hard en "video-achtig". Iets zachter is filmischer; scherpte voeg je later makkelijk toe, te veel krijg je er nooit meer uit. Voor de DJI Mini 5 Pro is −1 een veilige keuze; −2 kan als je gewend bent zelf bij te scherpen in de montage.</li>
<li><strong>Ruisreductie 0</strong> — je leest online soms "−2 voor allebei", maar dat advies komt meestal van andere of oudere modellen. DJI's ruisonderdrukking is agressief en veegt fijne details weg ("plastic" look), dus voor de Mini 5 Pro houd je de ruisreductie op <strong>0</strong> en de scherpte op −1 of −2. Op sommige andere drones (zoals de Air 3-serie) werkt ruisreductie −1 net iets beter — het verschilt dus per model.</li>
</ul>

<h2>De ND-filter, kort</h2>
<p>Kies je ND op het licht van dat moment, zodat je op 1/50 s blijft:</p>
<ul>
<li><strong>ND8</strong> — bewolkt</li>
<li><strong>ND16</strong> — zonnig</li>
<li><strong>ND32</strong> — felle middagzon</li>
<li><strong>ND64</strong> — wit zand of spiegelend water</li>
</ul>
<p>Twijfel je? De <a href="/gereedschap/">ND-calculator</a> rekent het voor je uit op basis van je framerate en het licht.</p>

<h2>Snelle waarden om te onthouden</h2>
<p><strong>DJI Mini 5 Pro (drone):</strong> 4K · 24–30 fps · sluiter 1/50 s · ISO 100 · witbalans 5500 K vast · kleurprofiel Normal · scherpte −1 · ruis 0 · ND volgens licht.</p>
<p><strong>DJI Osmo Pocket 4 (handheld):</strong> 4K · 24–30 fps · sluiter 1/50 s · ISO 100 · witbalans 5500 K vast (3200 K binnen) · Normal of D-Log M · scherpte −1 · gimbal aan · ND buiten bij zon.</p>

<div class="callout tip"><div class="c-label">Onthoud dit</div><p>Zet vóór elke shoot bewust vier dingen vast: sluiter (1/50), ISO (100), witbalans (5500 K) en je ND. Die vier samen bepalen 90% van de "filmische" look — de rest is licht en beweging.</p></div>

<p>De complete cheatsheet met álle waarden naast elkaar staat op de <a href="/gereedschap/">gereedschap-pagina</a>. En je leert ze stap voor stap toepassen in <a href="/cursus/vluchtfilmer/">De Vluchtfilmer</a> en <a href="/cursus/grondfilmer/">De Grondfilmer</a> — beide gratis.</p>
`
  },
  {
    slug: 'nd-filters-uitgelegd',
    cat: 'Techniek',
    ph: 't',
    title: 'ND-filters uitgelegd: de sleutel tot vloeiende beelden',
    excerpt: 'Waarom je sluitertijd twee keer je framerate is, en hoe een ND-filter je die filmische look geeft in fel licht.',
    date: '2026-06-18',
    readMin: 5,
    body: `
<p>Je beelden zien er net iets te scherp, te "videoachtig" uit? Grote kans dat het aan je sluitertijd ligt — en dat een ND-filter de oplossing is. Geen ingewikkelde theorie, gewoon één regel en één hulpmiddel.</p>
<h2>De 180-graden-regel</h2>
<p>Voor een natuurlijke, filmische beweging zet je je sluitertijd op ongeveer twee keer je framerate. Film je op 25 beelden per seconde, dan wil je een sluitertijd van rond 1/50. Daardoor krijgt beweging een lichte, vloeiende veeg — precies wat we gewend zijn van film.</p>
<h2>Het probleem bij fel licht</h2>
<p>Buiten op een zonnige dag is 1/50 veel te traag: je beeld wordt schreeuwend overbelicht. Je zou de sluitertijd kunnen verhogen, maar dan verlies je die filmische veeg en wordt alles schokkerig scherp.</p>
<h2>Wat een ND-filter doet</h2>
<p>Een ND-filter (Neutral Density) is in feite een zonnebril voor je lens: het houdt een deel van het licht tegen, zonder de kleur te veranderen. Zo kun je je trage sluitertijd aanhouden zónder overbelichting.</p>
<h2>Welke sterkte heb ik nodig?</h2>
<p>Dat hangt af van je framerate, sluiterhoek en hoe fel het licht is. In plaats van rekenen kun je het direct laten uitrekenen met de <a href="/gereedschap/">ND-filter-calculator</a>: kies je framerate en het licht, en je ziet welke ND-sterkte je nodig hebt.</p>
<div class="callout tip"><div class="c-label">Vuistregel</div><p>Bewolkt ≈ ND8, zonnig ≈ ND16, felle middagzon of sneeuw/water ≈ ND32 of meer.</p></div>
<p>De volledige uitleg — inclusief variabele ND's en wanneer je ze stapelt — staat in <a href="/cursus/vluchtfilmer/">De Vluchtfilmer</a>.</p>
`
  },
  {
    slug: 'dji-mini-5-pro-instellingen',
    cat: 'Drone',
    ph: 'd',
    title: 'DJI Mini 5 Pro: de instellingen die ik vastzet',
    excerpt: 'De instellingen die ik één keer goed zet en daarna nooit meer aanraak — voor stabiele, cinematische clips.',
    date: '2026-06-15',
    readMin: 6,
    body: `
<p>Een nieuwe drone heeft tientallen instellingen, en de meeste hoef je nooit aan te raken. Dit zijn de paar die het verschil maken tussen "vlogcamera-in-de-lucht" en echt cinematische beelden. Zet ze één keer goed en je bent klaar.</p>
<h2>1. Vlieg in Cine-modus</h2>
<p>De modusschakelaar (Cine / Normal / Sport) is je belangrijkste creatieve knop. <strong>Cine</strong> maakt de drone traag en vloeiend — precies wat je wilt voor mooie beelden. Normal is voor verplaatsen, Sport voor snelheid (maar zonder obstakeldetectie).</p>
<h2>2. Resolutie en beeldsnelheid</h2>
<p>4K op 30 fps is je veilige standaard voor een filmische look. Wil je later vertraagde (slow-motion) beelden? Schiet die specifieke shots op 4K 60 fps of hoger.</p>
<h2>3. Kleurprofiel</h2>
<p>Begin met het normale (niet-log) profiel: het ziet er meteen mooi uit en je hoeft niet te kleuren. Pas als je vertrouwd bent met monteren stap je over op een log-profiel voor meer ruimte in de nabewerking.</p>
<h2>4. Veiligheid: RTH-hoogte en obstakeldetectie</h2>
<ul>
<li><strong>Return-to-Home-hoogte</strong> hoger dan het hoogste object in de buurt — anders vliegt de drone bij terugkeer ergens tegenaan.</li>
<li><strong>Obstakeldetectie aan</strong> in Cine en Normal. In Sport staat hij uit, dus wees daar extra voorzichtig.</li>
</ul>
<div class="callout tip"><div class="c-label">Onthoud dit ene ding</div><p>90% van je mooie beelden maak je in Cine-modus. Zet hem standaard daarop en je bent voor de meeste shots klaar.</p></div>
<p>Wil je elke knop écht leren kennen en je eerste filmische vlucht maken? Dat is precies waar <a href="/cursus/vluchtfilmer/">De Vluchtfilmer</a> mee begint — gratis, met een snelstart die je in een halfuur in de lucht heeft.</p>
`
  },
  {
    slug: 'montage-basis-een-film',
    cat: 'Montage',
    ph: 'm',
    title: 'Van losse clips naar één film: de montage-basis',
    excerpt: 'Knippen op beweging, een ritme opbouwen en lucht- en grondbeelden laten samensmelten tot één verhaal.',
    date: '2026-06-12',
    readMin: 7,
    body: `
<p>Mooie losse clips maken nog geen film. De magie ontstaat in de montage: de volgorde, het ritme en de overgangen bepalen of iets blijft hangen. Dit zijn de basisprincipes waarmee je begint.</p>
<h2>Begin met een ruwe selectie</h2>
<p>Kijk al je beelden door en bewaar alleen de bruikbare stukken. Wees streng: een korte, sterke film is altijd beter dan een lange met saaie momenten ertussen.</p>
<h2>Knip op beweging</h2>
<p>Een knip voelt natuurlijk als je hem legt midden in een beweging — een camera die pant, iemand die loopt, een deur die opengaat. Het oog volgt de beweging en merkt de overgang nauwelijks.</p>
<h2>Bouw een ritme</h2>
<ul>
<li><strong>Wissel af</strong> tussen wijde, medium en detailshots — dat houdt het levendig.</li>
<li><strong>Laat rustige shots langer staan</strong> en knip dynamische shots korter.</li>
<li><strong>Gebruik geluid als leidraad</strong>: muziek of omgevingsgeluid geeft je film een hartslag om op te knippen.</li>
</ul>
<h2>Smelt lucht en grond samen</h2>
<p>De kracht zit in de combinatie. Een drone opent een scène van bovenaf; dan snij je naar een grondbeeld op ooghoogte van dezelfde plek. Zorg dat de twee dezelfde kleur en sfeer hebben, zodat het één wereld blijft.</p>
<div class="callout tip"><div class="c-label">Tip</div><p>Begin met bewegen vóór je opname start en stop ná — dan heb je in de montage altijd ruimte om soepel in en uit te knippen.</p></div>
<p>De complete workflow — van selectie tot kleur — leer je in <a href="/cursus/grondfilmer/">De Grondfilmer</a>. En plan je opnames slim met de gratis <a href="/shotlist/">shotlist-planner</a>.</p>
`
  },
  {
    slug: 'welke-drone-en-accessoires',
    cat: 'Gear',
    ph: 'd',
    title: 'Welke drone en accessoires? Een eerlijke keuzehulp',
    excerpt: 'Welke drone past bij jouw manier van filmen, welke accessoires je écht nodig hebt — en waar je je geld niet aan hoeft uit te geven.',
    date: '2026-06-28',
    readMin: 8,
    body: `
<p>De duurste drone is zelden de beste keuze. Wat telt is welke bij jouw manier van filmen past, en welke spullen eromheen je echt nodig hebt. Hier een eerlijke keuzehulp zonder verkooppraat.</p>

<h2>Welke drone past bij jou?</h2>
<ul>
<li><strong>Reizen & vloggen</strong> — kies een lichte drone onder de 250 gram (de Mini-klasse). Hij past in een jaszak, en in veel landen gelden voor deze klasse soepelere regels. Voor de meeste mensen is dit de slimste start.</li>
<li><strong>Meer beeldkwaliteit</strong> — wil je grotere prints, zwaarder kleurwerk of opnames bij minder licht, dan helpt een grotere sensor. Dat betekent een zwaardere drone en strengere regels, dus weeg dat mee.</li>
<li><strong>Vanaf de grond filmen</strong> — geen drone nodig: een gimbal-camera zoals de Osmo Pocket 4 geeft je vloeiende, stabiele beelden op ooghoogte, en mag overal waar een drone niet mag.</li>
</ul>

<h2>Waarom onder de 250 gram zo fijn is</h2>
<p>Een drone onder de 250 gram valt in de lichtste categorie. Je mag er dichter bij mensen mee vliegen dan met zwaardere toestellen, en de instapdrempel qua regels en examens is lager. Voor beginners en reizigers scheelt dat enorm veel gedoe — zonder dat je veel beeldkwaliteit inlevert.</p>

<h2>Must-have accessoires</h2>
<ul>
<li><strong>ND-filterset</strong> — het belangrijkste accessoire. Zonder ND krijg je je sluiter buiten niet traag genoeg voor filmische beweging. Een set met ND8/16/32/64 dekt vrijwel alles.</li>
<li><strong>Extra accu's (2 tot 3)</strong> — één accu is 20–30 minuten vliegen. Met drie heb je een ochtend lang plezier. Een fly-more-combo is bijna altijd voordeliger dan losse accu's.</li>
<li><strong>Snelle SD-kaart</strong> — kies minimaal een V30-kaart (of sneller) met genoeg ruimte; 4K vult een kaart snel. Te trage kaarten geven haperende opnames.</li>
<li><strong>Een goede tas</strong> — beschermt drone, accu's en filters onderweg. Hoeft niet duur te zijn.</li>
<li><strong>Reserve-propellers</strong> — licht, goedkoop en je wilt nooit met een beschadigde prop vliegen.</li>
</ul>

<h2>Handig, maar geen must</h2>
<p>Een landingsmat, extra kleurfilters (polarisatie) en een aparte controller met scherm zijn leuk, maar voor de meeste mensen niet nodig om te beginnen. Begin klein en breid uit als je merkt dat je iets mist.</p>

<h2>Waar je je geld níet aan hoeft uit te geven</h2>
<ul>
<li><strong>Te veel filters</strong> — een halve koffer ND's gebruik je nooit. Een set van vier dekt de praktijk.</li>
<li><strong>De allerduurste drone "voor later"</strong> — je leert het meest met een toestel dat je makkelijk meeneemt en durft te gebruiken.</li>
<li><strong>Gadgets die je workflow niet versnellen</strong> — koop pas iets bij als een concreet probleem erom vraagt.</li>
</ul>

<div class="callout tip"><div class="c-label">Kort samengevat</div><p>Een lichte drone (onder 250 g), een ND-set, een paar extra accu's en een snelle SD-kaart. Daarmee kun je vrijwel alles filmen wat je in de cursussen leert.</p></div>

<p>Welke instellingen je vervolgens kiest, lees je in <a href="/artikelen/pro-instellingen-uitgelegd/">Alle Pro-instellingen uitgelegd</a>. En je leert alles stap voor stap in <a href="/cursus/vluchtfilmer/">De Vluchtfilmer</a> en <a href="/cursus/grondfilmer/">De Grondfilmer</a> — beide gratis.</p>
`
  },
  {
    slug: 'drone-regels-nederland-eu',
    cat: 'Regels',
    ph: 'r',
    title: 'Drone-regels in Nederland & de EU — begrijpelijk uitgelegd',
    excerpt: 'Registratie, vliegbewijs en de categorieën A1, A2 en A3 zonder ambtelijk jargon. Wat geldt voor jouw drone, en waar je wel en niet mag vliegen.',
    date: '2026-06-27',
    readMin: 9,
    body: `
<p>Dronevliegen in Nederland en de rest van de EU volgt sinds 2021 dezelfde Europese regels. Ze klinken ingewikkeld, maar voor de meeste mensen komt het neer op een paar simpele stappen. Hier lees je wat er voor jouw drone geldt — in gewone taal.</p>

<div class="callout tip"><div class="c-label">Belangrijk</div><p>Regels en bedragen kunnen wijzigen. Gebruik dit als overzicht en bevestig de actuele eisen altijd bij de officiële bron: <a href="https://www.rijksoverheid.nl/onderwerpen/drone" rel="nofollow">rijksoverheid.nl/drone</a> en de <a href="https://www.rdw.nl" rel="nofollow">RDW</a>.</p></div>

<h2>De basis: de "open categorie"</h2>
<p>Vrijwel iedereen die recreatief of voor mooie beelden vliegt, valt in de <strong>open categorie</strong>. De kernregels zijn altijd hetzelfde:</p>
<ul>
<li>Je houdt je drone <strong>altijd in zicht</strong> (VLOS).</li>
<li>Je vliegt <strong>maximaal 120 meter</strong> hoog.</li>
<li>Je drone weegt <strong>minder dan 25 kg</strong>.</li>
<li>Je vliegt <strong>niet boven mensenmenigtes</strong> en niet in verboden luchtruim.</li>
</ul>

<h2>Stap 1 — Registreren bij de RDW</h2>
<p>Heb je een drone van <strong>250 gram of zwaarder</strong>, óf een drone <strong>met een camera</strong> (ook lichter dan 250 gram), dan moet je je als exploitant registreren bij de RDW. Je krijgt een <strong>exploitantnummer</strong> dat je op je drone(s) plakt. Dat kost een kleine vergoeding (een paar tientjes voor de eerste aanvraag en een jaarlijkse verlenging) — kijk voor het actuele tarief op de RDW-site. Een drone onder de 250 gram <em>zonder</em> camera hoef je niet te registreren.</p>

<h2>Stap 2 — Het vliegbewijs (als je drone ≥ 250 g is)</h2>
<p>Voor drones van 250 gram of zwaarder heb je het <strong>EU-dronebewijs A1/A3</strong> nodig. Je legt een online theorie-examen af via een erkende route; na het slagen vraag je het certificaat aan bij de RDW. Het is <strong>vijf jaar</strong> geldig. Voor een lichte drone onder de 250 gram heb je dit bewijs niet nodig — wél de registratie als er een camera op zit.</p>

<h2>De subcategorieën: A1, A2 en A3</h2>
<p>Binnen de open categorie bepaalt het gewicht (en de CE-klasse) hoe dicht je bij mensen mag komen:</p>
<ul>
<li><strong>A1 — dicht bij mensen, lichte drones.</strong> Drones onder 250 gram (klasse C0) en lichte drones tot 900 gram (C1). Je mag relatief dicht bij mensen vliegen, maar nooit boven mensenmenigtes.</li>
<li><strong>A2 — middenklasse, met extra bewijs.</strong> Drones tot ongeveer 4 kg (klasse C2). Hiervoor heb je naast het basisbewijs een <strong>A2-vaardigheidsbewijs</strong> nodig, en je houdt ruime afstand tot omstanders (richtlijn: minimaal 30 meter, of dichterbij alleen in de langzame-vliegmodus volgens de EU-regels).</li>
<li><strong>A3 — zwaarder, ver van alles.</strong> Drones tot 25 kg. Je vliegt ver van mensen en op flinke afstand (orde van 150 meter) van woon-, bedrijfs- en recreatiegebieden.</li>
</ul>
<p>De meeste hobbyisten en reizigers kiezen bewust een drone <strong>onder de 250 gram</strong>: die valt in de lichtste klasse, met de soepelste regels en de laagste drempel.</p>

<h2>Waar mag je niet vliegen?</h2>
<p>Ook met alle papieren op orde zijn er plekken waar je niet mag: rond luchthavens (controlezones), boven mensenmenigtes en evenementen, en in veel natuurgebieden. Check vóór elke vlucht een actuele no-fly-kaart — de overheid verwijst naar de officiële drone-kaart/app. Bij twijfel: niet vliegen.</p>

<h2>Verzekering</h2>
<p>Een aansprakelijkheidsverzekering (WA) die dronevliegen dekt, is sterk aan te raden en in sommige situaties verplicht. Controleer of je particuliere aansprakelijkheidsverzekering drones dekt, of sluit een aparte dronedekking af — ook voor vluchten in het buitenland.</p>

<h2>En in het buitenland?</h2>
<p>Binnen de EU gelden dezelfde categorieën, dus je RDW-registratie en EU-dronebewijs werken in de hele EU. Buiten de EU (zoals op Curaçao) gelden eigen, lokale regels — daar moet je je vaak apart registreren. Lees daarvoor de <a href="/curacao/">Curaçao-gids</a> met de specifieke eisen voor dat eiland.</p>

<div class="callout tip"><div class="c-label">In het kort</div><p>Registreer je (≥250 g of camera), haal je A1/A3-bewijs als je drone 250 gram of meer weegt, blijf onder 120 m en in zicht, en check de no-fly-kaart. Een lichte drone onder 250 gram scheelt je de meeste regels.</p></div>

<p>Klaar om te vliegen? Plan je shoot op het mooiste licht met de <a href="/gouden-uur/">gouden-uur-planner</a> en loop je <a href="/gereedschap/">pre-flight checklist</a> af.</p>
`
  },
  {
    slug: 'onderwater-action-instellingen',
    cat: 'Onderwater',
    ph: 'r',
    title: 'Onder water met de GoPro Hero 12: instellingen & welk filter wanneer',
    excerpt: 'Met de juiste filter en instellingen haal je onder water de kleuren terug — koraal, schildpadden en helder blauw. Welk MojoGear-filter je wanneer gebruikt, plus de beste GoPro Hero 12-instellingen voor duiken en snorkelen.',
    date: '2026-06-29',
    readMin: 8,
    body: `
<p>Boven water draait alles om je ND-filter; onder water draait alles om kleur. Water "eet" kleur op — rood verdwijnt als eerste, al na een paar meter, daarna oranje en geel. Daardoor wordt alles blauwgroen. Met het juiste kleurfilter en de juiste instellingen op je GoPro Hero 12 haal je die kleuren terug en film je koraal, schildpadden en helder water zoals je het zelf ziet.</p>

<div class="fbox">
<div class="fbox__col fbox__col--yes"><span class="fbox__h">✓ Wél een filter</span><p>Daglicht, op 5–25 m diepte:</p><ul><li><strong>Blauw zeewater</strong> → rood filter</li><li><strong>Groen / zoet water</strong> → magenta filter</li></ul></div>
<div class="fbox__col fbox__col--no"><span class="fbox__h">✕ Geen filter</span><ul><li>Heel ondiep / snorkelen (tot ~5 m)</li><li>Dieper dan ~25 m of weinig licht</li><li>Met een duiklamp of 's nachts</li></ul></div>
</div>
<p class="fbox-rule"><strong>Vuistregel:</strong> daglicht + 5–25 m + blauw/groen water → filter. Heel ondiep, heel diep, of een lamp erbij → geen filter. Mét filter: witbalans op Auto.</p>

<div class="callout tip"><div class="c-label">Belangrijk</div><p>Dieptes en specs verschillen per behuizing en filterset. Bevestig de actuele dieptegrenzen altijd in de handleiding vóór je het water in gaat — en laat veiligheid (je duik, je adem, het zeeleven) altijd vóór de opname gaan. Spoel je behuizing na elke duik na in zoet water.</p></div>

<h2>Welk filter wanneer? (MojoGear-set)</h2>
<p>De MojoGear-filterset heeft drie kleuren, elk voor een ander soort water en een andere diepte. Het filter herstelt optisch het verdwenen rood, zodat je beeld er weer natuurlijk uitziet. De vuistregel:</p>
<ul>
<li><strong>Roze filter — ondiep / snorkelen (0,5–5 m).</strong> Voor de bovenste laag water, ongeacht of het zee of zoet water is. Ideaal bij snorkelen en zwemmen vlak onder de oppervlakte.</li>
<li><strong>Rood filter — blauw zeewater (5–25 m).</strong> Het klassieke duikfilter voor heldere tropische zee en oceaan. Dit gebruik je op Curaçao.</li>
<li><strong>Magenta (paars) filter — groen / zoet water (5–25 m).</strong> Voor meren, plassen en groenig water, waar een rood filter te veel zou doen.</li>
</ul>

<div class="callout tip"><div class="c-label">Vuistregel</div><p>Ondieper dan ~5 m? Vaak heb je geen filter nodig — er is dan nog genoeg rood licht. Dieper dan ~5 m: kies het filter dat bij het water past (rood = blauw, magenta = groen). De MojoGear-filters passen <strong>alleen op de MojoGear-behuizing</strong>, niet op de originele GoPro-case.</p></div>

<h2>Wanneer juist géén filter</h2>
<ul>
<li><strong>Heel ondiep (tot ~5 m).</strong> Genoeg daglicht en rood aanwezig; een filter maakt het beeld dan alleen donkerder en roder dan nodig.</li>
<li><strong>Heel diep of bij weinig licht (richtlijn vanaf ~25 m).</strong> Er is dan te weinig rood licht over om te herstellen; een filter helpt niet meer. Gebruik dan een duiklamp.</li>
<li><strong>Met een duiklamp of bij nachtduiken.</strong> De lamp geeft vol-spectrum wit licht; mét een kleurfilter krijg je dan een onnatuurlijke rode of magenta zweem. Lamp aan = filter eraf. Houd er rekening mee dat het bereik van een lamp meestal maar 1 à 2 meter is — fijn voor close-ups van koraal en macro.</li>
</ul>

<h2>Witbalans: mét filter op Auto, zonder filter handmatig</h2>
<p>Dit is de instelling waar de meeste mensen het mis hebben. <strong>Gebruik je een kleurfilter (zoals het rode MojoGear-filter), zet de witbalans dan op Auto.</strong> Het filter doet de kleurcorrectie optisch, dus de camera mag de rest zelf afmaken — dat geeft het mooiste resultaat. Film je <strong>zónder</strong> filter, zet de witbalans dan juist handmatig vast en hoger naarmate je dieper gaat (niet op auto, want dan blijft de kleur tijdens een clip verspringen). Kort: filter erop → witbalans Auto; geen filter → witbalans handmatig.</p>

<h2>GoPro Hero 12 — instellingen voor duiken (tot 25 m)</h2>
<p>Dit zijn de aanbevolen instellingen voor wijdhoek-duikvideo, op basis van de Backscatter-duikgids. Zet de camera eerst op <strong>Bediening: Pro</strong> en <strong>Videomodus: Hoogste kwaliteit</strong>, en sla het op als vaste preset.</p>
<ul>
<li><strong>Beeldverhouding 16:9 · Resolutie 4K</strong> (of 5.3K als je computer het aankan).</li>
<li><strong>Framerate</strong> — in Nederland staat je camera op <strong>50 Hz (PAL)</strong>, dus film op <strong>50 fps</strong> algemeen, en <strong>25 fps</strong> bij weinig licht of dieper (tragere sluiter = helderder en minder ruis). 50 fps geeft soepel beeld én ruimte voor lichte slow-motion.</li>
<li><strong>Lens: Wide</strong> (niet breder — SuperView vervormt te veel) · <strong>HyperSmooth: Boost</strong> · Zoom 1.0×.</li>
<li><strong>ProTune aan:</strong> Sluiter Auto · <strong>EV-compensatie −0,5</strong> (voorkomt uitgebeten zonlicht aan het oppervlak) · <strong>Witbalans Auto</strong> (mét filter) · ISO min 100, max 6400 · Scherpte Medium · Kleur Natural · BitRate Hoog. Zet <strong>10-bit</strong> aan als je de beelden later gaat kleuren.</li>
<li><strong>GPS uit</strong> — dat werkt niet op diepte en kost alleen accu.</li>
<li><strong>Geen ND-filter.</strong> Boven water houd je met ND je sluiter traag in de felle zon; onder water is het licht al gedempt en bewegen je onderwerpen — laat de sluiter z'n werk doen.</li>
</ul>
<p>Tot ongeveer 24–25 meter werkt het rode filter prima in blauw water. Wordt het dieper, donkerder of troebel, dan is er te weinig rood licht over om te herstellen: haal het filter eraf en gebruik een duiklamp voor de kleur.</p>

<h2>De MojoGear-behuizing</h2>
<p>De waterdichte MojoGear-behuizing beschermt je Hero 12 tot zo'n 50 meter diepte. Een paar dingen om op te letten:</p>
<ul>
<li><strong>Anti-condens-inserts</strong> in de behuizing voorkomen beslagen beelden bij temperatuurverschil tussen lucht en water.</li>
<li><strong>Controleer de O-ring</strong> (afdichtrubber) op haartjes en zand vóór je sluit — dat is je waterdichtheid.</li>
<li><strong>Spoel na</strong> in zoet water en laat drogen; zout en zand zijn de grootste vijanden.</li>
<li>De filters klikken op deze behuizing; wissel ze aan land, met droge handen.</li>
</ul>

<h2>Praktische tips</h2>
<ul>
<li><strong>Kom dichtbij.</strong> Water vermindert kleur, contrast en scherpte razendsnel. Hoe minder water tussen jou en je onderwerp, hoe beter het beeld.</li>
<li><strong>Zon in je rug.</strong> Dan valt het licht op je onderwerp en komen de kleuren het mooist terug. Blijf ondiep voor het meeste rood.</li>
<li><strong>Rustige bewegingen.</strong> Langzaam zweven en pannen oogt filmischer — en je verstoort het zeeleven minder.</li>
<li><strong>Respecteer de natuur.</strong> Raak koraal en dieren niet aan en houd afstand. Het mooiste beeld is er één waarbij niets verstoord wordt.</li>
</ul>

<div class="callout tip"><div class="c-label">Onthoud dit</div><p>Filter bij het water (rood = blauw, magenta = groen, roze = ondiep), filter eraf bij een lamp of heel ondiep, witbalans op Auto zolang je het filter gebruikt, en kom dichtbij. Dat zijn de dingen die je onderwaterbeelden het meest verbeteren.</p></div>

<p>Op zoek naar een plek om dit te oefenen? Bij <a href="/curacao/">Playa Grandi op Curaçao</a> zwem je zo tussen de zeeschildpadden in helder blauw water — perfect voor je rode filter. En wil je je film- en kleurwerk naar een hoger niveau tillen, kijk dan bij <a href="/cursussen/">de gratis cursussen</a>.</p>
`
  },
  {
    slug: 'cinematische-besturing-veiligheid-mini-5-pro',
    cat: 'Drone',
    ph: 'd',
    title: 'Vloeiender vliegen: de besturings- & veiligheidsinstellingen van de DJI Mini 5 Pro',
    excerpt: 'De camera-instellingen bepalen hoe je beeld eruitziet; de besturings- en veiligheidsinstellingen bepalen hoe vloeiend en veilig je vliegt. Dit zijn de instellingen die je shots rustiger maken.',
    date: '2026-06-29',
    readMin: 7,
    body: `
<p>Mooie drone-shots komen niet alleen uit de juiste camera-instellingen. Minstens zo belangrijk is hoe de drone reageert op je sticks: vliegt hij rustig en voorspelbaar, of schiet hij bij elke beweging vooruit? Met een paar instellingen worden je beelden meteen vloeiender — en je vluchten veiliger. Hieronder de instellingen zoals dronepiloot Haye Kesteloo (Air Photography / DroneXL) ze gebruikt op de DJI Mini 5 Pro.</p>

<div class="callout tip"><div class="c-label">Goed om te weten</div><p>Dit zijn voorkeuren, geen wetten — experimenteer gerust. Bang om iets te verpesten? Je kunt altijd op “huidige instellingen resetten” tikken en alles staat weer op de fabrieksinstelling.</p></div>

<h2>Vlieg langzamer in Cine-modus</h2>
<p>In de Cine-modus staat de horizontale snelheid standaard op <strong>6 m/s</strong>, en dat is vaak nét te snel voor rustige beelden. Zet hem terug naar ongeveer <strong>3 m/s</strong> (in de gain- &amp; expo-instellingen). Je shots worden er meteen kalmer en filmischer van.</p>

<h2>Rustiger draaien voor strakke orbits</h2>
<p>De maximale hoeksnelheid — hoe snel de drone om zijn as draait — staat standaard op <strong>30°/s</strong>. Zet hem op <strong>20–25°/s</strong>, dan draait de drone langzamer en houd je veel meer controle over orbit-shots en pans.</p>

<h2>Verzacht de stickgevoeligheid (expo)</h2>
<p>Met de expo-instelling bepaal je hoe gevoelig het midden van de sticks is. Verzacht dat een beetje, zodat een klein duwtje niet meteen beweging geeft. Je moet dan iets bewuster duwen voordat de drone reageert — en juist dat geeft die mooie, vloeiende langzame bewegingen. Hoeveel je verzacht is persoonlijk; probeer wat bij jouw hand past.</p>

<h2>Gimbal-snelheid omlaag</h2>
<p>Zet de <strong>gimbal-snelheid op 11–12</strong> voor rustige kantelbewegingen die mooi samensmelten met je vlucht. De tilt-smoothness laat je gewoon op de standaard (8) staan.</p>

<h2>Cruise control: hands-free vloeiende shots</h2>
<p>Cruise control laat de drone op een vaste snelheid doorvliegen terwijl je de sticks loslaat — ideaal voor lange, supersoepele shots. Je moet het eerst aan een knop toewijzen (bijvoorbeeld <strong>C2</strong>). Geef je vlucht een zetje met de sticks, druk op de knop, en de drone vliegt rustig door zonder jouw input.</p>

<h2>Veiligheid: obstakelvermijding</h2>
<p>Houd de obstakelvermijding meestal op <strong>Bypass</strong> (de drone zoekt zelf een veilige route om obstakels heen) of op <strong>Brake</strong> (hij stopt). Alleen voor een echte close-proximity-shot zet je 'm even uit — maar wees voorzichtig: het is zo gebeurd dat je vergeet dat hij uit staat.</p>

<h2>Return-to-Home: Optimal of Preset</h2>
<p>Voor de terugkeerfunctie heb je twee opties:</p>
<ul>
<li><strong>Optimal</strong> — de drone navigeert slim terug en kan onder obstakels door en strak om dingen heen vliegen. Ideaal in open gebied of bij grote, goed zichtbare obstakels.</li>
<li><strong>Preset</strong> — de drone klimt eerst recht omhoog naar de ingestelde hoogte, vliegt in een rechte lijn terug en daalt boven het startpunt. Handig in lastige omgevingen of bij kale bomen, waar dunne takken en draden lastig te zien zijn.</li>
</ul>
<p><strong>Stel altijd je Return-to-Home-hoogte in.</strong> Standaard staat die op 100 m, vaak veel te hoog. Moet de drone alleen wat bomen ontwijken, dan is <strong>60 m</strong> ruim genoeg. Let op: bij een noodterugvlucht met bijna lege accu is Preset minder efficiënt, omdat hij eerst die hele hoogte in klimt.</p>

<div class="callout tip"><div class="c-label">Kort samengevat</div><p>Cine-snelheid ~3 m/s, draaisnelheid 20–25°/s, gimbal 11–12, stickgevoeligheid zachter en cruise control op een knop — dat zijn de instellingen die je beelden het meest vloeiend maken. En zet je RTH-hoogte goed.</p></div>

<p>De bijbehorende camera-instellingen (resolutie, ND, witbalans, kleurprofiel, scherpte) lees je in <a href="/artikelen/pro-instellingen-uitgelegd/">Alle Pro-instellingen uitgelegd</a>. En je leert alles stap voor stap toepassen in <a href="/cursus/vluchtfilmer/">De Vluchtfilmer</a> — gratis. Met dank aan de instellingen van Haye Kesteloo (Air Photography / DroneXL).</p>
`
  }
];
