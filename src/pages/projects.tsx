import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Content from '@/components/Content'
import Nav from '@/components/Nav'

const projects: NextPage = () => {
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
