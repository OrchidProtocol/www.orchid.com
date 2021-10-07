import React from 'react'
import { Helmet } from 'react-helmet'

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import NewsletterSignupCore from '../components/newsletter-signup-core';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 4rem;
	max-width: 1200px;
	margin: auto;
	flex-direction: row;

	@media (max-width: 1200px) {
		padding: 2rem 2rem;
		flex-direction: column;
	}
`;

const Button = styled.a`
	--height: 52px;
	--font: 20px;

	font-size: var(--font);
	border: 2px solid #FFFFFF;
	color: #000000;
	border-radius: var(--height);
	padding: 0 var(--height);
	line-height: var(--height);
	display: inline-block;
	vertical-align: middle;
	box-sizing: box-border;
	text-decoration: none;

	&[color="purple"] {
		border-color: var(--purple);
		background: var(--purple);
	}
	@media (max-width: 1200px) {
		--font: 18px;
		--height: 40px;
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
	& > div {
		max-width: 12rem;
		img {
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

	@media (max-width: 1200px) {
		font-size: 12px;
		justify-content: center;
		max-width: unset !important;
		width: calc(100% + 3rem) !important;
		margin: 1rem -1.5rem 0;
		& > div {
			justify-content: flex-start;
			margin: 0;
			max-width: 33%;
		}
		&[data-size="small"] {
			& > div {
				max-width: 28%;
			}
		}
	}
`;

const HeadlineSpeakerContainer = styled.div`
	&[data-role="mobile"] {
		display: none;
	}
	
	@media (max-width: 1200px) {
		display: none;
		
		&[data-role="mobile"] {
			display: block;
		}
	}

	position: relative;
	width: 535px;
	max-width: 100%;
	text-align: center;
	color: var(--teal);
	font-size: 16px;
	& > p {
		margin: 0;
	}
	& > b {
		font-size: 21px;
	}

	margin: 1rem auto;
	@media (min-width: 1200px) {
		margin: auto;
		text-align: right;
	}

	& > picture {
		padding: 25% 0;
		display: block;
		background-image: url('/img/priv8/header-shapes.svg');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		& > img {
			width: 90%;
			height: auto;
			margin: auto;
			display: block;
		}
	}
	&[data-role="desktop"] {
		& > picture {
			padding: 30% 0;
			& > img {
				margin-top: -2rem;
				width: 90%;
			}
		}
	}
`;

const Speaker = (props) => {
	return (
		<HeadlineSpeakerContainer data-role={props.role}>
			<picture>
				<source srcSet="/img/priv8/Headliner.avif" type="image/avif" />
				<source srcSet="/img/priv8/Headliner.webp" type="image/webp" />
				<img src="/img/priv8/Headliner.png" width="1000" height="1000" alt="Featuring Keynote Speaker Glenn Greenwald" />
			</picture>
			<p>Featuring:</p>
			<p>Pulitzer-Prize winning journalist</p>
			<b>Glenn Greenwald</b>
		</HeadlineSpeakerContainer>
	);
}

const Page = () => (
	<div css={css`
		--purple: #EB53E2;
		--teal: #60EBFF;
		background: #000000;
		color: #FFFFFF;
		min-height: 100vh;
	`}>
		<Helmet>
			<title>Priv8 | Orchid</title>
			<meta name="description" content="Join us for an in-depth discussion on the state of privacy in today’s world with the foremost experts, policymakers, and builders." />
			<meta name="og:image" content="https://orchid.com/img/priv8/priv8_social.png" />
			<body className="priv8-page" />
			<style>{`
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

				body {
					margin: 0;
					width: 100%;
					font-family: 'Maven Pro', sans-serif;
				}

				h1, h2, h3, h4, h1:not(.secondary), h2:not(.secondary), h3:not(.secondary), h4:not(.secondary) {
					font-family: 'Maven Pro', sans-serif;
					color: white;
				}

				h2 {
					font-family: 'BonvenoCF', sans-serif !important;
					font-size: 60px !important;
				}
				@media (max-width: 1200px) {
					h2 {
						font-size: 30px !important;
					}
				}

				p {
					margin: 1rem 0;
				}

				hr {
					border-color: var(--purple);
					width: 90%;
				}

				img {
					max-width: 100%;
				}

				a {
					color: var(--purple);
				}
			`}</style>
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
				font-size: 16px;
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
					& > a, & > span {
						text-decoration: none;
						color: #FFFFFF;
						margin: 0 1rem;
						font-weight: 500;
						text-align: center;

						position: relative;
						&:hover > div {
							pointer-events: unset !important;
							opacity: 1;
							margin-top: 1rem;
						}
					}
					& > span {
						cursor: default;
					}
					.no-mb {
						@media (max-width: 760px) {
							display: none;
						}
					}
				`}>
					<span href="#calendar" className="no-mb">
						ADD TO CALENDAR
						<div css={css`
							transition: opacity 0.5s ease, margin-top 0.5s ease;
							pointer-events: none;
							position: absolute;
							top: 100%;
							left: 50%;
							opacity: 0;
							margion-top: -20%;
							width: 18rem;
							margin-left: -9rem;
							z-index: 999;

							&::before {
								content: '';
								position: absolute;
								top: -1rem;
								left: 0%;
								width: 100%;
								height: 1rem;
							}

							background: #3B146A;
							border-radius: 1rem;
							& > a {
								display: inline-block;
								margin: 0.5rem;
								color: #FFFFFF;
								text-decoration: none;
							}
						`}>
							<a href="/img/priv8/Priv8.ics">
								ICS (Apple/Outlook)
							</a>
							<a href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20211114T240000Z%2F20211115T240000Z&text=Priv8%20-%20virtual%20privacy%20conference&location=https%3A%2F%2Fwww.orchid.com%2Fpriv8%2F&details=Priv8%20is%20the%20premier%20global%20forum%20dedicated%20to%20the%20future%20of%20digital%20privacy.%20Orchid%20and%20Handshake%20have%20brought%20together%20a%20world-class%20group%20of%20experts%20and%20advocates%20from%20various%20business%2C%20government%2C%20academic%2C%20and%20nonprofit%20spheres%20to%20explore%20key%20issues%20around%20this%20important%20topic." target="_blank" rel="noopener noreferrer">
								Google Calendar
							</a>
						</div>
					</span>
					<a href="mailto:priv8@orchid.com" className="no-mb">
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
			<Container css={css`
				position: relative;
			`}>
				<div css={css`
					max-width: 100%;
					width: 680px;
					margin-right: 2rem;
					@media (max-width: 1200px) {
						margin: auto;
						text-align: center;
					}
					& > * {
						margin-left: auto;
						margin-right: auto;
					}
				`}>
					<img src="/img/priv8/priv8-logo.svg" width="480" height="197" alt="Priv8 Online" />
					<Speaker role="mobile" />
					<BarContainer css={css`
						max-width: 480px;
						@media (max-width: 1200px) {
							max-width: unset;
						}
						text-align: left;
					`}>
						<h3 css={css`font-size: 28px;`}>NOV 15, 2021</h3>
					</BarContainer>
					<p css={css`
						text-align: left;
					`}>
						Priv8 is the premier global forum dedicated to the future of digital privacy. <a href="/">Orchid</a> and <a href="https://handshake.org/">Handshake</a> have brought together a world-class group of experts and advocates from various business, government, academic, and nonprofit spheres to explore key issues around this important topic.
					</p>
					<p css={css`
						margin-top: 2rem;
						@media (max-width: 1200px) {
							text-align: center;
						}
					`}>
						<Button href="#register" color="purple">Register Now!</Button>
					</p>
				</div>

				<div css={css`
					color: var(--teal);
					position: absolute;
					bottom: 2rem;
					left: 50%;
					margin-left: -600px;
					font-size: 16px;
					img {
						line-height: 28px;
						vertical-align: middle;
					}
					span {
						margin: 0.5rem 1rem;
						display: inline-block;
					}
					
					@media (max-width: 1200px) {
						margin: 1rem auto;
						text-align: center;
						position: static;
					}
				`}>
					Presented by<br />
					<a href="/"><img src="/img/priv8/orchid-logo-teal.svg" width="110" height="28" alt="Orchid" /></a>
					<span>&amp;</span>
					<a href="https://handshake.org/"><img src="/img/priv8/handshake-logo-teal.svg" width="85" height="27" alt="Orchid" /></a>
				</div>

				<Speaker role="desktop" />
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
			<Container css={css`
				@media (max-width: 1200px) {
					padding: 4rem 2rem;
				}
			`}>
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
							margin-top: 2rem;
							a {
								margin: 1rem 0 1rem 1rem;
							}
							img {
								width: 3rem;
								height: auto;
							}
							@media (max-width: 1200px) {
								margin-top: 1rem;
								a {
									margin: 0 0.5rem;
								}
								img {
									width: 2rem;
								}
							}
						`}>
							<a href="https://twitter.com/OrchidProtocol">
								<img src="/img/shared/social-twitter-white.svg" width="30" height="30" alt="Share on Twitter" />
							</a>
							<a href="https://www.t.me/OrchidOfficial">
								<img src="/img/shared/social-telegram-white.svg" width="30" height="30" alt="Share on Telegram" />
							</a>
							<a href="https://www.facebook.com/OrchidProtocol">
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
			background: black;
			text-align: center;
		`} name="register" id="register">
			<Container>
				<div>
					<div css={css`
						@media (min-width: 1200px) {
							margin-top: 2rem;
						}
					`}>
						<h2>REGISTER</h2>
						<p>
							Get updates and viewing instructions for the conference.
							<br />
							And nothing else.
						</p>
					</div>
					<NewsletterSignupCore priv8={true} />
				</div>
			</Container>
		</div>
		<Container css={css`
			@media (max-width: 1200px) {
				padding: 0rem;
			}
		`}>
			<div css={css`
				text-align: center;
				max-width: 100%;
				width: 960px;
			`}>
				<hr />
			</div>
		</Container>

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
							<picture>
								<source srcSet="/img/priv8/previous/Snowden.avif" type="image/avif" />
								<source srcSet="/img/priv8/previous/Snowden.webp" type="image/webp" />
								<img src="/img/priv8/previous/Snowden.png" width="488" height="488" alt="Edward Snowden" />
							</picture>
							<p>Edward Snowden</p>
						</div>
						<div>
							<picture>
								<source srcSet="/img/priv8/previous/Audrey.avif" type="image/avif" />
								<source srcSet="/img/priv8/previous/Audrey.webp" type="image/webp" />
								<img src="/img/priv8/previous/Audrey.png" width="488" height="488" alt="Audrey Tang" />
							</picture>
							<p>Audrey Tang</p>
						</div>
						<div>
							<picture>
								<source srcSet="/img/priv8/previous/Zooko.avif" type="image/avif" />
								<source srcSet="/img/priv8/previous/Zooko.webp" type="image/webp" />
								<img src="/img/priv8/previous/Zooko.png" width="488" height="488" alt="Zooko Wilcox" />
							</picture>
							<p>Zooko Wilcox</p>
						</div>
					</PreviousSpeakerRow>
					<PreviousSpeakerRow data-size="small">
						<div>
							<picture>
								<source srcSet="/img/priv8/previous/Cindy.avif" type="image/avif" />
								<source srcSet="/img/priv8/previous/Cindy.webp" type="image/webp" />
								<img src="/img/priv8/previous/Cindy.png" width="286" height="286" alt="Cindy Cohn" />
							</picture>
							<p>Cindy Cohn</p>
						</div>
						<div>
							<picture>
								<source srcSet="/img/priv8/previous/Vinay.avif" type="image/avif" />
								<source srcSet="/img/priv8/previous/Vinay.webp" type="image/webp" />
								<img src="/img/priv8/previous/Vinay.png" width="286" height="286" alt="Vinay Gupta" />
							</picture>
							<p>Vinay Gupta</p>
						</div>
						<div>
							<picture>
								<source srcSet="/img/priv8/previous/Brian.avif" type="image/avif" />
								<source srcSet="/img/priv8/previous/Brian.webp" type="image/webp" />
								<img src="/img/priv8/previous/Brian.png" width="286" height="286" alt="Brian Behlendorf" />
							</picture>
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
						For any inquiries, please contact <a href="mailto:priv8@orchid.com">priv8@orchid.com</a>
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
