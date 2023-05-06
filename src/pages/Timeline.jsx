import React from 'react'
import { SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si'
const Timeline = () => {
	return (
		<section className=" py-16 pt-40">
			<div className="container mx-auto">
				<h2 className="mb-16 text-center text-3xl font-bold">My Web Development Journey</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div className="flex flex-col items-center">
						<div className="mb-4 rounded-full bg-gray-700 p-4">
							<SiHtml5 className="text-white" size={40} />
						</div>
						<h3 className="mb-2 text-lg font-medium">HTML5</h3>
						<p className="text-center text-sm text-gray-500">
							Markup language used to create the structure and content of web pages.
						</p>
					</div>
					<div className="flex flex-col items-center">
						<div className="mb-4 rounded-full bg-gray-700 p-4">
							<SiCss3 className="text-white" size={40} />
						</div>
						<h3 className="mb-2 text-lg font-medium">CSS3</h3>
						<p className="text-center text-sm text-gray-500">
							Styling language used to add design and layout to web pages.
						</p>
					</div>
					<div className="flex flex-col items-center">
						<div className="mb-4 rounded-full bg-gray-700 p-4">
							<SiJavascript className="text-white" size={40} />
						</div>
						<h3 className="mb-2 text-lg font-medium">JavaScript</h3>
						<p className="text-center text-sm text-gray-500">
							Programming language used to create dynamic and interactive web pages.
						</p>
					</div>
				</div>
				<div className="mr-6 mt-10 flex flex-wrap justify-center">
					<div className="relative m-4">
						<img
							src="../../public/html-css-js/wheater-app.png"
							alt="Project 1"
							className="max-h-48 rounded-lg"
						/>
						<div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-80 px-4 py-2 text-white opacity-0 transition duration-300 hover:opacity-100">
							<p className="text-lg font-medium">Weather App</p>
							<p className="text-sm">
								A simple weather app that displays current weather conditions using an API.
							</p>
						</div>
					</div>
					<div className="relative m-4">
						<img
							src="../../public/html-css-js/rock-paper-sc.png"
							alt="Project 2"
							className="max-h-48 rounded-lg"
						/>
						<div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-80 px-4 py-2 text-white opacity-0 transition duration-300 hover:opacity-100">
							<p className="text-lg font-medium">Rock Paper Scissors Game</p>
							<p className="text-sm">
								A simple game that lets you play Rock Paper Scissors against the computer.
							</p>
						</div>
					</div>
					<div className="relative m-4">
						<img src="../../public/html-css-js/notes.png" alt="Project 3" className="max-h-48 rounded-lg" />
						<div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-80 px-4 py-2 text-white opacity-0 transition duration-300 hover:opacity-100">
							<p className="text-lg font-medium">Notes App</p>
							<p className="text-sm">A simple notes app that lets you create, edit, and delete notes.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Timeline
