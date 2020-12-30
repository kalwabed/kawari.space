import type { NextPage } from 'next'

import Layout from '@/components/Layout'
import ProjectCard from '@/components/projects/ProjectCard'
import { useRouter } from 'next/router'

import { id, en } from 'lang'
import siteConfig from 'site-config'

const Projects: NextPage = () => {
  const { locale } = useRouter()
  const pos = locale === 'id' ? 'proyek' : 'projects'
  return (
    <Layout page={pos} title={`kawari | ${pos}`}>
      <section>
        <div className="p-5 mx-auto bg-secondary flex flex-col justify-center items-center">
          <h1 className="font-bold text-center md:text-4xl text-3xl">
            {locale === 'id' ? id.projects.header : en.projects.header}
          </h1>
          <p className="text-center font-light">{locale === 'id' ? id.projects.subtitle : en.projects.subtitle}</p>
        </div>
        <div className="container px-5 pb-24 pt-16 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10">
            {siteConfig.projects.map(pr => (
              <ProjectCard {...pr} keyProp={pr.title} locale={locale} key={pr.title} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
