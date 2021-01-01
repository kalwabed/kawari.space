const withPreact = require('next-plugin-preact')

module.exports = withPreact({
  reactStrictMode: true,
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: true
  }
})
