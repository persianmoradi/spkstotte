import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Knapper.
 *
 * Fyldte varianter får `.shine` (glossy sweep ved hover) og et blødt løft.
 * Begge effekter er rene transform/opacity-ændringer, så de kører på
 * compositoren og ikke udløser layout shift. `prefers-reduced-motion`
 * slår dem fra i `globals.css`.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* Primær handling – teal 800 giver AAA mod hvid tekst. */
        primary:
          "shine bg-primary-strong text-primary-foreground shadow-soft hover:bg-primary-deep hover:-translate-y-0.5 hover:shadow-primary-glow",
        /* Den varme CTA. Mørk tekst på amber = 7.9:1 (AAA). */
        accent:
          "shine bg-accent text-accent-foreground shadow-soft hover:bg-accent-400 hover:-translate-y-0.5 hover:shadow-accent-glow",
        secondary:
          "shine bg-secondary text-secondary-foreground shadow-soft hover:bg-primary-strong hover:-translate-y-0.5 hover:shadow-primary-glow",
        /* Sekundær handling på lys baggrund. */
        outline:
          "border border-primary/20 bg-surface text-primary hover:border-primary/45 hover:bg-primary-50 hover:-translate-y-0.5 hover:shadow-soft",
        /* Sekundær handling oven på foto eller farvet flade. */
        glass:
          "glass text-primary hover:-translate-y-0.5 hover:shadow-glass",
        ghost: "text-primary hover:bg-primary-50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-7 text-[0.95rem]",
        xl: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
