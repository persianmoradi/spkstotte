import { Phone } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type CallNowButtonProps = {
  label?: string;
  showNumber?: boolean;
  className?: string;
} & Pick<ButtonProps, "variant" | "size">;

/** Genbrugelig "Ring nu"-knap med korrekt tel:-link og a11y-label. */
export function CallNowButton({
  label = "Ring nu",
  showNumber = false,
  variant = "primary",
  size = "md",
  className,
}: CallNowButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={site.phoneHref} aria-label={`Ring til ${site.name} på ${site.phone}`}>
        <Phone aria-hidden />
        <span>{showNumber ? `${label} · ${site.phone}` : label}</span>
      </a>
    </Button>
  );
}

export function PhoneLink({ className }: { className?: string }) {
  return (
    <a
      href={site.phoneHref}
      className={cn(
        "font-semibold text-primary transition-colors hover:text-secondary",
        className
      )}
    >
      {site.phone}
    </a>
  );
}
