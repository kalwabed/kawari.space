import React from 'react'
import { IoIosMail } from 'react-icons/io'
import Link from 'next/link'

import LinkExternal from '@/parts/LinkExternal'
import { useEmail } from '@/hooks/index'
import styled from './About.module.css'

const About = () => {
  return (
    <div className={`container ${styled.wrapper}`}>
      <div className="text-justify">
        Hello, my name is Kalwabed Rizki aka Kawari, I build and develop website applications on the back-end, although now more often on
        the front-end. I am a student majoring in software engineering at{' '}
        <LinkExternal href="smkn1banyuwangi.sch.id" label="SMKN 1 Banyuwangi" className="inline-flex items-baseline" icon />, and now I am
        exploring the world of programming, especially website development. For more details, please refer to my writing on{' '}
        <Link href="/blog/saya">
          <a className={styled.linkTo}>Saya</a>
        </Link>{' '}
        .<p className="mt-3">For business inquiries, contact me via email and let&apos;s talk.</p>
      </div>

      <button className={`${styled.emailButton} umami--click--email-copy`} onClick={useEmail} type="button">
        <IoIosMail className={styled.icon} />
        Click to copy email
      </button>
    </div>
  )
}

export default About
