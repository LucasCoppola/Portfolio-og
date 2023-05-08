import React from 'react'
import { FaRegCircle } from 'react-icons/fa'

const Timeline = () => {
	return (
		<section className="py-16 pt-40">
			<div className="container mx-auto">
				<h2 className="mb-16 text-center text-3xl font-bold">My Web Development Journey</h2>
				<div className="mx-auto max-w-4xl">
					<ul className="relative">
						<li className="mb-16">
							<div className="mb-4 flex items-start">
								<div className="z-10 flex h-6 w-6 items-center justify-center">
									<FaRegCircle />
								</div>
								<div className="ml-4 flex-1 font-medium">
									<div className="flex items-start justify-between">
										<h3 className="text-xl font-bold">Human Centered Design 101</h3>
										<div className="text-right font-bold text-gray-500">2017 - 2018</div>
									</div>
								</div>
							</div>
							<div className="ml-14">
								<div className="font-medium">
									This is an intensive, hands-on learning experience that will challenge you to get
									out of your chair and out into the real world to talk to people and test your ideas.
									You’ll leave this experience equipped and energized to apply the human-centered
									design process to challenges across industries, sectors, and geographies to generate
									breakthrough ideas.
								</div>
							</div>
						</li>
						<li className="mb-16">
							<div className="mb-4 flex items-start">
								<div className="z-10 flex h-6 w-6 items-center justify-center">
									<FaRegCircle />
								</div>
								<div className="ml-4 flex-1 font-medium">
									<div className="flex items-start justify-between">
										<h3 className="text-xl font-bold">Human Centered Design 101</h3>
										<div className="text-right font-bold text-gray-500">2017 - 2018</div>
									</div>
								</div>
							</div>
							<div className="ml-14">
								<div className="font-medium">
									This is an intensive, hands-on learning experience that will challenge you to get
									out of your chair and out into the real world to talk to people and test your ideas.
									You’ll leave this experience equipped and energized to apply the human-centered
									design process to challenges across industries, sectors, and geographies to generate
									breakthrough ideas.
								</div>
							</div>
						</li>
						<li className="mb-16">
							<div className="mb-4 flex items-start">
								<div className="z-10 flex h-6 w-6 items-center justify-center">
									<FaRegCircle />
								</div>
								<div className="ml-4 flex-1 font-medium">
									<div className="flex items-start justify-between">
										<h3 className="text-xl font-bold">Human Centered Design 101</h3>
										<div className="text-right font-bold text-gray-500">2017 - 2018</div>
									</div>
								</div>
							</div>
							<div className="ml-14">
								<div className="font-medium">
									This is an intensive, hands-on learning experience that will challenge you to get
									out of your chair and out into the real world to talk to people and test your ideas.
									You’ll leave this experience equipped and energized to apply the human-centered
									design process to challenges across industries, sectors, and geographies to generate
									breakthrough ideas.
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
