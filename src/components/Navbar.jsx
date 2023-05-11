import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [prevScrollpos, setPrevScrollpos] = useState(0)
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset
			setVisible(prevScrollpos > currentScrollPos || currentScrollPos < 10)
			setPrevScrollpos(currentScrollPos)
		}

		if (menuOpen && !visible) {
			setMenuOpen(false)
		}

		const navbar = document.querySelector('.navbar')
		if (navbar) {
			if (visible) {
				navbar.classList.remove('navbar--hidden')
			} else {
				navbar.classList.add('navbar--hidden')
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [prevScrollpos, menuOpen, visible])

	return (
		<header className={`navbar z-10  bg-gray-800 ${visible ? 'sticky ' : ''} `}>
			<div className="container mx-auto flex flex-col flex-wrap items-center p-2 md:flex-row md:justify-between lg:px-16">
				<div className="flex w-full items-center justify-between ">
					<div className="flex-shrink flex-grow">
						<Link to="landing" className="inline-block cursor-pointer" spy={true} smooth={true} offset={50} duration={500}>
							<RouterLink to="/">
								<img src="../../LC.png" alt="logo" className="border-white-500 my-1 h-12 w-12 rounded-full border-2 " />
							</RouterLink>
						</Link>
					</div>

					<div className="ml-auto hidden items-center md:flex">
						<Link
							to="about"
							className="ml-6 mt-4 block cursor-pointer text-lg transition duration-200 ease-in-out hover:border-b-2 hover:border-green-300 hover:bg-gray-800 hover:text-white md:mt-0"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							<RouterLink to="/">About</RouterLink>
						</Link>
						<Link
							to="projects"
							className="ml-6 mt-4 block cursor-pointer text-lg transition duration-200 ease-in-out hover:border-b-2 hover:border-green-300 hover:bg-gray-800 hover:text-white md:mt-0"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							<RouterLink to="/">Projects</RouterLink>
						</Link>
						<Link
							to="contact"
							className="ml-6 mt-4 block cursor-pointer text-lg transition duration-200 ease-in-out hover:border-b-2 hover:border-green-300 hover:bg-gray-800 hover:text-white md:mt-0"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							<RouterLink to="/">Contact</RouterLink>
						</Link>
						<button className="ml-6 mt-4 block rounded border border-green-300 bg-transparent px-4 py-2 font-semibold text-green-300 transition duration-200 ease-in-out hover:-translate-y-0.5 hover:border-b-4 md:mt-0">
							<a href="../../resume.pdf" target="_blank">
								Resume
							</a>
						</button>
					</div>

					<div className="flex-shrink flex-grow-0">
						<button
							className="ml-auto inline-block rounded px-4 py-2 text-gray-200 hover:text-white focus:outline-none md:hidden"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							<RxHamburgerMenu className={`${menuOpen ? 'hidden' : 'block'} h-8 w-8  `} />
							<IoCloseOutline className={`${menuOpen ? 'block' : 'hidden'} color-white h-8 w-8 `} />
						</button>
					</div>
				</div>

				<nav
					className={`${
						menuOpen ? ' flex flex-col md:flex-row ' : 'hidden'
					} absolute right-[1px] mt-16 w-full bg-gray-800 px-6 pb-4 md:flex md:items-center md:justify-center`}
				>
					<Link to="about" className="mt-4 block text-right  text-lg hover:text-white " spy={true} smooth={true} offset={50} duration={500}>
						<RouterLink to="/">About</RouterLink>
					</Link>
					<Link to="projects" className="mt-4 block text-right  text-lg hover:text-white " spy={true} smooth={true} offset={50} duration={500}>
						<RouterLink to="/">Projects</RouterLink>
					</Link>
					<Link to="contact" className="mt-4 block text-right  text-lg hover:text-white " spy={true} smooth={true} offset={50} duration={500}>
						<RouterLink to="/">Contact</RouterLink>
					</Link>
					<button className="ml-auto mt-4 block w-24 rounded border border-green-300 bg-transparent px-4 py-2 text-right font-semibold text-green-300 md:mt-0">
						<a href="../../resume.pdf" target="_blank">
							Resume
						</a>
					</button>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
