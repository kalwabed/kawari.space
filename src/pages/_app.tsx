import '@/styles/index.css'
import React from 'react'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'

import Footer from '@/components/Footer'
import SEO from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
