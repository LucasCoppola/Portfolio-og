import React from 'react'
import {
	SiNodedotjs,
	SiMongodb,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiBootstrap,
	SiProtonmail,
	SiExpress
} from 'react-icons/si'
import { FaCogs } from 'react-icons/fa'
import { HiOutlineCode } from 'react-icons/hi'

const Udemy = () => {
	return (
		<div className="rounded-lg p-6 pt-40 text-center shadow-lg">
			<h2 className="mb-4 text-3xl font-bold">The Web Developer Bootcamp</h2>
			<p className="mb-4 text-lg">
				I learned so much in this course and had the opportunity to work with some amazing technologies:
			</p>
			<div className="mb-8 flex flex-wrap justify-center">
				<div className="w-1/4 text-center">
					<SiHtml5 className="mx-auto mb-2 text-5xl" />
					<h3 className="mb-2 text-lg font-medium">HTML5</h3>
				</div>
				<div className="w-1/4 text-center">
					<SiCss3 className="mx-auto mb-2 text-5xl" />
					<h3 className="mb-2 text-lg font-medium">CSS3</h3>
				</div>
				<div className="w-1/4 text-center">
					<SiJavascript className="mx-auto mb-2 text-5xl" />
					<h3 className="mb-2 text-lg font-medium">JavaScript</h3>
				</div>
				<div className="w-1/4 text-center">
					<SiBootstrap className="mx-auto mb-2 text-5xl" />
					<h3 className="mb-2 text-lg font-medium">Bootstrap</h3>
				</div>
				<div className="w-1/4 text-center">
					<SiNodedotjs className="mx-auto mb-2 text-5xl" />
					<h3 className="mb-2 text-lg font-medium">Node.js</h3>
				</div>
				<div className="w-1/4 text-center">
					<SiExpress className="mx-auto mb-2 text-5xl" />
					<h3 className="mb-2 text-lg font-medium">Express.js</h3>
				</div>
				<div className="w-1/4 text-center">
					<SiMongodb className="mx-auto mb-2 text-5xl" />
					<h3 className="mb-2 text-lg font-medium">MongoDB</h3>
				</div>
				<div className="w-1/4 text-center">
					<FaCogs className="mx-auto mb-2 text-5xl" />
					<h3 className="mb-2 text-lg font-medium">Mongoose / RESTful Routing and APIs</h3>
				</div>
				<div className="w-1/4 text-center">
					<HiOutlineCode className="mx-auto mb-2 text-5xl" />
					<h3 className="mb-2 text-lg font-medium ">Ejs</h3>
				</div>
				<div className="w-1/4 text-center">
					<SiProtonmail className="mx-auto mb-2 text-5xl" />
					<h3 className="mb-2 text-lg font-medium">Authentication & Security</h3>
				</div>
			</div>

			<h3 className="mb-4 text-2xl font-medium">Projects</h3>
			<div className="grid grid-cols-2 gap-6">
				<img
					title="Project 1"
					imageSrc="https://via.placeholder.com/350x200"
					description="This is the description of project 
 1."
				/>
				<img
					title="Project 2"
					imageSrc="https://via.placeholder.com/350x200"
					description="This is the description of project 2."
				/>
			</div>
		</div>
	)
}

export default Udemy
