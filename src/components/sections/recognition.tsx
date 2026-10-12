import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { images } from "@/lib/images";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";

const signals = [
  "Skolen eller uddannelsen føles uoverkommelig",
  "Nætterne går med bekymringer i stedet for søvn",
  "Det er svært at bede om hjælp – og vide, hvem man skal bede",
];

export function Recognition() {
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal variant="scale">
            <figure className="relative overflow-hidden rounded-4xl border border-ink-900/[0.06] shadow-lift">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={images.pressure.src}
                  alt={images.pressure.alt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 36rem"
                  className="object-cover"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-950/60 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute inset-x-5 bottom-4 text-sm font-medium text-white">
                  Bag hver sag sidder et ungt menneske, der gør sit bedste.
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Når presset bliver for stort"
            title="Ingen unge skal stå alene med det, der føles uoverskueligt"
            description="Mange unge bærer på mere, end omgivelserne kan se. Vi møder dem, hvor de er – roligt, ligeværdigt og uden at gøre dem til en sag."
          />

          <Reveal delay={1}>
            <ul className="mt-8 space-y-3.5">
              {signals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span className="text-base leading-relaxed text-ink-700">
                    {signal}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Her kan en fast, tryg voksen gøre hele forskellen.
            </p>

            <Link
              href="/indsatser#ungestotte"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Se, hvordan vi støtter unge
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
