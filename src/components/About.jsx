import React from 'react'
import { skillsData } from '../data'

const About = () => {
	return (
		<section id="about" className="md:px-10 lg:p-16">
			<div className="container mx-auto flex flex-col  px-4">
				<h1 className="mb-10 text-center text-3xl font-bold sm:text-4xl md:text-center lg:text-left">
					About Me
				</h1>
				<div className="flex w-full flex-col md:flex-row md:justify-between">
					<div className="mb-10 md:mb-0 md:w-1/2 md:pr-16">
						<p className="text-center text-base leading-relaxed  dark:text-gray-400 md:text-left">
							Hi! My name is Lucas and I'm a web developer based in Argentina. With a passion for web
							development, I specialize in JavaScript, React, and Express to create awesome web
							applications.
							<br />
							<br />
							Having experience in both front-end and back-end development, I find working on the logic
							side of things to be particularly rewarding. I always welcome to new challenges and strive
							to continuously learn and grow in my career.
							<br />
							<br />
							Throughout my experience, I've honed my skills to become proficient in developing web
							applications that are both functional and visually appealing.
							<br />
							<br />
							Thank you for taking the time to review my portfolio. I look forward to discussing any
							opportunities that may be a good fit.
						</p>
					</div>
					<div className="md:w-1/2">
						<h5 className="mb-6 text-center font-bold md:text-2xl">Skills & Technologies</h5>
						<div className="flex justify-around space-x-4	">
							{skillsData.map((item) => {
								return (
									<div className="w-1/3">
										<div className="mb-3 flex items-center rounded-lg bg-gray-200 px-4 py-2 dark:bg-gray-700">
											<h2 className="text-base font-medium text-gray-900 dark:text-white md:font-light">
												{item.type}
											</h2>
										</div>
										<ul className="mt-2 text-gray-700 dark:text-gray-300 lg:ml-4 ">
											{item.skills.map((skill) => {
												return (
													<li
														className=" mb-2 flex flex-row items-center justify-start"
														id="icon"
													>
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
