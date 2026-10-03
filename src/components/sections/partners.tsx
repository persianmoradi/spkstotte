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
    <section className="border-t border-ink-900/[0.06] bg-surface-sunken py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Samarbejdspartnere"
          title="Vi arbejder tæt sammen med dem omkring barnet"
          description="spkstøtte er bindeled i et helhedsorienteret samarbejde. Vi taler myndighedens sprog og leverer det, der er aftalt."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, label }) => (
            <RevealItem key={label}>
              <div className="lift-hover group flex h-full flex-col items-center gap-4 rounded-3xl border border-ink-900/[0.06] bg-surface px-5 py-8 text-center shadow-soft hover:border-primary/25 hover:shadow-card">
                <span className="grid size-14 place-items-center rounded-2xl bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-6" aria-hidden />
                </span>
                <p className="text-sm font-semibold text-ink-900">{label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
