import Content from '@/components/Content'
import { NextSeo } from 'next-seo'

import Nav from '@/components/Nav'

const Index = () => {
	return (
		<>
			<NextSeo title='kawari | blog' />
			<Nav page='blog' />
			<Content>
				<h1 className='container d-flex p-48'>Halaman blog</h1>
			</Content>
		</>
	)
}

export default Index
