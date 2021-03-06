import { Feed } from 'feed'
import fs from 'fs'
import path from 'path'
import siteConfig from 'site-config'
import { Post } from '@/@types'

const { description, email, siteName, name, url } = siteConfig

const feed = new Feed({
  title: siteName + '.space',
  description,
  id: url,
  link: url,
  favicon: `${url}/favicon.ico`,
  image: `${url}/assets/examples/profile.png`,
  copyright: `All rights reserved ${new Date().getFullYear()}, Kalwabed Rizki`,
  generator: `${url} RSS API`,
  feed: `${url}/rss.xml`,
  feedLinks: {
    json: `${url}/rss.json`,
    atom: `${url}/atom.atom`,
    rss: `${url}/rss.xml`
  },
  author: {
    email,
    link: siteConfig.socials.Twitter,
    name
  }
})

const MyFeed = ({ posts }: { posts: Post[] }) => {
  feed.addCategory('Technology')
  posts.forEach(post =>
    feed.addItem({
      title: post.title,
      description: post.summary,
      date: new Date(post.publishedAt),
      author: [
        {
          email,
          link: siteConfig.socials.Twitter,
          name
        }
      ],
      copyright: `All rights reserved ${new Date().getFullYear()}, Kalwabed Rizki`,
      link: `${url}/posts/${post.slug}`,
      image: `${url}${post.featuredImage.image}`,
      id: `${url}/posts/${post.slug}`
    })
  )
  fs.writeFileSync(path.resolve(process.cwd(), 'public', 'rss.xml'), feed.rss2())
  fs.writeFileSync(path.resolve(process.cwd(), 'public', 'atom.atom'), feed.atom1())
  fs.writeFileSync(path.resolve(process.cwd(), 'public', 'rss.json'), feed.json1())
}

export default MyFeed
