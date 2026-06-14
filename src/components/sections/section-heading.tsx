import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h1";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="eyebrow">
          <span className="h-px w-6 bg-secondary" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <Tag
        className={cn(
          "prose-balance mt-4 text-3xl font-semibold tracking-tight text-primary sm:text-4xl",
          as === "h1" && "text-4xl sm:text-5xl"
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
