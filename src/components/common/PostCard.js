import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Link } from 'gatsby'

import { getCustomFormatedDate } from '../../utils/date';

const PButton = styled.a`
	background: black;
	border: 2px solid #8c8c8c;
	max-width: 5rem;
	min-height: 1.5rem;
	width: auto;
	padding: 0.5rem 0.5rem;
	border-radius: 0.5rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 0.5rem;
	& > img {
		width: 1.5rem;
	}
	text-decoration: none;

	&[href=""] {
		display: none !important;
	}
	&.big {
		width: 100%;
	}
`;
const PButtonText = styled.div`
	text-align: left;
	margin-left: 0.5rem;
	line-height: 1.25;
	font-size: 0.6rem;
	font-weight: bold;
	color: white;
	display: none;
	&.big {
		display: block;
	}
`;

const PostCard = ({ post, keyIndex }) => {
	const url = `/${post.frontmatter.url}/`

	let title = post.frontmatter.title,
		description = post.frontmatter.description;

	let featuredimage = post.frontmatter.featuredimage;

	const platformButtons = [];
	for (let index = 0; index < post.frontmatter.platformurls.length; index++) {
		const link = post.frontmatter.platformurls[index];
		if (link) {
			const platform = link.split('/')[2];

			let platformImage = '';
			let platformName = '';
			switch (platform) {
				case 'podcasts.apple.com':
					platformImage = '/img/podcast/platforms/apple-podcast.svg';
					platformName = 'Apple Podcasts';
					break;
				case 'open.spotify.com':
					platformImage = '/img/podcast/platforms/spotify.svg';
					platformName = 'Spotify';
					break;
				case 'podcasts.google.com':
					platformImage = '/img/podcast/platforms/google-podcast.svg';
					platformName = 'Google Podcasts';
					break;
				case 'www.stitcher.com':
					platformImage = '/img/podcast/platforms/stitcher.svg';
					platformName = 'Stitcher';
					break;
				case 'castbox.fm':
					platformImage = '/img/podcast/platforms/castbox.svg';
					platformName = 'Castbox';
					break;
				case 'www.deezer.com':
					platformImage = '/img/podcast/platforms/deezer.svg';
					platformName = 'Deezer';
					break;
				case 'www.podbean.com':
					platformImage = '/img/podcast/platforms/podbean.svg';
					platformName = 'Podbean';
					break;
				case 'tunein.com':
					platformImage = '/img/podcast/platforms/tunein.svg';
					platformName = 'TuneIn';
					break;
				default:
					platformImage = '/img/podcast/platforms/generic.svg';
			}

			platformButtons.push(
				<PButton className={keyIndex === 0 ? 'big' : 'small'} href={link} key={index}>
					<img src={platformImage} alt="" />
					<PButtonText className={keyIndex === 0 ? 'big' : 'small'}>{platformName}</PButtonText>
				</PButton>
			);
		}
	}

	return (
		<div to={url} css={css`
			margin: 4rem auto;
			max-width: 1100px;
			width: 95%;
        `}>
			<div css={css`
				display: grid;
				grid: auto-flow dense / 250px 1fr;
				&.big {
					grid: auto-flow dense / 500px 1fr;
				}
			`} className={keyIndex === 0 ? 'big' : 'small'}>
				<div css={css`
					display: flex;
					justify-content: center;
					align-items: flex-start;
					@media (max-width: 1100px) {
						max-width: 75%;
						margin: auto;
					}
				`}>
					<div css={css`
						padding: 50%;
						border-radius: 1rem;
						background-position: center;
						background-size: cover;
						background-repeat: no-repeat;
						background-color: $orc-beige-light;
						background-image: url(${featuredimage});
					`} />
				</div>
				<div css={css`
					box-sizing: border-box;
					padding: 1rem 0 0 0;
					@media (min-width: 1100px) {
						padding: 0 2rem;
					}
				`}>
					<div css={css`
						font-weight: var(--font-bold);
						margin: var(--margin-half) 0;
					`}>
						{getCustomFormatedDate(post.frontmatter.date)}
					</div>

					<div css={css`
                        text-decoration: none;
						font-weight: 700;
                    `}>
					</div>
					<Link to={url}>
						<h3 css={css`
							font-size: 2em;
							color: $orc-rock-gray;
							margin: 1rem 0;
						`}>{title}</h3>
					</Link>

					<section css={css`
						text-decoration: none;
						font-weight: 700;
					`}>{description}</section>

					<div css={css`
						margin-top: 1rem;
						display: flex;
						flex-wrap: wrap;
						justify-content: flex-start;
					`}>
						{platformButtons}
					</div>
				</div>
			</div>
		</div>
	)
}


export default PostCard
