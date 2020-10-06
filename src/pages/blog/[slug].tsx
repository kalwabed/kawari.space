/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

import { getAllPostsSlugs, getPostData } from '@/lib/posts'
import Nav from '@/components/Nav'
import Date from '@/components/dateConfig'
import Content from '@/components/Content'
import { Post as PostType } from '@/@types'
import siteConfig from '../../../site-config'

interface Props extends PostType {
  contentHtml: string
}

export default function Post({ postData }: { postData: Props }) {
  return (
    <>
      <NextSeo
        title={postData.title}
        openGraph={{ images: [{ url: siteConfig.url + postData.cover.image }], url: postData.title }}
        description={postData.subtitle}
      />
      <Nav page="blog" />
      <Content>
        <div className="container flex flex-col pb-20 pt-16 md:pl-56 md:pr-48 mx-auto px-5">
          <div className="text-4xl md:text-5xl">{postData.title}</div>
          <small className="text-gray-500 items-start">
            <Date dateString={postData.date} /> / ~{postData.readingTime} menit membaca
          </small>
          <div className="md:mb-0 mb-8 py-5 w-full flex flex-col">
            <img src={postData.cover.image} alt="banner" className="object-center object-cover mx-auto w-full h-full rounded-md shadow" />
            <caption className="leading-relaxed text-gray-500">
              image from{' '}
              <a
                href={postData.cover.source}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-primary border-b-2 border-secondary"
              >
                {postData.cover.name}
              </a>
            </caption>
          </div>

          <article className="leading-normal mt-5 text-justify" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

          <div className="border-b-2 border-secondary py-10" />
        </div>
      </Content>
    </>
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
