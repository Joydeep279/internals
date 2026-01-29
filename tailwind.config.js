/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#ec4899",
        "background-start": "#0a0e27",
        "background-end": "#020617",
        "card-dark": "rgba(15, 23, 42, 0.6)",
        "accent-purple": "#8b5cf6",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      backgroundImage: {
        'laser-gradient': 'linear-gradient(to top, rgba(236, 72, 153, 0.8), rgba(236, 72, 153, 0) 80%)',
        'hero-glow': 'radial-gradient(circle at bottom center, rgba(236, 72, 153, 0.15) 0%, rgba(2, 6, 23, 0) 70%)',
        'dark-gradient': 'linear-gradient(to bottom, #0a0e27, #020617)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'beam-rise': 'beamRise 3s ease-out forwards',
      },
      keyframes: {
        beamRise: {
          '0%': { height: '0%', opacity: '0' },
          '100%': { height: '100%', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
