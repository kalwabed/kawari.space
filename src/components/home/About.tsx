import React from 'react'
import { IoIosMail } from 'react-icons/io'

import LinkExternal from '@/parts/LinkExternal'
import { useEmail } from '@/hooks/index'
import styled from '@/styles/About.module.css'

const About = () => {
  return (
    <div className={`container ${styled.wrapper}`}>
      <div className="text-justify">
        Halo, nama saya Kalwabed Rizki, biasa dipanggil Kalwabed. Saya sedang menjalani pendidikan di{' '}
        <LinkExternal href="smkn1banyuwangi.sch.id" label="SMKN 1 Banyuwangi" className="inline-flex items-baseline" icon />, mengambil
        jurusan Rekaya perangkat lunak.
      </div>

      <button className={`${styled.emailButton} umami--click--email-copy`} onClick={useEmail} type="button">
        <IoIosMail className={styled.icon} />
        Click to copy email
      </button>
    </div>
  )
}

export default About
