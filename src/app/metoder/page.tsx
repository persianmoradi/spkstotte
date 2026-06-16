import type { Metadata } from "next";
import Image from "next/image";

import { methods } from "@/lib/site";
import { images } from "@/lib/images";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Metoder",
  description:
    "spkstøttes faglige metoder: anerkendende tilgang, relationspædagogisk tilgang, den motiverende samtale (MI), systemisk og narrativ tilgang, low arousal, mentalisering, mål- og effektstyring og helhedsorienteret samarbejde.",
  path: "/metoder",
});

const principles = [
  {
    title: "Relationen før målet",
    text: "Vi bygger tillid, før vi stiller krav. Den trygge relation er forudsætningen for al udvikling.",
  },
  {
    title: "Ressourcer frem for mangler",
    text: "Vi tager udgangspunkt i det, der virker, og styrker barnets og familiens egne kompetencer.",
  },
  {
    title: "Dokumenteret effekt",
    text: "Vi arbejder mod konkrete delmål og følger op, så indsatsen kan justeres og dokumenteres.",
  },
];

export default function MethodsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Metoder", path: "/metoder" },
        ])}
      />

      <PageHero
        eyebrow="Faglige metoder"
        title="Evidensinformeret praksis – forankret i værdier"
        description="Vores metoder er udvalgt, fordi de virker, og fordi de harmonerer med vores værdier om respekt, tillid, empati og anerkendelse. Her kan du se, hvordan vi arbejder."
        breadcrumbs={[
          { name: "Forside", href: "/" },
          { name: "Metoder", href: "/metoder" },
        ]}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Sådan arbejder vi"
              title="Tre principper, der binder vores metoder sammen"
            />
            <Reveal delay={1} className="mt-8 max-w-none">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-card">
                <Image
                  src={images.conversation.src}
                  alt={images.conversation.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30rem"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent"
                  aria-hidden
                />
              </div>
            </Reveal>
            <RevealGroup className="mt-8 space-y-4">
              {principles.map((p) => (
                <RevealItem
                  key={p.title}
                  className="rounded-2xl border border-border bg-white p-6 shadow-soft"
                >
                  <h3 className="text-base font-semibold text-secondary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-primary">
                Vores metoder i praksis
              </h2>
              <p className="mt-3 text-muted-foreground">
                Klik for at folde hver metode ud.
              </p>
            </Reveal>
            <Reveal delay={1} className="mt-6">
              <Accordion type="single" collapsible className="space-y-4" defaultValue="metode-0">
                {methods.map((method, i) => (
                  <AccordionItem key={method.title} value={`metode-${i}`}>
                    <AccordionTrigger>{method.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                        <p className="flex-1">{method.description}</p>
                        {method.image ? (
                          <div className="relative mx-auto aspect-square w-44 shrink-0 rounded-2xl bg-white p-3 ring-1 ring-border sm:mx-0 sm:w-48">
                            <Image
                              src={method.image}
                              alt={`Illustration af ${method.title.toLowerCase()}`}
                              fill
                              sizes="(max-width: 640px) 11rem, 12rem"
                              className="object-contain p-2"
                            />
                          </div>
                        ) : null}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
