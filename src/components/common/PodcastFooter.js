import React from 'react'
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const PodcastButton = styled.a`
	background: black;
	border: 2px solid #8C8C8C;
	max-width: 10rem;
	width: 100%;
	padding: 0.5rem 0.5rem;
	border-radius: 0.5rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 0.5rem;
	text-decoration: none;
	& > img {
		width: 1.75rem;
	}
	& > div {
		text-align: left;
		margin-left: 0.5rem;
		&:before {
			font-size: 0.5rem;
			content: 'Listen on';
			color: #8C8C8C;
			display: inline-block;
			width: 100%;
			font-weight: normal;
		}
		line-height: 1.25;
		font-size: 0.75rem;
		font-weight: bold;
		color: white;
	}
`;

const PodcastFooter = () => {
	return (
		<div css={css`
			background: #f3f4f9;
		`} id="subscribe">
			<section css={css`
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				padding: 4rem;
				max-width: 72rem;
			`}>
				<div css={css`
					width: 100%;
					text-align: center;
					margin-bottom: 2rem;
				`}>
					<h2>
						Tune in on your favorite platforms
					</h2>
				</div>
				<PodcastButton href="https://podcasts.apple.com/us/podcast/follow-the-white-rabbit/id1516705670">
					<img src="/img/podcast/platforms/apple-podcast.svg" alt="Apple Podcast" />
					<div>
						Apple Podcasts
					</div>
				</PodcastButton>
				<PodcastButton href="https://open.spotify.com/show/4QxpmHume4QaIWV5i893d4?si=Hw6yyqbJQV6GmTvOBSJryg">
					<img src="/img/podcast/platforms/spotify.svg" alt="spotify" />
					<div>
						Spotify
					</div>
				</PodcastButton>
				<PodcastButton href="https://podcasts.google.com/feed/aHR0cHM6Ly9mb2xsb3d0aGV3aGl0ZXJhYmJpdC5saWJzeW4uY29tL3Jzcw">
					<img src="/img/podcast/platforms/google-podcast.svg" alt="google-podcast" />
					<div>
						Google Podcasts
					</div>
				</PodcastButton>
				<PodcastButton href="https://www.stitcher.com/podcast/follow-the-white-rabbit">
					<img src="/img/podcast/platforms/stitcher.svg" alt="stitcher" />
					<div>
						Stitcher
					</div>
				</PodcastButton>
				<PodcastButton href="https://castbox.fm/ch/2954358">
					<img src="/img/podcast/platforms/castbox.svg" alt="castbox" />
					<div>
						Castbox
					</div>
				</PodcastButton>
				<PodcastButton href="https://deezer.com/show/1331022">
					<img src="/img/podcast/platforms/deezer.svg" alt="deezer" />
					<div>
						Deezer
					</div>
				</PodcastButton>
				<PodcastButton
					href="https://tunein.com/podcasts/Technology-Podcasts/Follow-the-White-Rabbit-p1330281/">
					<img src="/img/podcast/platforms/tunein.svg" alt="tunein" />
					<div>
						Tunein
					</div>
				</PodcastButton>
				<PodcastButton href="https://followthewhiterabbit.libsyn.com/rss">
					<img src="/img/podcast/platforms/rss.svg" alt="rss" />
					<div>
						RSS
					</div>
				</PodcastButton>
			</section>
		</div>
	)
}


export default PodcastFooter
