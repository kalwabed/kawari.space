import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io'

import LinkExternal from '@/parts/LinkExternal'
import siteConfig from 'site-config'
import styled from './layout.module.css'

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
        <div className={`container ${styled.headerWrapper}`}>
          <Link href="/">
            <a className="flex font-medium items-center mb-4 md:mb-0">
              <span className={styled.logo}>
                kawari
                <span className={`animate-pulse ${styled.planet}`} />
              </span>
            </a>
          </Link>
          <nav className={styled.nav}>
            {links.map(link => (
              <Link href={link.href} key={link.label}>
                <a href={link.href} className={`${styled.navLink} ${link.label === page && 'border-b-4 border-primary hover:border-info'}`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>
          <div className={styled.socialWrapper}>
            <a href={social.github.url} target="_blank" rel="noopener noreferrer" aria-label="github">
              <IoLogoGithub className={styled.icon} />
            </a>
            <a href={social.instagram.url} target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="instagram">
              <IoLogoInstagram className={styled.icon} />
            </a>
            <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="linkedin">
              <IoLogoLinkedin className={styled.icon} />
            </a>
          </div>
        </div>
      </header>

      <main className={className}>{children}</main>

      <footer className={`container ${styled.footerWrapper}`}>
        <Link href="/">
          <a className="flex items-center w-10 h-5 justify-center">
            <span className={styled.logo}>
              kawari
              <span className={`animate-pulse ${styled.planet}`} />
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
