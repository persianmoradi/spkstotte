import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { logos } from "@/lib/assets";

/**
 * spkstøtte-logo (kundens officielle logo, public/assets/logos/spkstotte-logo.png).
 * - "dark"  → navbar på lys baggrund: logoet vises som det er.
 * - "light" → footer på mørk baggrund: logoet vises monokromt hvidt,
 *   så det forbliver synligt.
 */
export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${site.name} – til forsiden`}
    >
      <Image
        src={logos.primary}
        alt={site.name}
        width={186}
        height={36}
        priority
        className={cn(
          "h-9 w-auto transition-opacity duration-300 hover:opacity-90",
          variant === "light" && "brightness-0 invert"
        )}
      />
    </Link>
  );
}
