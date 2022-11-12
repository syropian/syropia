const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#dc393e",
        gray: colors.slate,
      },
      fontFamily: {
        sans: ["'Swiss 721 W01'", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              "&:hover": {
                color: "#dc393e",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
