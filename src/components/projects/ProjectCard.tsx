import Image from 'next/image'

import { Project } from '@/@types'
import { IcExternal } from '@/parts/Icon'
import styled from './ProjectCard.module.css'

interface Props extends Project {
  keyProp: string | any
  locale: string
}

const ProjectCard = ({ demoUrl, description, image, source, stack, title, keyProp, locale }: Props) => {
  return (
    <div className={styled.wrapper} key={keyProp}>
      <div className={styled.imgWrapper}>
        <Image
          width={600}
          layout="responsive"
          height={300}
          quality={80}
          objectFit="cover"
          objectPosition="center"
          src={image}
          alt={title}
        />
      </div>
      <div>
        <div className={styled.title}>
          {title}
          <div className={styled.badgeWrapper}>{stack}</div>
        </div>
        <p className={styled.description}>{locale === 'id' ? description.id : description.en}</p>
        <div className={styled.buttonLinkWrapper}>
          <a href={demoUrl} hidden={!demoUrl}>
            <button className={styled.button} type="button">
              Visit <IcExternal />
            </button>
          </a>
          {source && (
            <a href={source} rel="noopener noreferrer" target="_blank" className={styled.sourceLink}>
              {locale === 'id' ? 'sumber' : 'source'} <IcExternal />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
