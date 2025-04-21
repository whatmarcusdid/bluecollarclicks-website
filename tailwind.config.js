/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Color-Scheme-5-Text": "#fff",
        "Neutral-Darkest": "#0b0d09",
        Chiffon: "#e1ffbb",
        "Neutral-Lighter": "#dadada",
        "Neutral-Light": "#b5b6b5",
        "Neutral-Lightest": "#f2f2f2",
      },
      fontFamily: {
        "Text-Small-Link": "Arimo",
        unbounded: "Unbounded",
      },
      padding: {
        "45xl": "64px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
