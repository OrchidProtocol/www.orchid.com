import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard } from '../components/common';
import PodcastHero from '../components/common/PodcastHero';
import PodcastFooter from '../components/common/PodcastFooter';

import { generateDescription } from '../utils/generateDescription';


const PodcastEpisode = (props) => {
	const { markdownRemark: post } = props.data;

	generateDescription(post);

	if (post.frontmatter.featuredimage && typeof post.frontmatter.featuredimage !== 'string') {
		let ftImage = post.frontmatter.featuredimage;
		post.frontmatter.featuredimage = ftImage.publicURL;
	}


	return (
		<Layout>
			<PodcastHero />
			<PostCard post={post} key={0} keyIndex={0} />
			<PodcastFooter />
		</Layout>
	)
}

PodcastEpisode.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
}

export default PodcastEpisode

export const staticQuery = graphql`
	query PodcastEpisodeByID($id: String!, $buildTimestampUTC: Float) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date
				featuredimage
				title
				description
				url
				platformurls
			}
		}
		
		allMarkdownRemark(
			limit: 150
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { 
				frontmatter: { 
					public: { eq: true },
					date: { lt: $buildTimestampUTC } 
				} 
			}
		) {
			edges {
				node {
					frontmatter {
						date
						featuredimage
						title
						description
						url
						platformurls
					}
				}
			}
		}
	}
`
