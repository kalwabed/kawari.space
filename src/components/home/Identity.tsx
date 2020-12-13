import { I18n } from '@/@types'
import Image from 'next/image'
import type { FC } from 'react'

import siteConfig from 'site-config'
import styled from './Identity.module.css'

const Identity: FC<I18n> = ({ locale }) => {
  const { home } = siteConfig
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className={styled.imgWrapper}>
        <Image className={styled.img} quality={100} width={260} height={260} priority alt="profile" src="/assets/examples/profile.png" />
      </div>
      <div className={styled.summaryWrapper}>
        <h1 className={styled.name}>{locale === 'id' ? 'Hai, Saya' : "Hi, I'm"} Kalwabed Rizki</h1>
        <p className={styled.subtitle}>{home.subtitle}</p>
      </div>
    </section>
  )
}

export default Identity
