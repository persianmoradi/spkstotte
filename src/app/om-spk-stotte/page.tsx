import type { Metadata } from "next";
import Image from "next/image";
import { Target, Compass, ShieldCheck } from "lucide-react";

import { values } from "@/lib/site";
import { images } from "@/lib/images";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Om SPK Støtte",
  description:
    "SPK Støtte er en socialpædagogisk organisation, der leverer socialfaglige indsatser til børn, unge og familier efter Barnets Lov – forankret i respekt, tillid, empati og anerkendelse.",
  path: "/om-spk-stotte",
});

const pillars = [
  {
    icon: Target,
    title: "Vores mission",
    text: "At skabe varige, positive forandringer i børn, unges og familiers liv gennem nærværende, faglig støtte – altid med barnets bedste i centrum.",
  },
  {
    icon: Compass,
    title: "Vores tilgang",
    text: "Vi arbejder relationelt og helhedsorienteret. Forandring opstår i trygge relationer, og derfor investerer vi i tillid, før vi arbejder med mål.",
  },
  {
    icon: ShieldCheck,
    title: "Vores ansvar",
    text: "Vi er en professionel og forudsigelig samarbejdspartner for kommunerne – med ordentlig dokumentation og respekt for myndighedens rammer.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Om SPK Støtte", path: "/om-spk-stotte" },
        ])}
      />

      <PageHero
        eyebrow="Om os"
        title="En socialpædagogisk organisation med hjertet på rette sted"
        description="SPK Støtte leverer socialfaglige indsatser til børn, unge og familier efter Barnets Lov. Vi kombinerer solid faglighed med ægte nærvær – og gør det trygt for kommunen at samarbejde med os."
        breadcrumbs={[
          { name: "Forside", href: "/" },
          { name: "Om SPK Støtte", href: "/om-spk-stotte" },
        ]}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Hvem vi er"
              title="Faglighed, nærvær og ansvar"
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                SPK Støtte er bygget på en overbevisning om, at alle børn og unge
                fortjener trygge, stabile voksne omkring sig. Vi leverer
                socialfaglige indsatser, der støtter barnet, den unge og familien
                dér, hvor behovet er – i hjemmet, i hverdagen og i overgangene.
              </p>
              <p>
                Vi samarbejder tæt med kommunale sagsbehandlere, familieafdelinger
                og børn og unge-forvaltninger over hele landet. Vores medarbejdere
                er erfarne fagfolk, der forstår både det relationelle arbejde og
                de krav, der følger med en myndighedssag.
              </p>
              <p>
                Uanset indsats møder vi mennesker med respekt, opbygger tillid,
                handler med empati og anerkender hvert skridt i den rigtige
                retning. Det er ikke bare ord – det er måden, vi arbejder på.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal className="max-w-none">
              <div className="rounded-3xl border border-border bg-gradient-to-br from-primary to-primary-700 p-8 text-white shadow-card">
                <h3 className="text-lg font-semibold">Vores faglige fundament</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Alt vi gør, hviler på fire værdier. De er til stede i hver
                  samtale, hvert samvær og hvert statusnotat.
                </p>
                <ul className="mt-6 space-y-4">
                  {values.map((value) => (
                    <li key={value.title} className="border-l-2 border-accent pl-4">
                      <p className="font-semibold text-accent-200">{value.title}</p>
                      <p className="mt-1 text-sm text-white/80">
                        {value.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page pb-4">
        <Reveal className="max-w-none">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-card sm:aspect-[21/9]">
            <Image
              src={images.family.src}
              alt={images.family.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary/55 via-primary/10 to-transparent"
              aria-hidden
            />
            <p className="absolute bottom-5 left-6 max-w-xs text-sm font-medium text-white/95">
              Tryghed, nærvær og stabile relationer — fundamentet for forandring.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Mission, tilgang og ansvar"
            title="Det, der driver os"
            align="center"
            className="mx-auto"
          />
          <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <RevealItem
                key={title}
                className="rounded-2xl border border-border bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-secondary/10 text-secondary">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
