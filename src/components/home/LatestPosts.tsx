import type { Post } from '@/@types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoMdArrowForward } from 'react-icons/io'
import Date from '../posts/dateConfig'
import Read from '../posts/readConfig'
import styled from './LatestPosts.module.css'

interface Props {
  allPostsData: Post[]
}

const LatestPosts = ({ allPostsData }: Props) => {
  const { locale } = useRouter()
  return (
    <section className={`container ${styled.wrapper}`}>
      <div className={styled.latestPosts}>{locale === 'id' ? 'Tulisan terbaru' : 'Latest posts'}</div>
      {allPostsData.map(
        ({ publishedAt, readingTime, slug, title }, i) =>
          i <= 2 && (
            <Link href={`/posts/${slug}`} key={slug}>
              <a className={`group ${styled.postsWrapper}`}>
                <div className="px-2 py-1">
                  <div className={styled.titleWrapper}>
                    <a className={`group-hover:border-primary ${styled.title}`}>{title}</a>
                  </div>
                  <div className={styled.dateTime}>
                    <Date dateString={publishedAt} locale={locale} />
                    <div className="mx-2">|</div>
                    <Read locale={locale} readingTime={readingTime} />
                  </div>
                </div>
              </a>
            </Link>
          )
      )}
      <Link href="/posts">
        <a className={`${styled.morePosts} umami--click--more-posts`}>
          {locale === 'id' ? 'Lebih banyak' : 'More posts'} <IoMdArrowForward className="ml-2" />
        </a>
      </Link>
    </section>
  )
}

export default LatestPosts
