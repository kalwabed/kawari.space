import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { DiscussionEmbed } from 'disqus-react'
import hydrate from 'next-mdx-remote/hydrate'

import Date from '@/components/blog/dateConfig'
import Read from '@/components/blog/readConfig'
import { Post as PostType } from '@/@types'
import Layout from '@/components/Layout'
import { getFileBySlug, getFiles } from '@/lib/mdx'
import siteConfig from 'site-config'
import SEO from '@/components/blog/SEO'
import styled from './[slug].module.css'

interface Props extends PostType {
  mdxSource: string
}

export default function Post({ posts }: { posts: Props }) {
  const { asPath, locale } = useRouter()
  const { featuredImage, publishedAt, readingTime, slug, summary, title, mdxSource } = posts
  const content = hydrate(mdxSource)

  return (
    <Layout title={title} page="">
      <SEO {...posts} />
      <article className={`container ${styled.wrapper}`}>
        <h1 className={styled.title}>{title}</h1>
        <small className={styled.publishedAt}>
          <Date dateString={publishedAt} locale={locale} /> / ~<Read locale={locale} readingTime={readingTime} /> /{' '}
          {summary}
        </small>
        <div className={styled.imgWrapper}>
          <Image
            width={850}
            height={360}
            objectPosition="center"
            objectFit="cover"
            quality={90}
            src={featuredImage.image}
            className={styled.img}
            alt={title}
          />
          <div className={styled.imgFromWrapper}>
            {locale === 'id' ? 'Foto dari' : 'Photo by'}{' '}
            <a href={featuredImage.source} target="_blank" rel="noopener noreferrer" className={styled.imgFromLink}>
              {featuredImage.name}
            </a>{' '}
          </div>
        </div>

        <div className={styled.article}>{content}</div>
        <div className={styled.divider} />

        <DiscussionEmbed
          shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}
          config={{ url: siteConfig.url + asPath, identifier: slug, title }}
        />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getFiles({ locale: [] })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const posts = await getFileBySlug(locale, params.slug as string)
  return {
    props: {
      posts
    }
  }
}
