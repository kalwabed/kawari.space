/* eslint-disable global-require */
import type { GetStaticProps, NextPage } from 'next'

import Identity from '@/components/home/Identity'
import About from '@/components/home/About'
import Layout from '@/components/Layout'
import LatestBlogs from '@/components/home/LatestBlogs'
import type { Post } from '@/@types'
import { getSortedPostsData } from '@/lib/posts'

interface Props {
  allPostsData: Post[]
}

const Index: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout>
      <Identity />
      <About />
      <LatestBlogs allPostsData={allPostsData} />
    </Layout>
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
