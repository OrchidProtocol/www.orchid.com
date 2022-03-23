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
				'decoration': '--orc-green-transparent',
				'purple': {
					200: 'var(--orc-deep-purple)',
					DEFAULT: 'var(--orc-purple)',
					500: 'var(--orc-light-purple)',
					600: 'var(--orc-bright-purple)',
				},
			},
		},
	},
	plugins: [],
}
