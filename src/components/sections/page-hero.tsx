import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

type Crumb = { name: string; href: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/30">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid-faint opacity-50" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/50 blur-3xl" />
      </div>

      <div className="container-page py-14 lg:py-20">
        <nav aria-label="Brødkrumme">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 ? (
                  <ChevronRight className="size-4 text-border" aria-hidden />
                ) : null}
                {i < breadcrumbs.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-primary"
                  >
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="font-medium text-primary" aria-current="page">
                    {crumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Reveal className="mt-6 max-w-3xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-secondary" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="prose-balance mt-4 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
