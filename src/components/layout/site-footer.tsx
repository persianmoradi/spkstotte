import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { mainNav, services, site } from "@/lib/site";
import { Logo } from "@/components/brand/logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-30" aria-hidden />
      <div className="container-page relative grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {site.description}
          </p>
          <dl className="mt-7 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="size-4 text-accent-200" aria-hidden />
              <a href={site.phoneHref} className="hover:text-accent-200">
                {site.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-accent-200" aria-hidden />
              <a href={site.emailHref} className="hover:text-accent-200">
                {site.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="size-4 text-accent-200" aria-hidden />
              <span className="text-white/70">{site.hours}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-4 text-accent-200" aria-hidden />
              <span className="text-white/70">Landsdækkende · {site.country}</span>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-3 lg:col-start-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-200">
            Sider
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-200">
            Ydelser
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/ydelser#${s.slug}`}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Alle rettigheder forbeholdes.
          </p>
          <p>CVR: {site.cvr}</p>
        </div>
      </div>
    </footer>
  );
}
