import React from 'react'
import { projects } from '../data'
import { FaGithub, FiExternalLink } from 'react-icons/all'

const ProjectDetail = () => {
	const project = projects[0]
	return (
		<div className="flex flex-col items-center justify-center px-20 pb-20 pt-36 lg:flex-row">
			<div className="mb-10 lg:mb-0 lg:w-1/2 lg:pr-10">
				<h2 className="mb-10 text-4xl font-bold">{project.title}</h2>
				<div className="mb-4 text-sm">
					<p>
						Designed and developed a CRUD web application for companies to store and manage their products.
						The application provides user registration and login, allowing users to create, edit, and delete
						products and associated images. The application provides a clean and intuitive user interface,
						making it easy for users to manage their product inventory.
						<br />
						<br />
						This application is for companies that need to manage inventory, track product information, or
						share product information with team members.
						<br />
						<br />
						Please keep in mind that this application is hosted for free, w hich may result in slower
						loading times. If you'd like to try it out, I have set up a demo account that you can use to
						test it out. Here are the login details:
						<br />
						<br />
						Username: <b>demo</b>, Password: <b>demo</b>
						<br />
						<br />
						Please note that this demo account is for testing purposes only. It is not intended for
						long-term use or for storing any personal or sensitive information. If you have any feedback or
						suggestions for the project, I would love to hear them.
					</p>
				</div>
				<div className="mt-10">
					<h3 className="mb-4 text-xl font-bold">Technologies</h3>
					<div className="flex flex-wrap">
						{project.technologies.map((tech) => (
							<p
								key={tech}
								className="mb-2 mr-2 inline-block rounded-full border border-gray-600 bg-gray-700 px-3 py-1 text-sm text-white"
							>
								{tech}
							</p>
						))}
					</div>
				</div>
				<div className="mt-8 flex items-center">
					<a
						href={project.repo}
						target="_blank"
						rel="noopener noreferrer"
						className="mr-4 font-bold text-white hover:text-green-300"
					>
						<FaGithub className="transform text-3xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" />
					</a>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="transform rounded px-4 py-2 font-bold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-green-300"
					>
						<FiExternalLink className="text-3xl" />
					</a>
				</div>
			</div>
			<div className=" lg:w-1/2">
				<div className="ml-10 max-w-md">
					<img src={project.images[0]} alt={project.title} className="mb-4 h-64 object-cover" />
					<img src={project.images[1]} alt={project.title} className="my-4 h-64 object-cover" />
				</div>
			</div>
		</div>
	)
}

export default ProjectDetail
