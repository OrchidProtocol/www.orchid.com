module.exports = {
	presets: [
	],
	plugins: [
		"@babel/plugin-syntax-jsx",
		["i18next-extract", {
			defaultNS: 'common',
			nsSeparator: ':',
		}],
	]
}