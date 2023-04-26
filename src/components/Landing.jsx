import React from 'react'

const Landing = () => {
	return (
		<section id="landing">
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-80 mx-8">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Hi, I'm Lucas.
						<br className="hidden lg:inline-block" />I Build Amazing Websites and Web Apps
					</h1>
					<p className="mb-8 leading-relaxed">
						I'm a web developer with a passion for building beautiful and functional websites. Contact me
						whether you're looking for a skilled developer to join your team or to bring your project to
						life.
					</p>
					<p className="mb-8 leading-relaxed">
						Check out some of my work in the{' '}
						<a href="#projects" className="text-green-300">
							Projects
						</a>{' '}
						section.
					</p>

					<a
						href="#contact"
						class="text-white bg-gradient-to-r bg-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-base dark:shadow-green-800/80  rounded-lg font-medium text-lg px-6 py-3 text-center mr-2 mb-2 transition duration-200 ease-in-out transform hover:-translate-y-0.5"
					>
						Let's Work Together
					</a>
				</div>
			</div>
		</section>
	)
}

export default Landing
