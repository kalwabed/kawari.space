import '@/styles/global.css'
import '@/styles/syntax.css'
import 'notyf/notyf.min.css'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'

import SEO from 'next-seo.config'

function App({ Component, pageProps }: AppProps) {
  const isDev = process.env.NODE_ENV === 'development'
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/icons/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        {/* <script
          async
          defer
          data-website-id={!isDev && process.env.NEXT_PUBLIC_UMAMI_ID}
          src={process.env.NEXT_PUBLIC_UMAMI_LINK}
        /> */}

        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "0cb86e484b1040b3acc4d9f5f9de5c95"}'
        />
        {/* End Cloudflare Web Analytics  */}
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <style jsx global>{`
        font-display: optional;
      `}</style>
    </>
  )
}

export default App
