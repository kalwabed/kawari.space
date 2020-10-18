import { Project } from '@/@types'
import { IcExternal } from '@/parts/Icon'
import styled from './ProjectCard.module.css'
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
          source <IcExternal />
        </a>
      </div>
    </div>
  )
}

export default ProjectLists
