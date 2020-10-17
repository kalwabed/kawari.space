import React from 'react'
import { GetStaticProps, NextPage } from 'next'

import { Post } from '@/@types'
import { getSortedPostsData } from '@/lib/posts'
import Layout from '@/components/Layout'
import BlogList from '@/components/blog/BlogList'

interface Props {
  allPostsData: Post[]
}

const Index: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout title="kawari | blog" page="blog" className="pb-24 md:pb-56">
      <Banner />
      <BlogList allPostsData={allPostsData} />
    </Layout>
  )
}

const Banner = () => (
  <div className="container flex md:mx-auto px-5">
    <div className="mx-auto p-2 border-dotted border-2 border-primary rounded">
      <div className="text-center">English translation will be coming soon in the upcoming version 2</div>
    </div>
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default Index
