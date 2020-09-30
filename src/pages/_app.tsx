import '@/styles/index.css'
import SEO from '../../next-seo.config'

import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</>
	)
}

export default App
