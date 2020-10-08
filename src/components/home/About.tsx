import React from 'react'
import { IoIosMail } from 'react-icons/io'

import LinkExternal from '@/parts/LinkExternal'
import { useEmail } from '@/hooks/index'

const About = () => {
  return (
    <div className="container flex flex-col items-center px-5 mx-auto md:px-56 pb-48">
      <div className="text-justify">
        Halo, nama saya Kalwabed Rizki, biasa dipanggil Kalwabed. Saya sedang menjalani pendidikan di{' '}
        <LinkExternal href="smkn1banyuwangi.sch.id" label="SMKN 1 Banyuwangi" />, mengambil jurusan Rekaya perangkat lunak.
      </div>

      <button
        className="bg-secondary hover:bg-primary font-bold py-2 px-8 my-5 border-b-4 border-primary hover:border-secondary rounded transition ease-in duration-150 inline-flex items-center focus:outline-none"
        onClick={useEmail}
        type="button"
      >
        <IoIosMail className="mr-2 h-6 w-6 fill-current" />
        Click to copy email
      </button>
    </div>
  )
}

export default About
