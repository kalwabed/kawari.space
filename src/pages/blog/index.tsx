import React from 'react'
import { GetStaticProps, NextPage } from 'next'

import { Post } from '@/@types'
import { getSortedPostsData } from '@/lib/posts'
import Layout from '@/components/Layout'
import BlogList from '@/components/blog/BlogList'

interface Props {
  allPostsData: [Post]
}

const Index: NextPage<Props> = ({ allPostsData }) => {
  return (
    <>
      <Layout title="kawari | blog" page="blog" className="pb-56">
        <BlogList allPostsData={allPostsData} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default Index
