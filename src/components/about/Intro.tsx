import { useEmail } from '@/hooks'
import LinkExternal from '@/parts/LinkExternal'
import siteConfig from 'site-config'
import styled from './intro.module.css'

const Intro = () => {
  return (
    <>
      <h1>About</h1>
      My name is Kalwabed Rizki, usually called Kalwabed. When in some other place you cand find me as Kawari (formerly Kaliwa), that&apos;s
      mean <b>Ka</b>l<b>wa</b>bed <b>Ri</b>zki. Born and raised in{' '}
      <LinkExternal href="banyuwangikab.go.id/" label="Banyuwangi, Indonesia" />. Currently studying as a software engineering student at
      SMKN 1 Banyuwangi.
      <div className="leading-normal mt-2">
        I love programming since I studied at SMKN 1 Banyuwangi. The first successful website I created is a system for processing the data
        warehouse created using <LinkExternal href="codeigniter.com" label="CodeIgniter" /> and{' '}
        <LinkExternal href="getbootstrap.com" label="Bootstrap" />. Now I am more focused on developing a modern website using JavaScript to
        handle both the frontend and the backend.
      </div>
      <div className="leading-normal mt-2">
        I&apos;m using <LinkExternal href="kubuntu.org" label="Kubuntu 20" /> as the operating system for my daily activities. And now I
        spend a lot of time contributing to <LinkExternal href="github.com/kaliwa" label="open source projects" />, being active at
        developer community events, and learning new things.
      </div>
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
    </>
  )
}

export default Intro
