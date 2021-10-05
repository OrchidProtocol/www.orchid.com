import React from 'react'
import { Helmet } from 'react-helmet'

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 4rem;
	max-width: 1200px;
	margin: auto;
	flex-direction: row;

	@media (max-width: 1200px) {
		padding: 4rem 2rem;
		flex-direction: column;
	}
`;

const Button = styled.a`
	border: 2px solid #FFFFFF;
	color: white;
	border-radius: 1rem;
	padding: 0.35rem 2.5rem;
	box-sizing: box-border;
	text-decoration: none;

	&[color="purple"] {
		border-color: var(--purple);
		background: var(--purple);
	}
`;

const BarContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0;
	& > * {
		margin: 0;
	}
	&:after {
		content: "";
		flex: 1;
		height: 3px;
		background-color: #FFFFFF;
		margin-left: 1rem;
	}
`;

const PreviousSpeakerRow = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	text-align: center;
	max-width: 100%;
	color: var(--teal);
	width: 730px;
	margin: auto;
	@media (max-width: 1200px) {
		justify-content: center;
		& > div {
			margin: auto;
		}
	}
	& > div {
		max-width: 12rem;
		& > img {
			width: 100%;
			height: auto;
		}
	}

	&[data-size="small"] {
		width: 500px;
		& > div {
			max-width: 8rem;
		}
	}
