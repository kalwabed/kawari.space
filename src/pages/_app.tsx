import '@/styles/index.css'
import SEO from '../../next-seo.config'

import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Footer from '@/components/Footer'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default App
