# Gereedschap

Drie kleine Swift-programma's om cameramateriaal webklaar te maken. Ze gebruiken
alleen AVFoundation, dat op elke Mac aanwezig is, dus er hoeft niets
geïnstalleerd te worden.

```bash
cd tools
swiftc -O -o lus-maken             lus-maken.swift
swiftc -O -o bewegingsonscherpte   bewegingsonscherpte.swift
swiftc -O -o video-omzetten        video-omzetten.swift
swiftc -O -o frame-pakken          frame-pakken.swift
```

## Een nieuwe hero-video

`lus-maken` knipt een stuk uit de bron en laat het einde overvloeien in het
begin, zodat de lus geen zichtbare snit heeft.

```
lus-maken <bron> <uit> <codec> <breedte> <bitrate> <start> <duur> <overvloei>
```

De vier bestanden die de site verwacht:

```bash
B="/pad/naar/bron.mp4"
./lus-maken "$B" ../public/video/hero-2160.hevc.mp4 hevc 3840 26000000 5.0 11.0 1.0
./lus-maken "$B" ../public/video/hero-2160.mp4      h264 3840 32000000 5.0 11.0 1.0
./lus-maken "$B" ../public/video/hero-1440.hevc.mp4 hevc 2560 10000000 5.0 11.0 1.0
./lus-maken "$B" ../public/video/hero-1440.mp4      h264 2560 14000000 5.0 11.0 1.0
./frame-pakken ../public/video/hero-2160.hevc.mp4 poster.jpg 0.02 2560 0.95
python3 -c "from PIL import Image; Image.open('poster.jpg').convert('RGB').save('../public/video/poster.webp','WEBP',quality=76,method=6)"
```

Neem het posterbeeld altijd van het **eerste** frame van de lus, zodat er geen
sprong zichtbaar is op het moment dat de video begint te spelen.

## Het goede stuk kiezen

Twee dingen bepalen welk stuk werkt:

- **Beweging.** Een drone die nog optrekt geeft een onrustige lus. Meet de
  snelheid door frames op vaste afstanden te pakken en het verschil tussen
  opeenvolgende frames te vergelijken. Kies een stuk waar die waarde vlak ligt.
- **Inhoud.** Maak een contactblad van één frame per seconde en kijk waar het
  beeld het sterkst is.

Bij Playa Grandi liep de snelheid op van 5,2 naar 11,5 in de eerste negen
seconden; vanaf ongeveer 5 seconden ligt het tempo vast. Vandaar `start 5.0`.

## Waarom vier bestanden

Twee vragen bepalen wat een bezoeker krijgt: kan zijn browser HEVC, en hoeveel
beeldpunten heeft zijn scherm echt.

- **Resolutie weegt zwaarder dan bitrate.** Bij hetzelfde bestandsformaat is
  2160p duidelijk scherper dan 1440p, want op een scherm met dubbele
  pixeldichtheid wordt 1440p nog opgeblazen en dat zie je meteen in water.
- **HEVC haalt bij ongeveer 60% van de bitrate dezelfde kwaliteit** als H.264.
  Wie het niet kan decoderen valt terug op de H.264-versie.
- **Bewegend water is het zwaarste dat je een encoder geeft.** Gemeten op deze
  clip ligt het omslagpunt rond 18 tot 26 Mbit/s voor HEVC op 2160p. Onder de
  10 Mbit/s worden de rimpels zichtbaar weggepoetst. Kies dus niet zuinig.

Het geluidsspoor gaat er bewust af. Dronebeeld heeft doorgaans een leeg spoor.
Zit er wél bruikbaar geluid op, dan moet dit gereedschap uitgebreid worden en kan
`hero.videoHeeftGeluid` in `src/data/site.js` op `true`.

## Testen

Video's spelen niet in `python3 -m http.server`: die kent geen Range-verzoeken.
Gebruik een server die dat wel doet, anders lijkt het alsof de video stilstaat
terwijl er niets mis is.

## Tempo controleren

`tempo.swift` (in de scratchpad van die sessie, zo weer te maken) leest alle
tijdstempels uit een bestand en laat zien of de afstanden gelijk zijn. Handig om
uit te sluiten dat schokkerigheid uit de omzetting komt.

### Let op de beeldsnelheid van de export

Dit heeft ons een hele ronde gekost. De eerste export uit DJI stond op **24 fps**
terwijl het origineel 30 fps was. Bij die omzetting verdwijnt ongeveer één op de
vijf beeldjes, en dat schokt zichtbaar. Het origineel was gewoon vloeiend.

Controleer dus altijd eerst de beeldsnelheid van het aangeleverde bestand, en
vraag om een export op de oorspronkelijke snelheid als die afwijkt. 30 fps past
bovendien exact twee keer in een 60Hz-scherm; 24 niet.

Let ook op de tijdschaal bij het schrijven. Zonder `movieTimeScale` en
`mediaTimeScale` schrijft AVFoundation op 600, en dan past 29,97 fps er niet in:
dan krijgen enkele beeldjes 35,00 ms in plaats van 33,37.

Een ND-filter waarmee de sluitertijd rond 1/50 blijft geeft natuurlijke
bewegingsonscherpte en maakt beweging nog rustiger. Deze opname stond op
1/4000, dus messcherpe beeldjes zonder enige bewegingsonscherpte.

## Bewegingsonscherpte tegen 24p-schok

Is de bron 24 fps met scherpe beeldjes, dan maskeert een beetje kunstmatige
bewegingsonscherpte de schok. `bewegingsonscherpte` mengt elk beeldje met het
vorige en het volgende, symmetrisch zodat het beeld niet in de tijd verschuift,
en met wraparound zodat de lus heel blijft.

```
bewegingsonscherpte <lus-in> <uit> <codec> <breedte> <bitrate> <sterkte>
```

Werk in twee stappen: maak eerst met `lus-maken` een tussenversie op hoge
bitrate (bijvoorbeeld 4K HEVC op 60 Mbit/s), en draai daar de onscherpte
overheen naar de vier eindbestanden.

Gemeten op deze clip:

| sterkte | verschil tussen opeenvolgende beeldjes | oordeel |
| --- | --- | --- |
| 0 | 11,1 | schokt zichtbaar |
| 0,12 | 8,3 | boot blijft scherp, water iets zachter |
| 0,15 | ongeveer 7,7 | gekozen middenweg |
| 0,18 | 6,9 | duidelijk zachter water |

Boven 0,20 gaat het zichtbaar ten koste van scherpte.
