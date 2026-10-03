"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { mainNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";
import { CallNowButton } from "@/components/call-now-button";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out-expo",
        scrolled
          ? "border-b border-ink-900/[0.07] bg-background/80 shadow-soft backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-background/55 backdrop-blur-md"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary-strong focus:px-4 focus:py-2 focus:text-white focus:shadow-lift"
      >
        Spring til indhold
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-3 lg:h-20 lg:gap-6">
        <Logo />

        <nav aria-label="Hovednavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200",
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {/* Pillen tegnes først og teksten løftes med `relative`,
                        så markeringen ligger bag labelen uden negativ z-index
                        (som ville havne bag headerens egen baggrund). */}
                    {active ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-primary-50"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <span className="relative">{item.navLabel ?? item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <CallNowButton
            showNumber
            variant="outline"
            size="sm"
            className="hidden xl:inline-flex"
          />
          <CallNowButton variant="outline" size="sm" className="xl:hidden" />
          <Button asChild variant="accent" size="sm">
            <Link href="/kontakt">Kontakt os</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Luk menu" : "Åbn menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <nav
              aria-label="Mobilnavigation"
              className="container-page border-t border-ink-900/[0.07] bg-background/95 pb-6 pt-2 backdrop-blur-xl"
            >
              <ul className="flex flex-col">
                {mainNav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-primary-50 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 grid gap-2.5">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft"
                >
                  <Phone className="size-4" aria-hidden />
                  Ring nu · {site.phone}
                </a>
                <Link
                  href="/kontakt"
                  className="flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-surface px-6 py-3 text-sm font-semibold text-primary"
                >
                  Kontakt os
                </Link>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
