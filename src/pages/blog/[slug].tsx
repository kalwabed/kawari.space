/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { DiscussionEmbed } from 'disqus-react'

import { getAllPostsSlugs, getPostData } from '@/lib/posts'
import Date from '@/components/blog/dateConfig'
import { Post as PostType } from '@/@types'
import Layout from '@/components/Layout'
import siteConfig from 'site-config'
import styled from './[slug].module.css'

interface Props extends PostType {
  contentHtml: string
}

export default function Post({ postData }: { postData: Props }) {
  const router = useRouter()
  const { cover, date, readingTime, slug, subtitle, title, contentHtml } = postData
  return (
    <Layout title={title} page="">
      <NextSeo description={subtitle} />
      <div className={`container ${styled.wrapper}`}>
        <h1 className={styled.title}>{title}</h1>
        <small className={styled.date}>
          <Date dateString={date} /> / ~{readingTime} menit membaca / {subtitle}
        </small>
        <div className={styled.imgWrapper}>
          <img src={cover.image} alt="banner" className={styled.img} />
          <div className={styled.imgFromWrapper}>
            Photo by{' '}
            <a href={cover.source} target="_blank" rel="noopener noreferrer" className={styled.imgFromLink}>
              {cover.name}
            </a>{' '}
          </div>
        </div>

        <article className={styled.article} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <div className={styled.divider} />

        <DiscussionEmbed
          shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}
          config={{ url: siteConfig.url + router.asPath, identifier: slug, title }}
        />
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsSlugs()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData
    }
  }
}
