import { Project } from '@/@types'

const projects: Project[] = [
  {
    title: 'Perpusin',
    description: 'Desktop based classic library application',
    image: '/assets/projects/perpusin.png',
    stack: 'Electron.js, React, Express, PostgreSql',
    demoUrl: '',
    source: 'https://github.com/kalwabed/perpusin'
  },
  {
    title: 'Kopi Konco',
    description: "Website for blogging and a cafe's product catalog",
    image: '/assets/projects/kopikonco.png',
    stack: 'Next.js, Chakra UI, Contentful',
    demoUrl: 'https://kopikonco.kawari.space',
    source: 'https://github.com/kalwabed/kopi-konco'
  },
  {
    title: 'Nextwind',
    description: 'Starter template that I made using Nextjs and Tailwindcss',
    image: '/assets/projects/nextwind.png',
    stack: 'Next.js, Tailwindcss',
    demoUrl: 'https://nextwind.vercel.app',
    source: 'https://github.com/kalwabed/nextwind'
  },
  {
    title: 'Tuan Tanah',
    description:
      'A web application that is intended as a meeting place between land sellers who are marketing their properties and potential buyers',
    image: '/assets/projects/tuantanah.png',
    stack: 'Express, React, Bootstrap',
    demoUrl: 'https://tuantanah.vercel.app',
    source: 'https://github.com/kalwabed/tuantanah-website'
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
