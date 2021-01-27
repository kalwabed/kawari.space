import siteConfig from 'site-config'

export default {
  title: 'Home',
  titleTemplate: '%s | Kalwabed Rizki',
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        secure_url:
          "https://og-image.vercel.app/Hi,%20I'm%20**Kalwabed**%20Rizki.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fkawari.space%2Fassets%2Fresources%2Fprofile.png&widths=auto&heights=auto",
        url:
          "https://og-image.vercel.app/Hi,%20I'm%20**Kalwabed**%20Rizki.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fkawari.space%2Fassets%2Fresources%2Fprofile.png&widths=auto&heights=auto"
      }
    ],
    type: 'website',
    site_name: 'Kalwabed Rizki personal landing page'
  },
  twitter: {
    handle: siteConfig.twitterUsername,
    site: siteConfig.twitterUsername,
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#293241'
    },
    {
      name: 'keyword',
      content: 'Kalwabed-Rizki Portfolio Kawari Kalwabed Rizki'
    }
  ]
}
