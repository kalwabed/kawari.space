import Content from '@/components/Content'
import { NextSeo } from 'next-seo'
import React from 'react'
import { NextPage } from 'next'

import Nav from '@/components/Nav'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <>
      <NextSeo title="kawari | blog" />
      <Nav page="blog" />
      <Content className="pb-56">
        <section className="overflow-hidden">
          <div className="container px-5 md:pl-32 md:pr-5 py-24 mx-auto">
            <div className="-my-8">
              <div className="py-8 flex flex-wrap md:flex-no-wrap hover:shadow-lg transition ease-out duration-150">
                <div className="md:w-1/6 md:mb-0 mb-6 flex-shrink-0 flex flex-col tracking-wide md:ml-3">
                  <span className="mt-1 text-sm">20 Nov 2029</span>
                  <span className="mt-1 text-gray-500 text-sm">8 menit membaca</span>
                </div>
                <div className="md:flex-grow">
                  <Link href="/">
                    <a className="text-2xl font-medium mb-2 border-b-2 border-dark hover:border-primary transition ease-out duration-75">
                      Beberapa hal yang perlu diketahui untuk menjadi programmer
                    </a>
                  </Link>
                  <p className="leading-relaxed text-gray-500">Tips bukan trik</p>
                </div>
              </div>

              <div className="py-8 flex flex-wrap md:flex-no-wrap hover:shadow-lg transition ease-out duration-150">
                <div className="md:w-1/6 md:mb-0 mb-6 flex-shrink-0 flex flex-col tracking-wide md:ml-3">
                  <span className="mt-1 text-sm">13 Apr 2020</span>
                  <span className="mt-1 text-gray-500 text-sm">12 min read</span>
                </div>
                <div className="md:flex-grow">
                  <Link href="/">
                    <a className="text-2xl font-medium mb-2 border-b-2 border-dark hover:border-primary transition ease-out duration-75">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </a>
                  </Link>
                  <p className="leading-relaxed text-gray-500">Ini lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Content>
    </>
  )
}

export default Index
