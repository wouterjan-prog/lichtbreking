#!/usr/bin/env python3
"""
Leest de .SRT die DJI naast elke opname zet en maakt er bruikbare
opnamegegevens van: wanneer, waar, hoe hoog en met welke instellingen.

    python3 tools/srt-lezen.py <bestand.SRT> [--slug kustlijn] [--plek "Playa Grandi"]

Belangrijk over de tijd: de klok in het bestand is die van de controller, niet
die van de plek waar je stond. Stond je telefoon op Nederlandse tijd terwijl je
op Curacao filmde, dan loopt die klok zes uur voor (in de zomer). Daarom rekent
dit script om, en toont het beide tijden zodat je het kunt controleren.
"""

import argparse
import datetime
import math
import re
import sys

try:
    from zoneinfo import ZoneInfo
except ImportError:
    print("Python 3.9 of nieuwer nodig voor tijdzones."); sys.exit(1)

KOMPAS = ['noord', 'noordoost', 'oost', 'zuidoost', 'zuid', 'zuidwest', 'west', 'noordwest']


def lees(pad):
    tekst = open(pad, encoding='utf-8', errors='replace').read()
    blokken = re.findall(
        r'FrameCnt:\s*(\d+),\s*DiffTime:\s*(\d+)ms\s*\n([\d\-: .]+)\n(.*?)</font>',
        tekst, re.S)
    if not blokken:
        raise SystemExit('Geen DJI-gegevens gevonden in dit bestand.')

    def veld(s, naam, cast=float):
        m = re.search(rf'(?<![a-z_]){naam}:\s*([^\]\s]+)', s)
        if not m:
            return None
        try:
            return cast(m.group(1))
        except ValueError:
            return m.group(1)

    rijen = []
    for cnt, _diff, klok, rest in blokken:
        rijen.append({
            'n': int(cnt),
            'klok': klok.strip()[:19],
            'iso': veld(rest, 'iso'),
            'sluiter': veld(rest, 'shutter', str),
            'fnum': veld(rest, 'fnum'),
            'ev': veld(rest, 'ev'),
            'kleur': veld(rest, 'color_md', str),
            'brandpunt': veld(rest, 'focal_len'),
            'lat': veld(rest, 'latitude'),
            'lon': veld(rest, 'longitude'),
            'rel': veld(rest, 'rel_alt'),
            'abs': veld(rest, 'abs_alt'),
            'ct': veld(rest, 'ct'),
        })
    return rijen


def afstand(a, b):
    R = 6371000.0
    p1, p2 = math.radians(a[0]), math.radians(b[0])
    dp = math.radians(b[0] - a[0])
    dl = math.radians(b[1] - a[1])
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def peiling(a, b):
    p1, p2 = math.radians(a[0]), math.radians(b[0])
    dl = math.radians(b[1] - a[1])
    x = math.sin(dl) * math.cos(p2)
    y = math.cos(p1) * math.sin(p2) - math.sin(p1) * math.cos(p2) * math.cos(dl)
    return (math.degrees(math.atan2(x, y)) + 360) % 360


def dagdeel(uur):
    if uur < 6: return 'nacht'
    if uur < 9: return 'vroege ochtend'
    if uur < 12: return 'ochtend'
    if uur < 16: return 'middag'
    if uur < 19: return 'late middag'
    if uur < 21: return 'gouden uur en schemer'
    return 'avond'


