import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { methods } from "@/lib/site";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function MethodsPreview() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white lg:py-28">
      {/* Rolig skovsti som baggrund, dækket af brandtonet overlay */}
      <Image
        src={images.nature.src}
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="object-cover opacity-25"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="max-w-2xl">
          <span className="eyebrow text-accent-200">
            <span className="h-px w-6 bg-accent-200" aria-hidden />
            Faglige metoder
          </span>
          <h2 className="prose-balance mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Evidensinformeret praksis med relationen i centrum
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Vores metoder er udvalgt, fordi de virker i praksis – og fordi de
            passer til vores værdier om respekt, tillid, empati og anerkendelse.
          </p>
        </div>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => (
            <RevealItem
              key={method.title}
              className="flex min-h-[5rem] items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
            >
              <h3 className="text-[0.95rem] font-semibold text-white">
                {method.title}
              </h3>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10">
          <Button asChild variant="accent" size="lg">
            <Link href="/metoder">
              Læs om vores metoder
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
