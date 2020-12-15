import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import RSS from '@/scripts/generate-rss'

const postsDirectory = path.join(process.cwd(), 'posts')

// eslint-disable-next-line import/prefer-default-export
export function getSortedPostsData({ locale = 'id' }) {
  const targetDir = `${postsDirectory}/${locale}`
  const fileNames = fs.readdirSync(targetDir)
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')

    // read markdown file as string
    const fullPath = path.join(targetDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // combine the data with slug
    return {
      slug,
      ...matterResult.data
    }
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  RSS({ posts: allPostsData })
  // sort posts by date
  return allPostsData.sort((a, b) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (a.date < b.date) return 1
    return -1
  })
}

export function getAllPostsSlugs() {
  const idPosts = fs.readdirSync(`${postsDirectory}/id`).map(post => ({
    params: {
      slug: post.replace(/\.md$/, '')
    },
    locale: 'id'
  }))
  const enPosts = fs.readdirSync(`${postsDirectory}/en`).map(post => ({
    params: {
      slug: post.replace(/\.md$/, '')
    },
    locale: 'en'
  }))
  return [...idPosts, ...enPosts]
}

export async function getPostData(slug: string, locale = 'id') {
  const fullPath = path.join(process.cwd(), `posts/${locale}/${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  // combine the data with the slug and contentHtml
  return { slug, contentHtml, ...matterResult.data }
}
