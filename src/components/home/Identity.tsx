/* eslint-disable global-require */
import React from 'react'

import styled from '@/styles/Identity.module.css'
import siteConfig from 'site-config'

const Identity = () => {
  const { home } = siteConfig
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className={styled.imgWrapper}>
        <img src={require('~/assets/img/aku.png?webp')} alt="hero" className={styled.img} />
      </div>
      <div className={styled.summaryWrapper}>
        <div className={styled.name}>Hi, I&apos;m Kalwabed Rizki</div>
        <p className={styled.subtitle}>{home.subtitle}</p>
        <p className={styled.skill}>{home.skill}</p>
        <p className="leading-tight mb-3">
          From Indonesia{' '}
          <span role="img" aria-label="Indonesia">
            🇮🇩
          </span>
        </p>
      </div>
    </section>
  )
}

export default Identity
