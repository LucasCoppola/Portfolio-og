import React from 'react'
import { FaRegCircle } from 'react-icons/fa'

const Timeline = () => {
	return (
		<section className="pb-16 pt-40">
			<div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
				<h2 className="mb-16 text-center text-3xl font-bold">My Web Development Journey</h2>
				<div className="mx-auto max-w-4xl">
					<ul className="relative">
						{/* HTML, CSS and Javascript */}
						<li className="mb-12">
							<div className="mb-4 flex items-start">
								<div className="z-10 flex h-6 w-6 items-center justify-center">
									<FaRegCircle />
								</div>
								<div className="ml-4 flex-1 font-medium">
									<div className="flex items-center justify-between">
										<h3 className="text-lg font-bold md:text-xl">HTML, CSS and Javascript</h3>
										<div className="text-right text-xs font-bold md:text-base">2022</div>
									</div>
								</div>
							</div>
							<div className="ml-14">
								<div className="text-xs font-medium md:text-base">
									I learned HTML, CSS, and JavaScript through project-based learning. I worked on several projects to build my skills and gain
									experience with web development. In addition, I took a course on{' '}
									<a href="https://scrimba.com/learn/learnjavascript" target="_blank" className="text-green-300">
										Scrimba
									</a>{' '}
									that really helped me understand JavaScript and how to use it effectively in my projects.
									<br />
									<br />
									You can check out the code for the projects I built on my{' '}
									<a href="https://github.com/LucasCoppola" target="_blank" className="text-green-300">
										Github
									</a>
									.
								</div>
							</div>
						</li>

						{/* Udemy Bootcamp*/}
						<li className="mb-16">
							<div className="mb-4 flex items-start">
								<div className="z-10 flex h-6 w-6 items-center justify-center">
									<FaRegCircle />
								</div>
								<div className="ml-4 flex-1 font-medium">
									<div className="flex items-center justify-between">
										<h3 className="text-lg font-bold md:text-xl">
											<a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">
												The Web Developer Bootcamp.{' '}
											</a>
											<small>
												Udemy
												<small />
											</small>
										</h3>
										<div className="text-right text-xs font-bold md:text-base">2022 - 2023</div>
									</div>
								</div>
							</div>
							<div className="ml-14">
								<div className="text-xs font-medium md:text-base">
									After learning the basics of web development, I felt the need for a structured course to further my knowledge. I found{' '}
									<a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" className="text-green-300">
										The Web Developer Bootcamp
									</a>{' '}
									on Udemy, which not only provided the structure I was looking for, but also helped me understand how to build a full-stack
									application. This course covered a wide range of topics, from HTML, CSS, and JavaScript to Node.js, Express.js, MongoDB, and
									RESTful APIs, and gave me practical experience with each of these technologies.
									<br />
									<br />
									Overall, it was a great learning experience and helped me develop my skills as a web developer.
								</div>
							</div>
						</li>

						{/* React */}
						<li className="mb-16">
							<div className="mb-4 flex items-start">
								<div className="z-10 flex h-6 w-6 items-center justify-center">
									<FaRegCircle />
								</div>
								<div className="ml-4 flex-1 font-medium">
									<div className="flex items-center justify-between ">
										<h3 className="text-lg font-bold md:text-xl">React</h3>
										<div className="text-right text-xs font-bold md:text-base">2023</div>
									</div>
								</div>
							</div>
							<div className="ml-14">
								<div className="text-xs font-medium md:text-base">
									I started learning React with a basic course on{' '}
									<a href="https://scrimba.com/learn/learnreact" target="_blank" className="text-green-300">
										Scrimba
									</a>
									, then continued building several React projects to improve my skills. The code for these projects is available on my{' '}
									<a href="https://github.com/LucasCoppola" target="_blank" className="text-green-300">
										Github,{' '}
									</a>
									including this portfolio.
									<br />
									<br />I enjoy working with React, so I decided to take a more advanced course on{' '}
									<a href="https://scrimba.com/learn/react" target="_blank" className="text-green-300">
										Scrimba
									</a>{' '}
									to learn more about building complex web applications with React. This course provided me with a deeper understanding of
									React's advanced concepts and best practices.
								</div>
							</div>
						</li>

						{/* Data Structures and algorithms  */}
						<li className="mb-16">
							<div className="mb-4 flex items-start">
								<div className="z-10 flex h-6 w-6 items-center justify-center">
									<FaRegCircle />
								</div>
								<div className="ml-4 flex-1 font-medium">
									<div className="flex items-start justify-between">
										<h3 className="text-lg font-bold md:text-xl">Data Structures and Algorithms</h3>
										<div className="text-right text-xs font-bold  md:text-base">Currently</div>
									</div>
								</div>
							</div>
							<div className="ml-14">
								<div className="text-xs font-medium md:text-base">
									I have been taking{' '}
									<a href="https://frontendmasters.com/courses/algorithms/" target="_blank" className="text-green-300">
										The Last Algorithms Course You'll Need
									</a>{' '}
									on Frontend Masters to improve my understanding of data structures and algorithms. After trying other courses, I found this
									one to be the most comprehensive and easy to follow. I am applying what I learn from the course by practicing coding
									challenges to reinforce my knowledge and skills.
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Timeline
