import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, HeartHandshake, Scale } from "lucide-react";

import { img } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { CallNowButton } from "@/components/call-now-button";
import { Reveal } from "@/components/motion/reveal";

const pillars = [
  { icon: Scale, label: "Efter Barnets Lov" },
  { icon: ShieldCheck, label: "Faglig dokumentation" },
  { icon: HeartHandshake, label: "Relationen i centrum" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Bløde skandinaviske baggrundsformer */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid-faint opacity-60" />
        <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-accent/70 to-transparent blur-3xl" />
        <div className="absolute -left-24 top-40 h-96 w-96 rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-secondary" aria-hidden />
              Socialfaglige indsatser
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="prose-balance mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Din tryghed for støtte og omsorg i en svær tid
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              spkstøtte tilbyder ydelser, der er i overensstemmelse med
              bestemmelserne i Barnets Lov specifikt rettet mod børn og unge,
              samt deres familier.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallNowButton showNumber size="lg" />
              <Button asChild variant="outline" size="lg">
                <Link href="/indsatser">
                  Se vores indsatser
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {pillars.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <Icon className="size-4 text-secondary" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={2}>
            <HeroCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-card">
        {/* Rigtigt foto med rolig brandtonet overlay */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={img.forside("b1.jpg")}
            alt="Familie går hånd i hånd på en sti"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 28rem"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/15 to-transparent"
            aria-hidden
          />
          <span className="absolute bottom-4 left-5 text-xs font-medium uppercase tracking-[0.18em] text-white/90">
            Respekt · Tillid · Anerkendelse · Empati
          </span>
        </div>
        <div className="grid grid-cols-2 divide-x divide-border">
          <div className="p-5">
            <p className="text-2xl font-semibold text-primary">4</p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">
              Værdier der bærer alt, vi gør
            </p>
          </div>
          <div className="p-5">
            <p className="text-2xl font-semibold text-primary">Hele DK</p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">
              Samarbejde med kommuner i hele landet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
