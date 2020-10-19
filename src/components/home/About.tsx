import { IoIosMail } from 'react-icons/io'

import { useEmail } from '@/hooks/index'
import styled from './About.module.css'

const About = () => {
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className="">
        I&apos;m a student majoring in software engineering at SMKN 1 Banyuwangi. I love coffee, literature, discussion and programming.
        Currently learning: Deno, FaunaDB, Next.js & Tailwindcss.
        <p className="mt-3">For business inquiries, contact me via email and let&apos;s talk.</p>
      </div>

      <button className={`${styled.emailButton} umami--click--email-copy`} onClick={useEmail} type="button">
        <IoIosMail className={styled.icon} />
        Click to copy email
      </button>
    </section>
  )
}

export default About
