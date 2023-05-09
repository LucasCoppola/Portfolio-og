import React from 'react'
import { Link } from 'react-scroll'

const Landing = () => {
	return (
		<section id="landing">
			<div className="container mx-auto flex flex-col items-center  justify-center px-10 pb-20 pt-40 md:flex-row">
				<div className="mx-8 mb-16 flex w-80 flex-col items-center text-center md:mb-0 md:w-1/2 md:flex-grow md:items-start md:pr-16 md:text-left lg:pr-24">
					<h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
						Hi, I'm Lucas.
						<br />I Build Amazing Websites and Web Apps
					</h1>
					<p className="mb-8 leading-relaxed">
						I'm a web developer with a passion for building beautiful and functional websites. Contact me
						whether you're looking for a skilled developer to join your team or to bring your project to
						life.
					</p>
					<p className="mb-8 leading-relaxed">
						Check out some of my work in the{' '}
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className="cursor-pointer text-green-300"
						>
							Projects
						</Link>{' '}
						section.
					</p>

					<Link
						to="contact"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						className="dark:shadow-base mb-2 mr-2 transform cursor-pointer rounded-lg bg-green-600 bg-gradient-to-r px-6 py-3 text-center text-lg font-medium  text-white shadow-lg shadow-green-500/50 transition duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-green-800/80 dark:focus:ring-green-800"
					>
						Let's Work Together
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Landing
