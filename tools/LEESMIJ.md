# Gereedschap

Twee kleine Swift-programma's om cameramateriaal webklaar te maken. Ze gebruiken
alleen AVFoundation, dat op elke Mac aanwezig is, dus er hoeft niets
geïnstalleerd te worden.

```bash
cd tools
swiftc -O -o video-omzetten video-omzetten.swift
swiftc -O -o frame-pakken frame-pakken.swift
```

## Een nieuwe hero-video

```bash
./video-omzetten "/pad/naar/bron.mp4" ../public/video/hero.mp4      h264 1920 2600000
./video-omzetten "/pad/naar/bron.mp4" ../public/video/hero.hevc.mp4 hevc 1920 1600000
./frame-pakken   ../public/video/hero.mp4 poster.jpg 0.05 1920 0.82
```

Zet daarna het posterbeeld om naar WebP (dat scheelt ongeveer twee derde):

```bash
python3 -c "from PIL import Image; Image.open('poster.jpg').convert('RGB').save('../public/video/poster.webp','WEBP',quality=80,method=6)"
```

Neem het posterbeeld altijd van het **eerste** frame, zodat er geen sprong
zichtbaar is op het moment dat de video begint te spelen.

## Waarom twee bestanden

HEVC haalt bij ongeveer 60% van de bitrate dezelfde kwaliteit als H.264, gemeten
op dit materiaal. Safari en nieuwere Chrome nemen die versie; de rest valt terug
op H.264. Beide krijgen fast start mee, zodat afspelen begint voordat het hele
bestand binnen is.

Het geluidsspoor gaat er bewust af. Dronebeeld heeft doorgaans een leeg spoor, en
de hero speelt toch zonder geluid. Zit er wél bruikbaar geluid op, dan moet dit
gereedschap uitgebreid worden en kan `hero.videoHeeftGeluid` in
`src/data/site.js` op `true`.
