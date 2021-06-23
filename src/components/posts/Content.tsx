import { DiscussionEmbed } from 'disqus-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'

import siteConfig from 'site-config'
import { Post } from '@/@types'
import Date from './dateConfig'
import styled from './Content.module.css'
import ReadConfig from './readConfig'

interface Props extends Post {
  mdxSource: { compiledSource: string; scope: {} }
}

const Content = ({ post }: { post: Props }) => {
  const { locale, asPath } = useRouter()
  const { featuredImage, mdxSource, publishedAt, readingTime, slug, summary, title } = post

  return (
    <article className={`container ${styled.wrapper}`}>
      <h1 className={styled.title}>{title}</h1>
      <small className={styled.publishedAt}>
        <Date dateString={publishedAt} locale={locale} /> / ~<ReadConfig locale={locale} readingTime={readingTime} /> /{' '}
        {summary}
      </small>
      <div className={styled.imgWrapper}>
        <Image
          width={850}
          height={360}
          objectPosition="center"
          objectFit="cover"
          quality={90}
          src={featuredImage.image}
          className={styled.img}
          alt={title}
        />
        <div className={styled.imgFromWrapper}>
          {locale === 'id' ? 'Foto dari' : 'Photo by'}{' '}
          <a href={featuredImage.source} target="_blank" rel="noopener noreferrer" className={styled.imgFromLink}>
            {featuredImage.name}
          </a>{' '}
        </div>
      </div>

      <div className={styled.article}>
        <MDXRemote {...mdxSource} lazy />
      </div>
      <div className={styled.divider} />

      <DiscussionEmbed
        shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}
        config={{ url: siteConfig.url + asPath, identifier: slug, title, language: locale }}
      />
    </article>
  )
}
export default Content
