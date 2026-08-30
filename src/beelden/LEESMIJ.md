# Originele beelden

Zet hier je onbewerkte foto's neer. Astro maakt er tijdens de build zelf
WebP en AVIF van, in meerdere breedtes, met een `srcset` zodat een telefoon
geen bestand van 4000 pixels breed hoeft te laden.

- `werk/` voor alles wat in het raster en de verticale scroller komt
- `films/` voor de stilstaande beelden (posters) bij een film

Daarna verwijs je er in `src/data/shots.js` naar met alleen de bestandsnaam:

```js
{ slug: 'kustlijn', titel: 'Kustlijn', ..., bestand: 'kustlijn-01.jpg' }
```

Begint het pad met een `/`, dan wordt het als een bestand uit `public/`
behandeld en gaat de bewerking er niet overheen. Handig voor uitzonderingen,
maar de map hierboven is bijna altijd de betere keuze.

JPEG, PNG, WebP, AVIF en TIFF kunnen allemaal als bron dienen.
