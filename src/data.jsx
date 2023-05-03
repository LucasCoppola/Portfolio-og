export const projects = [
	{
		title: 'Storage App',
		technologies: ['Ejs', 'Bootstrap', 'Express', 'Node.js', 'Mongoose', 'MongoDB'],
		description:
			'Designed and developed a CRUD web application for companies to store and manage their products. The application provides user registration and login, allowing users to create, edit, and delete products and associated images. The application provides a clean and intuitive user interface, making it easy for users to manage their product inventory.',
		image: './storage-app.png',
		link: 'https://storage-app-nmpn.onrender.com',
		repo: 'https://github.com/LucasCoppola/Storage-App',
		page: ''
	}
	// {
	// 	title: 'DevChat',
	// 	technologies: ['React', 'Express', 'Node.js', 'MongoDB'],
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
	// 	image: './project-3.gif',
	// 	link: 'https://reactbootcamp.com',
	// 	repo: '',
	// 	page: ''
	// }
]

export const skillsData = [
	{
		type: 'Frontend',
		skills: [
			{ name: 'HTML', icon: <i className="devicon-html5-plain colored"></i> },
			{ name: 'CSS', icon: <i className="devicon-css3-plain colored"></i> },
			{ name: 'JavaScript', icon: <i className="devicon-javascript-plain colored"></i> },
			{ name: 'React', icon: <i className="devicon-react-original colored"></i> },
			{ name: 'Bootstrap', icon: <i className="devicon-bootstrap-plain colored"></i> },
			{ name: 'Tailwind CSS', icon: <i className="devicon-tailwindcss-plain colored"></i> }
		]
	},
	{
		type: 'Backend',
		skills: [
			{ name: 'Node.js', icon: <i className="devicon-nodejs-plain colored"></i> },
			{ name: 'Express.js', icon: <i className="devicon-express-original "></i> },
			{ name: 'MongoDB', icon: <i className="devicon-mongodb-plain colored"></i> },
			{ name: 'Mongoose', icon: <i className="fa-solid fa-code text-sm"></i> }
		]
	},
	{
		type: 'Tools',
		skills: [
			{ name: 'Git', icon: <i className="devicon-git-plain colored"></i> },
			{ name: 'GitHub', icon: <i className="devicon-github-original"></i> },
			{ name: 'Npm', icon: <i className="devicon-npm-original-wordmark colored"></i> },
			{ name: 'VS Code', icon: <i className="devicon-vscode-plain colored"></i> }
		]
	}
]
