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
import styled from './[slug].module.css'

interface Props extends PostType {
  contentHtml: string
}

export default function Post({ posts }: { posts: Props }) {
  const { asPath, locale } = useRouter()
  const { cover, date, readingTime, slug, subtitle, title, contentHtml } = posts
  const content = hydrate(contentHtml)
  return (
    <Layout title={title} page="">
      <NextSeo
        description={subtitle}
        openGraph={{ images: [{ url: `https://cdn.statically.io/og/theme=dark/${encodeURI(title)}.png`, alt: title }] }}
      />
      <article className={`container ${styled.wrapper}`}>
        <h1 className={styled.title}>{title}</h1>
        <small className={styled.date}>
          <Date dateString={date} locale={locale} /> / ~<Read locale={locale} readingTime={readingTime} /> / {subtitle}
        </small>
        <div className={styled.imgWrapper}>
          <Image
            width={850}
            height={360}
            objectPosition="center"
            objectFit="cover"
            quality={90}
            src={cover.image}
            className={styled.img}
            alt={title}
          />
          <div className={styled.imgFromWrapper}>
            {locale === 'id' ? 'Foto dari' : 'Photo by'}{' '}
            <a href={cover.source} target="_blank" rel="noopener noreferrer" className={styled.imgFromLink}>
              {cover.name}
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
