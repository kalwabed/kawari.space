import Document, {
	Head,
	Html,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const intialProps = await Document.getInitialProps(ctx)
		return { ...intialProps }
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='UTF-8' />
					<meta httpEquiv='X-UA-Compatible' content='ie=edge' />

					<link
						rel='shortcut icon'
						href='/icons/favicon.ico'
						type='image/x-icon'
					/>
					<link rel='manifest' href='/manifest.webmanifest' />
					<link
						href='/icons/favicon-32x32.png'
						rel='icon'
						sizes='32x32'
						type='image/png'
					/>
					<link
						href='/icons/favicon-16x16.png'
						rel='icon'
						sizes='16x16'
						type='image/png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
						type='image/png'
					/>
				</Head>

				<body className='bg-dark text-light font-primary'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
