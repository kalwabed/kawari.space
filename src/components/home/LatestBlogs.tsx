import type { Post } from '@/@types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoMdArrowForward } from 'react-icons/io'
import Date from '../blog/dateConfig'
import Read from '../blog/readConfig'
import styled from './LatestBlog.module.css'

interface Props {
  allPostsData: Post[]
}

const LatestBlogs = ({ allPostsData }: Props) => {
  const { locale } = useRouter()
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className={styled.latestBlogs}>{locale === 'id' ? 'Tulisan terbaru' : 'Latest blogs'}</div>
      {allPostsData.map(
        ({ date, readingTime, slug, title }, i) =>
          i <= 2 && (
            <div className={`group ${styled.blogWrapper}`} key={slug}>
              <div className="px-2 py-1">
                <div className={styled.titleWrapper}>
                  <Link href={`/blog/${slug}`}>
                    <a className={`group-hover:border-primary ${styled.title}`}>{title}</a>
                  </Link>
                </div>
                <div className={styled.dateTime}>
                  <Date dateString={date} locale={locale} />
                  <div className="mx-2">|</div>
                  <Read locale={locale} readingTime={readingTime} />
                </div>
              </div>
            </div>
          )
      )}
      <Link href="/blog">
        <a className={`${styled.morePosts} umami--click--more-posts`}>
          {locale === 'id' ? 'Lebih banyak' : 'More posts'} <IoMdArrowForward className="ml-2" />
        </a>
      </Link>
    </section>
  )
}

export default LatestBlogs
