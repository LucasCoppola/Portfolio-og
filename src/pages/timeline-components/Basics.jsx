import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si'

const Section1 = () => {
	return (
		<>
			<h3 className="mb-8 text-center text-2xl font-bold ">The Basics</h3>
			<div className="flex flex-wrap justify-center lg:flex-row">
				<div className="m-4 flex flex-col items-center">
					<div className="mb-4 rounded-full bg-gray-700 p-4">
						<SiHtml5 className="text-white" size={40} />
					</div>
					<h3 className="mb-2 text-lg font-medium">HTML</h3>
					<p className="hidden text-center text-sm text-gray-500 lg:block">
						Markup language used to create
						<br />
						the structure and content of web pages.
					</p>
				</div>
				<div className="m-4 flex flex-col items-center">
					<div className="mb-4 rounded-full bg-gray-700 p-4">
						<SiCss3 className="text-white" size={40} />
					</div>
					<h3 className="mb-2 text-lg font-medium">CSS</h3>
					<p className="hidden text-center text-sm text-gray-500 lg:block">
						Styling language used to add
						<br />
						design and layout to web pages.
					</p>
				</div>
				<div className="m-4 flex flex-col items-center">
					<div className="mb-4 rounded-full bg-gray-700 p-4">
						<SiJavascript className="text-white" size={40} />
					</div>
					<h3 className="mb-2 text-lg font-medium">JavaScript</h3>
					<p className="hidden text-center text-sm text-gray-500 lg:block">
						Programming language used to create
						<br />
						dynamic and interactive web pages.
					</p>
				</div>
			</div>
			{/* Projects / Images */}
			<div className="mt-10 flex flex-wrap justify-center lg:mr-6">
				<div className="relative m-4 ">
					<img src="../../html-css-js/wheater-app.png" alt="Project 1" className="max-h-48 rounded-lg" />
					<div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-80 px-4 py-2 text-white opacity-0 transition duration-300 hover:opacity-100">
						<a
							href="https://github.com/LucasCoppola/WeatherApp"
							target="_blank"
							className="float-right mt-1 text-base"
						>
							<FaGithub />
						</a>
						<p className="text-lg font-medium">Weather App</p>
						<p className="text-sm">
							A simple weather app that displays current weather conditions using an API.
						</p>
					</div>
				</div>

				<div className="relative m-4 ">
					<img src="../../html-css-js/rock-paper-sc.png" alt="Project 2" className="max-h-48 rounded-lg" />
					<div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-80 px-4 py-2 text-white opacity-0 transition duration-300 hover:opacity-100">
						<a
							href="https://github.com/LucasCoppola/Rock-Paper-Scissors"
							target="_blank"
							className="float-right mt-1 text-base"
						>
							<FaGithub />
						</a>
						<p className="text-lg font-medium">Rock Paper Scissors Game</p>
						<p className="text-sm">
							A simple game that lets you play Rock Paper Scissors against the computer.
						</p>
					</div>
				</div>
				<div className="relative m-4 ">
					<img src="../../html-css-js/notes.png" alt="Project 3" className="max-h-48 rounded-lg" />
					<div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-80 px-4 py-2 text-white opacity-0 transition duration-300 hover:opacity-100">
						<a
							href="https://github.com/LucasCoppola/Note-Tracker"
							target="_blank"
							className="float-right mt-1 text-base"
						>
							<FaGithub />
						</a>
						<p className="text-lg font-medium">Notes App</p>
						<p className="text-sm">A simple notes app that lets you create, edit, and delete notes.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Section1
