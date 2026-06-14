import { Scale, FileCheck2, Users, MapPinned } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const items = [
  {
    icon: Scale,
    title: "Indsatser efter Barnets Lov",
    text: "Alle ydelser leveres inden for lovens rammer og myndighedens bestilling.",
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
    <section aria-label="Tillidsindikatorer" className="border-y border-border bg-muted/40">
      <div className="container-page py-12">
        <Reveal className="max-w-none">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            En troværdig samarbejdspartner for det offentlige
          </p>
        </Reveal>
        <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <RevealItem
              key={title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-primary">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
