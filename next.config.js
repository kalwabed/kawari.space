module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true
  },
  future: {
    webpack5: true
  },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: true
  },
  async redirects() {
    return [
      {
        source: '/bukber',
        destination: 'https://forms.gle/BFAR2ax4PwzjMNFcA',
        permanent: true
      }
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom': 'preact/compat'
      })
    }

    return config
  }
}
