import { Phone, Mail, Clock } from "lucide-react";

import { site } from "@/lib/site";
import { CallNowButton } from "@/components/call-now-button";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function ContactCta() {
  return (
    <section className="container-page pb-24 pt-4 lg:pb-32">
      <Reveal className="max-w-none">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-secondary to-secondary-700 px-8 py-14 text-white shadow-card lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="prose-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Skal vi hjælpe med en sag?
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/85">
                Ring til os for en hurtig, uforpligtende afklaring. Vi vender
                tilbage hurtigt og finder den rette indsats sammen med jer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallNowButton showNumber size="lg" variant="accent" />
                <Button asChild variant="outline" size="lg" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white">
                  <a href={site.emailHref}>
                    <Mail aria-hidden />
                    Send en e-mail
                  </a>
                </Button>
              </div>
            </div>

            <dl className="grid gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/15">
                  <Phone className="size-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-white/70">
                    Telefon
                  </dt>
                  <dd>
                    <a href={site.phoneHref} className="text-lg font-semibold hover:underline">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/15">
                  <Mail className="size-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-white/70">
                    E-mail
                  </dt>
                  <dd>
                    <a href={site.emailHref} className="text-lg font-semibold hover:underline">
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/15">
                  <Clock className="size-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-white/70">
                    Åbningstid
                  </dt>
                  <dd className="text-lg font-semibold">{site.hours}</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
