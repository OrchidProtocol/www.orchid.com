
require("dotenv").config({
	path: `.env.production`,
})


module.exports = {
	siteMetadata: {
		title: 'Orchid',
		description:
			'Your VPN should be secure, which is why Orchid is building with open source tools for custom VPN configurations and privacy services.',
		siteUrl: `https://www.orchid.com/`,
	},
	plugins: [
		`gatsby-plugin-preact`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`, `avif`],
					placeholder: `dominantColor`,
					quality: 80,
					breakpoints: [750, 1080, 1366, 1920],
					backgroundColor: `transparent`,
					tracedSVGOptions: {
						color: '#5f45ba',
					},
					blurredOptions: {},
					jpgOptions: {},
					pngOptions: {},
					webpOptions: {},
					avifOptions: {},
				}
			}
		},
		`gatsby-plugin-catch-links`,
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-force-trailing-slashes`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				sassOptions: {
					includePaths: ["src/scss"],
				},
				postCssPlugins: [
					require("tailwindcss"),
					require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
				],
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/locales`,
				name: `locale`
			}
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
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				languages: ['en', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'pt', 'pt-BR', 'ru', 'tr', 'zh'],
				defaultLanguage: 'en',
				defaultNS: 'common',
				siteUrl: 'https://www.orchid.com/',
				i18nextOptions: {
					lowerCaseLng: true,
					interpolation: {
						escapeValue: false
					},
					keySeparator: false,
					nsSeparator: false
				}
			}
		},
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				// printRejected: true, // Print removed selectors and processed file names
				// develop: true, // Enable while using `gatsby develop`
				tailwind: true, // Enable tailwindcss support
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
				// purgeCSSOptions: {
				// https://purgecss.com/configuration.html#options
				// safelist: ['safelist'], // Don't remove this selector
				// },
				// More options defined here https://purgecss.com/configuration.html#options
			},
		},
	],
}
