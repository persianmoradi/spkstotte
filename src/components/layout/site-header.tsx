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
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Spring til indhold
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
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
                      "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {item.label}
                    {active ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-secondary"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CallNowButton showNumber variant="primary" size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary/5 lg:hidden"
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
              className="container-page border-t border-border bg-white pb-6 pt-2"
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
                            ? "bg-primary/5 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <a
                href={site.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft"
              >
                <Phone className="size-4" />
                Ring nu · {site.phone}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
