import { NextSeo } from 'next-seo'
import React from 'react'

import Content from '@/components/Content'
import Nav from '@/components/Nav'

const projects = () => {
  return (
    <>
      <NextSeo title="kawari | projects" />
      <Nav page="projects" />
      <Content>
        <h1>ini saya</h1>
      </Content>
    </>
  )
}

export default projects
