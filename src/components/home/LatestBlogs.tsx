import type { Post } from '@/@types'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import Date from '../blog/dateConfig'
import styled from './LatestBlog.module.css'

interface Props {
  allPostsData: Post[]
}

const LatestBlogs = ({ allPostsData }: Props) => {
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className={styled.latestBlogs}>Latest blogs</div>
      {allPostsData.map(
        ({ date, readingTime, slug, title }, i) =>
          i <= 2 && (
            <div className={styled.blogWrapper} key={slug}>
              <div className="px-2 py-1">
                <div className={styled.titleWrapper}>
                  <Link href={`/blog/${slug}`}>
                    <a className={styled.title}>{title}</a>
                  </Link>
                </div>
                <div className={styled.dateTime}>
                  <Date dateString={date} />
                  <div className="mx-2">|</div>
                  {readingTime} mins read
                </div>
              </div>
            </div>
          )
      )}
      <Link href="/blog">
        <a className={styled.morePosts}>
          More posts <IoMdArrowForward className="ml-2" />
        </a>
      </Link>
    </section>
  )
}

export default LatestBlogs
