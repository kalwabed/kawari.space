import type { GetStaticPaths, GetStaticProps } from 'next'

import { Post as PostType } from '@/@types'
import Layout from '@/components/Layout'
import BlogLayout from '@/components/blog/Layout'
import { getFileBySlug, getFiles } from '@/lib/mdx'
import SEO from '@/components/blog/SEO'

interface Props extends PostType {
  mdxSource: string
}

export default function Post({ posts }: { posts: Props }) {
  return (
    <Layout page="">
      <SEO {...posts} />
      <BlogLayout {...posts} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getFiles({ locale: [] })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const posts = await getFileBySlug(locale, params.slug as string)
  return {
    props: {
      posts
    }
  }
}
