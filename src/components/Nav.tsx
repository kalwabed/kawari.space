import Link from 'next/link'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io'

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

const social = {
	github: {
		url: 'https://github.com/kaliwa',
	},
	instagram: {
		url: 'https://instagram.com/kaliwa__',
	},
	linkedin: {
		url: 'https://linkedin.com/in/kaliwa/',
	},
}

export default function Nav({ page = 'whoami' }) {
	return (
		<header>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-dark'>
				<Link href='/'>
					<a className='flex font-medium items-center mb-4 md:mb-0'>
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
								className={`mr-5 px-1 hover:text-info transition ease-in-out duration-100 ${
									link.label === page &&
									'border-b-4 border-primary hover:border-info'
								}`}
							>
								{link.label}
							</a>
						</Link>
					))}
				</nav>
				<div className='inline-flex items-center text-base mt-4 md:mt-0'>
					<a
						href={social.github.url}
						target='_blank'
						rel='noopener noreferrer'
						aria-label='github'
					>
						<IoLogoGithub className='fill-current h-6 w-6 hover:text-info transition ease-in duration-150' />
					</a>
					<a
						href={social.instagram.url}
						target='_blank'
						rel='noopener noreferrer'
						className='mx-2'
						aria-label='instagram'
					>
						<IoLogoInstagram className='fill-current h-6 w-6 hover:text-info transition ease-in duration-150' />
					</a>
					<a
						href={social.linkedin.url}
						target='_blank'
						rel='noopener noreferrer'
						aria-label='linkedin'
					>
						<IoLogoLinkedin className='fill-current h-6 w-6 hover:text-info transition ease-in duration-150' />
					</a>
				</div>
			</div>
		</header>
	)
}
