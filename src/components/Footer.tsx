import LinkExternal from '@/parts/LinkExternal'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer
