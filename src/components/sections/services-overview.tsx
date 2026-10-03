import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/site";
import { SectionHeading } from "@/components/sections/section-heading";
import { serviceIcons } from "@/components/sections/service-icons";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-surface-sunken py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 mesh-soft opacity-70" aria-hidden />

      <div className="container-page relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Socialfaglige indsatser"
            title="Indsatser tilpasset barnets og familiens behov"
            description="Syv specialiserede indsatser leveret efter Barnets Lov – altid med afsæt i den enkelte sag og myndighedens bestilling."
          />
          <Link
            href="/indsatser"
            className="link-underline hidden shrink-0 text-sm font-semibold text-primary lg:inline-flex lg:items-center lg:gap-1"
          >
            Se alle indsatser
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug];
            return (
              <RevealItem key={service.slug}>
                <Link
                  href={`/indsatser#${service.slug}`}
                  className="lift-hover group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/[0.06] bg-surface p-7 shadow-soft hover:border-primary/25 hover:shadow-lift lg:p-8"
                >
                  {/* Blød teal-glød der toner frem ved hover */}
                  <span
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary-100/0 blur-2xl transition-colors duration-500 group-hover:bg-primary-100/70"
                    aria-hidden
                  />

                  <span className="relative grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {Icon ? <Icon className="size-6" aria-hidden /> : null}
                  </span>

                  <h3 className="relative mt-5 text-lg font-semibold text-ink-900">
                    {service.title}
                  </h3>
                  {service.legal ? (
                    <p className="relative mt-1.5 text-xs font-medium text-primary">
                      {service.legal}
                    </p>
                  ) : null}
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>

                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Læs mere
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-8 lg:hidden">
          <Link
            href="/indsatser"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
          >
            Se alle indsatser
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
