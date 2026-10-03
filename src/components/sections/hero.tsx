import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, HeartHandshake, Scale, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const pillars = [
  { icon: Scale, label: "Efter Barnets Lov" },
  { icon: ShieldCheck, label: "Faglig dokumentation" },
  { icon: HeartHandshake, label: "Relationen i centrum" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Organisk mesh-baggrund. Rene farvefelter i lav opacitet – giver dybde
          uden at konkurrere med indholdet. */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 mesh-soft" />
        <div className="absolute inset-0 bg-grid-faint opacity-50" />
        <div className="absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-primary-100/50 blur-3xl motion-safe:animate-float" />
        <div className="absolute -left-32 top-56 h-[26rem] w-[26rem] rounded-full bg-accent-100/50 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-14 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        {/* ---------- Tekstkolonne ---------- */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-accent opacity-70 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Socialfaglige indsatser i hele Danmark
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="prose-balance mt-6 text-4xl font-semibold leading-[1.06] text-ink-900 sm:text-5xl lg:text-6xl">
              Tryg støtte til unge{" "}
              <span className="relative inline-block text-primary">
                på vej videre
                {/* Håndtegnet understregning – ren SVG, ingen ekstra request */}
                <svg
                  className="absolute -bottom-2.5 left-0 h-3 w-full text-accent-300"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 9C40 4 100 2 198 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              spkstøtte leverer socialpædagogiske indsatser efter Barnets Lov til
              børn, unge og deres familier – med respekt, tillid, empati og
              anerkendelse som fundament i hvert eneste forløb.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="accent" size="lg">
                <Link href="/kontakt">
                  Kontakt os
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/indsatser">Læs om vores indsats</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <a
              href={site.phoneHref}
              className="group mt-6 inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Ring til ${site.name} på ${site.phone}`}
            >
              <span className="grid size-9 place-items-center rounded-full bg-primary-50 text-primary transition-colors group-hover:bg-primary-100">
                <Phone className="size-4" aria-hidden />
              </span>
              <span>
                Eller ring direkte{" "}
                <strong className="font-semibold text-ink-900">{site.phone}</strong>{" "}
                · {site.hours}
              </span>
            </a>
          </Reveal>

          <Reveal delay={5}>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-ink-900/[0.07] pt-7">
              {pillars.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-ink-700"
                >
                  <Icon className="size-4 text-primary" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ---------- Billedkolonne ---------- */}
        <div className="lg:col-span-6">
          <Reveal delay={2} variant="scale">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    /* `pb-16 lg:pb-12` giver plads til det flydende statistik-kort, så det
       aldrig klippes og aldrig skubber til layoutet. */
    <div className="relative mx-auto max-w-xl pb-16 lg:pb-12">
      <div className="relative overflow-hidden rounded-4xl border border-ink-900/[0.06] shadow-lift">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 92vw, 36rem"
            className="object-cover"
          />
          {/* Let brandtonet overlay i toppen, så værdi-badget altid har
              kontrast mod fotoet uanset motiv. */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary-950/55 via-transparent to-primary-950/25"
            aria-hidden
          />

          {/* Værdi-badge i toppen. Statistik-kortet nedenfor overlapper
              billedets underkant, så de to må ikke dele samme hjørne. */}
          <div className="glass-dark absolute left-4 right-4 top-4 rounded-2xl px-4 py-3">
            <p className="text-2xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Vores værdier
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Respekt · Tillid · Empati · Anerkendelse
            </p>
          </div>
        </div>
      </div>

      {/* Flydende glas-kort med nøgletal – overlapper billedet nedefra */}
      <div className="glass-strong absolute bottom-0 left-4 right-4 rounded-3xl p-1.5 sm:left-10 sm:right-10 lg:-right-4 lg:left-12">
        <div className="grid grid-cols-3 divide-x divide-ink-900/[0.07]">
          <Stat value="7" label="Indsatser" />
          <Stat value="24/7" label="Tilgængelig" />
          <Stat value="Hele DK" label="Dækning" />
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-2 py-3 text-center">
      <p className="text-lg font-bold tracking-tight text-primary sm:text-xl">
        {value}
      </p>
      <p className="mt-0.5 text-2xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
