import type { NextPage } from 'next'

import Layout from '@/components/Layout'
import ProjectCard from '@/components/projects/ProjectCard'
import siteConfig from 'site-config'
import { useRouter } from 'next/router'

const projects: NextPage = () => {
  const { locale } = useRouter()
  const pos = locale === 'id' ? 'proyek' : 'projects'
  return (
    <Layout page={pos} title={`kawari | ${pos}`}>
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
