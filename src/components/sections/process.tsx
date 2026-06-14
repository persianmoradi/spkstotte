import { processSteps } from "@/lib/site";
import { SectionHeading } from "@/components/sections/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function Process() {
  return (
    <section className="container-page py-20 lg:py-28">
      <SectionHeading
        eyebrow="Arbejdsproces"
        title="Et trygt forløb – fra henvendelse til evaluering"
        description="Vi gør samarbejdet forudsigeligt for både sagsbehandler, barn og familie. Sådan ser et typisk forløb ud."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="relative mt-14">
        {/* Forbindelseslinje på desktop */}
        <div
          className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          aria-hidden
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <RevealItem key={step.step}>
              <li className="relative flex flex-col">
                <span className="grid size-14 place-items-center rounded-2xl border border-border bg-white text-lg font-bold text-primary shadow-soft">
                  {step.step}
                </span>
                <h3 className="mt-5 text-base font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            </RevealItem>
          ))}
        </ol>
      </RevealGroup>
    </section>
  );
}
