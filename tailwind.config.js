/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        page: "#070607",
        sidebar: "#0b0809",
        cardFrom: "#140d0f",
        cardTo: "#0e0a0b",
        red: {
          main: "#b91c1c",
          strong: "#dc2626",
          dark: "#7f1d1d",
          glow: "rgba(185, 28, 28, 0.35)",
          light: "#ef4444",
        },
        textMain: "#f5f1f1",
        textSecondary: "#8f8587",
        positive: "#4ade80",
        negative: "#f87171",
      },
      boxShadow: {
        "red-glow": "0 0 0 1px rgba(220,38,38,0.18), 0 8px 24px rgba(185,28,28,0.12)",
        "red-glow-hover": "0 0 0 1px rgba(220,38,38,0.45), 0 12px 32px rgba(185,28,28,0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "count-up": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: {
        "fade-up": "fade-up 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
