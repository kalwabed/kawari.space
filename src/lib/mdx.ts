import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import autoLink from 'remark-autolink-headings'
import codeTitle from 'remark-code-titles'
import remarkSLug from 'remark-slug'
import mdxPrism from 'mdx-prism'
import { serialize } from 'next-mdx-remote/serialize'
import RSS from '@/scripts/generate-rss'

const postDir = path.join(process.cwd(), 'posts')

export async function getFiles({ locale = 'id' }: { locale: string[] | string }) {
  if (typeof locale !== 'string') {
    const idPosts = fs.readdirSync(path.join(postDir, 'id')).map(post => ({
      params: { slug: post.replace('.mdx', '') },
      locale: 'id'
    }))
    const enPosts = fs
      .readdirSync(path.join(postDir, 'en'))
      .map(post => ({ params: { slug: post.replace('.mdx', '') }, locale: 'en' }))

    return [...idPosts, ...enPosts]
  }
  return fs.readdirSync(path.join(postDir, locale))
}

export async function getFileBySlug(locale = 'id', slug = '') {
  const source = fs.readFileSync(path.join(postDir, locale, `${slug}.mdx`), 'utf8')
  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkSLug, autoLink, codeTitle],
      rehypePlugins: [mdxPrism]
    }
  })

  return { mdxSource, ...data, slug }
}

export async function getAllFilesFrontMatter({ locale = 'id' }) {
  const files = fs.readdirSync(path.join(postDir, locale))

  const posts = files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(postDir, locale, postSlug), 'utf8')
    const { data } = matter(source)
    return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts]
  }, [])

  // Generating RSS
  RSS({ posts })

  return posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}
