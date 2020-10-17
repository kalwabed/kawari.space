/* eslint-disable global-require */
import React from 'react'
import { IoMdWarning } from 'react-icons/io'
import type { GetStaticProps, NextPage } from 'next'

import Identity from '@/components/home/Identity'
import About from '@/components/home/About'
import Layout from '@/components/Layout'
import LatestBlogs from '@/components/home/LatestBlogs'
import type { Post } from '@/@types'
import { getSortedPostsData } from '@/lib/posts'

interface Props {
  allPostsData: Post[]
}

const Index: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout>
      <Banner />
      <Identity />
      <About />
      <LatestBlogs allPostsData={allPostsData} />
    </Layout>
  )
}

const Banner = () => (
  <div className="container flex md:mx-auto px-5">
    <div className="mx-auto p-2 border-dotted border-2 border-primary rounded">
      <div className="text-center inline-flex items-center">
        <IoMdWarning /> This site is under maintenance
      </div>
    </div>
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default Index
