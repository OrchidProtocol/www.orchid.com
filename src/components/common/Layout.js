import React from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'

import Navbar from './Navbar.js'
import '../../scss/styles.scss';
import './Layout.scss'

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
		return (
			<>
				<Helmet>
					<html lang={process.env.GATSBY_TARGET_LANG} />
					<body className={this.props.bodyClass} />
					<link rel="icon" type="image/ico" href="/favicon.ico" />
					<link rel="manifest" href="/manifest.webmanifest" />
					<meta name="theme-color" content="#5f45ba" />
				</Helmet>

				<Location>
					{({ location }) => {
						return <Helmet>
							<link rel="alternate" href={`https://orchid.com/ko${location.pathname}`} hreflang="ko" />
							<link rel="alternate" href={`https://orchid.com${location.pathname}`} hreflang="x-default" />
							<link rel="alternate" href={`https://orchid.com/ja${location.pathname}`} hreflang="ja" />
							<link rel="alternate" href={`https://orchid.com/zh${location.pathname}`} hreflang="zh" />
							<link rel="alternate" href={`https://orchid.com/id${location.pathname}`} hreflang="id" />
							<link rel="alternate" href={`https://orchid.com/ru${location.pathname}`} hreflang="ru" />

							{
								process.env.GATSBY_TARGET_LANG === "en" || !process.env.GATSBY_TARGET_LANG ?
									<meta rel="canonical" href={`https://orchid.com${location.pathname}`} /> :
									<meta rel="canonical" href={`https://orchid.com/${process.env.GATSBY_TARGET_LANG.toLowerCase()}${location.pathname}`} />
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
					}}></script>

					<Navbar />

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
										<li><b i18n="@@Navigation-Title-Apps">Apps</b></li>
										<li><a className="phantom-a" href={this.state.androidLink} i18n="@@Navigation-Android" data-appstorelink>Android</a></li>
										<li><a className="phantom-a" href={this.state.iOSLink} i18n="@@Navigation-iOS" data-appstorelink>iOS</a></li>
										<li><a className="phantom-a" href={this.state.iOSLink} i18n="@@Navigation-macOS" data-appstorelink>macOS</a></li>
										<li><a className="phantom-a" href="/join" i18n="@@Navigation-OrchidAccount">Orchid Account</a></li>
										<li><a className="phantom-a" href="/download" i18n="@@Navigation-Download">Download</a></li>
									</ul>
								</nav>
								<nav id="ft-nav-2">
									<ul id="ft-nav-2-list" className="phantom-list">
										<li><b i18n="@@Navigation-Title-Learn">Learn</b></li>
										<li><a className="phantom-a" href="/how-it-works" i18n="@@Navigation-HowItWorks">How it Works</a></li>
										<li><a className="phantom-a" href="/about-us" i18n="@@Navigation-AboutUs">About Us</a></li>
										<li><a className="phantom-a" href="/whitepaper/english.pdf" i18n="@@Navigation-Whitepaper">Whitepaper</a></li>
										<li><a className="phantom-a" href="/partners" i18n="@@Navigation-Partners">Partners</a></li>
										<li><a className="phantom-a" href="/faq" i18n="@@Navigation-FAQ">FAQ</a></li>
									</ul>
								</nav>
								<nav id="ft-nav-3">
									<ul id="ft-nav-3-list" className="phantom-list">
										<li><b i18n="@@Navigation-Title-Engage">Engage</b></li>
										<li><a className="phantom-a" href="/podcast" i18n="@@Navigation-Podcast">Podcast</a></li>
										<li><a className="phantom-a" href="https://blog.orchid.com/" i18n-href="@@Navigation-Blog-Link">Blog</a></li>
										<li><a className="phantom-a" href="/privacy-guardian" i18n="@@Navigation-PrivacyGuardians">Privacy Guardians</a></li>
										<li><a className="phantom-a" href="/events" i18n="@@Navigation-Events">Events</a></li>
										<li><a className="phantom-a" href="/contact" i18n="@@Navigation-Contact">Contact</a></li>
									</ul>
								</nav>
								<section>
									<header className="no-mobile make-me-purple">
										<strong i18n="@@NavigationFollowUs">Follow Us</strong>
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
							<span>Orchid's Values</span>
							<Link href="/about-us#values">&nbsp;</Link>
						</div>
					</div>
				</div>

			</>
		)
	}
}

export default TemplateWrapper
