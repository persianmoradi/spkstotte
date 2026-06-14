import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#eef3fa",
          100: "#d6e2f2",
          200: "#adc4e4",
          300: "#7c9fd0",
          400: "#4a72b0",
          500: "#2b5189",
          600: "#1d3c6b",
          700: "#163056",
          800: "#0f2d52",
          900: "#081f3a",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#eef6f1",
          100: "#d4e9dd",
          200: "#a9d3bb",
          300: "#76b594",
          400: "#4a9270",
          500: "#2f6f57",
          600: "#255945",
          700: "#1d4637",
          800: "#16362b",
          900: "#0f2620",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#fbf9f5",
          100: "#f4efe6",
          200: "#e8dfd1",
          300: "#d9ccb6",
          400: "#c6b394",
          500: "#b39a73",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,45,82,0.04), 0 8px 24px rgba(15,45,82,0.06)",
        card: "0 1px 3px rgba(15,45,82,0.06), 0 18px 40px -16px rgba(15,45,82,0.18)",
        lift: "0 24px 60px -24px rgba(15,45,82,0.32)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
