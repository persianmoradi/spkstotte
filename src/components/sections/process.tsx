import { processSteps } from "@/lib/site";
import { SectionHeading } from "@/components/sections/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function Process() {
  return (
    <section className="container-page py-20 lg:py-28">
      <SectionHeading
        eyebrow="Arbejdsproces"
        title="Sådan hjælper vi den unge – trin for trin"
        description="Vi gør samarbejdet forudsigeligt for både sagsbehandler, barn og familie. Sådan ser et typisk forløb ud."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="relative mt-14" stagger={0.1}>
        {/* Forbindelseslinjen. Vandret på desktop, lodret på mobil – begge
            dele er rent dekorative og skjult for skærmlæsere. */}
        <div
          className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-primary-200 via-primary-200 to-transparent sm:hidden"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent lg:block"
          aria-hidden
        />

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step) => (
            <RevealItem key={step.step}>
              <li className="relative flex gap-5 sm:flex-col sm:gap-0">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-ink-900/[0.06] bg-surface text-lg font-bold text-primary shadow-soft transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-card">
                  {step.step}
                </span>
                <div className="sm:mt-5">
                  <h3 className="text-base font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            </RevealItem>
          ))}
        </ol>
      </RevealGroup>
    </section>
  );
}
