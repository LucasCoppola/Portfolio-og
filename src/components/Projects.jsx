import React, { Fragment } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data'

const Projects = () => {
	return (
		<section id="projects" className="body-font overflow-hidden text-gray-400">
			<div className="container mx-auto px-5 py-24">
				<div className=" flex w-full flex-wrap">
					<div className="mb-6 w-full lg:mb-0">
						<h1 className="text-center text-3xl font-bold sm:text-4xl md:mb-8">Projects</h1>
					</div>
				</div>
				<section className="bg-gray-900">
					{projects.map((project, i) => (
						<div key={i} className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
							<img className="block w-full rounded-lg" src={project.images[0]} alt={project.title} />
							<div className="mt-4 md:mt-0">
								<h2 className="mb-4 text-2xl font-extrabold tracking-tight text-white">{project.title}</h2>
								<p className="mb-6 font-light text-gray-400 sm:text-xs lg:text-base">{project.description}</p>
								<div>
									{project.technologies.map((technology, i) => (
										<span key={i} className="inline-block rounded-full pb-3 pr-4 text-2xl text-white">
											{technology}
										</span>
									))}
								</div>
								<div className="flex items-center justify-start">
									<a
										href={project.repo}
										target="_blank"
										title="Github"
										rel="noopener noreferrer"
										className="mr-4 font-bold text-white hover:text-green-300"
									>
										<FaGithub className="transform text-3xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" />
									</a>
									<a
										href={project.link}
										target="_blank"
										title="Website Link"
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
				</section>
			</div>
		</section>
	)
}

export default Projects
