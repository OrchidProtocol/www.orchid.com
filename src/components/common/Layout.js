import React from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'

import Navbar from './Navbar.js'
import '../../scss/styles.scss';
import './Layout.scss'
import { Trans } from 'react-i18next'

class TemplateWrapper extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			androidLink: "https://play.google.com/store/apps/details?id=net.orchid.Orchid&referrer=utm_source=website&utm_campaign=websitefooter",
			iOSLink: "https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=websitefooter&mt=8"
		}
	}

	componentDidMount() {
		this.setState({
			androidLink: window.addUTMParameters(this.state.androidLink),
			iOSLink: window.addUTMParameters(this.state.iOSLink),
		});
	}

	render() {
		const { t } = this.props;
		return (
			<>
				<Helmet>
					<html lang={process.env.GATSBY_TARGET_LANG} />
					<body className={this.props.bodyClass} />
					<link rel="icon" type="image/ico" href="/favicon.ico" />
					<link rel="manifest" href="/manifest.webmanifest" />
					<meta name="theme-color" content="#5f45ba" />

					{/* prefetch fonts */}
					<link rel="prefetch" href="/fonts/Baloo/wXKrE3kTposypRyd51ncANwr.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKrE3kTposypRyd51fcANwr.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKrE3kTposypRyd51bcANwr.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKrE3kTposypRyd51jcAA.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKuE3kTposypRyd76v_FeIKmE8y.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKuE3kTposypRyd76v_FewKmE8y.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKuE3kTposypRyd76v_Fe0KmE8y.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKuE3kTposypRyd76v_FeMKmA.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKuE3kTposypRyd74f4FeIKmE8y.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKuE3kTposypRyd74f4FewKmE8y.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKuE3kTposypRyd74f4Fe0KmE8y.woff2" />
					<link rel="prefetch" href="/fonts/Baloo/wXKuE3kTposypRyd74f4FeMKmA.woff2" />
				</Helmet>

				<Location>
					{({ location }) => {
						return <Helmet>
							<link rel="alternate" href={`https://www.ko.orchid.com${location.pathname}`} hrefLang="ko" />
							<link rel="alternate" href={`https://www.orchid.com${location.pathname}`} hrefLang="x-default" />
							<link rel="alternate" href={`https://www.ja.orchid.com${location.pathname}`} hrefLang="ja" />
							<link rel="alternate" href={`https://www.zh.orchid.com${location.pathname}`} hrefLang="zh" />
							<link rel="alternate" href={`https://www.id.orchid.com${location.pathname}`} hrefLang="id" />
							<link rel="alternate" href={`https://www.ru.orchid.com${location.pathname}`} hrefLang="ru" />

							{
								process.env.GATSBY_TARGET_LANG === "en" || !process.env.GATSBY_TARGET_LANG ?
									<meta rel="canonical" href={`https://www.orchid.com${location.pathname}`} /> :
									<meta rel="canonical" href={`https://www.orchid.com/${process.env.GATSBY_TARGET_LANG.toLowerCase()}${location.pathname}`} />
							}
						</Helmet>
					}}
				</Location>

				<div className="viewport">

					<script dangerouslySetInnerHTML={{
						/*Removes the 'no-js' class*/
						__html: `
						document.addEventListener('DOMContentLoaded', ()=>{
							document.body.classList.remove('no-js');
						});
						document.body.classList.remove('no-js');
						`,
					}} />

					<Navbar t={t} />

					<main css={css`
						font-size: 16px;
					`}>
						{/* All the main content gets inserted here, index.js, post.js */}
						{this.props.children}
					</main>

					<div id="ft-root" className="bk-white pos-relative overflow-hidden">
						<div className="wavy"></div>
						<footer id="footer" className="section-med hpad-wide">
							<div id="ft-layout">
								<section id="ft-logo">
									<img width="149px" height="39px" alt="" src="/img/shared/orchid-logo-text.svg" />
									<p>&copy; {new Date().getFullYear()} Orchid Labs Inc.</p>
									<p className="privacy-terms-links">
										<a className="phantom-a" href="/privacy-policy">Privacy Policy</a> |
										<a className="phantom-a" href="/service-terms">Terms of Service</a>
									</p>
								</section>
								<nav id="ft-nav">
									<ul id="ft-nav-list" className="phantom-list">
										<li><b><Trans i18nKey="@@Navigation-Title-Apps">Apps</Trans></b></li>
										<li><a className="phantom-a" href={this.state.androidLink} data-appstorelink><Trans i18nKey="@@Navigation-Android">Android</Trans></a></li>
										<li><a className="phantom-a" href={this.state.iOSLink} data-appstorelink><Trans i18nKey="@@Navigation-iOS">iOS</Trans></a></li>
										<li><a className="phantom-a" href={this.state.iOSLink} data-appstorelink><Trans i18nKey="@@Navigation-macOS">macOS</Trans></a></li>
										<li><a className="phantom-a" href="/join"><Trans i18nKey="@@Navigation-OrchidAccount">Orchid Account</Trans></a></li>
										<li><a className="phantom-a" href="/download"><Trans i18nKey="@@Navigation-Download">Download</Trans></a></li>
									</ul>
								</nav>
								<nav id="ft-nav-2">
									<ul id="ft-nav-2-list" className="phantom-list">
										<li><b><Trans i18nKey="@@Navigation-Title-Learn">Learn</Trans></b></li>
										<li><a className="phantom-a" href="/how-it-works"><Trans i18nKey="@@Navigation-HowItWorks">How it Works</Trans></a></li>
										<li><a className="phantom-a" href="/about-us"><Trans i18nKey="@@Navigation-AboutUs">About Us</Trans></a></li>
										<li><a className="phantom-a" href="/whitepaper/english.pdf"><Trans i18nKey="@@Navigation-Whitepaper">Whitepaper</Trans></a></li>
										<li><a className="phantom-a" href="/partners"><Trans i18nKey="@@Navigation-Partners">Partners</Trans></a></li>
										<li><a className="phantom-a" href="/faq"><Trans i18nKey="@@Navigation-FAQ">FAQ</Trans></a></li>
									</ul>
								</nav>
								<nav id="ft-nav-3">
									<ul id="ft-nav-3-list" className="phantom-list">
										<li><b><Trans i18nKey="@@Navigation-Title-Engage">Engage</Trans></b></li>
										<li><a className="phantom-a" href="/podcast"><Trans i18nKey="@@Navigation-Podcast">Podcast</Trans></a></li>
										<li><a className="phantom-a" href={t("https://blog.orchid.com/")}>Blog</a></li>
										<li><a className="phantom-a" href="/privacy-guardian"><Trans i18nKey="@@Navigation-PrivacyGuardians">Privacy Guardians</Trans></a></li>
										<li><a className="phantom-a" href="/events"><Trans i18nKey="@@Navigation-Events">Events</Trans></a></li>
										<li><a className="phantom-a" href="/contact"><Trans i18nKey="@@Navigation-Contact">Contact</Trans></a></li>
									</ul>
								</nav>
								<section>
									<header className="no-mobile make-me-purple">
										<strong><Trans i18nKey="@@NavigationFollowUs">Follow Us</Trans></strong>
									</header>
									<ul id="ft-social-list" className="phantom-list">
										<li>
											<a className="inline-block" href="https://twitter.com/OrchidProtocol" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter" title="Twitter">
												<img src="/img/shared/social-twitter.svg" alt="Twitter" width="32" height="32" />
											</a>
										</li>
										<li>
											<a className="inline-block" href="https://www.reddit.com/r/orchid/" target="_blank" rel="noopener noreferrer" aria-label="Check out our Subreddit" title="Reddit">
												<img src="/img/shared/social-reddit.svg" alt="Reddit" width="32" height="32" />
											</a>
										</li>
										<li>
											<a className="inline-block" href="https://discord.gg/GDbxmjxX9F" target="_blank" rel="noopener noreferrer" aria-label="Join us on Discord" title="Discord">
												<img src="/img/shared/social-discord.svg" style={{ width: "32px", height: "auto" }} alt="Discord" width="32" height="32" />
											</a>
										</li>
										<li>
											<a className="inline-block" href="https://www.t.me/OrchidOfficial" target="_blank" rel="noopener noreferrer" aria-label="Join us on Telegram" title="Telegram">
												<img src="/img/shared/social-telegram.svg" style={{ width: "32px", height: "auto" }} alt="Telegram" width="32" height="32" />
											</a>
										</li>
										<li>
											<a className="inline-block" href="https://github.com/OrchidTechnologies" target="_blank" rel="noopener noreferrer" aria-label="See the Source" title="Github">
												<img src="/img/shared/social-github.svg" alt="Github" width="32" height="32" />
											</a>
										</li>
										<li>
											<a className="inline-block" href="https://www.facebook.com/OrchidProtocol" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook" title="Facebook">
												<img src="/img/shared/social-facebook.svg" alt="Facebook" width="32" height="32" />
											</a>
										</li>
										<li>
											<a className="inline-block" href="https://www.youtube.com/channel/UCIH_BKBlNemsCzDhPYZBlHw" target="_blank" rel="noopener noreferrer" aria-label="Follow on YouTube" title="YouTube">
												<img src="/img/shared/social-youtube.svg" alt="YouTube" width="32" height="32" />
											</a>
										</li>
										<li>
											<a className="inline-block" href="https://www.linkedin.com/company/orchidprotocol" target="_blank" rel="noopener noreferrer" aria-label="Follow on LinkedIn" title="LinkedIn">
												<img src="/img/shared/social-linkedin.svg" alt="LinkedIn" width="32" height="32" />
											</a>
										</li>
									</ul>
								</section>
							</div>
						</footer>
					</div>

					<div className="maker-badge transition" id="maker-badge" style={{ visibility: "visible" }}>
						<div className="maker-badge__btn" id="maker-badge__btn">
							<img alt="" width="27" height="29" className="maker-badge__btn-img" src="/img/shared/our-values-icon.svg" />
							<span><Trans>Orchid's Values</Trans></span>
							<Link to="/about-us#values">&nbsp;</Link>
						</div>
					</div>
				</div>

			</>
		)
	}
}

export default TemplateWrapper
