# spkstøtte — Premium hjemmeside

Komplet, produktionsklar hjemmeside for **spkstøtte** — en socialpædagogisk
organisation, der leverer socialfaglige indsatser til børn, unge og familier
efter **Barnets Lov**.

Bygget fra bunden med en moderne, skandinavisk B2G-designretning (Business‑to‑Government).
Hele kodebasen er ny — intet er kopieret fra den eksisterende side.

> Faglige værdier båret igennem hele oplevelsen: **Respekt · Tillid · Empati · Anerkendelse**

---

## Teknisk stack

| Lag            | Teknologi                                   |
| -------------- | ------------------------------------------- |
| Framework      | Next.js 15 (App Router, React 19)           |
| Sprog          | TypeScript (strict)                         |
| Styling        | Tailwind CSS 3.4 + design tokens (CSS vars) |
| UI-primitiver  | shadcn/ui-mønster (Radix UI + CVA)          |
| Animation      | Framer Motion 11                            |
| Ikoner         | lucide-react                                |
| Font           | Inter (`next/font/google`, self‑hosted)     |
| SEO            | Metadata API, OpenGraph, JSON‑LD, sitemap   |

## Designsystem

| Token          | Værdi      | Brug                          |
| -------------- | ---------- | ----------------------------- |
| Primary        | `#0F2D52`  | Dyb navy — tekst, brand, CTA  |
| Secondary      | `#2F6F57`  | Skovgrøn — accenter, links    |
| Accent         | `#E8DFD1`  | Varm sand — bløde flader      |
| Background     | `#FFFFFF`  | Baggrund                      |

Farverne er defineret som HSL‑variabler i `src/app/globals.css` og eksponeret
gennem `tailwind.config.ts` (inkl. fulde 50–900 nuancer for primary/secondary/accent).

---

## Sider

| Rute                          | Side                       |
| ----------------------------- | -------------------------- |
| `/`                           | Forside                    |
| `/om-spk-stotte`              | Om spkstøtte              |
| `/indsatser`                  | Socialfaglige indsatser (7 indsatser) |
| `/metoder`                    | Faglige metoder            |
| `/samarbejde-med-kommuner`    | Samarbejde med kommuner    |
| `/kontakt`                    | Kontakt (telefon/mail/CVR) |

**Forsiden** indeholder: hero, trust indicators, "hvorfor vælge spkstøtte",
ydelser, arbejdsproces, faglige metoder, samarbejdspartnere og kontaktsektion.

**Ydelser:** Støttekontaktperson · Pædagogisk støtte · Ungestøtte ·
Støtteperson §75 · Støttet samvær · Overvåget samvær.

**Kontakt** (ingen kontaktformular — efter ønske):
Telefon **50 66 76 50** · Mail **kontakt@spkstotte.dk** · CVR **44827530**.

---

## Projektstruktur

```
spkstotte/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                 # Root layout, Inter-font, JSON-LD, header/footer
│  │  ├─ page.tsx                   # Forside (alle sektioner)
│  │  ├─ globals.css                # Design tokens, a11y-fokus, reduced-motion
│  │  ├─ om-spk-stotte/page.tsx
│  │  ├─ indsatser/page.tsx
│  │  ├─ metoder/page.tsx
│  │  ├─ samarbejde-med-kommuner/page.tsx
│  │  ├─ kontakt/page.tsx
│  │  ├─ not-found.tsx              # 404
│  │  ├─ sitemap.ts                 # /sitemap.xml
│  │  ├─ robots.ts                  # /robots.txt
│  │  ├─ manifest.ts                # PWA manifest
│  │  ├─ icon.tsx                   # Genereret favicon
│  │  └─ opengraph-image.tsx        # Genereret OG-billede (1200×630)
│  ├─ components/
│  │  ├─ ui/                        # shadcn/ui: button, card, badge, accordion
│  │  ├─ layout/                    # site-header (sticky), site-footer, mobile-call-bar
│  │  ├─ sections/                  # hero, trust, why-spk, services, process, methods, partners, contact-cta, page-hero
│  │  ├─ motion/reveal.tsx          # Framer Motion scroll-reveal
│  │  ├─ brand/logo.tsx
│  │  ├─ call-now-button.tsx        # Genbrugelig "Ring nu"-knap
│  │  └─ json-ld.tsx
│  └─ lib/
│     ├─ site.ts                    # ⭐ Al indhold/data ét sted (kontakt, nav, ydelser, metoder)
│     ├─ seo.ts                     # Metadata- og structured-data-hjælpere
│     └─ utils.ts                   # cn() (clsx + tailwind-merge)
├─ tailwind.config.ts
├─ next.config.mjs                  # Security headers, billedformater
├─ DEPLOYMENT.md                    # ⭐ Deployment-guide (læs denne)
└─ package.json
```

> **Ét sted at redigere indhold:** `src/lib/site.ts` indeholder kontaktoplysninger,
> navigation, ydelser, metoder og arbejdsproces. Ret her, så slår det igennem på hele sitet.

---

## Kom i gang

```bash
npm install
npm run dev        # http://localhost:3000
```

Andre kommandoer:

