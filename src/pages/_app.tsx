import '@/styles/index.css'
import '@/styles/nprogress.css'
import 'notyf/notyf.min.css'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import SEO from 'next-seo.config'
import MDXComponents from '@/components/MDXComponents'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}

export default App
