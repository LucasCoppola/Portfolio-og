import React from 'react'
import About from './components/About'
import Landing from './components/Landing'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
	return (
		<main className="body-font bg-gray-900 text-gray-400">
			<Navbar />
			<Landing />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</main>
	)
}

export default App
