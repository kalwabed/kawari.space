import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'

import LinkExternal from '@/parts/LinkExternal'
import siteConfig from 'site-config'
import styled from './layout.module.css'

const links = [
  {
    href: '/projects',
    label: 'projects'
  },
  {
    href: '/blog',
    label: 'blog'
  },
  {
    href: '/about',
    label: 'about'
  }
]

interface Props {
  page?: string
  title?: string
  className?: string
}

const Layout: React.FC<Props> = ({ page = '', children, title = 'Kalwabed Rizki', className = '' }) => {
  const { socials, url } = siteConfig
  const router = useRouter()
  const fullPath = url + router.asPath
  return (
    <>
      <NextSeo title={title} canonical={fullPath} openGraph={{ url: fullPath }} />
      <header>
        <div className={`container ${styled.headerWrapper}`}>
          <Link href="/">
            <a className="flex items-center mb-4 md:mb-0">
              <span className={styled.logo}>
                kawari
                <span className={`animate-pulse ${styled.planet}`} />
              </span>
            </a>
          </Link>
          <nav className={styled.nav}>
            {links.map(link => (
              <Link href={link.href} key={link.label}>
                <a href={link.href} className={`${styled.navLink} ${link.label === page && 'border-b-2 border-primary hover:border-info'}`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>
          <div className={styled.socialWrapper}>
            <a href={socials.Github} target="_blank" rel="noopener noreferrer" aria-label="github">
              <IoLogoGithub className={styled.icon} />
            </a>
            <a href={socials.LinkedIn} target="_blank" rel="noopener noreferrer" aria-label="linkedin" className="mx-2">
              <IoLogoLinkedin className={styled.icon} />
            </a>
            <a href={socials.Twitter} target="_blank" rel="noopener noreferrer" aria-label="twitter">
              <IoLogoTwitter className={styled.icon} />
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
        <p className={styled.license}>
          © 2020 under MIT License —
          <LinkExternal label="Kalwabed Rizki" className="ml-1" href="github.com/kalwabed/kawari.space" />
        </p>
        <span className={styled.madeWrapper}>
          Made using <LinkExternal href="nextjs.org" label="Next.js" /> and <LinkExternal href="tailwindcss.com" label="Tailwindcss" />.
          <div className={styled.hosted}>
            Hosted on <LinkExternal href="vercel.com" label="Vercel" className="ml-1 md:ml-0" />
          </div>
        </span>
      </footer>
    </>
  )
}

export default Layout
