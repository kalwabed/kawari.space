import { NextPage } from 'next'

import Layout from '@/components/Layout'
import siteConfig from 'site-config'
import LinkExternal from '@/parts/LinkExternal'

const About: NextPage = () => {
  return (
    <Layout title="kawari | about me" page="about">
      <div className="container mx-auto my-12 flex flex-col md:px-24 pb-24 text-lg">
        <section className="px-5 md:px-20">
          <h1>About</h1>
          My name is Kalwabed Rizki, usually called Kalwabed. Born and raised in{' '}
          <LinkExternal href="banyuwangikab.go.id/" label="Banyuwangi, Indonesia" />. Currently studying as a software engineering student
          at SMKN 1 Banyuwangi.
          <div className="leading-normal mt-2">
            I love programming since I studied at SMKN 1 Banyuwangi. The first successful website I created is a system for processing the
            data warehouse created using <LinkExternal href="codeigniter.com" label="CodeIgniter" /> and{' '}
            <LinkExternal href="getbootstrap.com" label="Bootstrap" />. Now I am more focused on developing a modern website using
            JavaScript to handle both the frontend and the backend.
          </div>
          <div className="leading-normal mt-2">
            I&apos;m using <LinkExternal href="kubuntu.org" label="Kubuntu 20" /> as the operating system for my daily activities. And now I
            spend a lot of time contributing to <LinkExternal href="github.com/kaliwa" label="open source projects" />, being active at
            developer community events, and learning new things.
          </div>
        </section>
        <section className="px-5 md:px-20 mt-3">
          <h1>Social media</h1>
          <div className="flex flex-col flex-wrap md:flex-no-wrap">
            Get in touch with me on various platform and social media.
            {Object.entries(siteConfig.socials).map(([k, v]) => (
              <div className="leading-loose" key={k}>
                {k} - <LinkExternal href={v.replace(/^http(s?):\/\//, '')} label={v.replace(/^http(s?):\/\//, '')} />{' '}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About
