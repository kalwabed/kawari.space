import { I18n } from '@/@types'
import { useEmail } from '@/hooks/index'
import { FC } from 'react'

import siteConfig from 'site-config'
import { en, id } from 'lang'
import styled from './About.module.css'

const About: FC<I18n> = ({ locale }) => {
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className="">
        {locale === 'en' ? en.index.about : id.index.about}
        <div className="mt-3">
          {locale === 'en' ? en.index.business : id.index.business}{' '}
          <div className={styled.email} onClick={useEmail} aria-hidden="true">
            {siteConfig.email}{' '}
            <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
              <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
            </svg>
          </div>{' '}
        </div>
      </div>
    </section>
  )
}

export default About
