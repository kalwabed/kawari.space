import Link from 'next/link'

const links = [
	{
		href: '/',
		label: 'whoami',
	},
	{
		href: '/projects',
		label: 'projects',
	},
	{
		href: '/blog',
		label: 'blog',
	},
]
const githubLink = 'https://github.com/kaliwa'

export default function Nav({ page = 'whoami' }) {
	return (
		<header>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-dark'>
				<Link href='/'>
					<a className='flex title-font font-medium items-center mb-4 md:mb-0'>
						<span className='ml-3 text-xl hover:text-info transition duration-300 ease-in inline-flex'>
							kawari
							<span className='p-1 h-1 bg-primary animate-pulse hover:bg-info self-start rounded-full'></span>
						</span>
					</a>
				</Link>
				<nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-light flex flex-wrap items-center text-base justify-center'>
					{links.map(link => (
						<Link href={link.href} key={link.label}>
							<a
								href={link.href}
								className={`mr-5 px-1 hover:text-info transition ease-in-out duration-100 hover:-translate-y-1 ${
									link.label === page
										? 'transform-none border-b-4 border-primary hover:border-info'
										: 'transform'
								}`}
							>
								{link.label}
							</a>
						</Link>
					))}
				</nav>
				<div className='inline-flex items-center text-base mt-4 md:mt-0'>
					<a href={githubLink} target='_blank' rel='noreferrer noopener'>
						<i className='devicon-github-plain text-2xl hover:text-info'></i>
					</a>
				</div>
			</div>
		</header>
	)
}
