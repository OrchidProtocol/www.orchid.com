import React from 'react'
import config from '../utils/config';

import { css } from '@emotion/react'
import { graphql } from 'gatsby'

import Layout from '../components/common/Layout';
import PostCard from '../components/common/PostCard';
import Pagination from '../components/common/Pagination';
import PodcastHero from '../components/common/PodcastHero';
import PodcastFooter from '../components/common/PodcastFooter';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';

const { buildTimestampUTC } = require('../utils/currentTimestamp');

const podcastRoll = ({ data, pageContext, location, t }) => {
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
			<WebsiteMeta
				title={config.title}
				description="Orchid Podcast - Listen Now"
				image={config.feature_image}
				location={location}
			/>
			<Layout t={t ? t : (string) => { return string }}>
				<PodcastHero />
				<div className="container" css={css`
					margin: 2rem 0;
                `}>
					{postElements}
					<Pagination pageContext={pageContext} />
				</div>
				<PodcastFooter />
			</Layout>
		</>
	)
}

export default podcastRoll

export const podcastRollQuery = graphql`
    query podcastRollPaginatedQuery($buildTimestampUTC: Float, $skip: Int!, $limit: Int!, $language: String!) {
		locales: allLocale(filter: {language: {eq: $language}}) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
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