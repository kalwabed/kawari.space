/* eslint-disable global-require */
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

import { getAllPostsSlugs, getPostData } from '@/lib/posts'
import Nav from '@/components/Nav'
import Date from '@/components/dateConfig'
import Content from '@/components/Content'

export default function Post({ postData }) {
  return (
    <>
      <NextSeo title={postData.title} />
      <Nav page="blog" />
      <Content>
        <div className="container flex flex-col py-20 pl-56 pr-32 mx-auto">
          <div className="text-4xl">Cara Meningkatkan Performa Aplikasi NodeJS adadsadsad</div>
          <small className="text-gray-500 items-start">
            <Date dateString={postData.date} /> / ~{postData.readingTime} menit membaca
          </small>
          <div className="md:mb-0 mb-10 py-5 w-full flex flex-col">
            <img src={require('~/assets/img/example.jpg?webp')} alt="banner" className="object-center object-cover mx-auto w-full h-full" />
            <caption className="leading-relaxed text-gray-500">picture by unsplash</caption>
          </div>

          <article className="leading-snug mt-5 text-justify" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

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
