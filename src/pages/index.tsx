import Nav from '@/components/nav'
import Head from 'next/head'

const Index = () => {
	return (
		<>
			<Head>
				<title>kawari</title>
			</Head>
			<Nav />
			<div className='py-20'>
				<h1 className='text-5xl text-center'>Kalwabed Rizki Portofolio</h1>
			</div>
		</>
	)
}

export default Index
