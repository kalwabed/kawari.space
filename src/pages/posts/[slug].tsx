import type { GetStaticPaths, GetStaticProps } from 'next'

import { Post as PostType } from '@/@types'
import Layout from '@/components/Layout'
import Content from '@/components/posts/Content'
import { getFileBySlug, getFiles } from '@/lib/mdx'
import SEO from '@/components/SEO'

interface Props extends PostType {
  mdxSource: string
}

export default function Post({ post }: { post: Props }) {
  return (
    <Layout>
      <SEO title={post.title} isPost post={post} />
      <Content post={post} />
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
  const post = await getFileBySlug(locale, params.slug as string)
  return {
    props: {
      post
    }
  }
}
