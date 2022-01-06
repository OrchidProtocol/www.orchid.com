import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './contact.scss'
import ContactForm from '../components/ContactForm';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';

import withI18next from '../components/withI18next';
import { Trans } from 'react-i18next';

class Page extends React.Component {

	render() {
		const { t } = this.props
		return (
			<Layout t={t}>
				<WebsiteMeta
					title="Get In Touch | Orchid"
					description={t("Let's reclaim the Internet together! We are looking for partnership opportunities with infrastructure providers and integration partners that want to build with Orchid.")}
					image="/img/contact/social.png"
					location={this.props.location}
				/>
				<Helmet>
					<body className="contact-page" />
				</Helmet>
				<div className="splash-circuit">
					<div className="splash-circuit-image section-med"></div>
					<div className="splash-circuit-grid section-med">
						<div className="splash-circuit-grid-item hpad-thin">
							<h1>
								<Trans i18nKey="@@ContactHero__Title">
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
									<Trans i18nKey="@@ContactOffice__Title">
										Mailing Address
									</Trans>
								</span>
								<div className="contact-page-card-seperator"></div>
								<div style={{ maxWidth: "11rem" }}>
									<Trans i18nKey="@@ContactOffice__Address">
										1288 Columbus Ave. #122,
										San Francisco, CA 94133
									</Trans>
								</div>
							</div>
							<div className="contact-page-card">
								<span className="contact-page-card-header color-gray">
									<Trans i18nKey="@@ContactSidebar__Title">
										Contact Info
									</Trans>
								</span>
								<div className="contact-page-card-seperator"></div>
								<ul className="contact-page-card-list">
									<li>
										<a className="phantom-a" href={t("mailto:contact@orchid.com")}>
											<img alt="Email" src="/img/contact/icon-email.svg" width="20" height="20" />
											<span>
												<Trans i18nKey="@@ContactSidebar__Email">
													contact@orchid.com
												</Trans>
											</span>
										</a>
									</li>
									<li>
										<a className="phantom-a" href={t("https://twitter.com/OrchidProtocol")}>
											<img alt="Twitter" src="/img/contact/icon-twitter.svg" width="20" height="20" />
											<span>
												<Trans i18nKey="@@ContactSidebar__Twitter">
													@OrchidProtocol
												</Trans>
											</span>
										</a>
									</li>
									<li>
										<a className="phantom-a" href={t("https://discord.gg/GDbxmjxX9F")}>
											<img alt="Discord" src="/img/contact/icon-discord.svg" width="20" height="20" />
											<span>
												<Trans i18nKey="@@ContactSidebar__Discord">
													Discord Server
												</Trans>
											</span>
										</a>
									</li>
									<li>
										<a className="phantom-a" href={t("https://www.t.me/OrchidOfficial")}>
											<img alt="Telegram" src="/img/contact/icon-telegram.svg" width="20" height="20" />
											<span>
												<Trans i18nKey="@@ContactSidebar__Telegram">
													@OrchidOfficial
												</Trans>
											</span>
										</a>
									</li>
									<li>
										<a className="phantom-a" href={t("https://www.facebook.com/OrchidProtocol")}>
											<img alt="Facebook" src="/img/contact/icon-facebook.svg" width="20" height="20" />
											<span>
												<Trans i18nKey="@@ContactSidebar__Facebook">
													OrchidProtocol
												</Trans>
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<ContactForm />
					</div>
				</div>
			</Layout>
		)
	}
}

export default withI18next({ ns: "common" })(Page)
