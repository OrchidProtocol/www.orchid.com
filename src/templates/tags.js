import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/common/Layout'
import PostCard from '../components/common/PostCard'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/core'
import config from '../utils/config';

class TagRoute extends React.Component {
	render() {
		const posts = this.props.data.allMarkdownRemark.edges
		const postLinks = posts.map(({ node }) => (
			// The tag below includes the markup for each post - components/common/PostCard.js
			<PostCard key={node.slug} post={node} />
		))
		const tag = this.props.pageContext.tag
		//const title = config.title
		//const totalCount = this.props.data.allMarkdownRemark.totalCount
		/*const tagHeader = `${totalCount} post${
			totalCount === 1 ? '' : 's'
			} tagged with “${tag}”`*/

		return (
			<Layout customText={tag}>

				<Helmet>
					<title>{tag} - Orchid</title>
					<meta name="description" content={config.description} />
					
					<meta property="og:image" content={config.feature_image} />
					<meta property="og:image:width" content="1688" />
					<meta property="og:image:height" content="950" />
					<meta name="twitter:image" content={config.feature_image} />
					<meta name="twitter:card" content="summary_large_image" />
				</Helmet>
				<div className="container" css={css`
					position: relative;
					z-index: 1;
				`}>
					<div css={css`
						display: grid;
						justify-content: space-between;
						grid-gap: 30px;
						grid-template-columns: 1fr 1fr 1fr;
						@media (max-width: 980px) {
							grid-template-columns: 1fr 1fr;
						}
						@media (max-width: 680px) {
							grid-template-columns: 1fr;
						}
					`}>{postLinks}</div>
				</div>
			</Layout >
		)
	}
}

export default TagRoute

export const tagPageQuery = graphql`
query TagPage($tag: String, $buildTimestampUTC: Float) {
	site {
		siteMetadata {
			title
		}
	}
	allMarkdownRemark(
		limit: 1000
		sort: { fields: [frontmatter___date], order: DESC }
		filter: { 
			frontmatter: { 
				tags: { in: [$tag] }, 
				public: { eq: true },
				date: { lt: $buildTimestampUTC }
			} 
		}
	) {
		totalCount
		edges {
			node {
				fields {
					slug
				}
				frontmatter {
					url
					title
					tags
					description
					templateKey
					date
					featuredpost
					featuredimage {
						publicURL
					}
				}
			}
		}
	}
}
`