def main():
    p = argparse.ArgumentParser()
    p.add_argument('bestand')
    p.add_argument('--klok-tz', default='Europe/Amsterdam',
                   help='tijdzone waarop de controller stond (standaard Europe/Amsterdam)')
    p.add_argument('--plek-tz', default='America/Curacao',
                   help='tijdzone van de plek waar je filmde (standaard America/Curacao)')
    p.add_argument('--slug', default='naam-van-het-beeld')
    p.add_argument('--plek', default=None, help='naam van de plek, komt in het fragment')
    a = p.parse_args()

    rijen = lees(a.bestand)
    eerste, laatste = rijen[0], rijen[-1]

    t0 = datetime.datetime.strptime(eerste['klok'], '%Y-%m-%d %H:%M:%S')
    t1 = datetime.datetime.strptime(laatste['klok'], '%Y-%m-%d %H:%M:%S')
    duur = (t1 - t0).total_seconds()
    lokaal = t0.replace(tzinfo=ZoneInfo(a.klok_tz)).astimezone(ZoneInfo(a.plek_tz))

    isos = [r['iso'] for r in rijen if r['iso'] is not None]
    cts = [r['ct'] for r in rijen if r['ct'] is not None]
    rels = [r['rel'] for r in rijen if r['rel'] is not None]
    abss = [r['abs'] for r in rijen if r['abs'] is not None]
    sluiters = sorted({r['sluiter'] for r in rijen if r['sluiter']})

    heen = afstand((eerste['lat'], eerste['lon']), (laatste['lat'], laatste['lon']))
    route = sum(afstand((rijen[i]['lat'], rijen[i]['lon']), (rijen[i + 1]['lat'], rijen[i + 1]['lon']))
                for i in range(len(rijen) - 1))
    richting = peiling((eerste['lat'], eerste['lon']), (laatste['lat'], laatste['lon']))

    print(f"bestand   : {a.bestand.split('/')[-1]}")
    print(f"beeldjes  : {len(rijen)} ({len(rijen)/max(duur,1):.0f} per seconde, {duur:.0f} s)")
    print()
    print('WANNEER')
    print(f"  klok in het bestand ({a.klok_tz}) : {t0:%d-%m-%Y %H:%M:%S}")
    print(f"  werkelijke tijd ter plaatse       : {lokaal:%d-%m-%Y %H:%M:%S} ({a.plek_tz})")
    print(f"  dagdeel                           : {dagdeel(lokaal.hour)}")
    print()
    print('WAAR')
    print(f"  start          : {eerste['lat']:.6f}, {eerste['lon']:.6f}")
    print(f"  eind           : {laatste['lat']:.6f}, {laatste['lon']:.6f}")
    print(f"  verplaatsing   : {route:.0f} m gevlogen, {heen:.0f} m hemelsbreed")
    print(f"  richting       : {richting:.0f} graden, ongeveer {KOMPAS[round(richting/45) % 8]}")
    if rels:
        print(f"  hoogte         : {min(rels):.0f} tot {max(rels):.0f} m boven startpunt")
    if abss:
        print(f"  boven zeeniveau: {min(abss):.0f} tot {max(abss):.0f} m")
    print(f"  kaart          : https://www.google.com/maps?q={eerste['lat']:.6f},{eerste['lon']:.6f}")
    print()
    print('CAMERA')
    print(f"  kleurprofiel : {eerste['kleur']}")
    print(f"  diafragma    : f/{eerste['fnum']:.1f}, brandpunt {eerste['brandpunt']:.0f} mm")
    print(f"  sluitertijd  : {', '.join(sluiters)}")
    if isos:
        print(f"  ISO          : {min(isos):.0f}" + (f" tot {max(isos):.0f}" if min(isos) != max(isos) else ''))
    if cts:
        print(f"  witbalans    : {min(cts):.0f} tot {max(cts):.0f} K")

    # 1/30 bij 30 fps is een volle sluiterhoek: veel bewegingsonscherpte, dus vloeiend beeld.
    fps = len(rijen) / max(duur, 1)
    m = re.match(r'1/([\d.]+)', sluiters[0] or '')
    if m and fps:
        hoek = 360 * fps / float(m.group(1))
        oordeel = ('veel bewegingsonscherpte, oogt vloeiend' if hoek >= 270 else
                   'natuurlijke bewegingsonscherpte' if hoek >= 140 else
                   'weinig bewegingsonscherpte, beweging komt hard aan')
        print(f"  sluiterhoek  : ongeveer {hoek:.0f} graden, {oordeel}")

    print()
    print('REGEL VOOR src/data/shots.js')
    plek = a.plek or 'vul de plek in'
    print(f"""  {{
    slug: '{a.slug}', titel: '{a.slug.replace('-', ' ').capitalize()}',
    element: 'lucht', toestel: 'mini', type: 'video', verhouding: '16/9',
    bestand: null, alt: '',
    opname: {{
      datum: '{lokaal:%Y-%m-%d}', tijd: '{lokaal:%H:%M}', plek: '{plek}',
      hoogte: {max(rels):.0f}, iso: '{min(isos):.0f}' , sluiter: '{sluiters[0]}',
      diafragma: 'f/{eerste['fnum']:.1f}', profiel: '{eerste['kleur']}',
    }},
  }},""")


if __name__ == '__main__':
    main()
