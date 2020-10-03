import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="container px-5 pt-8 pb-16 mx-auto flex items-center md:flex-row flex-col">
      <Link href="/">
        <a className="flex items-center w-10 h-5 justify-center">
          <span className="ml-3 text-xl hover:text-info transition duration-300 ease-in inline-flex">
            kawari
            <span className="p-1 h-1 bg-primary animate-pulse hover:bg-info self-start rounded-full" />
          </span>
        </a>
      </Link>
      <p className="text-sm sm:ml-6 sm:mt-0 mt-4">
        © 2020 under MIT License —
        <a
          href="https://github.com/kaliwa"
          className="ml-1 link-external hover:border-primary hover:text-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kalwabed Rizki
        </a>
      </p>
      <span className="md:ml-auto md:mt-0 mt-4 justify-center">
        Made using{' '}
        <a
          href="https://nextjs.org"
          className="link-external hover:border-primary hover:text-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com"
          className="link-external hover:border-primary hover:text-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwindcss
        </a>
        .
        <div className="flex sm:flex-row md:inline-block justify-center mt-1 md:mt-0 ml-1">
          Hosted on{' '}
          <a
            href="https://vercel.com"
            className="ml-1 link-external hover:border-primary hover:text-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </div>
      </span>
    </footer>
  )
}

export default Footer
