import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

import { getAllPostsSlugs, getPostData } from '@/lib/posts'
import Nav from '@/components/Nav'
import Date from '@/components/dateConfig'

export default function Post({ postData }) {
  return (
    <>
      <NextSeo title={postData.title} />
      <Nav page="blog" />
      <article>
        <h1>
          <Date dateString={postData.date} />
        </h1>
        <div className="container mx-auto my-auto" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
