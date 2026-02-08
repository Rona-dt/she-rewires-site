import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
          DEFAULT: "#303030",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E6E6E6",
          foreground: "#303030",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#E6E6E6",
          foreground: "#303030",
        },
        accent: {
          DEFAULT: "#BFFE01",
          foreground: "#303030",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // VI Brand Colors
        lime: {
          DEFAULT: "#BFFE01",
          50: "#F4FFD6",
          100: "#ECFFB8",
          500: "#BFFE01",
        },
        purple: {
          DEFAULT: "#8A55ED",
          50: "#F5F0FF",
          100: "#DEC4FF",
          200: "#DEC4FF",
          300: "#B794F6",
          400: "#9F6FEF",
          500: "#8A55ED",
          600: "#7440D9",
          700: "#5E2FC4",
          800: "#4A25A0",
          900: "#371B7C",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E6E6E6",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#303030",
          900: "#1A1A1A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
