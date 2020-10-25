import { Feed } from 'feed'
import fs from 'fs'
import path from 'path'
import siteConfig from 'site-config'
import { Post } from '@/@types'

const { description, email, title, url } = siteConfig

const feed = new Feed({
  title,
  description,
  id: url,
  link: url,
  language: 'en',
  favicon: `${url}/favicon.ico`,
  image: `${url}/assets/resources/profile.png`,
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
    link: siteConfig.socials.Github,
    name: title
  }
})

const MyFeed = ({ posts }: { posts: Post[] }) => {
  feed.addCategory('Technology')
  posts.forEach(post =>
    feed.addItem({
      title: post.title,
      description: post.subtitle,
      date: new Date(post.date),
      author: [
        {
          email,
          link: siteConfig.socials.Twitter,
          name: title
        }
      ],
      copyright: `All rights reserved ${new Date().getFullYear()}, Kalwabed Rizki`,
      link: `${url}/blog/${post.slug}`,
      image: `${url}/assets/uploads${post.cover.image}`,
      id: `${url}/blog/${post.slug}`
    })
  )
  fs.writeFileSync(path.resolve(process.cwd(), 'public', 'rss.xml'), feed.rss2())
  fs.writeFileSync(path.resolve(process.cwd(), 'public', 'atom.atom'), feed.atom1())
  fs.writeFileSync(path.resolve(process.cwd(), 'public', 'rss.json'), feed.json1())
}

export default MyFeed
