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

export enum Tech {
  react = 'react',
  nextjs = 'nextjs',
  bootstrap = 'bootstrap',
  tailwindcss = 'tailwindcss',
  express = 'express'
}

export interface Project {
  title: string
  description: string
  image: string
  stack: Tech[]
  demoUrl: string
  source: string
}
