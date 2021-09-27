import React from 'react'
import { Helmet } from 'react-helmet'
import config from '../utils/config';

import { css } from '@emotion/react'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common';
import PodcastHero from '../components/common/PodcastHero';

const { buildTimestampUTC } = require('../utils/currentTimestamp');

const podcastRoll = ({ data, pageContext }) => {
	const posts = data.allPosts.edges

	for (let index = posts.length - 1; index >= 0; index--) {
		const element = posts[index];
		if (element.node.frontmatter.date > buildTimestampUTC) {
			posts.splice(index, 1)
		}
	}

	let currentPost = 0;

	const postElements = [];
	for (let index = 0; index < posts.length; index++) {
		// The tag below includes the markup for each post - components/common/PostCard.js
		postElements.push(<PostCard number={currentPost++} key={index} keyIndex={index} post={posts[index].node} />);
	}

	return (
		<>
			<Helmet>
				<title>{config.title}</title>
				<meta name="description" content="Your VPN should be secure, which is why Orchid is building with open source tools for custom VPN configurations and privacy services." />

				<meta property="og:image" content={config.feature_image} />
				<meta property="og:image:width" content="1688" />
				<meta property="og:image:height" content="950" />
				<meta name="twitter:image" content={config.feature_image} />
				<meta name="twitter:card" content="summary_large_image" />


				<script type="application/ld+json">{`
					{
						"@context": "https://schema.org/",
						"@type": "podcast",
						"name": "${config.title}",
						"url": "${config.siteUrl}",
						"image": {
								"@type": "ImageObject",
								"url": "${config.siteUrl}${config.feature_image}",
								"width": "${config.feature_image_width}",
								"height": "${config.feature_image_height}"
							},
						"publisher": {
							"@type": "Organization",
							"name": "${config.title}",
							"logo": {
								"@type": "ImageObject",
								"url": "${config.siteUrl}${config.logo}",
								"width": ${config.logoWidth},
								"height": ${config.logoHeight}
							}
						},
						"mainEntityOfPage": {
							"@type": "WebPage",
							"@id": "${config.siteUrl}"
						},
						"description": "${config.description}"
					}
				`}</script>

				<script>
					{`
						if ('serviceWorker' in window.navigator) {
							window.navigator.serviceWorker.getRegistrations().then((registrations) => {
								for(let registration of registrations) {
									registration.unregister();
								}
							}).catch((err) => {
								console.log('Service Worker registration failed: ', err);
							});
						}
					`}
				</script>

			</Helmet>
			<Layout>
				<PodcastHero />
				<div className="container" css={css`
					margin: 2rem 0;
                `}>
					{postElements}
					<Pagination pageContext={pageContext} />
				</div>
			</Layout>
		</>
	)
}

export default podcastRoll

export const podcastRollQuery = graphql`
    query podcastRollPaginatedQuery($buildTimestampUTC: Float, $skip: Int!, $limit: Int!) {
        allPosts: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { 
                frontmatter: { 
                    templateKey: {
                        eq: "podcast-episode"
                    },
                    date: { lt: $buildTimestampUTC },
                    public: {
                        eq: true
                    }
                }
            }
            skip: $skip
            limit: $limit
            ) {
            edges {
                node {
                    excerpt(pruneLength: 300)
                    html
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
    }
`