module.exports = {
	content: [
		'./src/**/*.{md,mdx,js,jsx,ts,tsx}',
	],
	theme: {
		screens: {
			'md': '870px',
			'lg': '1200px',
		},
		extend: {
			colors: {
				'gray': 'var(--orc-rock-gray)',
			},
		},
	},
	plugins: [],
}
