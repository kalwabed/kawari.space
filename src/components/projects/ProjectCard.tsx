import React from 'react'

import styled from '@/styles/ProjectCard.module.css'
import { Project } from '@/@types'
import { IcExternal } from '@/parts/Icon'
import Badge from './Badge'

interface Props extends Project {
  keyProp: string | any
}

const ProjectLists = ({ demoUrl, description, image, source, stack, title, keyProp }: Props) => {
  return (
    <div className={styled.wrapper} key={keyProp}>
      <div className={styled.imgWrapper}>
        <img src={image} alt={title} className={styled.img} />
      </div>
      <div className={styled.badgeWrapper}>
        {stack.map(tech => (
          <Badge badge={tech} key={tech} />
        ))}
      </div>
      <div className={styled.title}>{title}</div>
      <p className={styled.description}>{description}</p>
      <div className={styled.buttonLinkWrapper}>
        <a href={demoUrl} hidden={!demoUrl} rel="noopener noreferrer" target="_blank">
          <button className={styled.button} type="button">
            Demo <IcExternal />
          </button>
        </a>
        <a href={source} rel="noopener noreferrer" target="_blank" className={styled.sourceLink}>
          source <IcExternal />
        </a>
      </div>
    </div>
  )
}

export default ProjectLists
