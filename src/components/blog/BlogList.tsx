import { Post } from '@/@types'
import Link from 'next/link'
import Date from './dateConfig'
import styled from './bloglist.module.css'

interface Props {
  allPostsData: Post[]
}

const Content = ({ allPostsData }: Props) => {
  return (
    <section className="overflow-hidden">
      <div className={`container ${styled.wrapper}`}>
        <div className="-my-8">
          {allPostsData.map(({ title, subtitle, date, readingTime, slug }) => (
            <Link href={`/blog/${slug}`} key={slug}>
              <a className={`group ${styled.slugWrapper}`}>
                <div className={styled.dateTimeWrap}>
                  <span className="mt-1">
                    <Date dateString={date} />
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">{readingTime} menit membaca</span>
                </div>
                <div className="md:flex-grow ml-2 md:ml-0">
                  <Link href={`/blog/${slug}`}>
                    <a className={`group-hover:border-primary ${styled.title}`}>{title}</a>
                  </Link>
                  <p className="leading-relaxed text-gray-500">{subtitle}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Content
