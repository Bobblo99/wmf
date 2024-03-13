import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        light: {
          100: '#f8f9fa', // Sehr heller Grauton für den Hintergrund
          200: '#e9ecef', // Heller Grauton für Karten und Buttons
          300: '#dee2e6', // Grauton für Trennlinien
          400: '#ced4da', // Dunkler Grauton für Schriften
          500: '#adb5bd', // Grauton für sekundäre Texte
          600: '#6c757d', // Grauton für nicht aktive Icons oder Texte
        },
        purple: {
          600: '#6f42c1', // Deine Hauptfarbe für Akzente im Hellmodus
          700: '#5a32a3', // Dunklere Variante für Hover-Zustände im Hellmodus
        },

        // Dunkle Farbpalette
        dark: '#343a40', // Dunkler Hintergrund für den Dunkelmodus
        darker: {
          700: '#495057', // Hintergrund für Karten im Dunkelmodus
          800: '#343a40', // Hintergrund für Appbars oder Fußzeilen im Dunkelmodus
          900: '#212529', // Dunkelster Hintergrund, für Textfelder oder andere Elemente
        },
        purpleDark: {
          400: '#7a4fbd', // Lila Akzentfarbe für den Dunkelmodus
          500: '#6f42c1', // Haupt-Lila Akzentfarbe im Dunkelmodus
        },
        navbar: "#cdced8",
        navbarDark: "#272829",
        bgDark: "#353738",
        darkHover: "#66347F",
        // navbarDark: "#1B2430",
        twitter: "#1DA1F2",
        facebook: "#4267B2",
        instagram: "#C13584",
        backgroundColor: "#e4e5f1",
        gradientColor: {
          start: '#405DE6', 
          middle: "#F56040",
          end: '#833AB4', 
        },
      }
    },
  },
  plugins: [],
});