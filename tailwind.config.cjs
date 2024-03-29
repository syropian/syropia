const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const BRAND_COLOR = "#dc393e";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: BRAND_COLOR,
        gray: colors.slate,
      },
      fontFamily: {
        sans: ["'Swiss 721 W01'", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              transition: "color 150ms linear",
              "&:hover": {
                color: BRAND_COLOR,
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
