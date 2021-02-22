/* eslint-disable global-require */
import type { GetStaticProps, NextPage } from 'next'

import Identity from '@/components/home/Identity'
import About from '@/components/home/About'
import Layout from '@/components/Layout'
import LatestPosts from '@/components/home/LatestPosts'
import type { I18n, Post } from '@/@types'
import { getAllFilesFrontMatter } from '../lib/mdx'
import SEO from '@/components/SEO'

interface Props extends I18n {
  posts: Post[]
}

const Index: NextPage<Props> = ({ posts, locale }) => {
  return (
    <Layout>
      <SEO title="" />
      <Identity locale={locale} />
      <About locale={locale} />
      <LatestPosts allPostsData={posts} />
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
