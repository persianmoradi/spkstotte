import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** Tekst-baseret wordmark med diskret skandinavisk mærke. Erstat nemt med rigtigt logo. */
export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const textColor = variant === "light" ? "text-white" : "text-primary";
  const subColor = variant === "light" ? "text-white/70" : "text-muted-foreground";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${site.name} – til forsiden`}
    >
      <span
        aria-hidden
        className="grid size-10 place-items-center rounded-xl bg-primary text-white shadow-soft transition-transform duration-300 group-hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none">
          {/* To bløde, sammenflettede former – symbol på relation og støtte */}
          <path
            d="M8 16c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.6 0 3 .95 3.6 2.3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M16 8c2.2 0 4 1.8 4 4s-1.8 4-4 4c-1.6 0-3-.95-3.6-2.3"
            stroke="#2F6F57"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("text-base font-bold tracking-tight", textColor)}>
          {site.name}
        </span>
        <span className={cn("mt-1 text-[0.68rem] tracking-wide", subColor)}>
          Efter Barnets Lov
        </span>
      </span>
    </Link>
  );
}
