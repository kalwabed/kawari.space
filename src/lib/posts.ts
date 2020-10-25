import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import RSS from '@/scripts/generate-rss'

const postsDirectory = path.join(process.cwd(), 'src/posts')

// eslint-disable-next-line import/prefer-default-export
export function getSortedPostsData() {
  // Get file names under /src/posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '')

    // read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
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
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => ({
    params: {
      slug: fileName.replace(/\.md$/, '')
    }
  }))
}

export async function getPostData(slug: string) {
  const fullPath = path.join(process.cwd(), `src/posts/${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  // combine the data with the slug and contentHtml
  return { slug, contentHtml, ...matterResult.data }
}
