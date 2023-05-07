import React from 'react'
import Basics from './timeline-components/Basics'
import Udemy from './timeline-components/Udemy'
import ReactTailwind from './timeline-components/ReactTailwind'

const Timeline = () => {
	return (
		<section className="py-16 pt-40">
			<Basics />
			<Udemy />
			<ReactTailwind />
		</section>
	)
}

export default Timeline
