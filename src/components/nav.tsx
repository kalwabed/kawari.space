import Link from 'next/link'

const links = [
	{ href: '/projects', label: 'projects' },
	{ href: '/blog', label: 'blog' },
]

export default function Nav() {
	return (
		<nav>
			<ul className='flex justify-center items-center p-8'>
				<li>
					<Link href='/'>
						<a className='text-blue-500 no-underline'>Home</a>
					</Link>
				</li>
				<ul className='flex justify-center items-center space-x-4'>
					{links.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a href={href}>{label}</a>
						</li>
					))}
				</ul>
			</ul>
		</nav>
	)
}
