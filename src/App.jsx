import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Landing from './components/Landing'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ProjectDetails from './pages/ProjectDetails'
import Timeline from './pages/Timeline'

const App = () => {
	return (
		<BrowserRouter>
			<main className="body-font bg-gray-900 text-custom-color">
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Landing />
								<About />
								<Projects />
								<Contact />
							</>
						}
					/>
					<Route path="/storage-app" element={<ProjectDetails />} />
					<Route path="/timeline" element={<Timeline />} />
				</Routes>
				<Footer />
			</main>
		</BrowserRouter>
	)
}

export default App
