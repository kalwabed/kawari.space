import Content from '@/components/Content'
import Nav from '@/components/Nav'
import Page from '@/components/Page'

const Index = () => {
	return (
		<Page>
			<Nav page='blog' />
			<Content>
				<h1 className='container d-flex p-48'>Halaman blog</h1>
			</Content>
		</Page>
	)
}

export default Index
