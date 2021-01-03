import type { GetStaticPaths, GetStaticProps } from 'next'
import { getBase64 } from '@plaiceholder/base64'
import { getImage } from '@plaiceholder/next'

import { Post as PostType } from '@/@types'
import Layout from '@/components/Layout'
import Content from '@/components/blog/Content'
import { getFileBySlug, getFiles } from '@/lib/mdx'
import SEO from '@/components/blog/SEO'

interface Props extends PostType {
  mdxSource: string
  ImgBase64: string
}

export default function Post({ post }: { post: Props }) {
  return (
    <Layout page="">
      <SEO {...post} />
      <Content {...post} />
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
  // @ts-ignore
  const img = await getImage(post.featuredImage.image)
  const ImgBase64 = await getBase64(img)
  return {
    props: {
      post,
      ImgBase64
    }
  }
}
