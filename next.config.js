module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: true
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'reac-dom': 'preact/compat'
      })
    }

    return config
  }
}
