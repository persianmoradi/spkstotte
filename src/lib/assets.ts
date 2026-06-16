/**
 * Centralt register over LOKALE statiske assets i `public/assets/`.
 *
 * Idé: Læg dine filer i den relevante undermappe under `public/assets/…`,
 * og referér dem herfra. Så har du ét sted at vedligeholde stier, og du
 * undgår "magiske strenge" spredt ud i komponenterne.
 *
 * Alt under `public/` serveres fra web-roden, så `public/assets/logos/x.png`
 * tilgås som `/assets/logos/x.png`.
 *
 *   import { logos, img, model } from "@/lib/assets";
 *   <Image src={logos.primary} ... />
 *   <Image src={img.hero("forside-1.jpg")} ... />
 *   // 3D-model: fetch(model("figur.glb"))
 *
 * Eksterne stockfotos (Unsplash) ligger fortsat i `@/lib/images`. Når du
 * udskifter dem med egne billeder, så læg filen i `public/assets/images/…`
 * og peg den pågældende `images`-post på fx `img.hero("...")`.
 */

/** Web-roden for alle assets. */
export const ASSETS_BASE = "/assets";

/** Logoer. */
export const logos = {
  /** Primært logo – bruges i navbar og footer. */
  primary: `${ASSETS_BASE}/logos/spkstotte-logo.png`,
} as const;

/**
 * Billed-stier pr. sektion. Kald med filnavnet, fx `img.hero("baggrund.jpg")`.
 * Mapperne findes allerede under `public/assets/images/<sektion>/`.
 */
export const img = {
  forside: (file: string) => `${ASSETS_BASE}/images/forside/${file}`,
  hero: (file: string) => `${ASSETS_BASE}/images/hero/${file}`,
  indsatser: (file: string) => `${ASSETS_BASE}/images/indsatser/${file}`,
  metoder: (file: string) => `${ASSETS_BASE}/images/metoder/${file}`,
  om: (file: string) => `${ASSETS_BASE}/images/om/${file}`,
  samarbejde: (file: string) => `${ASSETS_BASE}/images/samarbejde/${file}`,
  partnere: (file: string) => `${ASSETS_BASE}/images/partnere/${file}`,
} as const;

/** 3D-modeller (.glb/.gltf m.m.) i `public/assets/models/`. */
export const model = (file: string) => `${ASSETS_BASE}/models/${file}`;

/** Ikoner/SVG i `public/assets/icons/`. */
export const icon = (file: string) => `${ASSETS_BASE}/icons/${file}`;

/** Dokumenter (PDF m.m.) i `public/assets/documents/`. */
export const doc = (file: string) => `${ASSETS_BASE}/documents/${file}`;
