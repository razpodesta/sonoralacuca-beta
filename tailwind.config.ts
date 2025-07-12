import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1a1a1a",
          primary: "#c59d42",
          accent: "#e94560",
          secondary: "#2d2d2d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        "serif-brand": ["var(--font-playfair)", "serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
      },
      screens: {
        "xs": "475px",
        "3xl": "1600px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;

