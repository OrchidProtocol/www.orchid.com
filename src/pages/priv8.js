import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image";

import NewsletterSignupCore from '../components/newsletter-signup-core';
import { Link } from 'gatsby';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';

const Embed = () => {
	const [showIframe, setShowIframe] = useState(false);

	return (<Container>
		<div css={css`width: 100%;`}>
			<h2 css={css`
				text-align: center;
			`}>
				<span css={css`
					width: 0.5em;
					height: 0.5em;
					display: inline-block;
					background: var(--purple);
					border-radius: 50%;
					position: relative;
					&:before {
						animation: pulse 4s infinite;
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background: var(--purple);
						border-radius: 50%;
					}
				`} /> LIVE NOW
			</h2>
			<div css={css`
				position: relative;
				padding: 30% 50%;
				margin-top: 1rem;
			`}>
				<a css={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: #3B146A;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 1rem;
				`} onClick={(e) => { e.preventDefault(); setShowIframe(true) }} href="https://www.youtube.com/watch?v=m6eqn72dqzs">
					<span css={css`
						color: white;
						text-decoration: none;
						text-align: center;
					`}>Click to load content from youtube.com</span>
				</a>
				{showIframe ? <iframe css={css`
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
				`} width="560" height="315" src="https://www.youtube.com/embed/m6eqn72dqzs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : <></>}
			</div>
		</div>
	</Container>);
}

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

const AddToCalendar = (props) => {
	return (<span css={css`
		position: relative;
		cursor: default;
		&.text-only {
			padding: 0 var(--height);
			display: block;
			margin: 0 calc(var(--height) * -1);
			& > .mb-only {
				display: none !important;
			}
			& > .no-mb {
				display: block !important;
			}
		}

		&:hover > div, &:focus-within > div, &:focus > div {
			pointer-events: unset !important;
			opacity: 1;
			margin-top: 1rem;
		}
	`} className={props.className}>
		<span className="no-mb">ADD TO CALENDAR</span>
		<span className="mb-only">
			<img src="/img/priv8/calendar.svg" alt="Add to Calendar" width="512" height="512" css={css`width: 1.5rem; height: auto; margin-bottom: -0.5rem;`} />
		</span>
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
			line-height: 1;


			@media (max-width: 760px) {
				width: 11rem;
				margin-left: -4rem;
			}

			display: flex;
			justify-content: space-around;
			align-items: center;

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
				ICS<span className="no-mb"> (Apple/Outlook)</span>
			</a>
			<a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Priv8%20-%20virtual%20privacy%20conference&dates=20211115/20211116&details=Priv8%20is%20the%20premier%20global%20forum%20dedicated%20to%20the%20future%20of%20digital%20privacy.%20Orchid%20and%20Handshake%20have%20brought%20together%20a%20world-class%20group%20of%20experts%20and%20advocates%20from%20various%20business,%20government,%20academic,%20and%20nonprofit%20spheres%20to%20explore%20key%20issues%20around%20this%20important%20topic.&location=https://www.orchid.com/priv8/&trp=true" target="_blank" rel="noopener noreferrer">
				Google Calendar
			</a>
		</div>
	</span>)
}

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

const HeadlineSpeakerImage = styled.div`
	padding: 25% 0;
	display: block;
	background-image: url('/img/priv8/header-shapes.svg');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	picture {
		width: 90%;
		height: auto;
		margin: auto;
		display: block;
	}
	&[data-role="desktop"] {
			padding: 30% 0;
			picture {
				margin-top: -2rem;
				width: 90%;
			}
	}
`;

const Speaker = (props) => {
	return (
		<HeadlineSpeakerContainer data-role={props.role}>
			<HeadlineSpeakerImage>
				<StaticImage loading="eager" src="../../static/img/priv8/Headliner.png" width={1000} height={1000} alt="" />
			</HeadlineSpeakerImage>
			<p>Featuring:</p>
			<p>Pulitzer-Prize winning journalist</p>
			<b>Glenn Greenwald</b>
		</HeadlineSpeakerContainer>
	);
}


const SpeakerItem = styled.div`
	position: relative;
	background: #000;
	color: #fff;
	text-align: left;
	
	& > h3 {
		color: white;
		margin: 0;
		text-align: center;
	}
	& > b {
		display: block;
		margin-bottom: 1rem;
		text-align: center;
	}
	@media (min-width: 1200px) {
		& > h3, & > b {
			text-align: left;
		}
	}

	border-radius: 0.75rem;
	padding: 1rem;
	margin: 2rem auto;
	@media (min-width: 1200px) {
		margin: 4rem auto;
		padding: 2rem 4rem;
		padding-left: 6rem;
	}
	@media (max-width: 400px) {
		margin-left: -1.75rem;
		margin-right: -1.75rem;
		width: calc(100% + 1.5rem);
	}

	&:first-of-type {
		margin-top: 0;
	}
`;
const SpeakerImage = styled.div`
	margin: 0 auto 1rem auto;
	position: relative;
	width: 8rem;

	@media (min-width: 1200px) {
		position: absolute;
		top: -2rem;
		left: -4rem;
		width: 8rem;
		margin: 0;
	}
	& > div {
		position: relative;
		z-index: 1;
	}
	&:after {
		content: "";
		position: absolute;
		top: 10%;
		left: 15%;
		width: 70%;
		height: 100%;
		background-image: url('/img/priv8/polygon.svg');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom center;
	}
`;
const SpeakerLink = styled.a`
	position: absolute;
	bottom: 0;
	left: 100%;
	margin-left: 2rem;
	width: 2rem;
	display: block;
	& > img {
		width: 100%;
		height: auto;
	}
	@media (max-width: 1200px) {
		position: static;
		margin: 1rem auto;
	}
`;

const AgendaItem = styled.div`
	display: flex;
	@media (max-width: 768px) {
		flex-direction: column;
	}
	padding: 1rem 0;

	&.indented {
		padding-left: 2rem;
	}
`;
const AgendaDescription = styled.div`
	width: 80%;
	@media (max-width: 768px) {
		width: 100%;
	}
	padding-left: 1rem;
	box-sizing: border-box;
	& > p {
		margin: 0;
		&[color="purple"] {
			color: var(--purple);
		}
		&[color="teal"] {
			color: var(--teal);
		}
	}
`;
const AgendaDate = styled.div`
	width: 20%;
	text-align: right;
	@media (max-width: 768px) {
		width: 100%;
		text-align: left;
	}
`;

const agendaList = [
	{
		date: new Date('Nov 15 2021 07:50:00 GMT-0800'),
		title: 'Welcome to Priv8!',
		description: <p>with Derek E. Silva &amp; Chjango</p>,
	},
	{
		date: new Date('Nov 15 2021 08:00:00 GMT-0800'),
		title: 'Free Internet',
		description: <>
			<p>with Glenn Greenwald, Dr. Steven Waterhouse (Seven), Willy Woo</p>
			<p color="purple">Moderators: Derek E. Silva, Chjango, Naomi Brockwell</p>
			<p color="teal">The cause of a free internet — one that allows communications free of centralized corporate and state control and that protects the right of privacy — remains one of Glenn's top priorities and he's excited to speak as conference keynote.</p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 09:00:00 GMT-0800'),
		title: 'FREE MONEY: TAPROOT',
		description: <>
			<p>with Isaiah Jackson</p>
			<p color="purple">Moderator: Naomi Brockwell</p>
			<p color="teal">The IRS plan to monitor bank accounts for transactions of $600 or greater sparked attention towards overreach around financial surveillance. With the Taproot upgrade to Bitcoin live today, this session will focus on privacy preserving finance and the encroachment of surveillance capitalism.</p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 09:20:00 GMT-0800'),
		title: 'FREE MONEY: DEPLATFORMING',
		description: <>
			<p>with Aella &amp; Leigh Cuen</p>
			<p color="purple">Moderator: Naomi Brockwell</p>
			<p color="teal">Operation "Choke Point" launched by the U.S. Department of Justice in 2013 signaled a massive shift in the state's financial surveillance strategy. At the time, warnings of a slippery slope went unheeded. Today, deplatforming for financial reasons has become commonplace, from OnlyFans' aborted pivot to plain-vanilla crypto transactions. This session will talk about the fog of unaccountability that shrouds building businesses on these platforms.</p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 09:40:00 GMT-0800'),
		title: 'FREE MONEY: MOBILECOIN',
		description: <>
			<p>with Joshua Goldbard</p>
			<p color="teal">MobileCoin and the future of payments.</p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 10:00:00 GMT-0800'),
		title: 'FREE THOUGHT: HOW DO WE FIX CENSORSHIP?',
		description: <>
			<p>with Zach Vorhies</p>
			<p color="teal">A talk by Zach Vorhies.</p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 10:30:00 GMT-0800'),
		title: 'FREE THOUGHT: WHISTLEBLOWER PANEL',
		description: <>
			<p>with Zach Vorhies &amp; Shiv Malik</p>
			<p color="purple">Moderator: Chjango</p>
			<p color="teal">Vaccine mandates force an unpleasant truth into the open: enforcement is not necessarily leaders and governments, it's on everybody and their neighbors. Social coercion can infringe on  private psychological spaces. This session aims to share more insight into how whistleblowers all bring privacy focused incentives into the foreground.  </p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 11:00:00 GMT-0800'),
		title: 'BREAK',
		description: <hr />,
	},
	{
		date: new Date('Nov 15 2021 11:15:00 GMT-0800'),
		title: 'FREE FALL OR FREE FOR ALL?',
		description: <>
			<p>with Ari Paul, Tor Bair, Greg Osuri, Matthew Zipkin</p>
			<p color="purple">Moderator: Benjamin Powers</p>
			<p color="teal">Is the world stuck between embracing a CCP style social credit system or a decentralized crypto protocol system? How will incentives like UBI align with the market for privacy? Will our privacy be sold to the dopamine hawkers? Or will everyone get rich using privacy preserving techniques? Either way, economics will play a huge role. The speakers here can see answers to these questions and more.</p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 12:00:00 GMT-0800'),
		title: 'FREEDOM BY DESIGN',
		description: <>
			<p color="teal">Privacy by design remains the north star of cryptographic and privacy-first commercial work. The economics of privacy by design requires consumer choice to be engaged. This means strong incentives, attractive tooling, and suitable use-cases. This session looks beyond Taproot to the edge of privacy innovation in crypto.</p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 12:00:00 GMT-0800'),
		indented: true,
		title: 'ON BUILDING HIGH PERFORMANCE BLOCKCHAINS',
		description: <>
			<p>with Christopher Jeffrey</p>
			<p color="teal">Lead Developer &amp; Architect of the Handshake protocol discusses privacy and blockchain design.</p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 12:20:00 GMT-0800'),
		indented: true,
		title: 'RIVET’S GREG LANG',
		description: <>
			<p>with Greg Lang</p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 12:40:00 GMT-0800'),
		indented: true,
		title: 'STARLING LAB’S JONATHAN DOTAN',
		description: <>
			<p>with Jonathan Dotan</p>
			<p color="teal">Historians, lawyers, and journalists are poised to grasp new Web 3 technologies to address the current crisis of dis/misinformation on the internet.  These cryptographic and distributed systems require new technology designs and governance to preserve privacy. Each is filled with opportunities and risks. This talk looks to the edge of innovation in crypto to understand how we can all work together to rebuild trust in our digital era. </p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 13:00:00 GMT-0800'),
		title: 'FREE FORTUNE READING',
		description: <>
			<p>with Dr. Steven Waterhouse (Seven) &amp; Derek E. Silva</p>
			<p color="teal">Some predictions on where privacy and pseudonymity are headed.</p>
		</>,
	},
	{
		date: new Date('Nov 15 2021 13:30:00 GMT-0800'),
		title: 'LIVE AUCTION',
		description: <>
			<p>hosted by Handshake</p>
			<p color="teal">Live bidding will be hosted in the <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeNZxhJ-ROhVcQ8H3CB1gmuOQC2d9dLkBnDscGLaPd689Iug/viewform" target="_blank" rel="noreferrer">Priv8 Auction Telegram Group</a>. Items up for auction include a curated list of roughly 20 Handshake Top-Level Domains (HNS TLDs) including .x and single character emojis. Each TLD is a ​​secure, seizure-resistant domain name that people can use to host websites, receive crypto, and more. <br /> A number of Rare Pepe NFTs - digital collectible cards minted by blockchain pioneers in the mid-2010s - will also be on offer. 10% of the auction’s proceeds will be awarded to the auctioneer; 15% will be donated to a Handshake organization of the seller's choice. The remaining 75% will go directly to the seller.</p>
			<p><b>** HAVE A TLD TO AUCTION? <a href="https://docs.google.com/forms/d/e/1FAIpQLScJxfQ2BOmnytAz0VNXIzUvQYnb3cm7SqHvt4e_qNQzZwQVyw/viewform" target="_blank" rel="noreferrer">SUBMIT IT.</a> **</b></p>
		</>,
	},
];

const AgendaSection = function () {
	let [timezone, setTimezone] = useState('America/Los_Angeles');
	let [hasJS, setHasJS] = useState(false);

	useEffect(() => {
		setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
		setHasJS(true);
	}, []);

	/*let timezone = 'America/Los_Angeles';
	let hasJS = false;
	try {
		if (typeof window === 'object') {
			timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			hasJS = true;
		}
	} catch (e) { }*/

	const items = [];
	for (let index = 0; index < agendaList.length; index++) {
		const element = agendaList[index];
		items.push(
			<AgendaItem key={index} className={element.indented ? "indented" : ""}>
				<AgendaDate>
					{element.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: timezone })}
				</AgendaDate>
				<AgendaDescription>
					<b>{element.title.toUpperCase()}</b>
					{element.description}
				</AgendaDescription>
			</AgendaItem>
		)
	}


	return (<div css={css`
				background: #000000;
				hr {
					border-color: var(--teal);
					border-style: solid;
				}
			`} id="agenda">
		<Container>
			<div css={css`
				width: 100%;
				max-width: 620px;
				hr {
					margin: 2rem auto;
				}
			`}>
				<div css={css`
					text-align: center;
				`}>
					<h2>AGENDA</h2>
					<br />
					<b css={css`
						font-weight: 400;
						@media (min-width: 1200px) {
							font-size: 28px;
						}
					`}>NOVEMBER 15, 2021</b>
					<br />
					{hasJS ? <small>Times have been converted to {timezone}</small> : <p>*All times listed are in PST</p>}
				</div>
				<hr />
				{items}

				<br />
				<div css={css`text-align: center;`}>
					<Button color="purple"><AddToCalendar className="text-only" /></Button>
				</div>
				<hr />
				<img css={css`
					width: 65%;
					margin: 2rem auto 0;
					display: block;
				`} src="/img/priv8/agenda-hexes.svg" width="440" height="128" alt="" />
			</div>
		</Container>
	</div>)
}

class Page extends React.Component {

	render() {
		return (
			<div css={css`
				--purple: #EB53E2;
				--teal: #60EBFF;
				background: #000000;
				color: #FFFFFF;
				min-height: 100vh;
			`}>

				<WebsiteMeta
					title="Priv8 | Orchid"
					description="Join us for an in-depth discussion on the state of privacy in today’s world with the foremost experts, policymakers, and builders."
					image="/img/priv8/social.jpg"
					location={this.props.location}
				/>
				<Helmet>
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

						h2, h2:not(.secondary) {
							font-family: 'BonvenoCF', sans-serif !important;
							font-weight: 400;
							font-size: 60px;
						}
						@media (max-width: 1200px) {
							h2, h2:not(.secondary) {
								font-size: 30px;
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

						@keyframes pulse {
							0% {
								transform: scale(1);
								opacity: 1;
							}
							75% {
								transform: scale(2);
								opacity: 0;
							}
							100% {
								transform: scale(2);
								opacity: 0;
							}
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
								&:last-child {
									margin-right: 0;
								}
							}
							.mb-only {
								display: none;
								@media (max-width: 760px) {
									display: inline-block;
								}
							}
							.no-mb {
								@media (max-width: 760px) {
									display: none;
								}
							}
						`}>
							<AddToCalendar />
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
					<Embed />
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
								Priv8 is the premier global forum dedicated to the future of digital privacy, brought to you by <Link to="/">Orchid</Link> and <a href="https://handshake.org/">Handshake</a>. Featuring Glenn Greenwald.

							</p>
							<p css={css`
								margin-top: 2rem;
								@media (max-width: 1200px) {
									text-align: center;
								}
							`}>
								<Button href="#register" color="purple">Register for free!</Button>
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
							<Link to="/"><img src="/img/priv8/orchid-logo-teal.svg" width="110" height="28" alt="Orchid" /></Link>
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

				<div css={css`
					position: relative;
					background: var(--purple);
					text-align: right;
					color: #000000;
					h2, h2:not(.secondary) {
						color: #000000;
					}
				`} id="speakers">
					<Container>
						<div css={css`
							text-align: center;
							max-width: 100%;
							width: 960px;
							padding-top: 2rem;
							& > hr {
								border-color: var(--teal);
								border-style: solid;
							}
							@media (max-width: 1200px) {
								padding-top: 0rem;
							}
						`}>
							<h2>SPEAKERS</h2>
							<br />
							<br />
							<hr />
						</div>
					</Container>
					<Container>
						<div css={css`
							text-align: center;
							max-width: 100%;
							width: 960px;
						`}>

							<SpeakerItem>
								<SpeakerImage>
									<StaticImage src="../../static/img/priv8/speakers/GlennGreenwald.png" alt="Glenn Greenwald" width={160} height={160} loading="lazy" objectFit="contain" />
								</SpeakerImage>
								<h3>GLENN GREENWALD</h3>
								<b>Former Constitutional Lawyer &amp; Pulitzer-Prize Winning Journalist</b>
								<p>
									Glenn Greenwald is a former constitutional lawyer, a Pulitzer-Prize winning journalist, and the author of several bestsellers, including No Place to Hide: Edward Snowden, the NSA, and the U.S. Surveillance State (2014) and Securing Democracy: My Fight for Press Freedom and Justice in Bolsonaro's Brazil (2021). Acclaimed as one of the 25 most influential political commentators by The Atlantic, one of America’s top 10 opinion writers by Newsweek, and one of the Top 100 Global Thinkers for 2013 by Foreign Policy, Greenwald is a former constitutional and civil rights litigator. He was a columnist for The Guardian until October 2013 and a co-founder and former editor at The Intercept, which he left in 2020. He is now an independent journalist writing at Substack. He has won numerous awards for his reporting, including the 2013 Polk Award for national security reporting, the top 2013 investigative journalism award from the Online News Association, the Esso Award for Excellence in Reporting (the Brazilian equivalent of the Pulitzer Prize), the 2013 Pioneer Award from Electronic Frontier Foundation and the Vladimir Herzog Special Prize in 2019 for his work in the Vaza Jato series. He also received the first annual I. F. Stone Award for Independent Journalism in 2009 and a 2010 Online Journalism Award. In 2013, Greenwald led the Guardian reporting that was awarded the Pulitzer Prize for public service, and his work was featured in the 2014 film Citizenfour, which won the Academy Award for Best Documentary.
								</p>
								<SpeakerLink href="#speakers">
									<img src="/img/priv8/go-up.svg" width="40" height="40" alt="Return to the top of the list." />
								</SpeakerLink>
							</SpeakerItem>

							<SpeakerItem>
								<SpeakerImage>
									<StaticImage src="../../static/img/priv8/speakers/StevenWaterhouse.png" alt="Steven Waterhouse (Seven)" width={160} height={160} loading="lazy" objectFit="contain" />
								</SpeakerImage>
								<h3>DR. STEVEN WATERHOUSE (SEVEN)</h3>
								<b>CEO &amp; Co-founder, Orchid Labs</b>
								<p>
									Dr. Steven Waterhouse (“Seven”) is the CEO and Co-founder of Orchid, the blockchain-powered VPN marketplace. Waterhouse previously served as a partner at blockchain-focused venture Pantera Capital from its inception in 2013 through July 2016 and worked at Fortress Investment Group, where he founded the Digital Currency Fund with Mike Novogratz and Pete Briger.
									<br />
									<br />
									Seven was a Co-founder and CTO of RPX (Nasdaq: RPXC) and served as Director of the Honeycomb product group at Sun Microsystems, one of the first computer and software technology companies to evolve during the dot com era. He holds a PhD in Engineering from the University of Cambridge.
								</p>
								<SpeakerLink href="#speakers">
									<img src="/img/priv8/go-up.svg" width="40" height="40" alt="Return to the top of the list." />
								</SpeakerLink>
							</SpeakerItem>

							<SpeakerItem>
								<SpeakerImage>
									<StaticImage src="../../static/img/priv8/speakers/JoshuaGoldbard.png" alt="Joshua Goldbard" width={160} height={160} loading="lazy" objectFit="contain" />
								</SpeakerImage>
								<h3>JOSHUA GOLDBARD</h3>
								<b>CEO &amp; Founder, MobileCoin</b>
								<p>
									Joshua Goldbard is founder and CEO at MobileCoin, a cryptocurrency technology company, and a founding partner at Crypto Lotus, a cryptocurrency-focused hedge fund. He really likes sound amplification devices.
								</p>
								<SpeakerLink href="#speakers">
									<img src="/img/priv8/go-up.svg" width="40" height="40" alt="Return to the top of the list." />
								</SpeakerLink>
							</SpeakerItem>

							<SpeakerItem>
								<SpeakerImage>
									<StaticImage src="../../static/img/priv8/speakers/AriPaul.png" alt="Ari Paul" width={160} height={160} loading="lazy" objectFit="contain" />
								</SpeakerImage>
								<h3>ARI PAUL</h3>
								<b>CIO &amp; Co-founder, BlockTower</b>
								<p>
									Ari Paul is co-founder and CIO of BlockTower Capital. He was previously a portfolio manager for the University of Chicago's $8 billion endowment, and a derivatives market maker and proprietary trader for Susquehanna International Group (SIG). He earned a BA in political science from the University of Pennsylvania, and an MBA from the University of Chicago with concentrations in economics, entrepreneurship, strategic management, and econometrics &amp; statistics. Mr. Paul is also a CFA charterholder.
								</p>
								<SpeakerLink href="#speakers">
									<img src="/img/priv8/go-up.svg" width="40" height="40" alt="Return to the top of the list." />
								</SpeakerLink>
							</SpeakerItem>

							<SpeakerItem>
								<SpeakerImage>
									<StaticImage src="../../static/img/priv8/speakers/ZachVorhies.png" alt="Zach Vorhies" width={160} height={160} loading="lazy" objectFit="contain" />
								</SpeakerImage>
								<h3>ZACH VORHIES</h3>
								<b>Google Whistleblower</b>
								<p>
									Zach Vorhies was a Senior Software Engineer at YouTube/Google for 8.5 years. He has been involved with the following software products: Google Earth, YouTube for PS4, Xbox, Nintendo Switch.
									<br />
									<br />
									While working at YouTube, he learned that Google was censoring "fake news". and investigated further into the company, only to find that not only had Google defined "fake news" to mean actual events that had happened, but also had created an artificial intelligence system to classify all available data to Google Search. The reason Google wanted to classify data was so that this could be used by their artificial intelligence system to re-erank the entire internet according to Google's corporate cultural values.
									<br />
									<br />
									In June 2019, he resigned from Google. He took with him 950+ pages of Google's internal documents and delivered them to the Department of Justic, and through Project Veritas, to inform the public and Google's extensive censorship system.
								</p>
								<SpeakerLink href="#speakers">
									<img src="/img/priv8/go-up.svg" width="40" height="40" alt="Return to the top of the list." />
								</SpeakerLink>
							</SpeakerItem>

							<SpeakerItem>
								<SpeakerImage>
									<StaticImage src="../../static/img/priv8/speakers/BenPowers.png" alt="Benjamin Powers" width={160} height={160} loading="lazy" objectFit="contain" />
								</SpeakerImage>
								<h3>BENJAMIN POWERS</h3>
								<b>Technology Journalist</b>
								<p>
									Ben is the technology reporter at a media start-up launching in early 2022. The DC-based outlet is focused on connecting stories together through collaborative reporting on today's biggest topics such as climate change, global security, misinformation and economic challenges.
								</p>
								<SpeakerLink href="#speakers">
									<img src="/img/priv8/go-up.svg" width="40" height="40" alt="Return to the top of the list." />
								</SpeakerLink>
							</SpeakerItem>
						</div>
					</Container>
				</div>

				<Container css={css`
					@media (max-width: 1200px) {
						padding: 0rem;
					}
				`}>
				</Container>

				<AgendaSection />

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
							max-width: 100%;
							width: 960px;
						`}>
							<h4 css={css`
								font-family: 'BonvenoCF', sans-serif !important;
								font-weight: 400;
								font-size: 1.5rem;
								@media (max-width: 768px) {
									font-size: 1rem;
								}
							`}>PRIV8 ONLINE IS</h4>
							<h3 css={css`
								font-family: 'BonvenoCF', sans-serif !important;
								font-weight: 400;
								color: var(--purple) !important;
								font-size: 3rem;
								@media (max-width: 768px) {
									font-size: 1.65rem;
								}
							`}>SPONSORED BY</h3>
							<div css={css`
								display: flex;
								justify-content: space-around;
								align-items: center;
								flex-wrap: wrap;
								margin-top: 2rem;
								& > a {
									display: block;
									width: 40%;
									margin: 1rem auto;
								}
								@media (max-width: 768px) {
									margin-top: 1rem;
									& > a {
										width: 90%;
									}
								}
							`}>
								<a href="https://bobwallet.io/" target="_blank" rel="noreferrer">
									<img src="/img/priv8/sponsors/bobwallet.svg" width={309} height={47} alt="Bob Wallet" />
								</a>
								<a href="https://www.decentralizedinter.net/" target="_blank" rel="noreferrer">
									<StaticImage src="../../static/img/priv8/sponsors/dweb.png" width={1264} height={322} alt="dWeb Foundation" />
								</a>
								<a href="https://rivet.cloud/" target="_blank" rel="noreferrer">
									<img src="/img/priv8/sponsors/Rivet.svg" width={309} height={47} alt="Rivet" />
								</a>
								<a href="https://akash.network/" target="_blank" rel="noreferrer">
									<img src="/img/priv8/sponsors/Akash.svg" width={309} height={47} alt="Akash" />
								</a>
							</div>
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
	}
}
export default Page
