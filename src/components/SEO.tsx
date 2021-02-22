import type { Post } from '@/@types'
import { NextSeo, SocialProfileJsonLd, ArticleJsonLd } from 'next-seo'
import { OpenGraph } from 'next-seo/lib/types'
import { useRouter } from 'next/router'
import siteConfig from 'site-config'

interface Props {
  post?: Post
  isPost?: boolean
  title: string
}

const SEO = (props: Props) => {
  const { post, title, isPost = false } = props
  const router = useRouter()
  const logo = 'assets/icons/android-icon-192x192.png'
  const postDate = post && new Date(post.publishedAt).toISOString()
  const absoluteSiteName = siteConfig.siteName + '.space'
  const fullPath = siteConfig.url + router.asPath
  const image = { url: `https://cdn.statically.io/og/theme=dark/${encodeURI(title)}.png`, alt: title }

  const SocialProfile = () => {
    return (
      <SocialProfileJsonLd
        name={siteConfig.name}
        type="person"
        url={fullPath}
        sameAs={Object.values(siteConfig.socials)}
      />
    )
  }

  const MainSeo = () => {
    const openGraph: OpenGraph = {
      title,
      type: 'website',
      url: fullPath,
      site_name: absoluteSiteName,
      images: [image],
      locale: router.locale
    }
    return <NextSeo canonical={fullPath} title={title} openGraph={openGraph} />
  }

  const ArticleJson = () => {
    return (
      <ArticleJsonLd
        authorName={siteConfig.name}
        datePublished={postDate}
        dateModified={postDate}
        description={post.summary}
        images={[siteConfig.url + post.featuredImage.image]}
        publisherLogo={logo}
        publisherName={absoluteSiteName}
        title={title}
        url={fullPath}
      />
    )
  }

  const PostSEO = () => {
    const openGraph: OpenGraph = {
      locale: router.locale,
      title,
      url: fullPath,
      images: [image],
      site_name: absoluteSiteName,
      description: post.summary,
      type: 'article',
      article: { section: 'Technology', publishedTime: postDate, modifiedTime: postDate, authors: [siteConfig.name] }
    }
    return <NextSeo title={title} description={post.summary} canonical={fullPath} openGraph={openGraph} />
  }

  if (isPost && post) {
    return (
      <>
        <PostSEO />
        <ArticleJson />
      </>
    )
  }
  return (
    <>
      <MainSeo />
      <SocialProfile />
    </>
  )
}

export default SEO
