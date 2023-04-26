import React from 'react'
import { FaCode, FaDatabase, FaServer, FaUser } from 'react-icons/fa'

const About = () => {
	return (
		<section id="about" className="text-gray-600 body-font">
			<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-center text-white">About Me</h1>
			<div className="flex flex-wrap justify-center items-center  p-10">
				<div className="md:w-1/2 w-full md:pr-10 mb-10 md:mb-0">
					<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
						I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads
						to the success of the overall product. Check out some of my work in the Projects section. I also
						like sharing content related to the stuff that I have learned over the years in Web Development
						so it can help other people of the Dev Community. Feel free to Connect or Follow me on my
						Linkedin where I post useful content related to Web Development and Programming I'm open to Job
						opportunities where I can contribute, learn and grow. If you have a good opportunity that
						matches my skills and experience then don't hesitate to contact me.
					</p>
				</div>
				<div className="md:w-1/2 w-full">
					<h5 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
						Here are a few technologies I’ve been working with recently
					</h5>
					<div className="flex flex-wrap justify-center">
						<div className="p-2 w-1/2">
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0">
									<FaCode className="text-gray-800 dark:text-white p-2" />
								</div>
								<div className="ml-4">
									<h2 className="text-gray-900 dark:text-white title-font font-medium text-lg">
										HTML/CSS
									</h2>
								</div>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0">
									<FaCode className="text-gray-800 dark:text-white p-2" />
								</div>
								<div className="ml-4">
									<h2 className="text-gray-900 dark:text-white title-font font-medium text-lg">
										JavaScript
									</h2>
								</div>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0">
									<FaCode className="text-gray-800 dark:text-white p-2" />
								</div>
								<div className="ml-4">
									<h2 className="text-gray-900 dark:text-white title-font font-medium text-lg">
										React
									</h2>
								</div>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0">
									<FaCode className="text-gray-800 dark:text-white p-2" />
								</div>
								<div className="ml-4">
									<h2 className="text-gray-900 dark:text-white title-font font-medium text-lg">
										Node.js
									</h2>
								</div>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0">
									<FaCode className="text-gray-800 dark:text-white p-2" />
								</div>
								<div className="ml-4">
									<h2 className="text-gray-900 dark:text-white title-font font-medium text-lg">
										Python
									</h2>
								</div>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0">
									<FaCode className="text-gray-800 dark:text-white p-2" />
								</div>
								<div className="ml-4">
									<h2 className="text-gray-900 dark:text-white title-font font-medium text-lg">
										Java
									</h2>
								</div>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0">
									<FaCode className="text-gray-800 dark:text-white p-2" />
								</div>
								<div className="ml-4">
									<h2 className="text-gray-900 dark:text-white title-font font-medium text-lg">
										SQL
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
