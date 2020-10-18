import type { NextPage } from 'next'

import Layout from '@/components/Layout'
import ProjectCard from '@/components/projects/ProjectCard'
import siteConfig from 'site-config'

const projects: NextPage = () => {
  return (
    <Layout page="projects" title="kawari | projects">
      <section>
        <div className="container px-5 pb-24 pt-20 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10">
            {siteConfig.projects.map(pr => (
              <ProjectCard {...pr} keyProp={pr.title} key={pr.title} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default projects
