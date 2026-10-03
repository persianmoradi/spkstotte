import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { methods } from "@/lib/site";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export function MethodsPreview() {
  return (
    <section className="relative overflow-hidden bg-surface-sunken py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 mesh-soft" />
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
      </div>

      <div className="container-page relative grid gap-14 lg:grid-cols-12 lg:items-center">
        {/* ---------- Foto ---------- */}
        <div className="lg:col-span-5">
          <Reveal variant="scale">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-ink-900/[0.06] shadow-lift">
                <Image
                  src={images.reflection.src}
                  alt={images.reflection.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 28rem"
                  className="object-cover"
                />
              </div>

              {/* Flydende glas-citat oven på fotoet */}
              <div className="glass-strong absolute -bottom-6 left-6 right-6 rounded-3xl p-5 lg:-right-8">
                <p className="text-sm font-medium leading-relaxed text-ink-800">
                  &ldquo;Vi møder den unge dér, hvor hun eller han er – og
                  arbejder derfra.&rdquo;
                </p>
                <p className="mt-2 text-2xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Vores faglige afsæt
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- Metoder ---------- */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-primary" aria-hidden />
              Faglige metoder
            </span>
            <h2 className="prose-balance mt-4 text-3xl font-semibold text-ink-900 sm:text-4xl">
              Evidensinformeret praksis med relationen i centrum
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Vores metoder er udvalgt, fordi de virker i praksis – og fordi de
              passer til vores værdier om respekt, tillid, empati og
              anerkendelse.
            </p>
          </Reveal>

          <RevealGroup className="mt-9 grid gap-3 sm:grid-cols-2" stagger={0.06}>
            {methods.map((method) => (
              <RevealItem key={method.title}>
                <div className="lift-hover-sm flex h-full items-center rounded-2xl border border-ink-900/[0.06] bg-surface px-5 py-4 shadow-soft hover:border-primary/25 hover:shadow-card">
                  <h3 className="text-[0.95rem] font-semibold text-ink-800">
                    {method.title}
                  </h3>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={1}>
            <div className="mt-9">
              <Button asChild variant="primary" size="lg">
                <Link href="/metoder">
                  Læs om vores metoder
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
