import Image from 'next/image'

import { Project } from '@/@types'
import { IcExternal } from '@/parts/Icon'
import styled from './ProjectCard.module.css'

interface Props extends Project {
  keyProp: string | any
}

const ProjectLists = ({ demoUrl, description, image, source, stack, title, keyProp }: Props) => {
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
        <p className={styled.description}>{description}</p>
        <div className={styled.buttonLinkWrapper}>
          <a href={demoUrl} hidden={!demoUrl}>
            <button className={styled.button} type="button">
              Demo
            </button>
          </a>
          <a href={source} rel="noopener noreferrer" target="_blank" className={styled.sourceLink}>
            source <IcExternal />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectLists
