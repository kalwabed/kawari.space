export interface Post {
  title: string
  slug: string
  subtitle: string
  date: string
  readingTime: number
  cover: {
    image: string
    source: string
    name: string
  }
}

export interface Project {
  title: string
  description: string
  image: string
  stack: string
  demoUrl: string
  source: string
}
