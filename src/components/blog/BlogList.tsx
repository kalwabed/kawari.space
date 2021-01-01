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
                <div className="md:flex-grow mx-5">
                  <div className="flex flex-row justify-between">
                    <a className={`group-hover:border-primary ${styled.title}`}>{title}</a>

                    <div className="hidden md:flex flex-row text-gray-500 text-sm items-center text-right">
                      <span>
                        <Read locale={locale} readingTime={readingTime} />
                      </span>
                    </div>
                  </div>

                  <p className="leading-relaxed text-gray-400">{summary}</p>
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
