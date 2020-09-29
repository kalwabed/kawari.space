import Content from '@/components/Content'
import Nav from '@/components/Nav'
import Page from '@/components/Page'

const Index = () => {
	return (
		<Page>
			<Nav />
			<Content>
				<section className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:max-w-lg lg:w-full md:w-1 w-5/6 md:mb-0 mb-10'>
						<img
							src='/img/aku.png'
							alt='profile'
							className='object-cover object-center rounded-lg'
						/>
					</div>
					<div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
						<h1 className='sm:text-4xl text-3xl font-medium'>
							Hi, my name is Kalwabed Rizki
						</h1>
						<p className='mb-8 text-base text-gray-600'>
							JavaScript enthusiast (front-to-back)
						</p>
						<p className='italic leading-relaxed mb-8'>
							make things as a hobby
						</p>
					</div>
				</section>
			</Content>
		</Page>
	)
}

export default Index
