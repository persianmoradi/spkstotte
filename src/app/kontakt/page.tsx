import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, Building } from "lucide-react";

import { site } from "@/lib/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { CallNowButton } from "@/components/call-now-button";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontakt spkstøtte. Ring på 50 66 76 50 eller skriv til kontakt@spkstotte.dk for en hurtig, uforpligtende afklaring. CVR: 44827530.",
  path: "/kontakt",
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: `${site.url}/kontakt`,
  email: site.email,
  telephone: `+45${site.phone.replace(/\s/g, "")}`,
  vatID: `DK${site.cvr}`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+45${site.phone.replace(/\s/g, "")}`,
    email: site.email,
    contactType: "kundeservice",
    areaServed: "DK",
    availableLanguage: ["da"],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactJsonLd,
          breadcrumbJsonLd([
            { name: "Forside", path: "/" },
            { name: "Kontakt", path: "/kontakt" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Kontakt"
        title="Lad os tage en uforpligtende snak"
        description="Har I en konkret sag eller blot et spørgsmål? Ring eller skriv – vi vender hurtigt tilbage og finder den rette indsats sammen med jer."
        breadcrumbs={[
          { name: "Forside", href: "/" },
          { name: "Kontakt", href: "/kontakt" },
        ]}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Primær kontakt */}
          <div className="lg:col-span-7">
            <Reveal className="max-w-none">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-gradient-to-br from-primary to-primary-700 p-8 text-white shadow-card lg:p-12">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Ring til os
                  </h2>
                  <p className="mt-3 max-w-md text-white/75">
                    Den hurtigste vej til en afklaring er et opkald. Vi sidder
                    klar i åbningstiden og hjælper jer videre med det samme.
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-8 inline-block text-4xl font-bold tracking-tight transition-colors hover:text-accent-200 sm:text-5xl"
                  >
                    {site.phone}
                  </a>
                </div>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <CallNowButton size="lg" variant="accent" />
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
                  >
                    <a href={site.emailHref}>
                      <Mail aria-hidden />
                      Send en e-mail
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Kontaktdetaljer */}
          <div className="lg:col-span-5">
            <Reveal delay={1} className="max-w-none">
              <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-soft lg:p-10">
                <h2 className="text-lg font-semibold text-primary">
                  Kontaktoplysninger
                </h2>
                <dl className="mt-6 space-y-6">
                  <ContactRow icon={Phone} label="Telefon">
                    <a
                      href={site.phoneHref}
                      className="font-semibold text-primary hover:text-secondary"
                    >
                      {site.phone}
                    </a>
                  </ContactRow>
                  <ContactRow icon={Mail} label="E-mail">
                    <a
                      href={site.emailHref}
                      className="font-semibold text-primary hover:text-secondary"
                    >
                      {site.email}
                    </a>
                  </ContactRow>
                  <ContactRow icon={Building} label="CVR-nummer">
                    <span className="font-semibold text-primary">{site.cvr}</span>
                  </ContactRow>
                  <ContactRow icon={Clock} label="Åbningstid">
                    <span className="font-semibold text-primary">{site.hours}</span>
                  </ContactRow>
                  <ContactRow icon={MapPin} label="Dækningsområde">
                    <span className="font-semibold text-primary">
                      Landsdækkende · {site.country}
                    </span>
                  </ContactRow>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary">
        <Icon className="size-5" aria-hidden />
      </span>
      <div>
        <dt className="text-xs uppercase tracking-wide text-muted-foreground">
          {label}
        </dt>
        <dd className="mt-1 text-lg">{children}</dd>
      </div>
    </div>
  );
}
