import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby-plugin-react-i18next';

const PodcastHero = () => {
	return (
		<div css={css`
			position: relative;
			background-image: url("/img/podcast/HeroBG.jpg");
			background-size: cover;
			background-position: center;
			color: white;
		
			& > section {
				position: relative;
		
				@media (min-width: 1100px) {
					padding-top: 3rem;
					padding-bottom: 3rem;
				}
		
				@media (max-width: 1100px) {
					padding: 1rem;
				}
			}
		`}>
			<div css={css`
				position: absolute;
				bottom: 0;
				left: 0;
				z-index: 999;
				width: 20%;
				max-width: 300px;
			`}>
				<Link to="/podcast#subscribe">
					<img css={css`
						display: block;
						width: 100%;
						height: auto;
						@media (max-width: 1100px) {
							display: none;
						}
					`} src="/img/podcast/listen-now.svg" width="259" height="126" alt="Listen Now" />
				</Link>
			</div>
			<section className="section-wide hpad-wide vpad-xl z-index-1">
				<div css={css`
					display: flex;
					flex-direction: column-reverse;
					align-items: center;
					position: relative;
					margin: auto;
					width: 100%;
					height: 100%;
					max-width: 1200px;
					@media (min-width: 1100px) {
						flex-direction: row;
						justify-content: center;
					}
				`}>
					<div className="podcast-hero__text center-text">
						<img src="/img/podcast/priv8-hero-badge.svg" width="150" height="150" alt="The Priv8 Podcast with Derek E. Silva" css={css`
							display: inline-block;
							max-width: 100%;
							width: 300px;
							margin-right: 5.65vw;
							box-shadow: 0px 0px 50px rgba(0,0,0,0.75);
							border-radius: 100%;
						`} />
					</div>
				</div>
			</section>
			<div css={css`
				position: absolute;
				bottom: 0;
				right: 0;
				width: 20%;
				max-width: 300px;
				& > img {
					width: 100%;
					position: absolute;
					bottom: 0;
					right: 0;
				}
			`}>
				<img src="/img/podcast/presented-by.svg" width="222" height="133" alt="Presented by Orchid" />
			</div>
		</div>
	)
}


export default PodcastHero
