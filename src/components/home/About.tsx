import { useEmail } from '@/hooks/index'
import siteConfig from 'site-config'
import styled from './About.module.css'

const About = () => {
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className="">
        I&apos;m a student majoring in software engineering at SMKN 1 Banyuwangi. I love coffee, literature, discussion and programming.
        Currently learning: Deno, FaunaDB, Next.js & Tailwindcss.
        <p className="mt-3">
          For business inquiries, drop a mail at{' '}
          <div className={styled.email} onClick={useEmail} aria-hidden="true">
            {siteConfig.email}{' '}
            <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
              <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
            </svg>
          </div>{' '}
          and let&apos;s talk.
        </p>
      </div>
    </section>
  )
}

export default About
