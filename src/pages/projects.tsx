import React from 'react'
import { NextPage } from 'next'

import Layout from '@/components/Layout'
import ProjectLists from '@/components/projects/ProjectLists'

const projects: NextPage = () => {
  return (
    <Layout page="projects" title="kawari | projects">
      <ProjectLists />
    </Layout>
  )
}

export default projects
