import { GetStaticProps, NextPage } from 'next'

import { Post } from '@/@types'
import Layout from '@/components/Layout'
import BlogList from '@/components/blog/BlogList'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import SEO from '@/components/SEO'

interface Props {
  posts: Post[]
}

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <Layout className="pb-24 md:pb-10">
      <SEO title="Blog" />
      <BlogList allPostsData={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllFilesFrontMatter({ locale })

  return {
    props: {
      posts
    }
  }
}

export default Index
