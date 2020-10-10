import { Project, Tech } from '@/@types'

const { bootstrap, express, nextjs, react, tailwindcss } = Tech
const projects: Project[] = [
  {
    title: 'Tuan Tanah',
    description:
      'Web aplikasi yang ditujukan sebagai tempat bertemunya antara penjual tanah yang memasarkan propertinya dan calon pembeli.',
    image: '/assets/img/example.jpg',
    stack: [express, react, bootstrap],
    demoUrl: 'https://tuantanah.vercel.app',
    source: 'https://github.com/kaliwa/tuantanah-website'
  },
  {
    title: 'My Portofolio',
    description: 'Situs pribadi saya yang sedang anda akses sekarang :)',
    image: '/assets/img/aku.png',
    stack: [nextjs, react, tailwindcss],
    demoUrl: 'https://kawari.space',
    source: 'https://github.com/kaliwa/kawari.space'
  }
]

export default {
  title: 'Kalwabed Rizki',
  description: 'Kawari | Kalwabed Rizki personal landing page',
  url: 'https://kawari.space',
  email: 'kalwabedrzk@pm.me',
  twitterUsername: '@kalwabed_rizki',
  social: {
    github: {
      url: 'https://github.com/kaliwa'
    },
    instagram: {
      url: 'https://instagram.com/kaliwa__'
    },
    linkedin: {
      url: 'https://linkedin.com/in/kaliwa/'
    }
  },
  home: {
    subtitle: 'Web application developer',
    skill: 'JavaScript enthusiast, especially TypeScript'
  },
  projects
}
