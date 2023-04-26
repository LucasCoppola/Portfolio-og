import React from 'react'
import About from './components/About'
import Landing from './components/Landing'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

const App = () => {
	return (
		<main className="text-gray-400 bg-gray-900 body-font">
			<Navbar />
			<Landing />
			<About />
			<Projects />
			<Contact />
		</main>
	)
}

export default App
