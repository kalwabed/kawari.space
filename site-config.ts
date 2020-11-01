import { Project } from '@/@types'

const projects: Project[] = [
  {
    title: 'Nextwind',
    description: 'Starter template that I made using Nextjs and Tailwindcss.',
    image: '/assets/projects/nextwind.png',
    stack: 'Nextjs, Tailwindcss',
    demoUrl: 'https://nextwind.vercel.app',
    source: 'https://github.com/kalwabed/nextwind'
  },
  {
    title: 'Tuan Tanah',
    description:
      'A web application that is intended as a meeting place between land sellers who are marketing their properties and potential buyers.',
    image: '/assets/projects/tuantanah.png',
    stack: 'Express, React, Bootstrap',
    demoUrl: 'https://tuantanah.vercel.app',
    source: 'https://github.com/kalwabed/tuantanah-website'
  },
  {
    title: 'Kelas RPL 1',
    description: 'My class official website which lists students and other features that are still in development.',
    image: '/assets/projects/kitarpl1.png',
    stack: 'Express, React, Bootstrap',
    demoUrl: 'https://kelasrpl.vercel.app',
    source: 'https://github.com/kalwabed/kelasrpl'
  }
]

export default {
  title: 'Kalwabed Rizki',
  description: 'Kawari | Kalwabed Rizki personal landing page',
  url: 'https://kawari.space',
  email: 'kalwabedrzk@pm.me',
  twitterUsername: '@kalwabed_rizki',
  socials: {
    'DEV Community': 'https://dev.to/kalwabed',
    Github: 'https://github.com/kalwabed',
    Instagram: 'https://instagram.com/kalwabed',
    Facebook: 'https://facebook.com/kalwabed.kr',
    LinkedIn: 'https://linkedin.com/in/kalwabed',
    Twitter: 'https://twitter.com/kalwabed_rizki',
    Telegram: 'https://t.me/kalwabed'
  },
  home: {
    subtitle: 'Fullstack JavaScript developer'
  },
  projects
}
