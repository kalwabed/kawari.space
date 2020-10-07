/* eslint-disable global-require */
import React from 'react'
import { NextPage } from 'next'
import { IoIosMail } from 'react-icons/io'

import Content from '@/components/Content'
import Nav from '@/components/Nav'
import LinkExternal from '@/parts/LinkExternal'
import { useEmail } from '@/hooks'
import siteConfig from '../../site-config'

const Index: NextPage = () => {
  const { home } = siteConfig

  return (
    <>
      <Nav />
      <Content>
        <section className="container mx-auto flex px-5 md:px-20 py-8 md:py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1 w-full md:mb-0 mb-10">
            <img
              src={require('~/assets/img/aku.png?webp')}
              alt="hero"
              className="object-cover object-center shadow rounded-lg w-1/2 mx-auto md:mx-0 md:ml-auto"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-3xl font-medium">Hi, I&apos;m Kalwabed Rizki</h1>
            <p className="mb-8 text-base text-gray-500">{home.subtitle}</p>
            <p className="italic leading-relaxed mb-4">{home.skill}</p>
            <p className="leading-tight mb-3">
              From Indonesia{' '}
              <span role="img" aria-label="Indonesia">
                🇮🇩
              </span>
            </p>
          </div>
        </section>

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

          <a href="/" className="link-test">
            tes
          </a>
        </div>
      </Content>
    </>
  )
}

export default Index
