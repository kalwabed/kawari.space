import '@/styles/index.css'
import '@/styles/nprogress.css'
import 'notyf/notyf.min.css'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'

import SEO from 'next-seo.config'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App
