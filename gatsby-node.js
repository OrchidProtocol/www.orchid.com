const _ = require('lodash')
const path = require('path')
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem')

const { buildTimestampUTC } = require('./src/utils/currentTimestamp');


const locales = require('./locales.js');
const localesNSContent = {};
for (let index = 0; index < locales.array.length; index++) {
	const locale = locales.array[index];
	localesNSContent[locale] = [
		{
			content: fs.readFileSync(`src/locales/${locale}/translation.json`, "utf8"),
			ns: "common"
		}
	];
}


exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	return graphql(`
    {
		allMarkdownRemark(
			limit: 1000,
			filter: {
				frontmatter: {
					templateKey: {
						eq: "podcast-episode"
					},
					public: { eq: true }, 
					date: { lt: ${buildTimestampUTC} } 
				}
			}) {
			edges {
				node {
					id
					frontmatter {
						url
						title
						description
						templateKey
						date
						featuredimage
						platformurls
					}
				}
			}
		}
    }`).then(result => {
		if (result.errors) {
			result.errors.forEach(e => console.error(e.toString()))
			return Promise.reject(result.errors)
		}

		const posts = result.data.allMarkdownRemark.edges

		posts.forEach(edge => {
			const id = edge.node.id
			createPage({
				path: edge.node.frontmatter.url,
				component: path.resolve(
					`src/templates/${String(edge.node.frontmatter.templateKey)}.js`
				),
				// additional data can be passed via context
				context: {
					id,
					buildTimestampUTC,
				},
			})
		})

		// Create podcast post list pages
		const postsPerPage = 10;
		const numPages = Math.ceil(posts.length / postsPerPage);

		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/podcast` : `/podcast/${i + 1}`,
				component: path.resolve('./src/templates/PodcastRollPaginated.js'),
				context: {
					buildTimestampUTC,
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1
				},
			});
		});
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}