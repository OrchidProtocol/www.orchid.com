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
`;

const Page = () => (
	<div css={css`
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
	`}>
		<Helmet>
			<title>Priv8 | Orchid</title>
			<meta name="description" content="Join us for an in-depth discussion on the state of privacy in today’s world with the foremost experts, policymakers, and builders." />
			<meta name="og:image" content="https://orchid.com/img/priv8/priv8_social.png" />
			<body className="webinar-page" />
		</Helmet>
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
			`}>
				<a href="#calendar">
					ADD TO CALENDAR
				</a>
				<a href="/contact">
					CONTACT
				</a>
				<a href="#register" css={css`
					border: 2px solid #FFFFFF;
					border-radius: 1rem;
					padding: 0.35rem 2.5rem;
					box-sizing: box-border;
				`}>
					Register
				</a>
			</div>
		</div>

		<div css={css`
			background: black;
		`}>
			<Container>
				<div>
					<img src="/img/priv8/priv8-logo.svg" width="480" height="197" alt="Priv8 Online" />
					<h3>NOV 15, 2021</h3>
					<p>Priv8 is the premier global forum dedicated to the future of digital privacy. Orchid and Handshake have brought together a world-class group of experts and advocates from various business, government, academic, and nonprofit spheres to explore key issues around this important topic.</p>
				</div>
				<div>
					<p>
						Featuring:
						Firstname Lastname
						Dr. Speaker F. Longtitle
						Stagetalker McMicrophone
					</p>
				</div>
			</Container>
		</div>

		<div css={css`
			background: #EB53E2;
			color: #000000;
		`}>
			<Container>
				<div>
					<img src="/img/priv8/section-shapes.svg" width="385" height="687" alt="" />
				</div>
				<div>
					<h2>THE FUTURE OF PRIVACY</h2>
					<p>
						Corporations and governments continue to test the limits of individual privacy, while powerful technology companies hold greater sway over global commerce, public policy, and media narratives than ever before.
					</p>
					<p>
						Priv8 brings together leading thinkers across a series of keynotes and panels covering a full spectrum of privacy-related topics. Speakers will discuss issues including the rising tide of financial surveillance, privacy in public policy, corporate control over individual information, and tension between individual rights and public health.
					</p>
				</div>
			</Container>
		</div>

		<div css={css`
			background: #000000;
		`}>
			<Container>
				<div>
					<h2>PREVIOUSLY @ PRIV8</h2>
					<p>
						The first Priv8 Virtual Privacy Summit took place in March 2021. That event featured renowned whistleblower Edward Snowden, who left the audience with this exhortation: “Don’t stay safe, stay free.” He was joined by Taiwan’s Audrey Tang and the Electronic Frontier Foundation’s Cindy Cohn, among many others. Read the full recap or rewatch the live stream here.
					</p>
				</div>
			</Container>
			<Container>
				<div>
					<hr />
					<p>If you are interested in attending as a member of the media, or for any other inquiries, please contact priv8@orchid.com</p>
					<a href="#register">Register</a>
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
