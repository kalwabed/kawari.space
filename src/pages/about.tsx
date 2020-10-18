import { NextPage } from 'next'

import Layout from '@/components/Layout'

const About: NextPage = () => {
  return (
    <Layout title="kawari | about me" page="about">
      <section className="container mx-auto my-12 flex md:px-24 pb-48">
        <div className="px-5 md:px-20 text-justify">
          <h1>Tentang</h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptate officiis facilis saepe maiores sint repudiandae, quod
          eum doloremque. Tempora commodi dicta fugit. Perspiciatis veniam sint tenetur voluptatem, ipsa suscipit. Quisquam repellendus
          atque quaerat obcaecati fugiat eligendi qui ad expedita nisi autem voluptatibus cupiditate necessitatibus at laborum ab, quia
          inventore itaque numquam a quis assumenda aperiam esse? Nobis, molestias omnis. Expedita suscipit nam eligendi ipsa voluptatum
          voluptatem natus laborum quod iste libero fugiat quis quo nostrum facilis obcaecati accusamus, ratione similique officiis culpa
          sint ipsum ducimus! Earum dolorem officiis obcaecati. Repellat soluta asperiores officia praesentium rerum quos? Libero voluptate
          reprehenderit, enim facilis rem placeat molestias consectetur excepturi necessitatibus deserunt officia reiciendis officiis,
          aperiam ab! Aliquam temporibus quibusdam dolorum esse quam.
        </div>
      </section>
    </Layout>
  )
}

export default About
