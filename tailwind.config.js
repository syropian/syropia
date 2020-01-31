const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#e35252"
      },
      fontFamily: {
        sans: ["'Swiss 721 W01'", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  extend: {},
  variants: {},
  plugins: []
}
