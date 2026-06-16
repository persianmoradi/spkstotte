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
              <RevealItem
                key={value.title}
                className="rounded-2xl border border-border bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <h3 className="text-base font-semibold text-secondary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal className="max-w-none">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary to-primary-700 p-8 text-white shadow-card lg:p-10">
              <h3 className="text-xl font-semibold">Det får I som kommune</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                En samarbejdspartner, der tager ansvar fra første henvendelse til
                endelig evaluering – med barnets bedste og jeres rammer for øje.
              </p>
              <ul className="mt-7 space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-primary">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span className="text-white/90">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
