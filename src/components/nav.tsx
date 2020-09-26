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
		<nav>
			<ul className='flex justify-center items-center p-4 bg-primary'>
				{links.map(link => (
					<li className='p-1 mr-2'>
						<Link href={link.href}>
							<a className='no-underline'>{link.label}</a>
						</Link>
						<div className={`link${link.label === page ? '-active' : null}`} />
					</li>
				))}
			</ul>
		</nav>
	)
}
