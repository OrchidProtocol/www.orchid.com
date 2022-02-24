import React from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/react'
import Navbar from './Navbar.js'
import './Layout.scss'
import { Link, Trans } from 'gatsby-plugin-react-i18next';
import FooterSocialIcons from './FooterSocialIcons.js'

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
					<style>{`
					@font-face {
						font-family: "Headline One";
						font-display: optional;
						src: url("/fonts/HeadlineOne.ttf") format("truetype");
					}

					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 400;
						font-display: optional;
						src: url(/fonts/Baloo/Baloo2-Regular.ttf) format("truetype");
					}
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 700;
						font-display: optional;
						src: url(/fonts/Baloo/Baloo2-SemiBold.ttf) format("truetype");
					}
					/*@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 800;
						font-display: optional;
						src: url(/fonts/Baloo/Baloo2-Bold.ttf) format("truetype");
					}
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 900;
						font-display: optional;
						src: url(/fonts/Baloo/Baloo2-ExtraBold.ttf) format("truetype");
					}*/`.replace('\t', '').replace('\n', '')}</style>
				</Helmet>

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
										<a className="phantom-a" href="/privacy-policy"><Trans>Privacy Policy</Trans></a> |
										<a className="phantom-a" href="/service-terms"><Trans>Terms of Service</Trans></a>
									</p>
								</section>
								<nav id="ft-nav">
									<ul id="ft-nav-list" className="phantom-list">
										<li><b><Trans>Apps</Trans></b></li>
										<li><a className="phantom-a" href={this.state.androidLink} data-appstorelink><Trans>Android</Trans></a></li>
										<li><a className="phantom-a" href={this.state.iOSLink} data-appstorelink><Trans>iOS</Trans></a></li>
										<li><a className="phantom-a" href={this.state.iOSLink} data-appstorelink><Trans>macOS</Trans></a></li>
										<li><a className="phantom-a" href="/join"><Trans>Orchid Account</Trans></a></li>
										<li><a className="phantom-a" href="/download"><Trans>Download</Trans></a></li>
									</ul>
								</nav>
								<nav id="ft-nav-2">
									<ul id="ft-nav-2-list" className="phantom-list">
										<li><b><Trans>Learn</Trans></b></li>
										<li><a className="phantom-a" href="/how-it-works"><Trans>How it Works</Trans></a></li>
										<li><a className="phantom-a" href="/about-us"><Trans>About Us</Trans></a></li>
										<li><a className="phantom-a" href="/whitepaper/english.pdf"><Trans>Whitepaper</Trans></a></li>
										<li><a className="phantom-a" href="/partners"><Trans>Partners</Trans></a></li>
										<li><a className="phantom-a" href="/faq"><Trans>FAQ</Trans></a></li>
									</ul>
								</nav>
								<nav id="ft-nav-3">
									<ul id="ft-nav-3-list" className="phantom-list">
										<li><b><Trans>Engage</Trans></b></li>
										<li><a className="phantom-a" href="/podcast"><Trans>Podcast</Trans></a></li>
										<li><a className="phantom-a" href={t("https://blog.orchid.com/")}>Blog</a></li>
										<li><a className="phantom-a" href="/privacy-guardian"><Trans>Privacy Guardians</Trans></a></li>
										<li><a className="phantom-a" href="/contact"><Trans>Contact</Trans></a></li>
									</ul>
								</nav>
								<section>
									<header className="no-mobile make-me-purple">
										<strong><Trans>Follow Us</Trans></strong>
									</header>
									<ul id="ft-social-list" className="phantom-list">
										<FooterSocialIcons />
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
