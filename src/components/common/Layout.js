import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/react'
import Navbar from './Navbar.js'
import './Layout.scss'
import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
import FooterSocialIcons from './FooterSocialIcons.js'

const BebasNeueLanguages = [
	'id', 'it', 'fr', 'pt', 'ptbr', 'ru', 'es', 'tr'
]
const MPlusRoundedLanguages = [
	'ja',
]

const TemplateWrapper = (props) => {
	const { t } = props;
	const { language } = useI18next();

	const [androidLink, setAndroidLink] = useState("https://play.google.com/store/apps/details?id=net.orchid.Orchid&referrer=utm_source=website&utm_campaign=websitefooter");
	const [iOSLink, setiOSLink] = useState("https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=websitefooter&mt=8");
	useEffect(() => {
		setAndroidLink(window.addUTMParameters(androidLink));
		setiOSLink(window.addUTMParameters(iOSLink));
	}, [])

	let styleString = `
		@font-face {
			font-family: "Baloo 2";
			font-style: normal;
			font-weight: 400;
			font-display: swap;
			src: url(/fonts/Baloo/Baloo2-Regular.ttf) format("truetype");
		}
		@font-face {
			font-family: "Baloo 2";
			font-style: normal;
			font-weight: 700;
			font-display: swap;
			src: url(/fonts/Baloo/Baloo2-SemiBold.ttf) format("truetype");
		}
		/*@font-face {
			font-family: "Baloo 2";
			font-style: normal;
			font-weight: 800;
			font-display: swap;
			src: url(/fonts/Baloo/Baloo2-Bold.ttf) format("truetype");
		}
		@font-face {
			font-family: "Baloo 2";
			font-style: normal;
			font-weight: 900;
			font-display: swap;
			src: url(/fonts/Baloo/Baloo2-ExtraBold.ttf) format("truetype");
		}*/

		@font-face {
			font-family: "Headline One";
			font-display: swap;
			src: url("/fonts/HeadlineOne.ttf") format("truetype");
		}
	`.replace(/\t/g, '').replace(/\n/g, '');

	let preload = <link rel="preload" href="/fonts/HeadlineOne.ttf" as="font" type="font/ttf" crossorigin />;

	if (MPlusRoundedLanguages.indexOf(language) >= 0) {
		styleString = styleString.replace('HeadlineOne.ttf', 'M_PLUS_Rounded/MPLUSRounded1c-Black.ttf');
		preload = <link rel="preload" href="/fonts/M_PLUS_Rounded/MPLUSRounded1c-Black.ttf" as="font" type="font/ttf" crossorigin />;
	}
	if (BebasNeueLanguages.indexOf(language) >= 0) {
		styleString = styleString.replace('HeadlineOne.ttf', 'BebasNeue/BebasNeue-Regular.ttf');
		preload = <link rel="preload" href="/fonts/BebasNeue/BebasNeue-Regular.ttf" as="font" type="font/ttf" crossorigin />;
	}

	return (
		<>
			<Helmet>
				<body className={props.bodyClass} />
				<link rel="icon" type="image/ico" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.webmanifest" />
				<meta name="theme-color" content="#5f45ba" />
				<link rel="preload" href="/fonts/Baloo/Baloo2-Regular.ttf" as="font" type="font/ttf" crossorigin />
				<link rel="preload" href="/fonts/Baloo/Baloo2-SemiBold.ttf" as="font" type="font/ttf" crossorigin />
				{/*<link rel="preload" href="/fonts/Baloo/Baloo2-Bold.ttf" as="font" type="font/ttf" crossorigin />
				<link rel="preload" href="/fonts/Baloo/Baloo2-ExtraBold.ttf" as="font" type="font/ttf" crossorigin />*/}
				{preload}
				<style>{styleString}</style>
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
						font-size: 18px;
					`}>
					{/* All the main content gets inserted here, index.js, post.js */}
					{props.children}
				</main>

				<div id="ft-root" className="bk-white pos-relative overflow-hidden">
					<div className="wavy"></div>
					<footer id="footer" className="section-med hpad-wide">
						<div id="ft-layout">
							<section id="ft-logo">
								<img width="149px" height="39px" alt="" src="/img/shared/orchid-logo-text.svg" />
								<p>&copy; {new Date().getFullYear()} Orchid Labs Inc.</p>
								<p className="privacy-terms-links">
									<Link className="phantom-a" to="/privacy-policy/"><Trans>Privacy Policy</Trans></Link> |
									<Link className="phantom-a" to="/service-terms/"><Trans>Terms of Service</Trans></Link>
								</p>
							</section>
							<nav id="ft-nav">
								<ul id="ft-nav-list" className="phantom-list">
									<li><b><Trans>Apps</Trans></b></li>
									<li><a className="phantom-a" href={androidLink} data-appstorelink><Trans>Android</Trans></a></li>
									<li><a className="phantom-a" href={iOSLink} data-appstorelink><Trans>iOS</Trans></a></li>
									<li><a className="phantom-a" href={iOSLink} data-appstorelink><Trans>macOS</Trans></a></li>
									<li><Link className="phantom-a" to="/download"><Trans>Download</Trans></Link></li>
									<li><a className="phantom-a" href="https://account.orchid.com/"><Trans>Orchid Account</Trans></a></li>
								</ul>
							</nav>
							<nav id="ft-nav-2">
								<ul id="ft-nav-2-list" className="phantom-list">
									<li><b><Trans>Learn</Trans></b></li>
									<li><Link className='phantom-a' to='/join/'><Trans>Create Account</Trans></Link></li>
									<li><Link className="phantom-a" to="/how-it-works/"><Trans>How it Works</Trans></Link></li>
									<li><Link className="phantom-a" to="/about-us/"><Trans>About Us</Trans></Link></li>
									<li><a className="phantom-a" href="/whitepaper/english.pdf"><Trans>Whitepaper</Trans></a></li>
									<li><Link className="phantom-a" to="/partners/"><Trans>Partners</Trans></Link></li>
									<li><Link className="phantom-a" to="/faq/"><Trans>FAQ</Trans></Link></li>
								</ul>
							</nav>
							<nav id="ft-nav-3">
								<ul id="ft-nav-3-list" className="phantom-list">
									<li><b><Trans>Engage</Trans></b></li>
									<li><Link className="phantom-a" to="/podcast/"><Trans>Podcast</Trans></Link></li>
									<li><a className="phantom-a" href={t("https://blog.orchid.com/")}><Trans>Blog</Trans></a></li>
									<li><Link className="phantom-a" to="/contact/"><Trans>Contact</Trans></Link></li>
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

export default TemplateWrapper
