# Assets — billeder, logoer og modeller

Her ligger alle **lokale statiske filer** til sitet. Alt under `public/`
serveres fra web-roden, så filen `public/assets/logos/spkstotte-logo.png`
tilgås i browseren som `/assets/logos/spkstotte-logo.png`.

## Mappestruktur

```
public/assets/
├─ logos/                 # Logoer (spkstotte-logo.png m.fl.)
├─ images/
│  ├─ forside/            # Billeder brugt på forsiden
│  ├─ hero/               # Hero-/topbilleder
│  ├─ indsatser/          # Billeder pr. indsats
│  ├─ metoder/            # Billeder til metode-siden
│  ├─ om/                 # Billeder til "Om spkstøtte"
│  ├─ samarbejde/         # Billeder til "Samarbejde med kommuner"
│  └─ partnere/           # Logoer/billeder for samarbejdspartnere
├─ models/                # 3D-modeller (.glb/.gltf) og lignende
├─ icons/                 # SVG-/PNG-ikoner
└─ documents/             # PDF'er o.l. til download
```

## Sådan tilføjer du et billede

1. Læg filen i den relevante mappe, fx `public/assets/images/hero/min-hero.jpg`.
2. Referér den via registeret i `src/lib/assets.ts` (anbefalet) eller direkte med stien:

```tsx
import Image from "next/image";
import { img } from "@/lib/assets";

<Image
  src={img.hero("min-hero.jpg")}   // → /assets/images/hero/min-hero.jpg
  alt="Beskrivende alt-tekst"
  width={1600}
  height={900}
/>
```

For baggrundsbilleder der fylder en container, brug `fill` på `next/image`
inde i et element med `position: relative` og en fast højde/aspect-ratio.

## 3D-modeller

Læg `.glb`/`.gltf` i `public/assets/models/` og hent dem via `model("fil.glb")`
fra `src/lib/assets.ts`. (Til visning kræves et 3D-bibliotek, fx
`three` / `@react-three/fiber` — sig til, så sætter jeg det op.)

## Navngivning (anbefalinger)

- Små bogstaver, bindestreger i stedet for mellemrum: `stoettet-samvaer-1.jpg`.
- Undgå æøå og specialtegn i filnavne (giver problemer i URL'er).
- Vælg `.webp`/`.avif` eller komprimeret `.jpg` til fotos; `.svg` til ikoner/streg.
- `next/image` optimerer automatisk, men start gerne med rimelige dimensioner.

## Hvor registreres stierne?

`src/lib/assets.ts` er det centrale register. Tilføj nye, navngivne poster der,
så du undgår løse stier spredt i komponenterne. Eksterne stockfotos (Unsplash)
ligger i `src/lib/images.ts` — udskift dem nemt med egne ved at pege på
`img.<sektion>("...")`.
