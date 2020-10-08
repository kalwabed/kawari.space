import React from 'react'

const ProjectLists = () => {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10">
          <div className="w-full md:w-1/2 mb-10 px-4 text-center md:text-left">
            <div className="rounded-lg h-64 overflow-hidden">
              <img src="https://dummyimage.com/1201x501" alt="" className="object-cover object-center h-full w-full" />
            </div>
            <div className="mt-1 flex flex-wrap flex-row items-center">
              <caption className="p-1 bg-blue-600 rounded-lg font-semibold">React</caption>
              <caption className="p-1 mx-1 bg-purple-700 rounded-lg font-semibold">Bootstrap</caption>
              <caption className="p-1 bg-gray-300 rounded-lg font-semibold text-dark">Express</caption>
              <caption className="p-1 mx-1 bg-gray-300 rounded-lg font-semibold text-dark">Next.js</caption>
              <caption className="p-1 mx-1 bg-teal-500 rounded-lg font-semibold">Tailwindcss</caption>
            </div>
            <div className="text-2xl font-medium mt-6 mb-3">Tuantanah</div>
            <p className="leading-relaxed text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex flex-row items-center mt-6 justify-center md:justify-start">
              <button
                className="flex bg-secondary border-0 py-1 px-5 focus:outline-none hover:bg-primary rounded transition duration-100 ease-out"
                type="button"
              >
                Demo
              </button>
              <a href="/" className="ml-4 hover:underline hover:text-info inline-flex items-center">
                source{' '}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectLists
