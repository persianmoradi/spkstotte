import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        Siden blev ikke fundet
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Siden, du leder efter, findes ikke længere. Gå tilbage til forsiden, eller
        ring til os, hvis du har brug for hjælp.
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
    </section>
  );
}
