import React from 'react'
import { skillsData } from '../data'

const About = () => {
	return (
		<section id="about" className="md:px-10 lg:px-20 lg:py-16">
			<div className="container mx-auto flex flex-col  px-4">
				<h1 className="mb-10 text-center text-3xl font-bold sm:text-4xl md:text-center lg:text-left">About Me</h1>
				<div className="flex w-full flex-col md:flex-row md:justify-between">
					<div className="mb-10 text-center md:w-1/2  md:pr-16 md:text-left">
						<p className="mb-8 text-center text-base leading-relaxed  dark:text-gray-400 md:text-left">
							Hi! My name is Lucas and I'm a web developer with a passion for web development. I have experience working with a variety of
							technologies, including JavaScript, React, Express, and more to create awesome web applications.
							<br />
							<br />
							With experience in both front-end and back-end development, I find working on the logical side of things to be particularly
							rewarding. I'm open to new challenges and aim to continuously learn and grow in my career.
							<br />
							<br />
							Thank you for taking the time to review my portfolio. I look forward to discussing any opportunities that may be a good fit.
						</p>
						<a
							href="/timeline"
							rel="noopener noreferrer"
							className="dark:shadow-base mb-2 mr-2 transform cursor-pointer rounded-lg bg-green-600 bg-gradient-to-r px-6 py-3 text-center text-lg font-medium  text-white shadow-lg shadow-green-500/50 transition duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-green-800/80 dark:focus:ring-green-800 "
						>
							More About Me
						</a>
					</div>
					<div className="mt-8 md:w-1/2">
						<h5 className="mb-6 text-center font-bold md:text-2xl">Skills & Technologies</h5>
						<div className="mb-8 flex justify-around space-x-4">
							{skillsData.map((item, i) => {
								return (
									<div key={i} className="w-1/3">
										<div className="mb-3 flex items-center rounded-lg bg-gray-200 px-4 py-2 dark:bg-gray-700">
											<h2 className="text-base font-medium text-gray-900 dark:text-white md:font-light">{item.type}</h2>
										</div>
										<ul className="mt-2 text-gray-700 dark:text-gray-300 lg:ml-4 ">
											{item.skills.map((skill, i) => {
												return (
													<li key={i} className=" mb-2 flex flex-row items-center justify-start" id="icon">
														{skill.icon}
														<label htmlFor="icon" className="ml-2 md:text-sm">
															{skill.name}
														</label>
													</li>
												)
											})}
										</ul>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
