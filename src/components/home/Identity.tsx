/* eslint-disable global-require */
import Image from 'next/image'
import siteConfig from 'site-config'
import styled from './Identity.module.css'

const Identity = () => {
  const { home } = siteConfig
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className={styled.imgWrapper}>
        <Image className={styled.img} width={280} height={280} alt="profile" src="/assets/resources/profile.png" />
      </div>
      <div className={styled.summaryWrapper}>
        <h1 className={styled.name}>Hi, I&apos;m Kalwabed Rizki</h1>
        <p className={styled.subtitle}>{home.subtitle}</p>
      </div>
    </section>
  )
}

export default Identity
