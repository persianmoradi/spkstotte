import { Scale, FileCheck2, Users, MapPinned } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const items = [
  {
    icon: Scale,
    title: "Indsatser efter Barnets Lov",
    text: "Alle indsatser leveres inden for lovens rammer og myndighedens bestilling.",
  },
  {
    icon: FileCheck2,
    title: "Systematisk dokumentation",
    text: "Statusnotater og effektmål, der gør det nemt for sagsbehandler at følge med.",
  },
  {
    icon: Users,
    title: "Erfarne medarbejdere",
    text: "Uddannede fagfolk med solid erfaring inden for socialt arbejde.",
  },
  {
    icon: MapPinned,
    title: "Landsdækkende",
    text: "Vi samarbejder med familieafdelinger og forvaltninger i hele Danmark.",
  },
];

export function TrustIndicators() {
  return (
    <section
      aria-label="Tillidsindikatorer"
      className="border-y border-ink-900/[0.06] bg-surface-sunken"
    >
      <div className="container-page py-14">
        <Reveal className="max-w-none">
          <p className="text-center text-2xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            En troværdig samarbejdspartner for det offentlige
          </p>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <RevealItem key={title}>
              <div className="lift-hover group flex h-full items-start gap-4 rounded-3xl border border-ink-900/[0.06] bg-surface p-5 shadow-soft hover:shadow-card">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
