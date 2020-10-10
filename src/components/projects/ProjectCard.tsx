import React from 'react'

import styled from '@/styles/ProjectCard.module.css'
import { Project } from '@/@types'
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
        <a href={demoUrl} hidden={!demoUrl}>
          <button className={styled.button} type="button">
            Demo
          </button>
        </a>
        <a href={source} rel="noopener noreferrer" target="_blank" className={styled.sourceLink}>
          source{' '}
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ProjectLists
