import Head from 'next/head'

import Content from '@/components/Content'
import Nav from '@/components/Nav'
import Page from '@/components/Page'

const projects = () => {
	return (
		<Page>
			<Head>
				<title>projects | kawari</title>
			</Head>
			<Nav page='projects' />
			<Content>
				<h1>ini saya</h1>
			</Content>
		</Page>
	)
}

export default projects
