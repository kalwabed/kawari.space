export interface Post {
  title: string
  slug: string
  summary: string
  publishedAt: string
  readingTime: number
  featuredImage: {
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
  description: {
    id: string
    en: string
  }
  image: string
  stack: string
  demoUrl: string
  source: string
}
