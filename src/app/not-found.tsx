import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Home, Phone } from "lucide-react";

import { mainNav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Siden blev ikke fundet",
  robots: { index: false, follow: true },
};

const quickLinks = mainNav.filter((item) => item.href !== "/");

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 mesh-soft" />
        <div className="absolute inset-0 bg-grid-faint opacity-50" />
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-primary-100/50 blur-3xl motion-safe:animate-float" />
        <div className="absolute -left-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-accent-100/50 blur-3xl" />
      </div>

      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center lg:py-28">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          <Compass className="size-3.5" aria-hidden />
          Fejl 404
        </span>

        <p
          className="mt-6 select-none bg-gradient-to-b from-primary to-primary-300 bg-clip-text text-[7rem] font-bold leading-none tracking-tight text-transparent sm:text-[10rem]"
          aria-hidden
        >
          404
        </p>

        <h1 className="prose-balance mt-2 text-3xl font-semibold text-ink-900 sm:text-5xl">
          Her er du nok{" "}
          <span className="relative inline-block text-primary">
            faret lidt vild
            <svg
              className="absolute -bottom-2 left-0 h-3 w-full text-accent-300"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M2 9C40 4 100 2 198 6"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-lg text-muted-foreground">
          Siden du leder efter, findes ikke eller er flyttet. Det er helt
          okay – vi hjælper dig gerne videre.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <Home aria-hidden />
              Til forsiden
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={site.phoneHref}>
              <Phone aria-hidden />
              Ring {site.phone}
            </a>
          </Button>
        </div>

        <nav aria-label="Genveje" className="mt-14 w-full max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Eller prøv en af disse
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="glass group flex items-center justify-between rounded-2xl px-5 py-4 text-left text-sm font-medium text-ink-900 transition hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {item.label}
                  <ArrowRight
                    className="size-4 text-primary transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
