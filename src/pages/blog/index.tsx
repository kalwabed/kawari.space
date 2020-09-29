import Content from '@/components/Content'
import Nav from '@/components/Nav'
import Page from '@/components/Page'

const Index = () => {
	return (
		<Page>
			<Nav page='blog' />
			<Content>
				<h2>ini blog</h2>
			</Content>
		</Page>
	)
}

export default Index