```bash
npm run build      # produktionsbuild
npm run start      # kør produktionsbuild lokalt
npm run lint       # ESLint
npm run typecheck  # TypeScript uden output
```

> **Bemærk:** Mappen kan indeholde en `node_modules`/`.next` fra et tidligere,
> afbrudt installationsforsøg. Kør for en sikkerheds skyld en ren installation:
> `rm -rf node_modules .next && npm install`.

---

## Kvalitetssikring (verificeret)

- ✅ **TypeScript:** `tsc --noEmit` — 0 fejl
- ✅ **ESLint:** `next lint` — 0 advarsler/fejl
- ✅ **Kompilering:** Alle 6 sider + 404 + `sitemap.xml` / `robots.txt` / `manifest`
  kompilerer til server-bundles
- ✅ **Tilgængelighed (WCAG AA):** semantisk HTML, skip-link, synlig fokus-markering,
  `aria`-labels på interaktive elementer, `prefers-reduced-motion`, korrekt
  farvekontrast på primær/sekundær mod hvid
- ✅ **Mobile-first & konvertering:** sticky navigation, fast "Ring nu"-bar på mobil,
  tydelige CTA'er og `tel:`-links overalt

## UX & performance

- Mobile-first, responsivt layout (`sm` / `lg` brudpunkter)
- Sticky, blurret navigation med aktiv-tilstand og animeret indikator
- Fast "Ring nu / Skriv til os"-bar i bunden på mobil → maksimal konvertering
- Professionelle hover states (løft, skygge, farveskift) på kort og knapper
- `next/font` self-hosting (ingen FOUT), AVIF/WebP-billedformater, komprimering
- Diskrete, hurtige scroll-reveals der respekterer reduceret bevægelse

## SEO

- Per-side `metadata` (titel, beskrivelse, canonical) via `buildMetadata()`
- OpenGraph + Twitter Cards + genereret OG-billede (`/opengraph-image`)
- Structured data (JSON-LD): `Organization`/`ProfessionalService`, `BreadcrumbList`,
  `Service`-katalog og `ContactPoint` — med dansk/lokalt fokus (`areaServed: Danmark`, `da`)
- `sitemap.xml`, `robots.txt`, PWA `manifest`
- Sikkerheds-headers i `next.config.mjs`

---

## Assets (lokale filer)

Alle lokale filer — logoer, billeder, 3D-modeller, ikoner, dokumenter — ligger
struktureret under `public/assets/` og refereres via registeret i
`src/lib/assets.ts`. Se `public/assets/README.md` for mappestruktur og
konventioner. Kort fortalt:

```
public/assets/{logos,images/<sektion>,models,icons,documents}
```

```tsx
import { logos, img, model } from "@/lib/assets";
<Image src={logos.primary} … />          // logoet (navbar/footer)
<Image src={img.hero("baggrund.jpg")} … /> // /assets/images/hero/baggrund.jpg
```

## Billeder & kreditering

Fotos hentes fra Unsplash via `next/image` (optimeret, AVIF/WebP, responsivt).
Alle billeder er **frie til kommerciel brug under [Unsplash-licensen](https://unsplash.com/license)**
(kreditering ikke påkrævet — vi gør det alligevel). Domænet er whitelisted i
`next.config.mjs` (`images.remotePatterns`). Alle billeder styres ét sted i
`src/lib/images.ts` — udskift `src`/`alt` dér for at bruge jeres egne fotos.

| Placering                    | Motiv                         | Fotograf                                              |
| ---------------------------- | ----------------------------- | ----------------------------------------------------- |
| Forside (hero)               | Familie på skovsti            | [Emma](https://unsplash.com/@pictures102)             |
| Om spkstøtte                | Voksen og barn i aftenlys     | [Sue Zeng](https://unsplash.com/@suezeng)             |
| Samarbejde med kommuner      | Dialog omkring bord           | [Vitaly Gariev](https://unsplash.com/@silverkblack)   |
| Metoder                      | Anerkendende samtale          | [Vitaly Gariev](https://unsplash.com/@silverkblack)   |
| Forside (metode-sektion)     | Rolig skovsti                 | [Ingmar](https://unsplash.com/@visualsbying)          |

> **Anbefaling:** Til endelig produktion bør I overveje at hoste billederne
> selv (læg dem i `/public` og peg `src` i `images.ts` på fx `/images/hero.jpg`)
> eller bruge egne, branded fotos af jeres medarbejdere. Det giver fuld kontrol
> og uafhængighed af eksterne tjenester.

## Ruflo

Projektet er initialiseret med [Ruflo](https://github.com/ruvnet/ruflo)
(`npx ruflo@latest init`). Det lægger agent-, hook- og kommandostruktur i repoet:

```
.claude/            # 17 agenter, 30 skills, 16 kommandoer, hooks (settings.json)
.claude-flow/       # V3-runtime (config, data, logs, sessions)
.mcp.json           # Ruflo MCP-server (claude-flow) — autoStart: false
CLAUDE.md           # Swarm-vejledning og konfiguration
```

Se `DEPLOYMENT.md` for, hvordan du aktiverer Ruflos fulde swarm-loop i Claude Code.

---

© spkstøtte · CVR 44827530 · Indsatser efter Barnets Lov
