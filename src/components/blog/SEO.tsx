import { Post } from '@/@types'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import { FC } from 'react'
import siteConfig from 'site-config'

const SEO: FC<Post> = ({ title, featuredImage, publishedAt, summary }) => {
  const { asPath } = useRouter()
  const date = new Date(publishedAt).toISOString()
  const image = {
    url: `${siteConfig.url}${featuredImage.image}`,
    alt: title
  }
  const url = siteConfig.url + asPath

  return (
    <>
      <NextSeo
        title={`${title} - Kalwabed Rizki`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [image]
        }}
      />
      <ArticleJsonLd
        authorName="Kalwabed Rizki"
        datePublished={date}
        dateModified={date}
        description={summary}
        images={[siteConfig.url + featuredImage.image]}
        publisherLogo="assets/icons/android-icon-192x192.png"
        publisherName="Kalwabed Rizki"
        title={title}
        url={url}
      />
    </>
  )
}

export default SEO
