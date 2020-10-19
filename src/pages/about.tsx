import { NextPage } from 'next'

import Layout from '@/components/Layout'
import siteConfig from 'site-config'
import LinkExternal from '@/parts/LinkExternal'

const About: NextPage = () => {
  return (
    <Layout title="kawari | about me" page="about">
      <div className="container mx-auto my-12 flex flex-col md:px-24 pb-24 text-lg">
        <section className="px-5 md:px-20 text-justify">
          <h1>About</h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptate officiis facilis saepe maiores sint repudiandae, quod
          eum doloremque. Tempora commodi dicta fugit. Perspiciatis veniam sint tenetur voluptatem, ipsa suscipit. Quisquam repellendus
          atque quaerat obcaecati fugiat eligendi qui ad expedita nisi autem voluptatibus cupiditate necessitatibus at laborum ab, quia
          inventore itaque numquam a quis assumenda aperiam esse? Nobis, molestias omnis. Expedita suscipit nam eligendi ipsa voluptatum
          voluptatem natus laborum quod iste libero fugiat quis quo nostrum facilis obcaecati accusamus, ratione similique officiis culpa
          sint ipsum ducimus! Earum dolorem officiis obcaecati. Repellat soluta asperiores officia praesentium rerum quos? Libero voluptate
          reprehenderit, enim facilis rem placeat molestias consectetur excepturi necessitatibus deserunt officia reiciendis officiis,
          aperiam ab! Aliquam temporibus quibusdam dolorum esse quam.
          <p className="mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio impedit, labore eius animi accusantium tempora quidem eum sed
            mollitia vero optio saepe aspernatur quam minima necessitatibus nobis cumque dolores reprehenderit.
          </p>
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
