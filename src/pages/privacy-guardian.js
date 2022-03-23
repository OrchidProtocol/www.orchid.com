import { graphql } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'
import { Trans } from 'gatsby-plugin-react-i18next';
import './privacy-guardian.scss'
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Container from '../components/common/Container';
import NewsletterSignupCore from '../components/newsletter-signup-core';

function Page(props) {
	const { t } = useTranslation();
	return (
		<Layout t={t}>
			<WebsiteMeta
				title={t("Ambassador program | Orchid")}
				description={t("Let's reclaim the Internet together!")}
				image="/img/contact/social.png"
				location={props.location}
			/>
			<Helmet>
				<body className="privacy-guardian-page" />
			</Helmet>
			<div className="hero__wrapper">
				<div className="hero__container">
					<div className="hero__text">
						<h1>
							<Trans>
								Orchid<br /> Privacy<br /> Guardians
							</Trans>
						</h1>
						<p>
							<Trans>
								An Orchid Privacy Guardian is an advocate for digital freedom, educates the community about how to use privacy tools online, and promotes security best practices. Privacy Guardians run meetups, manage and grow online communities, and facilitate discussions about Internet censorship, decentralizing technologies, and other important topics.
							</Trans>
						</p>
						<h2>
							<Trans>
								Ready to get involved?
							</Trans>
						</h2>
						<a href="https://orchid.brandchamp.io/apply">
							<button className="btn btn-primary btn-lg">
								<Trans>
									Apply Now!
								</Trans>
							</button>
						</a>
					</div>
					<div className="hero__graphic">
						<img src="/img/ambassador/hero-bunny.png" alt="" />
					</div>
				</div>
			</div>

			<div className="carousel__wrapper">
				<img src="/img/shared/arrow-left.svg" alt="left" data-direction="-1" />
				<div className="carousel__content">
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_01.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_02.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_03.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_04.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_05.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_06.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_07.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_08.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_09.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_10.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_11.jpeg" />
					<img alt="" src="/img/ambassador/event-photos/OrchidEvent_12.jpeg" />
				</div>
				<img src="/img/shared/arrow-right.svg" alt="right" data-direction="1" />
			</div>

			<div className="educator__wrapper">
				<div className="educator__container vpad-xl hpad-thin">
					<h2>
						<Trans>
							Become a privacy educator
						</Trans>
					</h2>

					<div className="educator__card">
						<img alt="" className="educator__card-hand" src="/img/ambassador/hand_1.png" />
						<img alt="" className="educator__card-circle" src="/img/ambassador/circle.svg" />
						<h4>
							<Trans>
								Build Community
							</Trans>
						</h4>
						<p>
							<Trans>
								Launch an official Orchid community using the appropriate platform for your region. The Orchid team is here to help you start and grow it, host fun events and giveaways, and offer early access and content.
							</Trans>
						</p>
					</div>
					<div className="educator__card">
						<img alt="" className="educator__card-hand" src="/img/ambassador/hand_2.png" />
						<img alt="" className="educator__card-circle" src="/img/ambassador/circle.svg" />
						<h4>
							<Trans>
								Host Meetups
							</Trans>
						</h4>
						<p>
							<Trans>
								Run a monthly meetup focused on digital freedom, technologies being used to protect privacy, and other relevant topics of interest to your community and region. Build relationships and invite like-minded projects, companies, and individuals to participate.
							</Trans>
						</p>
					</div>
					<div className="educator__card">
						<img alt="" className="educator__card-hand" src="/img/ambassador/hand_3.png" />
						<img alt="" className="educator__card-circle" src="/img/ambassador/circle.svg" />
						<h4>
							<Trans>
								Educate<br /> &amp; Help
							</Trans>
						</h4>
						<p>
							<Trans>
								Teach people in your community about digital freedom, privacy and security. Help them take control of their data by educating them to use new tools and technology that increase their freedom. Share and amplify content coming from Orchid.
							</Trans>
						</p>
					</div>
				</div>
			</div>

			<div className="decoration">
				<svg style={{ top: "-81.5px" }} width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M161 81.5C161 125.407 125.408 161 81.5024 161C37.5921 161 2 125.407 2 81.5C2 37.5883 37.5921 2 81.5024 2C125.408 2 161 37.5883 161 81.5Z" stroke="#E8DDFD" stroke-width="4" stroke-dasharray="4" />
				</svg>
			</div>

			<div className="bk-lavender center-text vpad-xl hpad-thin who__wrapper">
				<div className="decoration">
					<svg style={{ left: "62%", bottom: "0" }} width="219" height="201" viewBox="0 0 219 201" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0)">
							<path d="M51.0372 82.0154L27.6211 44.6146C27.6211 44.6146 53.4956 45.6214 77.6782 86.7197L51.0372 82.0154Z" fill="#9C9CEF" />
							<path d="M87.4074 94.603C87.4074 94.603 88.9607 82.1354 99.4107 63.7087C109.861 45.2819 116.453 19.3994 116.453 19.3994C116.453 19.3994 169.059 80.45 127.436 142.515L87.4074 94.603Z" fill="#9C9CEF" />
							<path d="M36.0271 93.7198C36.0271 93.7198 27.5954 111.871 44.5131 121.16C44.5131 121.16 54.4554 126.11 60.4258 138.638C66.3962 151.166 75.9431 160.302 84.9677 164.763C93.9922 169.224 111.398 175.518 123.294 174.203C135.191 172.888 167.371 185.598 175.694 193.39L185.319 176.705L140.388 168.732C140.388 168.732 136.259 169.13 132.246 156.051C128.232 142.973 121.986 129.467 107.879 114.128C93.772 98.7889 84.5303 88.4305 70.3978 83.0838C56.1429 77.7065 42.1689 83.1771 36.0271 93.7198Z" fill="#B9B9ED" />
							<path d="M36.0062 113.063L27.8783 127.395L41.1474 119.021L36.0062 113.063Z" fill="#20115B" />
							<path d="M49.0025 110.984C47.5159 110.613 46.6114 109.108 46.9822 107.623C47.3531 106.138 48.8588 105.235 50.3454 105.606C51.832 105.977 52.7365 107.482 52.3657 108.967C51.9948 110.452 50.4891 111.355 49.0025 110.984Z" fill="#20115B" />
							<path d="M82.6083 157.032C82.6083 157.032 74.7459 152.602 59.3653 158.5" stroke="#271C47" stroke-width="0.754" stroke-miterlimit="10" stroke-linecap="round" />
							<path d="M89.6152 163.326C89.6152 163.326 76.5877 165.527 69.7403 172.128" stroke="#271C47" stroke-width="0.754" stroke-miterlimit="10" stroke-linecap="round" />
						</g>
						<defs>
							<clipPath id="clip0">
								<rect width="185" height="160" fill="white" transform="matrix(-0.970213 -0.242254 -0.242254 0.970213 218.25 44.817)" />
							</clipPath>
						</defs>
					</svg>
				</div>

				<h3>
					<Trans>
						Who can apply?
					</Trans>
				</h3>
				<br />
				<ul>
					<Trans>
						<li>
							<b>People who believe in the importance of digital freedom and privacy.</b>
						</li>
						<li>
							<b>Individuals who are prepared to start and grow a community and educate the members.</b>
						</li>
						<li>
							<b>Self-starters who can work on their own, but also enjoy working with a team.</b>
						</li>
					</Trans>
				</ul>
			</div>

			<div className="decoration">
				<svg style={{ top: "-142.5px", right: "0" }} width="295" height="295" viewBox="0 0 295 295" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M291 147.5C291 226.753 226.755 291 147.504 291C68.2448 291 4 226.753 4 147.5C4 68.238 68.2448 4 147.504 4C226.755 4 291 68.238 291 147.5Z" stroke="#BCA9FF" stroke-opacity="0.4" stroke-width="8" stroke-dasharray="4 8" />
				</svg>
			</div>

			<div className="center-text vpad-xl hpad-thin benefits__wrapper">
				<div className="benefits__container">

					<h3>
						<Trans>
							Privacy Guardian Benefits
						</Trans>
					</h3>

					<div className="benefits__row">
						<div className="benefits__column">
							<img src="/img/ambassador/bunny-connected.svg" alt="" />
							<b><Trans>Get connected</Trans></b>
							<p>
								<Trans>Find like-minded individuals, trade tips and tricks to protect digital privacy, discuss problems and how to overcome them together.</Trans>
							</p>
						</div>

						<div className="benefits__column">
							<img src="/img/ambassador/bunny-rewards.svg" alt="" />
							<b><Trans>Earn rewards</Trans></b>
							<p>
								<Trans>Earn rewards for participating and educating others.</Trans>
							</p>
						</div>

						<div className="benefits__column">
							<img src="/img/ambassador/bunny-help.svg" alt="" />
							<b><Trans>Help friends &amp; family</Trans></b>
							<p>
								<Trans>Teach them how to protect themselves online with privacy tools like VPNs.</Trans>
							</p>
						</div>
					</div>

					<div className="decoration">
						<svg style={{ left: "-200px", top: "0" }} width="217" height="212" viewBox="0 0 217 212" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M177 211C155.461 211 138 193.539 138 172C138 150.461 155.461 133 177 133C198.539 133 216 150.461 216 172C216 193.539 198.539 211 177 211Z" stroke="#E8DDFD" stroke-width="1.145" stroke-miterlimit="16" stroke-linecap="round" />
							<path fill-rule="evenodd" clip-rule="evenodd" d="M105 209C47.5613 209 1 162.439 1 105C1 47.5613 47.5613 1 105 1C162.439 1 209 47.5613 209 105C209 162.439 162.439 209 105 209Z" stroke="#D5D7E2" stroke-width="1.145" stroke-linecap="round" stroke-dasharray="0.42 2.11" />
						</svg>
					</div>

					<img alt="" className="benefits__bunny" src="/img/ambassador/bunny-mega.png" />

					<h4>
						<Trans>
							Apply today to become an Orchid Privacy Guardian!
						</Trans>
					</h4>
					<a href="https://orchid.brandchamp.io/apply" rel="noreferrer">
						<button className="btn-primary" style={{ width: "100%", maxWidth: "330px" }}>
							<Trans>Let’s go!</Trans>
						</button>
					</a>
				</div>
			</div>

			<Container>
				<NewsletterSignupCore />
			</Container>
		</Layout>
	)
}

export default Page

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: {language: {eq: $language}}) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;