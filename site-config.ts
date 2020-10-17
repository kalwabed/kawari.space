import { Project, Tech } from '@/@types'

const { bootstrap, express, nextjs, react, tailwindcss } = Tech
const projects: Project[] = [
  {
    title: 'Tuan Tanah',
    description:
      'A web application that is intended as a meeting place between land sellers who are marketing their properties and potential buyers.',
    image: '/assets/uploads/tuantanah.png',
    stack: [express, react, bootstrap],
    demoUrl: 'https://tuantanah.vercel.app',
    source: 'https://github.com/kaliwa/tuantanah-website'
  },
  {
    title: 'Kelas RPL 1',
    description: 'My class official website which lists students and other features that are still in development.',
    image: '/assets/uploads/kitarpl1.png',
    stack: [express, react, bootstrap],
    demoUrl: 'https://kelasrpl.vercel.app',
    source: 'https://github.com/kaliwa/kelasrpl'
  }
]

export default {
  title: 'Kalwabed Rizki',
  description: 'Kawari | Kalwabed Rizki personal landing page',
  url: 'https://kawari.space',
  email: 'kalwabedrzk@pm.me',
  twitterUsername: '@kalwabed_rizki',
  social: {
    github: 'https://github.com/kaliwa',
    instagram: 'https://instagram.com/kaliwa__',
    linkedin: 'https://linkedin.com/in/kaliwa',
    twitter: 'https://twitter.com/kalwabed_rizki'
  },
  home: {
    subtitle: 'Web application developer',
    skill: 'Build and develop websites using modern JavaScript technology'
  },
  projects
}
