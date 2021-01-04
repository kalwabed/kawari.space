import '@/styles/global.css'
import '@/styles/syntax.css'
import '@/styles/nprogress.css'
import 'notyf/notyf.min.css'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

import SEO from 'next-seo.config'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const isDev = process.env.NODE_ENV === 'development'
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/assets/icons/ms-icon-144x144.png" />
        <script
          async
          defer
          data-website-id={!isDev && process.env.NEXT_PUBLIC_UMAMI_ID}
          src={process.env.NEXT_PUBLIC_UMAMI_LINK}
        />
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
