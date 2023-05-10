import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data'

const Projects = () => {
	return (
		<section id="projects" className="body-font overflow-hidden text-gray-400">
			<div className="container mx-auto px-5 py-24">
				<div className="mb-10 flex w-full flex-wrap">
					<div className="mb-6 w-full lg:mb-0">
						<h1 className="text-center text-3xl font-bold sm:text-4xl md:mb-8">Projects</h1>
					</div>
				</div>
				<div className="flex flex-col items-center">
					{projects.map((project, i) => (
						<div
							key={i}
							className="mb-8 flex w-full flex-col justify-center overflow-hidden rounded-lg bg-gray-700 shadow-lg lg:w-2/3 lg:flex-row lg:flex-wrap"
						>
							<img src={project.images[0]} alt={project.title} className="h-auto  object-cover  lg:w-1/2" />
							<div className="bg-gray-800  p-6 lg:w-1/2">
								<h2 className="mb-4 text-3xl font-bold text-white">{project.title}</h2>
								<p className="mb-6 text-base text-gray-400">{project.description}</p>
								<div className="mb-6 flex flex-wrap">
									{project.technologies.map((tech, i) => (
										<p
											key={i}
											className="mb-2 mr-2 inline-block rounded-full border border-gray-600 bg-gray-700 px-3 py-1 text-sm text-white"
										>
											{tech}
										</p>
									))}
								</div>
								<div className="flex items-center justify-start">
									<a href={project.repo} target="_blank" rel="noopener noreferrer" className="mr-4 font-bold text-white hover:text-green-300">
										<FaGithub className="transform text-3xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" />
									</a>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="transform rounded  px-4 py-2 font-bold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-green-300"
									>
										<FiExternalLink className="text-3xl" />
									</a>
									<a
										href={project.page}
										rel="noopener noreferrer"
										className="dark:shadow-base ml-auto transform rounded-lg bg-green-600 bg-gradient-to-r px-4 py-2 text-lg font-medium text-white shadow-lg shadow-green-500/50 transition duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-green-800/80 dark:focus:ring-green-800"
									>
										Learn more
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
