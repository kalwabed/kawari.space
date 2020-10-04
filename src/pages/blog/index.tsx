import Link from 'next/link'
import { NextSeo } from 'next-seo'
import React from 'react'
import { GetStaticProps, NextPage } from 'next'

import { Post } from '@/@types'
import Nav from '@/components/Nav'
import Content from '@/components/Content'
import { getSortedPostsData } from '@/lib/posts'
import Date from '@/components/dateConfig'

interface IndexProps {
  allPostsData: [Post]
}

const Index: NextPage<IndexProps> = ({ allPostsData }) => {
  return (
    <>
      <NextSeo title="kawari | blog" />
      <Nav page="blog" />
      <Content className="pb-56">
        <section className="overflow-hidden">
          <div className="container px-5 md:pl-32 md:pr-5 py-24 mx-auto">
            <div className="-my-8">
              {allPostsData.map(({ slug, title, subtitle, date, readingTime }) => (
                <div className="py-8 flex flex-wrap md:flex-no-wrap hover:shadow-lg transition ease-out duration-150" key={slug}>
                  <div className="md:w-1/6 md:mb-0 mb-6 flex-shrink-0 flex flex-col tracking-wide md:ml-3">
                    <span className="mt-1">
                      <Date dateString={date} />
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">{readingTime} menit membaca</span>
                  </div>
                  <div className="md:flex-grow">
                    <Link href={`/blog/${slug}`}>
                      <a className="text-2xl font-medium mb-1 border-b-2 border-dark hover:border-primary transition ease-out duration-75">
                        {title}
                      </a>
                    </Link>
                    <p className="leading-relaxed text-gray-500">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Content>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default Index
