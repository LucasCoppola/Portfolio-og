import React from 'react'

const Contact = () => {
	return (
		<section className="px-4 pb-24 pt-20">
			<div className="container mx-auto">
				<div className="mx-auto mb-10 max-w-md">
					<h2 className="mb-6 text-center text-3xl font-bold">Contact</h2>
					<p className="text-center text-gray-400">
						Get in touch or shoot me an email directly on lucascoppola21@gmail.com
					</p>
				</div>
				<div className="mx-auto max-w-md">
					<form action="#" method="POST">
						<div className="mb-4">
							<label htmlFor="name" className="mb-2 block font-medium text-gray-400">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="form-input w-full rounded-md border-gray-300 bg-gray-800 px-4 py-2 text-gray-400"
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="mb-2 block font-medium text-gray-400">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="form-input w-full rounded-md  bg-gray-800 px-4 py-2 text-gray-400"
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="mb-2 block font-medium text-gray-400">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows="5"
								className="form-textarea w-full rounded-md border-gray-300 bg-gray-800 px-4 py-2 text-gray-400"
								required
							></textarea>
						</div>
						<div className="mb-4">
							<button
								type="submit"
								className="dark:shadow-base mb-2 mr-2 w-full transform rounded-lg bg-green-600 bg-gradient-to-r px-6 py-3 text-center text-lg font-medium  text-white shadow-lg shadow-green-500/50 transition duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-green-800/80 dark:focus:ring-green-800"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
