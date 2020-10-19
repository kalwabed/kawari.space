/* eslint-disable global-require */
import siteConfig from 'site-config'
import styled from './Identity.module.css'

const Identity = () => {
  const { home } = siteConfig
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className={styled.imgWrapper}>
        <img src={require('~/assets/resources/profile.png?webp')} alt="hero" className={styled.img} />
      </div>
      <div className={styled.summaryWrapper}>
        <h1 className={styled.name}>Hi, I&apos;m Kalwabed Rizki</h1>
        <p className={styled.subtitle}>{home.subtitle}</p>
      </div>
    </section>
  )
}

export default Identity
