import { GetStaticProps, NextPage } from 'next'

import { Post } from '@/@types'
import Layout from '@/components/Layout'
import BlogList from '@/components/blog/BlogList'
import { getAllFilesFrontMatter } from '@/lib/mdx'

interface Props {
  posts: Post[]
}

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <Layout title="kawari | blog" page="blog" className="pb-24 md:pb-56">
      <BlogList allPostsData={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // const allPostsData = getSortedPostsData({ locale })
  const posts = await getAllFilesFrontMatter({ locale })

  return {
    props: {
      posts
    }
  }
}

export default Index
