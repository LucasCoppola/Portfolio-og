import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<header className="top-0 z-10 mb-6 bg-gray-800 md:sticky">
			<div className="container mx-auto flex flex-col flex-wrap items-center p-2 md:flex-row md:justify-between lg:px-20">
				<div className="flex w-full items-center justify-between ">
					<div className="flex-shrink flex-grow">
						<a href="#about">
							<img
								src="../../LC.png"
								alt="logo"
								className="border-white-500 my-1 h-12 w-12 rounded-full border-2 md:mr-auto"
							/>
						</a>
					</div>

					<div className="ml-auto hidden md:flex">
						<a href="#projects" className="mt-4 block text-lg text-white hover:text-green-300 md:mt-0">
							Home
						</a>
						<a href="#about" className="ml-6 mt-4 block text-lg text-white hover:text-green-300 md:mt-0">
							About
						</a>
						<a href="#skills" className="ml-6 mt-4 block text-lg text-white hover:text-green-300 md:mt-0">
							Projects
						</a>
						<a href="#contact" className="ml-6 mt-4 block text-lg text-white hover:text-green-300 md:mt-0">
							Contact
						</a>
					</div>
					<div className="flex-shrink flex-grow-0">
						<button
							className="ml-auto inline-block rounded px-3 py-2 text-gray-200 hover:text-white focus:outline-none md:hidden"
							onClick={toggleMenu}
						>
							<RxHamburgerMenu className={`${menuOpen ? 'hidden' : 'block'} h-8 w-8  `} />
							<IoCloseOutline className={`${menuOpen ? 'block' : 'hidden'} color-white h-8 w-8 `} />
						</button>
					</div>
				</div>

				<nav className={`${menuOpen ? 'ml-auto flex flex-col md:flex-row ' : 'hidden'} pl-4 pr-4`}>
					<a href="#projects" className="md: mt-4 block text-right  text-lg hover:text-white md:mt-0">
						Home
					</a>

					<a href="#about" className="md: mt-4 block text-right  text-lg hover:text-white md:mt-0">
						About
					</a>

					<a href="#skills" className="md: mt-4 block text-right  text-lg hover:text-white md:mt-0">
						Projects
					</a>

					<a href="#contact" className="mt-4 block  text-right   text-lg hover:text-white md:mt-0">
						Contact
					</a>
				</nav>
			</div>
		</header>
	)
}

export default Navbar

/* Back Up Code */

// import React, { useState } from 'react'
// import { RxHamburgerMenu } from 'react-icons/rx'
// import { IoCloseOutline } from 'react-icons/io5'

// const Navbar = () => {
// 	const [menuOpen, setMenuOpen] = useState(false)

// 	const toggleMenu = () => {
// 		setMenuOpen(!menuOpen)
// 	}

// 	return (
// 		<header className="bg-gray-800 md:sticky top-0 z-10">
// 			<div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row md:justify-between items-center">
// 				<div className="flex justify-between  items-center lg:w-full lg:px-20 lg:py-1 md:w-auto md:p-4 ">
// 					<a href="#about">
// 						<img
// 							src="../../LC.png"
// 							alt="logo"
// 							className="w-12 h-12 rounded-full my-1 border-2 border-white-500 md:mr-auto"
// 						/>
// 					</a>
// 					<div className="hidden md:flex ml-auto">
// 						<a href="#projects" className="block mt-4 md:md:mt-0 text-lg text-white hover:text-gray-400">
// 							Home
// 						</a>
// 						<a href="#about" className="block mt-4 md:md:mt-0 ml-4 text-lg text-white hover:text-gray-400">
// 							About
// 						</a>
// 						<a href="#skills" className="block mt-4 md:md:mt-0 ml-4 text-lg text-white hover:text-gray-400">
// 							Projects
// 						</a>
// 						<a
// 							href="#contact"
// 							className="block mt-4 md:md:mt-0 ml-4 text-lg text-white hover:text-gray-400"
// 						>
// 							Contact
// 						</a>
// 					</div>

// 					<button
// 						className="inline-block md:hidden ml-auto px-3 py-2 rounded text-gray-200 hover:text-white focus:outline-none"
// 						onClick={toggleMenu}
// 					>
// 						<RxHamburgerMenu className={`${menuOpen ? 'hidden' : 'block'} w-8 h-8  `} />
// 						<IoCloseOutline className={`${menuOpen ? 'block' : 'hidden'} w-8 h-8 color-white `} />
// 					</button>
// 				</div>

// 				<nav className={`${menuOpen ? 'flex flex-col md:flex-row ml-auto ' : 'hidden'} pl-4 pr-4`}>
// 					<a href="#projects" className="block mt-4 md: md:mt-0  text-right text-lg hover:text-white">
// 						Home
// 					</a>

// 					<a href="#about" className="block mt-4 md: md:mt-0  text-right text-lg hover:text-white">
// 						About
// 					</a>

// 					<a href="#skills" className="block mt-4 md: md:mt-0  text-right text-lg hover:text-white">
// 						Projects
// 					</a>

// 					<a href="#contact" className="block mt-4  md:mt-0   text-right text-lg hover:text-white">
// 						Contact
// 					</a>
// 				</nav>
// 			</div>
// 		</header>
// 	)
// }

// export default Navbar
