import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors }
	} = useForm()
	const onSubmit = async (e) => {
		const isValid = await trigger()
		if (!isValid) {
			e.preventDefault()
		}
	}

	return (
		<section id="contact" className="px-4 pb-12 pt-20">
			<div className="container mx-auto">
				<div className="mx-auto mb-10 max-w-md">
					<h2 className="mb-6 text-center text-3xl font-bold">Contact</h2>
					<p className="text-center text-gray-400">
						Get in touch or shoot me an email directly at{' '}
						<span className="text-green-300">lukicoppola@gmail.com</span>
					</p>
				</div>
				<div className="mx-auto max-w-md">
					<form
						action="https://formsubmit.co/6dd7975fb11f839145a3587c0ee35723"
						method="post"
						onSubmit={onSubmit}
					>
						<div className="mb-4">
							<label htmlFor="name" className="mb-2 block font-medium text-gray-400">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="John Doe"
								className="form-input w-full rounded-md bg-gray-800 px-4 py-2 text-gray-400"
								{...register('name', { required: true, maxLength: 80 })}
							/>
							{errors.name && (
								<p className="text-sm text-red-500">
									{errors.name.type === 'required' && 'Name is required'}
									{errors.name.type === 'maxLength' && 'Name must be less than 80 characters'}
								</p>
							)}
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="mb-2 block font-medium text-gray-400">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="johndoe@example.com"
								className="form-input w-full rounded-md bg-gray-800 px-4 py-2 text-gray-400"
								{...register('email', { required: true, min: 4, maxLength: 64, pattern: /^\S+@\S+$/i })}
							/>
							{errors.email && (
								<p className="text-sm text-red-500">
									{errors.email.type === 'required' && 'Email is required'}
									{errors.email.type === 'pattern' && 'Invalid email address'}
								</p>
							)}
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="mb-2 block font-medium text-gray-400">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								placeholder="Type your message here"
								className="form-textarea w-full rounded-md border-gray-300 bg-gray-800 px-4 py-2 text-gray-400"
								{...register('message', { required: true, maxLength: 320 })}
							></textarea>
							{errors.message && (
								<p className="text-sm text-red-500">
									{errors.message.type === 'required' && 'Message is required'}
									{errors.message.type === 'maxLength' && 'Message must be less than 320 characters'}
								</p>
							)}
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
