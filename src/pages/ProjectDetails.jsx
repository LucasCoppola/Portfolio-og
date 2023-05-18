import React from 'react'
import { projects } from '../data'
import { FaGithub, FiExternalLink } from 'react-icons/all'

const ProjectDetail = () => {
	const project = projects[0]
	return (
		<div className="flex flex-col items-center justify-center px-4 pb-4 pt-36  lg:flex-row lg:px-20 lg:pb-20">
			<div className="lg:w-1/2 lg:pr-10">
				<h2 className="mb-6 text-2xl font-bold lg:text-4xl">{project.title}</h2>
				<img src={project.images[0]} alt={project.title} className="mb-6 h-64 rounded-lg object-cover lg:hidden" />
				<div className="mb-4 text-sm">
					<p>
						Designed and developed a CRUD web application for companies to store and manage their products. The application provides user
						registration and login, allowing users to create, edit, and delete products and associated images. The application provides a clean and
						intuitive user interface, making it easy for users to manage their product inventory.
						<br />
						<br />
						This application is for companies that need to manage inventory, track product information, or share product information with team
						members.
						<br />
						<br />
						Please keep in mind that this application is hosted for free, which may result in slower loading times.
						<span className="hidden md:block">
							If you'd like to try it out, I have set up a demo account that you can use to test it out. Here are the login details:
							<br />
							<br />
							Username: <b>demo</b>, Password: <b>demo</b>
							<br />
							<br />
							Please note that this demo account is for testing purposes only. It is not intended for long-term use or for storing any personal or
							sensitive information. If you have any feedback or suggestions for the project, I would love to hear them.
						</span>
					</p>
				</div>
				<div className="mt-4">
					<h3 className="mb-2 text-lg font-bold">Technologies</h3>
					<div className="flex flex-wrap">
						{project.technologies.map((tech) => (
							<p key={tech} className="mb-2 mr-2 inline-block rounded-full pr-4 pt-1 text-2xl text-white">
								{tech}
							</p>
						))}
					</div>
				</div>
				<div className="mt-4 flex items-center">
					<a href={project.repo} target="_blank" title="Github" rel="noopener noreferrer" className="mr-4 font-bold text-white hover:text-green-300">
						<FaGithub className="transform  text-3xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" />
					</a>
					<a
						href={project.link}
						target="_blank"
						title="Website Link"
						rel="noopener noreferrer"
						className="transform rounded px-4 py-2 font-bold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-green-300"
					>
						<FiExternalLink className="text-3xl" />
					</a>
				</div>
			</div>
			<div className="hidden lg:block lg:w-1/2">
				<div className="ml-10 max-w-md">
					<img src={project.images[0]} alt={project.title} className="mb-4 h-64 rounded-lg object-cover" />
					<img src={project.images[1]} alt={project.title} className="my-4 h-64 rounded-lg object-cover" />
				</div>
			</div>
		</div>
	)
}

export default ProjectDetail
