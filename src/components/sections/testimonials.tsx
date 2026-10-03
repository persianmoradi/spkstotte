import { Quote, AlertTriangle } from "lucide-react";

import { testimonials, testimonialsArePlaceholder } from "@/lib/site";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

/**
 * Udtalelser fra samarbejdspartnere.
 *
 * Så længe `testimonialsArePlaceholder` er true, vises et tydeligt badge over
 * sektionen. Det er med vilje synligt i UI'et: eksempeltekster må ikke kunne
 * forveksles med rigtige udtalelser – hverken af kunden under gennemsyn eller
 * af en besøgende. Se kommentaren ved `testimonials` i `@/lib/site`.
 */
export function Testimonials() {
  return (
    <section className="container-page py-20 lg:py-28">
      <SectionHeading
        eyebrow="Udtalelser"
        title="Det siger vores samarbejdspartnere"
        description="Kommuner og forvaltninger vælger os, fordi samarbejdet er forudsigeligt, fagligt og gennemsigtigt hele vejen igennem."
        align="center"
        className="mx-auto"
      />

      {testimonialsArePlaceholder ? (
        <Reveal className="mx-auto mt-6 max-w-2xl">
          <p
            role="note"
            className="flex items-start justify-center gap-2.5 rounded-2xl border border-accent-200 bg-accent-50 px-5 py-3 text-sm font-medium text-accent-ink"
          >
            <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>
              Eksempeltekst – erstattes med rigtige, godkendte udtalelser inden
              lancering.
            </span>
          </p>
        </Reveal>
      ) : null}

      <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <RevealItem key={`${item.author}-${item.role}`}>
            <figure className="lift-hover relative flex h-full flex-col rounded-3xl border border-ink-900/[0.06] bg-surface p-7 shadow-soft hover:shadow-card lg:p-8">
              <Quote
                className="size-8 shrink-0 text-primary-200"
                aria-hidden
              />
              <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-ink-800">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink-900/[0.07] pt-5">
                <p className="text-sm font-semibold text-ink-900">
                  {item.author}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.role}
                </p>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
