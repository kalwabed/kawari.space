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
