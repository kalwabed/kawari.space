/* eslint-disable global-require */
import React from 'react'
import siteConfig from 'site-config'

const Identity = () => {
  const { home } = siteConfig
  return (
    <section className="container mx-auto flex px-5 md:px-20 py-8 md:py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1 w-full md:mb-0 mb-10">
        <img
          src={require('~/assets/img/aku.png?webp')}
          alt="hero"
          className="object-cover object-center shadow rounded-lg w-1/2 mx-auto md:mx-0 md:ml-auto"
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <div className="sm:text-4xl text-3xl font-medium">Hi, I&apos;m Kalwabed Rizki</div>
        <p className="mb-8 text-base text-gray-500">{home.subtitle}</p>
        <p className="leading-relaxed mb-4">{home.skill}</p>
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
