import { Check } from "lucide-react";

import { values } from "@/lib/site";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const reasons = [
  "Hurtig opstart og fleksibel kapacitet, når behovet opstår",
  "Omhyggelig matchning af medarbejder til barn og familie",
  "Gennemsigtig, løbende dialog med sagsbehandler",
  "Klar, målbar dokumentation og effektopfølgning",
  "Helhedsorienteret samarbejde med skole, netværk og myndighed",
  "Faste kontaktpersoner og kontinuitet i forløbet",
];

export function WhySpk() {
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Hvorfor vælge spkstøtte"
            title="Faglighed, du kan dokumentere – og stole på"
            description="Vi gør det trygt og enkelt for kommunen at samarbejde med os. Vores arbejde hviler på fire værdier, der er til stede i hver eneste indsats."
          />

          <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <RevealItem key={value.title}>
                <div className="lift-hover-sm h-full rounded-3xl border border-ink-900/[0.06] bg-surface p-5 shadow-soft hover:border-primary/20 hover:shadow-card">
                  <h3 className="text-base font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal className="max-w-none" variant="scale">
            <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 p-8 text-white shadow-lift lg:p-10">
              <div className="pointer-events-none absolute inset-0 mesh-cta" aria-hidden />
              <div className="relative">
                <h3 className="text-xl font-semibold">Det får I som kommune</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/95">
                  En samarbejdspartner, der tager ansvar fra første henvendelse
                  til endelig evaluering – med barnets bedste og jeres rammer for
                  øje.
                </p>
                <ul className="mt-7 space-y-3.5">
                  {reasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                        <Check className="size-3.5" aria-hidden />
                      </span>
                      <span className="text-white/95">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
