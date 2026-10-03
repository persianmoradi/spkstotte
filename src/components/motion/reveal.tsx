"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

/**
 * Scroll-reveal.
 *
 * Vigtigt: Framer Motion sætter transforms via inline style i JS, så den
 * CSS-regel vi har for `prefers-reduced-motion` i globals.css fanger den ikke.
 * Derfor spørger komponenterne herunder selv via `useReducedMotion()` og
 * falder tilbage til en ren opacity-fade (eller slet ingen animation).
 *
 * Elementerne animerer kun `opacity` og `transform`, som begge kører på
 * compositoren. De reserverer deres plads i layoutet fra start, så der
 * opstår ingen layout shift (CLS = 0).
 */

type RevealVariant = "up" | "scale" | "fade";

function buildVariants(
  variant: RevealVariant,
  reduced: boolean | null
): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: (i: number = 0) => ({
        opacity: 1,
        transition: { duration: 0.2, delay: i * 0.03 },
      }),
    };
  }

  const hidden =
    variant === "scale"
      ? { opacity: 0, scale: 0.96, y: 16 }
      : variant === "fade"
        ? { opacity: 0 }
        : { opacity: 0, y: 24 };

  return {
    hidden,
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        delay: i * 0.08,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  as?: "div" | "section" | "li" | "article" | "header";
};

/** Diskret, professionel scroll-reveal. */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];
  const variants = React.useMemo(
    () => buildVariants(variant, reduced),
    [variant, reduced]
  );

  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger-container til lister af kort. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: reduced ? 0.02 : stagger }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variant = "scale",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  const reduced = useReducedMotion();
  const variants = React.useMemo(
    () => buildVariants(variant, reduced),
    [variant, reduced]
  );
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
