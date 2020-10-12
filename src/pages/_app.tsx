import '@/styles/index.css'
import '@/styles/nprogress.css'
import 'notyf/notyf.min.css'
import React from 'react'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import Router, { useRouter } from 'next/router'
import Ga from 'react-ga'

import siteConfig from 'site-config'
import SEO from '../../next-seo.config'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  Ga.initialize(process.env.NEXT_PUBLIC_GA_ID)
  Ga.pageview(siteConfig.url + router.asPath)
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App
