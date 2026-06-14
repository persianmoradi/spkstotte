import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/site";
import { SectionHeading } from "@/components/sections/section-heading";
import { serviceIcons } from "@/components/sections/service-icons";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function ServicesOverview() {
  return (
    <section className="bg-muted/40 py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Ydelser"
            title="Indsatser tilpasset barnets og familiens behov"
            description="Seks specialiserede ydelser leveret efter Barnets Lov – altid med afsæt i den enkelte sag og myndighedens bestilling."
          />
          <Link
            href="/ydelser"
            className="link-underline hidden shrink-0 text-sm font-semibold text-primary lg:inline-flex lg:items-center lg:gap-1"
          >
            Se alle ydelser
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug];
            return (
              <RevealItem key={service.slug}>
                <Link
                  href={`/ydelser#${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-card"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {Icon ? <Icon className="size-6" aria-hidden /> : null}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                    Læs mere
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-8 lg:hidden">
          <Link
            href="/ydelser"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
          >
            Se alle ydelser
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
