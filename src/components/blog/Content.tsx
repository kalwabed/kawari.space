import { Post } from '@/@types'
import { DiscussionEmbed } from 'disqus-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import hydrate from 'next-mdx-remote/hydrate'

import siteConfig from 'site-config'
import Date from './dateConfig'
import styled from './Content.module.css'
import ReadConfig from './readConfig'
import MDXComponents from '../MDXComponents'

interface Props extends Post {
  mdxSource: string
  ImgBase64: string
}

const Content = ({ post }: { post: Props }) => {
  const { locale, asPath } = useRouter()
  const { ImgBase64, featuredImage, mdxSource, publishedAt, readingTime, slug, summary, title } = post
  const content = hydrate(mdxSource, { components: MDXComponents })

  return (
    <article className={`container ${styled.wrapper}`}>
      <h1 className={styled.title}>{title}</h1>
      <small className={styled.publishedAt}>
        <Date dateString={publishedAt} locale={locale} /> / ~<ReadConfig locale={locale} readingTime={readingTime} /> /{' '}
        {summary}
      </small>
      <div className={styled.imgWrapper}>
        <ImgBase64Component ImgBase64={ImgBase64} />
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

      <div className={styled.article}>{content}</div>
      <div className={styled.divider} />

      <DiscussionEmbed
        shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}
        config={{ url: siteConfig.url + asPath, identifier: slug, title, language: locale }}
      />
    </article>
  )
}

const ImgBase64Component = ({ ImgBase64 }) => (
  <img
    aria-hidden="true"
    alt="blurhash"
    src={ImgBase64}
    style={{
      position: 'absolute',
      width: '850',
      height: '360',
      objectFit: 'cover',
      objectPosition: 'center',
      filter: 'blur(2rem)',
      transform: 'scale(1.2)'
    }}
  />
)

export default Content
