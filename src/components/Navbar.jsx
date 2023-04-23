import React from 'react'

const Navbar = () => {
	return (
		<header className="bg-gray-800 md:sticky top-0 z-10 px-16">
			<div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
				<a href="#about">
					<img
						src="../../public/LC.png"
						alt="logo"
						className="w-12 h-12 rounded-full my-1 border-2 border-white-500"
					/>
				</a>

				<nav className="flex flex-wrap items-center justify-end md:ml-auto">
					<a href="#projects" className="mx-5 text-lg hover:text-white">
						Home
					</a>
					<a href="#about" className="mx-5 text-lg hover:text-white">
						About
					</a>
					<a href="#skills" className="mx-5 text-lg hover:text-white">
						Projects
					</a>
					<a href="#contact" className="ml-5 text-lg hover:text-white">
						Contact
					</a>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
