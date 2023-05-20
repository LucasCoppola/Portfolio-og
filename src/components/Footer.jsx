import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
	return (
		<footer className="bg-gray-900 py-8">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center space-x-6">
					<a
						href="https://github.com/LucasCoppola"
						target="_blank"
						rel="noopener noreferrer"
						className=" transition-colors duration-300 hover:text-white"
					>
						<span className="sr-only">GitHub</span>
						<FaGithub className="h-6 w-6" />
					</a>
					<a
						href="https://linkedin.com/in/lucas-coppola-1805ab226"
						target="_blank"
						rel="noopener noreferrer"
						className=" transition-colors duration-300 hover:text-white"
					>
						<span className="sr-only">LinkedIn</span>
						<FaLinkedin className="h-6 w-6" />
					</a>
				</div>
				<p className="mt-8 text-center text-sm ">
					Designed &amp; built by <span className="text-green-300">Lucas Coppola</span> © 2023
				</p>
			</div>
		</footer>
	)
}

export default Footer
