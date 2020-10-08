/* eslint-disable global-require */
import React from 'react'
import { NextPage } from 'next'

import Identity from '@/components/home/Identity'
import About from '@/components/home/About'
import Layout from '@/components/Layout'

const Index: NextPage = () => {
  return (
    <Layout>
      <Identity />
      <About />
    </Layout>
  )
}

export default Index
