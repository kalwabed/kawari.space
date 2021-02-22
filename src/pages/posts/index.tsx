import { GetStaticProps, NextPage } from 'next'

import { Post } from '@/@types'
import Layout from '@/components/Layout'
import PostList from '@/components/posts/PostList'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import SEO from '@/components/SEO'

interface Props {
  posts: Post[]
}

const PostsPage: NextPage<Props> = ({ posts }) => {
  return (
    <Layout className="pb-24 md:pb-10">
      <SEO title="Posts" />
      <PostList allPostsData={posts} />
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

export default PostsPage
