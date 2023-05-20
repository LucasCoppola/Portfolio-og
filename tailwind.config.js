/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}', './src/components/**/*.{html,js,jsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px'
		},
		extend: {
			colors: {
				'custom-color': '#BEC3CB'
			}
		}
	},
	plugins: []
}
