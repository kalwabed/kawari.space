/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

import { getAllPostsSlugs, getPostData } from '@/lib/posts'
import Date from '@/components/blog/dateConfig'
import { Post as PostType } from '@/@types'
import Layout from '@/components/Layout'
import siteConfig from 'site-config'
import Link from 'next/link'

interface Props extends PostType {
  contentHtml: string
}

export default function Post({ postData }: { postData: Props }) {
  return (
    <>
      <Layout title={postData.title} page="blog">
        <NextSeo
          openGraph={{ images: [{ url: siteConfig.url + postData.cover.image }], url: postData.title }}
          description={postData.subtitle}
        />
        <div className="container flex flex-col pb-20 pt-16 md:pl-56 md:pr-48 mx-auto px-5">
          <div className="text-4xl md:text-5xl font-semibold">{postData.title}</div>
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

          <article className="leading-normal mt-5 mb-12 text-justify" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

          <div className="border-t-2 border-secondary pt-5" />

          <div className="group inline-flex items-center -mt-5 py-2 text-info w-1/2 md:w-1/6">
            <svg
              className="ml-1 w-8 h-8 group-hover:text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-2 text-2xl font-medium">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
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
