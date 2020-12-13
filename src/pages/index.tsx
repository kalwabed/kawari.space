/* eslint-disable global-require */
import type { GetStaticProps, NextPage } from 'next'

import Identity from '@/components/home/Identity'
import About from '@/components/home/About'
import Layout from '@/components/Layout'
import LatestBlogs from '@/components/home/LatestBlogs'
import type { I18n, Post } from '@/@types'
import { getSortedPostsData } from '@/lib/posts'

interface Props extends I18n {
  allPostsData: Post[]
}

const Index: NextPage<Props> = ({ allPostsData, locale }) => {
  return (
    <Layout>
      <Identity locale={locale} />
      <About locale={locale} />
      <LatestBlogs allPostsData={allPostsData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
      locale
    }
  }
}

export default Index
