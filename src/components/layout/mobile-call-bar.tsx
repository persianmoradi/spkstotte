import { Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";

/** Fast konverteringsbar i bunden på mobil – altid ét tryk fra at ringe. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/[0.07] bg-background/90 backdrop-blur-xl backdrop-saturate-150 lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 bg-accent py-3.5 text-sm font-semibold text-accent-foreground"
          aria-label={`Ring til ${site.name} på ${site.phone}`}
        >
          <Phone className="size-4" aria-hidden />
          Ring nu
        </a>
        <a
          href={site.emailHref}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-primary"
          aria-label={`Send e-mail til ${site.email}`}
        >
          <Mail className="size-4" aria-hidden />
          Skriv til os
        </a>
      </div>
    </div>
  );
}
