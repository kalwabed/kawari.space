/* eslint-disable global-require */
import type { GetStaticProps, NextPage } from 'next'

import Identity from '@/components/home/Identity'
import About from '@/components/home/About'
import Layout from '@/components/Layout'
import LatestBlogs from '@/components/home/LatestBlogs'
import type { I18n, Post } from '@/@types'
import { getAllFilesFrontMatter } from '../lib/mdx'

interface Props extends I18n {
  posts: Post[]
}

const Index: NextPage<Props> = ({ posts, locale }) => {
  return (
    <Layout>
      <Identity locale={locale} />
      <About locale={locale} />
      <LatestBlogs allPostsData={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllFilesFrontMatter({ locale })

  return {
    props: {
      posts,
      locale
    }
  }
}

export default Index
