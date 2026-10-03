import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h1";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
  tone = "light",
}: SectionHeadingProps) {
  const Tag = as;
  const onDark = tone === "dark";

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", onDark && "text-accent-300")}>
          <span
            className={cn("h-px w-6", onDark ? "bg-accent-300" : "bg-primary")}
            aria-hidden
          />
          {eyebrow}
        </span>
      ) : null}
      <Tag
        className={cn(
          "prose-balance mt-4 text-3xl font-semibold sm:text-4xl",
          onDark ? "text-white" : "text-ink-900",
          as === "h1" && "text-4xl sm:text-5xl"
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            onDark ? "text-white/95" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
