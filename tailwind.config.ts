import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Graphite dark palette — rich, warm-toned blacks
        canvas: "#0A0A0B",
        surface: "#111113",
        "surface-2": "#18181C",
        "surface-3": "#1E1E24",
        border: "#1E1E24",
        "border-bright": "#2A2A35",

        // Accent system — gold/amber primary, sage secondary
        gold: {
          DEFAULT: "#C9A96E",
          bright: "#E8C87A",
          dim: "#9A7A48",
          glow: "rgba(201,169,110,0.15)",
          "glow-strong": "rgba(201,169,110,0.30)",
        },
        sage: {
          DEFAULT: "#7B9E87",
          bright: "#9BBBA6",
          dim: "#5A7A65",
          glow: "rgba(123,158,135,0.15)",
        },
        amber: {
          DEFAULT: "#D4956A",
          dim: "#AA6D42",
          glow: "rgba(212,149,106,0.15)",
        },

        // Text hierarchy
        "text-primary": "#F2EDE6",
        "text-secondary": "#8A8078",
        "text-muted": "#4A4540",
        "text-accent": "#C9A96E",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.65" }],
        "label": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "xl2": "1.25rem",
        "xl3": "1.75rem",
      },
      boxShadow: {
        "gold-sm": "0 0 20px rgba(201,169,110,0.2)",
        "gold-md": "0 0 40px rgba(201,169,110,0.25)",
        "gold-lg": "0 0 80px rgba(201,169,110,0.2)",
        "sage-sm": "0 0 20px rgba(123,158,135,0.2)",
        "card": "0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)",
        "soft": "0 1px 2px rgba(10,10,11,0.1), 0 16px 40px -16px rgba(10,10,11,0.4)",
        "lift": "0 24px 60px -20px rgba(201,169,110,0.25)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
        "blink": "blink 1s step-end infinite",
        "floaty": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
