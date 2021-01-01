import Link from 'next/link'
import { useRouter } from 'next/router'

import { Post } from '@/@types'
import Date from './dateConfig'
import Read from './readConfig'
import styled from './BlogList.module.css'

interface Props {
  allPostsData: Post[]
}

const BlogList = ({ allPostsData }: Props) => {
  const { locale } = useRouter()
  return (
    <section className="overflow-hidden">
      <div className={`container ${styled.wrapper}`}>
        <div className="-my-8">
          {allPostsData.map(({ title, summary, publishedAt, readingTime, slug }) => (
            <Link href={`/blog/${slug}`} key={slug}>
              <a className={`group ${styled.slugWrapper}`}>
                <div className="md:flex-grow ml-8">
                  <a className={`group-hover:border-primary ${styled.title}`}>{title}</a>

                  <div className="flex flex-row space-x-1 space-y-1 text-gray-600 text-sm items-center content-center ">
                    <span className="-mb-1 mr-0.5">
                      <Date dateString={publishedAt} locale={locale} />
                    </span>
                    •
                    <span>
                      <Read locale={locale} readingTime={readingTime} />
                    </span>
                  </div>
                  <p className="leading-relaxed text-gray-500">{summary}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
