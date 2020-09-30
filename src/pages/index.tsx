import Content from '@/components/Content'
import Nav from '@/components/Nav'

const Index = () => {
	return (
		<>
			<Nav />
			<Content>
				<section className='container mx-auto flex px-5 md:px-20 py-8 md:py-24 md:flex-row flex-col items-center'>
					<div className='lg:max-w-lg lg:w-full md:w-1 w-full md:mb-0 mb-10'>
						<img
							src={require('~/assets/img/aku.png')}
							alt='hero'
							className='object-cover object-center shadow rounded-lg w-1/2 mx-auto md:mx-0 md:ml-auto'
						/>
					</div>
					<div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
						<h1 className='sm:text-4xl text-3xl font-medium'>
							Hi, I'm Kalwabed Rizki
						</h1>
						<p className='mb-8 text-base text-gray-600'>
							Web application developer
						</p>
						<p className='italic leading-relaxed mb-4'>
							JavaScript enthusiast, especially TypeScript
						</p>
						<p className='leading-tight mb-3'>From Indonesia 🇮🇩</p>
					</div>
				</section>

				<div className='container items-center flex flex-row mx-auto px-5 md:px-56 py-3'>
					<div className='mr-1 p-1 h-1 bg-primary w-1/12 rounded-sm' />
					<div className='font-bold text-4xl'>About</div>
				</div>

				<div className='container flex flex-col items-center px-5 mx-auto md:px-56 pb-64'>
					<div className='text-justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						veniam, exercitationem ex reprehenderit, quia natus, aspernatur
						reiciendis libero excepturi odio est ipsa sit laborum accusamus?
						Suscipit enim voluptatum architecto reprehenderit? Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Veritatis, totam corporis
						quisquam voluptas illo sunt nisi minima excepturi harum
					</div>

					<a
						className='bg-secondary hover:bg-primary text-light font-bold py-2 px-8 my-12 border-b-4 border-primary hover:border-secondary rounded transition ease-in duration-150 inline-flex items-center focus:outline-none focus:bg-primary focus:border-secondary cursor-pointer'
						href='mailto:kalwabedrzk@pm.me'
					>
						<svg
							className='fill-current w-6 h-6 mr-2'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
							<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
						</svg>
						Get in touch
					</a>
				</div>
			</Content>
		</>
	)
}

export default Index
