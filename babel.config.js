module.exports = {
	presets: [
	],
	plugins: [
		"@babel/plugin-syntax-jsx",
		["i18next-extract", {
			defaultNS: 'common',
			nsSeparator: false,
			keySeparator: false,
			customTransComponents: [
				['gatsby-plugin-react-i18next', 'Trans'],
			]
		}],
	]
}