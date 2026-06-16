import { Building2, Users, Baby, Handshake, HomeIcon, Gavel } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

const audiences = [
  { icon: Building2, label: "Kommunale sagsbehandlere" },
  { icon: Users, label: "Familieafdelinger" },
  { icon: Baby, label: "Børn og unge-forvaltninger" },
  { icon: Gavel, label: "Ungdomskriminalitetsnævnet" },
  { icon: Handshake, label: "Samarbejdspartnere" },
  { icon: HomeIcon, label: "Familier" },
];

export function Partners() {
  return (
    <section className="container-page py-20 lg:py-28">
      <SectionHeading
        eyebrow="Samarbejdspartnere"
        title="Vi arbejder tæt sammen med dem omkring barnet"
        description="spkstøtte er bindeled i et helhedsorienteret samarbejde. Vi taler myndighedens sprog og leverer det, der er aftalt."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map(({ icon: Icon, label }) => (
          <RevealItem
            key={label}
            className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-white px-5 py-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-secondary/10 text-secondary">
              <Icon className="size-6" aria-hidden />
            </span>
            <p className="text-sm font-semibold text-primary">{label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
