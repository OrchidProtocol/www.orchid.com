import { graphql } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './contact.scss'
import ContactForm from '../components/ContactForm';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';

import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

function Page(props) {
	const { t } = useTranslation();
	return (
		<Layout t={t}>
			<WebsiteMeta
				title="Get In Touch | Orchid"
				description={t("Let's reclaim the Internet together! We are looking for partnership opportunities with infrastructure providers and integration partners that want to build with Orchid.")}
				image="/img/contact/social.png"
				location={props.location}
			/>
			<Helmet>
				<body className="contact-page" />
			</Helmet>
			<div className="splash-circuit">
				<div className="splash-circuit-image section-med"></div>
				<div className="splash-circuit-grid section-med">
					<div className="splash-circuit-grid-item hpad-thin">
						<h1>
							<Trans>
								Contact
							</Trans>
						</h1>

						<div className="splash-circuit-grid-text">

							<h3><Trans>We want to hear from you</Trans></h3>
							<p><Trans>Let's reclaim the Internet together! We are looking for partnership opportunities with infrastructure providers and integration partners that want to build with Orchid. Contact us and we'll get back to you shortly.</Trans></p>

						</div>
					</div>
					<div className="splash-circuit-grid-item">
						<img alt="" className="splash-circuit-feature" src="/img/contact/handshake.svg" width="354" height="388" />
					</div>
				</div>
			</div>

			<div className="background-white">
				<div className="section-med vpad-wide contact-section">

					<div className="contact-sidebar">
						<div className="contact-page-card">
							<span className="contact-page-card-header color-gray">
								<Trans>
									Mailing Address
								</Trans>
							</span>
							<div className="contact-page-card-seperator"></div>
							<div style={{ maxWidth: "11rem" }}>
								1288 Columbus Ave. #122,
								San Francisco, CA 94133
							</div>
						</div>
						<div className="contact-page-card">
							<span className="contact-page-card-header color-gray">
								<Trans>
									Contact Info
								</Trans>
							</span>
							<div className="contact-page-card-seperator"></div>
							<ul className="contact-page-card-list">
								<li>
									<a className="phantom-a" href={t("mailto:contact@orchid.com")}>
										<img alt="Email" src="/img/contact/icon-email.svg" width="20" height="20" />
										<span>
											contact@orchid.com
										</span>
									</a>
								</li>
								<li>
									<a className="phantom-a" href={t("https://twitter.com/OrchidProtocol")}>
										<img alt="Twitter" src="/img/contact/icon-twitter.svg" width="20" height="20" />
										<span>
											@OrchidProtocol
										</span>
									</a>
								</li>
								<li>
									<a className="phantom-a" href={t("https://discord.gg/GDbxmjxX9F")}>
										<img alt="Discord" src="/img/contact/icon-discord.svg" width="20" height="20" />
										<span>
											Discord Server
										</span>
									</a>
								</li>
								<li>
									<a className="phantom-a" href={t("https://www.t.me/OrchidOfficial")}>
										<img alt="Telegram" src="/img/contact/icon-telegram.svg" width="20" height="20" />
										<span>
											@OrchidOfficial
										</span>
									</a>
								</li>
								<li>
									<a className="phantom-a" href={t("https://www.facebook.com/OrchidProtocol")}>
										<img alt="Facebook" src="/img/contact/icon-facebook.svg" width="20" height="20" />
										<span>
											OrchidProtocol
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<ContactForm t={t} />
				</div>
			</div>
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