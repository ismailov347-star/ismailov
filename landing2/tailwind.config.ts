import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'lepka': ['Lepka', 'sans-serif'],
      },
      colors: {
        base: "#0f1115",
        soft: "#141822",
        accent: "#7aa2ff",
        subtle: "#c9d1e1",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
        glow: "0 0 0 1px rgba(122,162,255,0.25), 0 8px 30px rgba(122,162,255,0.25)",
      },
      keyframes: {
        pulseSoft: { "0%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" }, "100%": { transform: "scale(1)" } },
        bar: { "0%": { width: "0%" }, "100%": { width: "100%" } },
        float: { "0%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-6px)" }, "100%": { transform: "translateY(0px)" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeInUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        premiumFadeIn: { "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" }, "100%": { opacity: "1", transform: "translateY(0) scale(1)" } },
        slowSpin: { "0%": { transform: "rotateY(0deg)" }, "100%": { transform: "rotateY(360deg)" } },
      },
      animation: {
        pulseSoft: "pulseSoft 2.2s ease-in-out infinite",
        bar: "bar 2.2s ease-in-out forwards",
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp .7s ease-out forwards",
        fadeInUp: "fadeInUp 1s ease-out forwards",
        'premium-fade-in': 'premiumFadeIn 1.2s ease-out',
        slowSpin: "slowSpin 14s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;