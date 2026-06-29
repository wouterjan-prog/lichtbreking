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

<h2>Witbalans — handmatig vastzetten</h2>
<p>Witbalans bepaalt of je beeld warm (geel) of koel (blauw) oogt, gemeten in Kelvin. De grote valkuil is <strong>auto-witbalans</strong>: die past zich tijdens een shot aan, dus midden in een draai verspringt de kleur ineens. Dat ziet er onrustig uit en is in de montage lastig te repareren.</p>
<ul>
<li><strong>Zet de witbalans handmatig vast.</strong> Buiten bij daglicht zit je rond <strong>5500 K</strong>.</li>
<li><strong>Kunstlicht binnen</strong> (winkels, lampen) is warmer — daar kies je rond <strong>3200 K</strong>.</li>
<li>Hogere Kelvin = koeler beeld, lagere Kelvin = warmer. Kies wat bij het licht past en laat het staan.</li>
</ul>

<h2>Kleurprofiel — Normal of D-Log</h2>
<p>Het kleurprofiel bepaalt hoeveel kleur en contrast de camera al "inbakt".</p>
<ul>
<li><strong>Normal (10-bit)</strong> — het beeld is meteen mooi en bruikbaar zonder bewerken. Voor de meeste mensen de beste keuze.</li>
<li><strong>D-Log / D-Log M</strong> — een vlak, grijzig profiel dat veel meer detail in lichte en donkere delen bewaart. Het geeft je meer ruimte om te kleuren, maar het is verplicht om het achteraf te bewerken (color grading). Kies dit alléén als je echt gaat nabewerken.</li>
</ul>

