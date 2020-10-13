import type { Post } from '@/@types'
import Link from 'next/link'
import React from 'react'
import Date from '../blog/dateConfig'
import styled from './LatestBlog.module.css'

interface Props {
  allPostsData: Post[]
}

const LatestBlogs = ({ allPostsData }: Props) => {
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className={styled.latestBlogs}>Latest blogs</div>
      {allPostsData.map(({ date, readingTime, slug, title }) => (
        <div className={styled.blogWrapper} key={slug}>
          <div className="p-2">
            <div className={styled.title}>
              <Link href={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
            </div>
            <div className={styled.dateTime}>
              <Date dateString={date} />
              <div className="mx-5">|</div>
              {readingTime} mins read
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default LatestBlogs
