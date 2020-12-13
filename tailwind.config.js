const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    colors: { ...colors },
    extend: {
      colors: {
        dark: '#293241',
        secondary: '#3D5A80',
        light: '#E0FBFC',
        primary: '#EE6C4D',
        info: '#98C1D9'
      },
      fontFamily: {
        primary: ['Karla']
      }
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-hover']
  }
}
