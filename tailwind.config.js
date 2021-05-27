const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#dc393e',
      },
      fontFamily: {
        sans: ["'Swiss 721 W01'", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                color: '#dc393e',
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
