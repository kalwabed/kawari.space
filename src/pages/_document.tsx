import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const intialProps = await Document.getInitialProps(ctx)
    return { ...intialProps }
  }

  render() {
    const isDev = process.env.NODE_ENV === 'development'
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link href="/assets/icons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/assets/icons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" type="image/png" />
          <script async defer data-website-id={!isDev && process.env.NEXT_PUBLIC_UMAMI_ID} src={process.env.NEXT_PUBLIC_UMAMI_LINK} />
        </Head>

        <body className="bg-dark text-light font-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
