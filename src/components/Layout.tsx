import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoMdGlobe } from 'react-icons/io'

import siteConfig from 'site-config'
import styled from './layout.module.css'

interface Props {
  title?: string
  className?: string
}

const Layout: React.FC<Props> = ({ children, title = '', className = '' }) => {
  const { asPath, locale, push } = useRouter()
  const links = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/projects',
      label: 'Projects'
    },
    {
      href: '/blog',
      label: 'Blog'
    },
    {
      href: '/about',
      label: 'About'
    }
  ]

  const { socials, url } = siteConfig
  const fullPath = url + asPath
  return (
    <>
      <NextSeo title={title} canonical={fullPath} openGraph={{ url: fullPath, locale }} />
      <SocialProfileJsonLd
        type="person"
        name={siteConfig.title}
        url={siteConfig.url}
        sameAs={Object.values(siteConfig.socials)}
      />
      <header>
        <div className={`container ${styled.headerWrapper}`}>
          <Link href="/">
            <a className="flex items-center mb-4 md:ml-40 md:mb-0">
              <span className={styled.logo}>
                kawari
                <span className={`animate-pulse ${styled.planet}`} />
              </span>
            </a>
          </Link>
          <nav className={styled.nav}>
            {links.map(link => (
              <Link href={link.href} key={link.label}>
                <a
                  href={link.href}
                  className={`${styled.navLink} ${
                    link.href === asPath && 'border-b-2 border-primary hover:border-info'
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <button
              onClick={() => {
                push(asPath, asPath, { locale: locale === 'id' ? 'en' : 'id' })
              }}
              type="button"
              className="p-2 ml-3 inline-flex items-center focus:outline-none focus:ring hover:bg-gray-500 text-white bg-gray-700 rounded-sm"
            >
              <IoMdGlobe className="mr-1" />
              {locale === 'id' ? 'EN' : 'ID'}
            </button>
          </nav>
        </div>
      </header>

      <main className={className}>{children}</main>

      <footer className={`container ${styled.footerWrapper}`}>
        <nav className="space-x-5">
          {links.map(link => (
            <Link href={link.href} key={link.label}>
              <a
                href={link.href}
                className={`${styled.navLink} ${link.href === asPath && 'border-b-2 border-primary hover:border-info'}`}
              >
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
        <p className="font-light text-sm ">© {new Date().getFullYear()} Kalwabed Rizki</p>
      </footer>
    </>
  )
}

export default Layout
