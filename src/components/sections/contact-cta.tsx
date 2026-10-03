import Link from "next/link";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function ContactCta() {
  return (
    <section className="container-page pb-24 pt-4 lg:pb-32">
      <Reveal className="max-w-none" variant="scale">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 px-8 py-14 text-white shadow-lift lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 mesh-cta" aria-hidden />
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-accent/15 blur-3xl motion-safe:animate-float"
            aria-hidden
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="prose-balance text-3xl font-semibold sm:text-4xl">
                Skal vi hjælpe med en sag?
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/95">
                Ring til os for en hurtig, uforpligtende afklaring. Vi vender
                tilbage hurtigt og finder den rette indsats sammen med jer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link href="/kontakt">
                    Kontakt os
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
                >
                  <a href={site.phoneHref} aria-label={`Ring til ${site.name} på ${site.phone}`}>
                    <Phone aria-hidden />
                    Ring {site.phone}
                  </a>
                </Button>
              </div>
            </div>

            <dl className="glass-dark grid gap-5 rounded-3xl p-6 sm:grid-cols-2 lg:grid-cols-1">
              <ContactLine icon={Phone} label="Telefon">
                <a href={site.phoneHref} className="hover:underline">
                  {site.phone}
                </a>
              </ContactLine>
              <ContactLine icon={Mail} label="E-mail">
                <a href={site.emailHref} className="hover:underline">
                  {site.email}
                </a>
              </ContactLine>
              <ContactLine icon={Clock} label="Åbningstid">
                {site.hours}
              </ContactLine>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/15">
        <Icon className="size-5" aria-hidden />
      </span>
      <div>
        <dt className="text-2xs uppercase tracking-[0.14em] text-white/85">
          {label}
        </dt>
        <dd className="mt-0.5 text-lg font-semibold">{children}</dd>
      </div>
    </div>
  );
}