`;

const Page = () => (
	<div css={css`
		--purple: #EB53E2;
		--teal: #60EBFF;

		@font-face {
			font-family: 'BonvenoCF';
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url('/fonts/BonvenoCF/BonvenoCF-Light.otf');
		}

		/* latin-ext */
		@font-face {
			font-family: 'Maven Pro';
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url(/fonts/MavenPro/7Au9p_AqnyWWAxW2Wk3Gw2QIAFg.woff2) format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}
		/* latin */
		@font-face {
			font-family: 'Maven Pro';
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url(/fonts/MavenPro/7Au9p_AqnyWWAxW2Wk3GzWQI.woff2) format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}
		/* latin-ext */
		@font-face {
			font-family: 'Maven Pro';
			font-style: normal;
			font-weight: 500;
			font-display: swap;
			src: url(/fonts/MavenPro/7Au9p_AqnyWWAxW2Wk3Gw2QIAFg.woff2) format('woff2');
			unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}
		/* latin */
		@font-face {
			font-family: 'Maven Pro';
			font-style: normal;
			font-weight: 500;
			font-display: swap;
			src: url(/fonts/MavenPro/7Au9p_AqnyWWAxW2Wk3GzWQI.woff2) format('woff2');
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		font-family: 'Maven Pro', sans-serif;

		background: #000000;
		color: #FFFFFF;
		min-height: 100vh;

		h1, h2, h3, h4, h1:not(.secondary), h2:not(.secondary), h3:not(.secondary), h4:not(.secondary) {
			font-family: 'Maven Pro', sans-serif;
			color: white;
		}

		h2, h2:not(.secondary) {
			font-family: 'BonvenoCF', sans-serif;
		}

		p {
			margin: 1rem 0;
		}

		hr {
			border-color: var(--purple);
		}

		img {
			max-width: 100%;
		}

		a {
			color: var(--purple);
		}
	`}>
		<Helmet>
			<title>Priv8 | Orchid</title>
			<meta name="description" content="Join us for an in-depth discussion on the state of privacy in today’s world with the foremost experts, policymakers, and builders." />
			<meta name="og:image" content="https://orchid.com/img/priv8/priv8_social.png" />
			<body className="webinar-page" />
		</Helmet>
		<div css={css`
			position: absolute;
			width: 100%;
		`}>
			<div css={css`
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 1rem;
				max-width: 1440px;
				margin: auto;
			`}>
				<a className="inline-block" href="/">
					<img css={css`
						@media (max-width: 760px) {
							display: none;
						}
					`} width="93" height="24" src="/img/shared/orchid-logo-text-white.svg" alt="Home" className="no-mb" />
					<img css={css`
						display: none;
						@media (max-width: 760px) {
							display: block;
						}
					`} width="35" height="30" src="/img/shared/orchid-logo-small-white.svg" alt="Home" className="mb" />
				</a>
				<div css={css`
					a {
						text-decoration: none;
						color: #FFFFFF;
						margin: 0 1rem;
						font-weight: 500;
					}
					
					@media (max-width: 1200px) {
						display: none;
					}
				`}>
					<a href="#calendar">
						ADD TO CALENDAR
					</a>
					<a href="/contact">
						CONTACT
					</a>
					<Button href="#register">
						Register
					</Button>
				</div>
			</div>
		</div>

		<div css={css`
			background: black;
			background: linear-gradient(212.29deg, #000000 24.75%, #3B146A 93.66%);
			padding-top: 4rem; /*Making space for the navbar*/
		`}>
			<Container>
				<div css={css`
					max-width: 600px;
				`}>
					<img src="/img/priv8/priv8-logo.svg" width="480" height="197" alt="Priv8 Online" />
					<BarContainer css={css`max-width: 480px;`}>
						<h3 css={css`font-size: 28px;`}>NOV 15, 2021</h3>
					</BarContainer>
					<p>
						Priv8 is the premier global forum dedicated to the future of digital privacy. <a href="/">Orchid</a> and <a href="https://handshake.org/">Handshake</a> have brought together a world-class group of experts and advocates from various business, government, academic, and nonprofit spheres to explore key issues around this important topic.
					</p>
					<p>
						<Button href="#register" color="purple">Register</Button>
					</p>
				</div>
				<div css={css`
					img {
						width: 535px;
						height: auto;
						max-width: 100%;
					}
				`}>
					<picture>
						<source srcSet="/img/priv8/speaker-highlight.avif" type="image/avif" />
						<source srcSet="/img/priv8/speaker-highlight.webp" type="image/webp" />
						<img src="/img/priv8/speaker-highlight.png" width="1070" height="1457" alt="Featuring Keynote Speaker Glenn Greenwald" />
					</picture>
				</div>
			</Container>
		</div>

		<div css={css`
			position: relative;
			background: var(--purple);
			text-align: right;
			color: #000000;
			h2, h2:not(.secondary) {
				color: #000000;
			}

			&:before, &:after {
				background: var(--teal);
				height: 2px;
				width: 40%;
				content: "";
				position: absolute;
				right: 0;
				top: 4rem;
			}
			&:after {
				top: unset;
				width: 60%;
				bottom: 4rem;
			}
			@media (max-width: 1200px) {
				&:after {
					bottom: 2rem;
				}
				&:before {
					top: 2rem;
				}
			}
		`}>
			<Container>
				<div css={css`
					transform: translateY(5.5rem);
					@media (max-width: 1200px) {
						display: none;
					}
				`}>
					<img src="/img/priv8/section-shapes.svg" width="385" height="687" alt="" />
				</div>
				<div css={css`
					padding: 4rem 0;
					@media (max-width: 1200px) {
						padding: 0;
					}
					flex-grow: 1;
				`}>
					<h2>THE FUTURE OF PRIVACY</h2>
					<div css={css`
						max-width: 640px;
						margin-left: auto;
					`}>
						<p>
							Corporations and governments continue to test the limits of individual privacy, while powerful technology companies hold greater sway over global commerce, public policy, and media narratives than ever before.
						</p>
						<p>
							Priv8 brings together leading thinkers across a series of keynotes and panels covering a full spectrum of privacy-related topics. Speakers will discuss issues including the rising tide of financial surveillance, privacy in public policy, corporate control over individual information, and tension between individual rights and public health.
						</p>
						<div css={css`
							a {
								margin: 0 0.5rem;
							}
							img {
								width: 2rem;
								height: auto;
							}
						`}>
							<a href="">
								<img src="/img/shared/social-twitter-white.svg" width="30" height="30" alt="Share on Twitter" />
							</a>
							<a href="">
								<img src="/img/shared/social-telegram-white.svg" width="30" height="30" alt="Share on Telegram" />
							</a>
							<a href="">
								<img src="/img/shared/social-facebook-white.svg" width="30" height="30" alt="Share on Facebook" />
							</a>
						</div>
					</div>

					<div css={css`
						display: none;
						position: relative;
						@media (max-width: 1200px) {
							display: flex;
							justify-content: space-between;
						}
						img {
							position: absolute;
							top: -3rem;
							width: 5rem;
							height: auto;
						}
					`}>
						<img src="/img/priv8/section-shapes.svg" width="385" height="687" alt="" />
					</div>
				</div>
			</Container>
		</div>

		<div css={css`
			background: #000000;
		`}>
			<Container>
				<div css={css`
					width: 430px;
					max-width: 100%;
				`}>
					<h2>PREVIOUSLY @ PRIV8</h2>
					<p>
						The first Priv8 Virtual Privacy Summit took place in March 2021. That event featured renowned whistleblower Edward Snowden, who left the audience with this exhortation: “Don’t stay safe, stay free.” He was joined by Taiwan’s Audrey Tang and the Electronic Frontier Foundation’s Cindy Cohn, among many others. Read the <a href="https://blog.orchid.com/highlights-from-priv8-orchids-virtual-privacy-summit/">full recap</a> or <a href="https://www.youtube.com/watch?v=Y_mm01n4T9c&list=PLKT-Ti431yd5vlZkMV3cvOnxBeLl1w0jp">rewatch the live stream.</a>
					</p>
				</div>
				<div css={css`
					width: 100%;
				`}>
					<PreviousSpeakerRow data-size="big">
						<div>
							<img src="/img/priv8/previous/Snowden.png" width="488" height="488" alt="Edward Snowden" />
							<p>Edward Snowden</p>
						</div>
						<div>
							<img src="/img/priv8/previous/Audrey.png" width="488" height="488" alt="Audrey Tang" />
							<p>Audrey Tang</p>
						</div>
						<div>
							<img src="/img/priv8/previous/Zooko.png" width="488" height="488" alt="Zooko Wilcox" />
							<p>Zooko Wilcox</p>
						</div>
					</PreviousSpeakerRow>
					<PreviousSpeakerRow data-size="small">
						<div>
							<img src="/img/priv8/previous/Cindy.png" width="286" height="286" alt="Cindy Cohn" />
							<p>Cindy Cohn</p>
						</div>
						<div>
							<img src="/img/priv8/previous/Vinay.png" width="286" height="286" alt="Vinay Gupta" />
							<p>Vinay Gupta</p>
						</div>
						<div>
							<img src="/img/priv8/previous/Brian.png" width="286" height="286" alt="Brian Behlendorf" />
							<p>Brian Behlendorf</p>
						</div>
					</PreviousSpeakerRow>
				</div>
			</Container>
			<Container>
				<div css={css`
					text-align: center;
					max-width: 100%;
					width: 960px;
				`}>
					<hr />
				</div>
			</Container>
			<Container>
				<div css={css`
					text-align: center;
					max-width: 960px;
				`}>
					<p>
						If you are interested in attending as a member of the media, or for any other inquiries, please contact <a href="mailto:priv8@orchid.com">priv8@orchid.com</a>
					</p>
				</div>
			</Container>
			<Container>
				<div>
					<p>
						<Button href="#register" color="purple">Register</Button>
					</p>
				</div>
			</Container>
			<Container>
				<div>
					<p>© {new Date().getFullYear()} Orchid Labs, Inc.</p>
				</div>
			</Container>
		</div>

	</div>
)

export default Page