<h2>Scherpte & ruisreductie</h2>
<ul>
<li><strong>Scherpte −1</strong> — de standaardscherpte van camera's is vaak te hard en oogt "video-achtig". Iets zachter is filmischer, en scherpte voeg je later makkelijk toe; te veel scherpte krijg je er nooit meer uit.</li>
<li><strong>Ruisreductie 0</strong> — agressieve ruisonderdrukking veegt fijne details weg en geeft een "plastic" look. Liever laag houden.</li>
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
<p>Heb je een drone van <strong>250 gram of zwaarder</strong>, óf een drone <strong>met een camera</strong> (ook lichter dan 250 gram), dan moet je je als exploitant registreren bij de RDW. Je krijgt een <strong>exploitantnummer</strong> dat je op je drone(s) plakt. De kosten liggen rond de €23 voor de eerste registratie en €13 per jaar voor verlenging. Een drone onder de 250 gram <em>zonder</em> camera hoef je niet te registreren.</p>

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
    title: 'Onder water filmen: beste instellingen voor duiken, snorkelen & zwemmen',
    excerpt: 'Met een GoPro Hero 12 of DJI Osmo 360 leg je het rif, de schildpadden en het turquoise water prachtig vast — mits je witbalans en behuizing kloppen. Dit zijn de instellingen.',
    date: '2026-06-29',
    readMin: 8,
    body: `
<p>Boven water draait alles om je ND-filter; onder water draait alles om kleur. Water "eet" kleur op — rood verdwijnt als eerste, al na een paar meter, daarna oranje en geel. Daardoor wordt alles blauwgroen. Met de juiste instellingen op je GoPro Hero 12 of DJI Osmo 360 haal je die kleuren terug en film je het rif, de schildpadden en het heldere water zoals je het zelf ziet.</p>

<div class="callout tip"><div class="c-label">Belangrijk</div><p>Specs en dieptes verschillen per camera en behuizing. Bevestig de actuele dieptegrenzen en instellingen altijd in de handleiding van je camera vóór je het water in gaat — en laat veiligheid (je duik, je adem, het zeeleven) altijd vóór de opname gaan.</p></div>

<h2>De gouden regel: witbalans handmatig vast</h2>
<p>Net als bij je drone is de grootste valkuil <strong>auto-witbalans</strong>. Onder water blijft de camera dan continu bijsturen, waardoor de kleur in één clip alle kanten op verspringt. Zet je witbalans dus vast:</p>
<ul>
<li><strong>Snorkelen / ondiep zwemmen (tot ~10 m)</strong> — kies een vaste witbalans rond <strong>5500 K</strong>. Hier is nog veel rood en zonlicht aanwezig.</li>
<li><strong>Dieper duiken (vanaf ~10 m)</strong> — kies de hoogste/maximale witbalans-instelling om het verdwenen rood te compenseren.</li>
</ul>

<h2>GoPro Hero 12 — onderwater-instellingen</h2>
<ul>
<li><strong>Resolutie 4K</strong> (of 5.3K) — scherp, goed te bewerken en deelbaar. 4K is voor de meeste duikers de beste balans.</li>
<li><strong>Framerate</strong> — 30 fps bij minder licht (dieper, troebel, eind van de dag); 60 fps in helder, zonnig tropisch water voor vloeiende beweging en lichte slow-motion.</li>
<li><strong>Witbalans</strong> — vast (zie hierboven), nooit auto.</li>
<li><strong>Rood filter</strong> — alleen nuttig in ondiep, helder blauw water met alleen daglicht. De native onderwater-witbalans van de Hero 12 is zo goed dat een rood filter vaak overbodig is — en in groen of troebel water, heel ondiep, bij nachtduiken of met duiklampen geeft het juist een rare rode zweem. Dan: geen filter.</li>
<li><strong>Lens Wide · HyperSmooth (Boost) aan · ISO 100–6400 · Scherpte Medium · Kleur Natural</strong> (of Flat als je later kleurt). Zet Protune aan zodat je deze instellingen kunt regelen.</li>
</ul>

<h2>DJI Osmo 360 — onderwater-instellingen</h2>
<p>De Osmo 360 is een 360-camera: hij filmt met twee lenzen alles om je heen in <strong>8K/30</strong>, en je kiest je kader (en virtuele camerabeweging) pas achteraf. Onder water heeft dat een groot voordeel: je hoeft niet te richten — een langszwemmende schildpad mis je nooit meer.</p>
<ul>
<li><strong>Behuizing is een must.</strong> De camera zelf is IP68 en tot ~10 m waterdicht, maar door de bolle fisheye-lenzen vervormt het beeld onder water en mislukt het samenvoegen (stitchen). Gebruik de speciale waterdichte behuizing — daarmee film je tot ongeveer 50 m diep en blijft de 360-stitch netjes.</li>
<li><strong>8K/30 360</strong> voor maximale resolutie; je snijdt er achteraf een scherp 4K-kader uit.</li>
<li><strong>Witbalans handmatig vast</strong> — zelfde logica als bij de GoPro.</li>
<li>De grote 1-inch sensoren en f/1.9 geven veel dynamiek en goed beeld bij weinig licht — fijn op diepte.</li>
</ul>

<h2>Geen ND nodig onder water</h2>
<p>Boven water gebruik je een ND-filter om je sluiter traag te houden in de felle zon. Onder water is dat niet nodig: het licht is al gedempt en je onderwerpen bewegen. Laat je sluiter z'n werk doen en richt je energie op witbalans, dichtbij komen en stabiel filmen.</p>

<h2>Praktische tips</h2>
<ul>
<li><strong>Kom dichtbij.</strong> Water vermindert kleur, contrast en scherpte razendsnel. Hoe minder water tussen jou en je onderwerp, hoe beter het beeld.</li>
<li><strong>Zon in je rug.</strong> Dan valt het licht op je onderwerp en komen de kleuren het mooist terug. Blijf ondiep voor het meeste rood.</li>
<li><strong>Anti-condens-inserts</strong> in je behuizing voorkomen beslagen beelden bij temperatuurverschil.</li>
<li><strong>Rustige bewegingen.</strong> Langzaam pannen en zweven oogt filmischer — en je verstoort het zeeleven minder.</li>
<li><strong>Respecteer de natuur.</strong> Raak koraal en dieren niet aan en houd afstand. Het mooiste beeld is er één waarbij niets verstoord wordt.</li>
</ul>

<div class="callout tip"><div class="c-label">Onthoud dit</div><p>Witbalans vast, dichtbij blijven en zon in je rug — dat zijn de drie dingen die je onderwaterbeelden het meest verbeteren, op elke camera.</p></div>

<p>Op zoek naar een plek om dit te oefenen? Bij <a href="/curacao/">Playa Grandi op Curaçao</a> zwem je zo tussen de zeeschildpadden. En wil je je drone- en filmwerk naar een hoger niveau tillen, kijk dan bij <a href="/cursussen/">de gratis cursussen</a>.</p>
`
  }
];
