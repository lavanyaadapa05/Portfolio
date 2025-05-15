const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neon: '#ff1420',
        greyDark: '#1f1f1f',
      },
      boxShadow: {
        neon: '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // optional: add tiny blur level
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// Plugin to generate CSS variables from Tailwind colors
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
