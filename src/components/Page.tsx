import Head from 'next/head'
import React from 'react'

interface PageProps {
	title?: string
}

const Page: React.FC<PageProps> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'kawari'}</title>
			</Head>
			{children}
		</>
	)
}

export default Page
