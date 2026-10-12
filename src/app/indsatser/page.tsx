import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";

import { services } from "@/lib/site";
import { images, type SiteImage } from "@/lib/images";
import {
  buildMetadata,
  breadcrumbJsonLd,
  servicesJsonLd,
} from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { serviceIcons } from "@/components/sections/service-icons";
import { ContactCta } from "@/components/sections/contact-cta";
import { CallNowButton } from "@/components/call-now-button";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Socialfaglige indsatser",
  description:
    "Se spkstøttes socialfaglige indsatser efter Barnets Lov: støttekontaktperson, pædagogisk støtte, ungestøtte, familiebehandling, støtteperson, støttet samvær og overvåget samvær.",
  path: "/indsatser",
});

/** Kun indsatser med et passende, ikke-stigmatiserende foto får et billede. */
const serviceImages: Record<string, SiteImage> = {
  stottekontaktperson: images.conversation,
  ungestotte: images.education,
  familiebehandling: images.family,
  "stottet-samvaer": images.together,
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Forside", path: "/" },
            { name: "Socialfaglige indsatser", path: "/indsatser" },
          ]),
          servicesJsonLd(services),
        ]}
      />

      <PageHero
        eyebrow="Socialfaglige indsatser"
        title="Specialiserede indsatser efter Barnets Lov"
        description="Vi tilbyder syv målrettede indsatser. Hver indsats tilrettelægges individuelt ud fra barnets behov og myndighedens bestilling – og dokumenteres systematisk undervejs."
        breadcrumbs={[
          { name: "Forside", href: "/" },
          { name: "Socialfaglige indsatser", href: "/indsatser" },
        ]}
      />

      {/* Hurtig oversigt / anker-navigation */}
      <section className="border-b border-ink-900/[0.06] bg-surface-sunken">
        <div className="container-page py-8">
          <ul className="flex flex-wrap gap-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="inline-flex rounded-full border border-ink-900/[0.06] bg-surface px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/30 hover:bg-primary-50"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-page py-20 lg:py-28">
        <div className="space-y-20 lg:space-y-28">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug];
            const reversed = index % 2 === 1;
            const photo = serviceImages[service.slug];
            return (
              <Reveal
                key={service.slug}
                as="section"
                className="scroll-mt-28"
              >
                <article id={service.slug} className="scroll-mt-28">
                  <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                    <div className={reversed ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
                      <span className="grid size-14 place-items-center rounded-2xl bg-primary-50 text-primary">
                        {Icon ? <Icon className="size-7" aria-hidden /> : null}
                      </span>
                      <h2 className="mt-5 text-2xl font-semibold text-ink-900 sm:text-3xl">
                        {service.title}
                      </h2>
                      {service.legal ? (
                        <p className="mt-1.5 text-sm font-medium text-primary">
                          {service.legal}
                        </p>
                      ) : null}
                      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <p className="mt-4 text-sm font-medium text-primary">
                        <span className="text-muted-foreground">For hvem: </span>
                        {service.forWhom}
                      </p>
                      <div className="mt-6">
                        <CallNowButton label="Drøft en sag" showNumber size="md" variant="outline" />
                      </div>
                    </div>

                    <div className={reversed ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"}>
                      {photo ? (
                        <div className="relative mb-5 aspect-[3/2] overflow-hidden rounded-3xl border border-ink-900/[0.06] shadow-soft">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 1024px) 92vw, 28rem"
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      <div className="rounded-3xl border border-ink-900/[0.06] bg-gradient-to-br from-primary-50/60 to-surface p-7 shadow-soft">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                          Det opnår vi
                        </h3>
                        <ul className="mt-5 space-y-3.5">
                          {service.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-3">
                              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary-50 text-primary">
                                <Check className="size-3.5" aria-hidden />
                              </span>
                              <span className="text-sm leading-relaxed text-ink-700">
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ContactCta />
    </>
  );
}
