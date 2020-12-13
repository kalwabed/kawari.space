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

export interface I18n {
  locale: 'id' | 'en' | string
}
export interface Project {
  title: string
  description: string
  image: string
  stack: string
  demoUrl: string
  source: string
}
