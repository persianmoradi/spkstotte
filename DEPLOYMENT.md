# Deployment-guide — spkstøtte

Denne guide tager dig fra ren kildekode til en live, produktionsklar
hjemmeside. Anbefalet hosting er **Vercel** (skaberne af Next.js), men
selvhosting via Node eller Docker beskrives også.

---

## 0. Forudsætninger

- **Node.js 18.18+** (anbefalet 20 eller 22) og **npm**
- Git
- En konto hos en hostingudbyder (fx [Vercel](https://vercel.com))

Tjek din version:

```bash
node -v
```

---

## 1. Lokal opsætning

```bash
# I projektmappen
rm -rf node_modules .next   # ryd evt. tidligere, ufuldstændig installation
npm install
npm run dev                 # http://localhost:3000
```

Verificér kvaliteten lokalt:

```bash
npm run typecheck   # TypeScript — skal give 0 fejl
npm run lint        # ESLint — skal være rent
npm run build       # fuldt produktionsbuild
npm run start       # kør produktionsbuildet på http://localhost:3000
```

> `npm run build` henter Inter-fonten fra Google Fonts på buildtidspunktet
> (via `next/font/google`). Det kræver netadgang under build — det er
> standard og fungerer hos alle gængse hosts.

---

## 2. Konfigurér domæne i koden

Åbn `src/lib/site.ts` og ret `url` til det endelige domæne. Det bruges af
canonical-URLs, OpenGraph, sitemap og structured data.

```ts
export const site = {
  // ...
  url: "https://www.spkstotte.dk",
  // ...
};
```

Kontaktoplysninger (telefon, mail, CVR) ligger samme sted og er allerede sat
til: 50 66 76 50 · kontakt@spkstotte.dk · CVR 44827530.

---

## 3. Deploy til Vercel (anbefalet)

### Via Git (bedst)

1. Push projektet til GitHub/GitLab/Bitbucket.
2. Gå til [vercel.com/new](https://vercel.com/new) og importér repoet.
3. Vercel registrerer automatisk Next.js. Standardindstillinger virker:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output:** håndteres automatisk
4. Klik **Deploy**. Efter ~1 minut er sitet live på et `*.vercel.app`-domæne.

### Tilføj eget domæne

1. I projektet på Vercel: **Settings → Domains → Add** `www.spkstotte.dk`.
2. Opret hos din DNS-udbyder:
   - `CNAME` for `www` → `cname.vercel-dns.com`
   - For roddomænet `spkstotte.dk`: en `A`-record til Vercels IP (vises i
     Vercel-UI'et) eller redirect fra rod til `www`.
3. Vercel udsteder automatisk et gratis SSL-certifikat (HTTPS).

### Via CLI (alternativ)

```bash
npm i -g vercel
vercel          # preview-deploy
vercel --prod   # produktions-deploy
```

---

## 4. Alternativ: selvhosting (Node)

```bash
npm install
npm run build
npm run start         # lytter på PORT (standard 3000)
```

Kør bag en reverse proxy (Nginx/Caddy) med HTTPS. Hold processen kørende med
`pm2` eller en systemd-service:

```bash
npm i -g pm2
pm2 start "npm run start" --name spk-stotte
pm2 save
```

## 4b. Alternativ: Docker

`Dockerfile` (eksempel):

```dockerfile
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "start"]
```

```bash
docker build -t spk-stotte .
docker run -p 3000:3000 spk-stotte
```

---

## 5. Efter go-live — tjekliste

- [ ] `site.url` peger på det rigtige domæne (canonical/OG/sitemap)
- [ ] Verificér `https://dit-domæne/sitemap.xml` og `/robots.txt`
- [ ] Tilføj sitet i [Google Search Console](https://search.google.com/search-console)
      og indsend sitemap
- [ ] Test OG-billedet med [opengraph.xyz](https://www.opengraph.xyz/) eller
      LinkedIn Post Inspector
- [ ] Kør [PageSpeed Insights](https://pagespeed.web.dev/) (forvent høje scores)
- [ ] Validér structured data med [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test tastatur-navigation og skærmlæser (skip-link, fokus, aria-labels)
- [ ] Bekræft at "Ring nu"-knapper og `tel:`/`mailto:`-links virker på mobil

---

## 6. Aktivér Ruflo i Claude Code (valgfrit)

Projektet er allerede initialiseret med Ruflo (`.claude/`, `.claude-flow/`,
`.mcp.json`, `CLAUDE.md`). For at bruge det fulde swarm-loop under videre
udvikling — på en maskine med [Claude Code](https://claude.com/claude-code)
installeret:

```bash
# 1) Registrér Ruflos MCP-server i Claude Code (allerede beskrevet i .mcp.json)
claude mcp add ruflo -- npx ruflo@latest mcp start

# 2) (valgfrit) Start baggrundsservices
npx ruflo@latest memory init     # initialisér hukommelses-database
npx ruflo@latest daemon start    # baggrundsworkers
npx ruflo@latest swarm init      # initialisér en swarm

# Eller alt på én gang:
npx ruflo@latest init --start-all
```

Derefter koordinerer Ruflos hooks automatisk agenter, husker på tværs af
sessioner og lærer af vellykkede mønstre, mens du arbejder i Claude Code.

> **Bemærk:** Ruflos MCP-swarm integrerer med **Claude Code-CLI'en** — ikke
> med Cowork-sessionen, hvor dette projekt blev bygget. Filerne er på plads;
> kommandoerne ovenfor aktiverer loopet lokalt hos dig.

`.mcp.json` er sat med `autoStart: false`, så intet kører uden dit samtykke.

---

## Fejlfinding

| Symptom                                   | Løsning                                                            |
| ----------------------------------------- | ----------------------------------------------------------------- |
| `next build` fejler på "Failed to fetch font Inter" | Buildmaskinen mangler netadgang til Google Fonts — kør hvor nettet er tilgængeligt (alle gængse hosts virker). |
| Typefejl om manglende `framer-motion`-typer | Ufuldstændig installation: `rm -rf node_modules && npm install`.  |
| Permission-fejl ved sletning af `node_modules` | Luk evt. kørende dev-server; slet derefter mappen og geninstallér. |
| Forkerte canonical/OG-URLs                | Ret `site.url` i `src/lib/site.ts`.                               |

---

© spkstøtte · CVR 44827530
