module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
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
  variants: {},
  plugins: []
}
