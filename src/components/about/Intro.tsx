import type { FC } from 'react'
import type { I18n } from '@/@types'

import { useEmail } from '@/hooks'
import LinkExternal from '@/parts/LinkExternal'
import { en, id } from 'lang'
import siteConfig from 'site-config'
import styled from './intro.module.css'

const Intro: FC<I18n> = ({ locale }) => {
  return (
    <>
      <h1 className="mb-3">{locale === 'id' ? 'Tentang' : 'About'}</h1>
      {locale === 'id' ? id.about.intro1 : en.about.intro1} <b>Ka</b>l<b>wa</b>bed <b>Ri</b>zki.{' '}
      {locale === 'id' ? id.about.intro2 : en.about.intro2}{' '}
      <LinkExternal href="banyuwangikab.go.id/" label="Banyuwangi, Indonesia" />.{' '}
      {locale === 'id' ? id.about.intro3 : en.about.intro3}
      <div className="leading-normal mt-2 tracking-wide">
        {locale === 'id' ? id.about.intro4 : en.about.intro4}{' '}
        <LinkExternal href="codeigniter.com" label="CodeIgniter" /> {locale === 'id' ? 'dan ' : 'and '}
        <LinkExternal href="getbootstrap.com" label="Bootstrap" />.{' '}
        {locale === 'id' ? id.about.intro5 : en.about.intro5}
      </div>
      <div className="leading-normal mt-2 tracking-wide">
        {locale === 'id' ? 'Saya menggunakan' : "I'm using"} <LinkExternal href="kubuntu.org" label="Kubuntu 20" />{' '}
        {locale === 'id' ? id.about.intro6 : en.about.intro6}{' '}
        <LinkExternal label="gostartupco.com" href="gostartupco.com" />,{' '}
        {locale === 'id' ? id.about.intro7 : en.about.intro7}
      </div>
      <p className="mt-3">
        {locale === 'id' ? id.about.business : en.about.business}{' '}
        <div className={styled.email} onClick={useEmail} aria-hidden="true">
          {siteConfig.email}{' '}
          <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
          </svg>
        </div>
      </p>
    </>
  )
}

export default Intro
