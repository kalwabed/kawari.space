import { Project } from '@/@types'

const projects: Project[] = [
  {
    title: 'NAM Logistic',
    description: {
      en: 'Website for a shipping company',
      id: 'Website untuk sebuah perusahaan ekspedisi'
    },
    image: '/assets/projects/nam.png',
    stack: 'Next.js, Chakra UI',
    demoUrl: 'https://namlogistic.co.id',
    source: ''
  },
  {
    title: 'Kopi Konco',
    description: {
      en: "Website for blogging and a cafe's product catalog",
      id: 'Situs web untuk blogging dan katalog produk kafe'
    },
    image: '/assets/projects/kopikonco.png',
    stack: 'Next.js, Chakra UI, Contentful',
    demoUrl: 'https://kopikonco.kawari.space',
    source: 'https://github.com/kalwabed/kopi-konco'
  },
  {
    title: 'Nextwind',
    description: {
      en: 'Starter template that I made using Nextjs and Tailwindcss',
      id: 'Template starter yang saya buat menggunakan Next.js dan Tailwindcss'
    },
    image: '/assets/projects/nextwind.png',
    stack: 'Next.js, Tailwindcss',
    demoUrl: 'https://nextwind.vercel.app',
    source: 'https://github.com/kalwabed/nextwind'
  },
  {
    title: 'Tuan Tanah',
    description: {
      en:
        'A web application that is intended as a meeting place between land sellers who are marketing their properties and potential buyers',
      id:
        'Aplikasi web yang dimaksudkan sebagai tempat pertemuan antara penjual tanah yang memasarkan propertinya dengan calon pembeli'
    },
    image: '/assets/projects/tuantanah.png',
    stack: 'Express, Next.js, Bootstrap 4',
    demoUrl: 'https://tuantanah.kawari.space',
    source: 'https://github.com/kalwabed/tuantanah-website-v2'
  }
]

export default {
  name: 'Kalwabed Rizki',
  profile: '/assets/profile.jpg',
  siteName: 'kawari',
  description: 'Kawari | Kalwabed Rizki personal landing page',
  url: 'https://kawari.space',
  email: 'kalwabedrzk@pm.me',
  twitterUsername: '@kalwabedrzk',
  socials: {
    Twitter: 'https://twitter.com/kalwabedrzk',
    Github: 'https://github.com/kalwabed',
    LinkedIn: 'https://linkedin.com/in/kalwabed',
    Instagram: 'https://instagram.com/kalwabed',
    'DEV Community': 'https://dev.to/kalwabed',
    Telegram: 'https://t.me/kalwabed'
  },
  home: {
    subtitle: 'Frontend engineer '
  },
  projects
}
