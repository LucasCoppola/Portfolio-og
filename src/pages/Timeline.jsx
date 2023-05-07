import React from 'react'
import Basics from './timeline-components/Basics'
import Udemy from './timeline-components/Udemy'
import ReactTailwind from './timeline-components/ReactTailwind'

const Timeline = () => {
	return (
		<section className="py-16 pt-40">
			<div className="container mx-auto">
				<h2 className="mb-16 text-center text-3xl font-bold">My Web Development Journey</h2>
				<Basics />
				<Udemy />
				<ReactTailwind />
			</div>
		</section>
	)
}

export default Timeline
