import type { Metadata } from "next";
import Image from "next/image";
import { PhoneCall, FileText, Clock, Repeat, ShieldCheck, Building2 } from "lucide-react";

import { processSteps } from "@/lib/site";
import { images } from "@/lib/images";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Samarbejde med kommuner",
  description:
    "Sådan samarbejder spkstøtte med kommunale sagsbehandlere, familieafdelinger og børn og unge-forvaltninger: hurtig opstart, klar dokumentation og tæt dialog efter Barnets Lov.",
  path: "/samarbejde-med-kommuner",
});

const benefits = [
  {
    icon: PhoneCall,
    title: "Hurtig og fleksibel opstart",
    text: "Vi rykker hurtigt, når behovet opstår, og tilpasser kapaciteten til jeres sagsmængde.",
  },
  {
    icon: FileText,
    title: "Dokumentation, der holder",
    text: "Statusnotater og effektmål leveres til tiden og i et format, der passer til jeres sagsbehandling.",
  },
  {
    icon: Clock,
    title: "Tilgængelighed",
    text: "Én fast kontakt og kort responstid – også ved akutte behov.",
  },
  {
    icon: Repeat,
    title: "Kontinuitet i forløbet",
    text: "Faste medarbejdere og omhyggelig matchning sikrer stabilitet for barnet og familien.",
  },
  {
    icon: ShieldCheck,
    title: "Inden for lovens rammer",
    text: "Alle indsatser leveres efter Barnets Lov og i overensstemmelse med myndighedens bestilling.",
  },
  {
    icon: Building2,
    title: "Landsdækkende kapacitet",
    text: "Vi samarbejder med kommuner over hele Danmark og kender den kommunale virkelighed.",
  },
];

const audiences = [
  "Kommunale sagsbehandlere",
  "Familieafdelinger",
  "Børn og unge-forvaltninger",
  "Ungdomskriminalitetsnævnet",
  "Samarbejdspartnere",
  "Familier",
];

export default function MunicipalitiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Samarbejde med kommuner", path: "/samarbejde-med-kommuner" },
        ])}
      />

      <PageHero
        eyebrow="For kommuner"
        title="En tryg, professionel samarbejdspartner for det offentlige"
        description="Vi gør det enkelt og forudsigeligt at samarbejde med os. Fra første henvendelse til endelig evaluering tager vi ansvar – med barnets bedste og jeres rammer for øje."
        breadcrumbs={[
          { name: "Forside", href: "/" },
          { name: "Samarbejde med kommuner", href: "/samarbejde-med-kommuner" },
        ]}
      />

      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="Hvorfor samarbejde med os"
          title="Det kan I forvente af et samarbejde"
          description="Vi ved, at jeres hverdag er travl, og at dokumentation og overholdte aftaler er afgørende. Derfor er forudsigelighed kernen i alt, vi gør."
        />
        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <RevealItem
              key={title}
              className="rounded-2xl border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary/8 text-primary">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="bg-primary py-20 text-white lg:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent-200">
              <span className="h-px w-6 bg-accent-200" aria-hidden />
              Samarbejdsforløb
            </span>
            <h2 className="prose-balance mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sådan forløber et samarbejde
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Et gennemskueligt forløb i fem trin – så I altid ved, hvad der sker
              hvornår.
            </p>
          </div>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <RevealItem
                key={step.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <span className="text-2xl font-bold text-accent-200">
                  {step.step}
                </span>
                <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {step.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Målgrupper"
              title="Hvem vi samarbejder med"
              description="spkstøtte er bindeled i et helhedsorienteret samarbejde om barnet. Vi taler myndighedens sprog og inddrager familien som en aktiv part."
            />
            <Reveal delay={1} className="mt-8 max-w-none">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-card">
                <Image
                  src={images.collaboration.src}
                  alt={images.collaboration.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 36rem"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"
                  aria-hidden
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal className="max-w-none">
              <ul className="grid gap-3 sm:grid-cols-2">
                {audiences.map((audience) => (
                  <li
                    key={audience}
                    className="rounded-xl border border-border bg-muted/40 px-5 py-4 text-sm font-semibold text-primary"
                  >
                    {audience}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
