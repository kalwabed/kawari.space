import { Post } from '@/@types'
import Link from 'next/link'
import Date from './dateConfig'

interface Props {
  allPostsData: Post[]
}

const Content = ({ allPostsData }: Props) => {
  return (
    <section className="overflow-hidden">
      <div className="container px-5 md:pl-32 md:pr-5 pb-24 pt-12 md:pt-24 mx-auto">
        <div className="-my-8">
          {allPostsData.map(({ title, subtitle, date, readingTime, slug }) => (
            <div
              className="py-8 flex flex-col md:flex-row flex-wrap md:flex-no-wrap hover:shadow-lg transition ease-out duration-150"
              key={slug}
            >
              <div className="md:w-1/6 md:mb-0 mb-6 flex-shrink-0 flex flex-col tracking-wide ml-3">
                <span className="mt-1">
                  <Date dateString={date} />
                </span>
                <span className="mt-1 text-gray-500 text-sm">{readingTime} menit membaca</span>
              </div>
              <div className="md:flex-grow ml-2 md:ml-0">
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
  )
}

export default Content
