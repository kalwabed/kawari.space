import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io'

import LinkExternal from '@/parts/LinkExternal'
import siteConfig from 'site-config'

const links = [
  {
    href: '/',
    label: 'whoami'
  },
  {
    href: '/projects',
    label: 'projects'
  },
  {
    href: '/blog',
    label: 'blog'
  }
]

interface Props {
  page?: string
  title?: string
  className?: string
}

const Layout: React.FC<Props> = ({ page = 'whoami', children, title = 'Kalwabed Rizki', className = '' }) => {
  const { social, url } = siteConfig
  const router = useRouter()
  return (
    <>
      <NextSeo title={title} canonical={url + router.pathname} />
      <header>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-dark">
          <Link href="/">
            <a className="flex font-medium items-center mb-4 md:mb-0">
              <span className="logo">
                kawari
                <span className="p-1 h-1 bg-primary animate-pulse hover:bg-info self-start rounded-full" />
              </span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-light flex flex-wrap items-center text-base justify-center">
            {links.map(link => (
              <Link href={link.href} key={link.label}>
                <a
                  href={link.href}
                  className={`mr-5 px-1 hover:text-info transition ease-in-out duration-100 ${
                    link.label === page && 'border-b-4 border-primary hover:border-info'
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>
          <div className="inline-flex items-center text-base mt-4 md:mt-0">
            <a href={social.github.url} target="_blank" rel="noopener noreferrer" aria-label="github">
              <IoLogoGithub className="fill-current h-6 w-6 hover:text-info transition ease-in duration-150" />
            </a>
            <a href={social.instagram.url} target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="instagram">
              <IoLogoInstagram className="fill-current h-6 w-6 hover:text-info transition ease-in duration-150" />
            </a>
            <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="linkedin">
              <IoLogoLinkedin className="fill-current h-6 w-6 hover:text-info transition ease-in duration-150" />
            </a>
          </div>
        </div>
      </header>

      <main className={className}>{children}</main>

      <footer className="container px-5 pt-8 pb-16 mx-auto flex items-center md:flex-row flex-col">
        <Link href="/">
          <a className="flex items-center w-10 h-5 justify-center">
            <span className="logo">
              kawari
              <span className="p-1 h-1 bg-primary animate-pulse hover:bg-info self-start rounded-full" />
            </span>
          </a>
        </Link>
        <p className="text-sm sm:ml-6 sm:mt-0 mt-4">
          © 2020 under MIT License —
          <LinkExternal label="Kalwabed Rizki" className="ml-1" href="github.com/kaliwa" />
        </p>
        <span className="md:ml-auto md:mt-0 mt-4 justify-center">
          Made using <LinkExternal href="nextjs.org" label="Next.js" /> and <LinkExternal href="tailwindcss.com" label="Tailwindcss" />.
          <div className="flex sm:flex-row md:inline-block justify-center mt-1 md:mt-0 ml-1">
            Hosted on <LinkExternal href="vercel.com" label="Vercel" className="ml-1" />
          </div>
        </span>
      </footer>
    </>
  )
}

export default Layout
