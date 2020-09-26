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

export default function Nav({ page = 'whoami' }) {
	return (
		<header>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-dark'>
				<Link href='/'>
					<a className='flex title-font font-medium items-center mb-4 md:mb-0'>
						<span className='ml-3 text-xl'>kawari</span>
					</a>
				</Link>
				<nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-light flex flex-wrap items-center text-base justify-center'>
					{links.map(link => (
						<Link href={link.href} key={link.label}>
							<a href={link.href} className='mr-5'>
								{link.label}
								{link.label === page ? <div className='link-active' /> : null}
							</a>
						</Link>
					))}
				</nav>
				<div className='inline-flex items-center text-base mt-4 md:mt-0'>
					<img src='/img/github-logo.png' alt='GitHub logo' className='w-5' />
				</div>
			</div>
		</header>
	)
}
