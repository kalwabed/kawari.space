import { NextPage } from 'next'

import Layout from '@/components/Layout'
import Intro from '@/components/about/Intro'
import SocialMedia from '@/components/about/SocialMedia'
import { useRouter } from 'next/router'

const About: NextPage = () => {
  const { locale } = useRouter()
  return (
    <Layout title="about | Kalwabed Rizki" page="about">
      <div className="container mx-auto my-12 flex flex-col md:px-48 pb-24 text-lg">
        <section className="px-5 md:px-24">
          <Intro locale={locale} />
        </section>
        <section className="px-5 md:px-24 mt-5">
          <SocialMedia />
        </section>
      </div>
    </Layout>
  )
}

export default About
