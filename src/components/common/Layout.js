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
						font-display: block;
						src: url("/fonts/HeadlineOne.ttf") format("truetype");
					}

					/* devanagari */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 400;
						font-display: block;
						src: url(/fonts/Baloo/wXKrE3kTposypRyd51ncANwr.woff2) format("woff2");
						unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
							U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
					}
					/* vietnamese */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 400;
						font-display: block;
						src: url(/fonts/Baloo/wXKrE3kTposypRyd51fcANwr.woff2) format("woff2");
						unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
							U+01AF-01B0, U+1EA0-1EF9, U+20AB;
					}
					/* latin-ext */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 400;
						font-display: block;
						src: url(/fonts/Baloo/wXKrE3kTposypRyd51bcANwr.woff2) format("woff2");
						unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
							U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
					}
					/* latin */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 400;
						font-display: block;
						src: url(/fonts/Baloo/wXKrE3kTposypRyd51jcAA.woff2) format("woff2");
						unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
							U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
							U+FEFF, U+FFFD;
					}
					/* devanagari */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 500;
						font-display: block;
						src: url(/fonts/Baloo/wXKuE3kTposypRyd76v_FeIKmE8y.woff2) format("woff2");
						unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
							U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
					}
					/* vietnamese */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 500;
						font-display: block;
						src: url(/fonts/Baloo/wXKuE3kTposypRyd76v_FewKmE8y.woff2) format("woff2");
						unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
							U+01AF-01B0, U+1EA0-1EF9, U+20AB;
					}
					/* latin-ext */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 500;
						font-display: block;
						src: url(/fonts/Baloo/wXKuE3kTposypRyd76v_Fe0KmE8y.woff2) format("woff2");
						unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
							U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
					}
					/* latin */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 500;
						font-display: block;
						src: url(/fonts/Baloo/wXKuE3kTposypRyd76v_FeMKmA.woff2) format("woff2");
						unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
							U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
							U+FEFF, U+FFFD;
					}
					/* devanagari */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 600;
						font-display: block;
						src: url(/fonts/Baloo/wXKuE3kTposypRyd74f4FeIKmE8y.woff2) format("woff2");
						unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
							U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
					}
					/* vietnamese */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 600;
						font-display: block;
						src: url(/fonts/Baloo/wXKuE3kTposypRyd74f4FewKmE8y.woff2) format("woff2");
						unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
							U+01AF-01B0, U+1EA0-1EF9, U+20AB;
					}
					/* latin-ext */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 600;
						font-display: block;
						src: url(/fonts/Baloo/wXKuE3kTposypRyd74f4Fe0KmE8y.woff2) format("woff2");
						unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
							U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
					}
					/* latin */
					@font-face {
						font-family: "Baloo 2";
						font-style: normal;
						font-weight: 600;
						font-display: block;
						src: url(/fonts/Baloo/wXKuE3kTposypRyd74f4FeMKmA.woff2) format("woff2");
						unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
							U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
							U+FEFF, U+FFFD;
					}
					`}
					</style>
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
