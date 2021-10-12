
require("dotenv").config({
	path: `.env.production`,
})


module.exports = {
	siteMetadata: {
		title: 'Orchid',
		description:
			'Your VPN should be secure, which is why Orchid is building with open source tools for custom VPN configurations and privacy services.',
		siteUrl: (process.env.TARGET_LANG === "en" || !process.env.TARGET_LANG) ? 'https://orchid.com/' : `https://${process.env.TARGET_LANG}.orchid.com/`,
	},
	plugins: [
		`gatsby-plugin-catch-links`,
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-force-trailing-slashes`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				sassOptions: {
					includePaths: ["src/scss"],
				}
			},
		},
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images',
			},
		},
		`gatsby-plugin-emotion`,
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-advanced-sitemap`,
			options: {
				query: ``,
				mapping: {
				},
				exclude: [
					`/dev-404-page`,
					`/404`,
					`/offline-plugin-app-shell-fallback`,
				],
				createLinkInHead: true,
				addUncaughtPages: true,
			},
		},

		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
}
