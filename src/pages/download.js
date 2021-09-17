import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './download.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>VPN App for iOS, Android &amp; macOS | Orchid</title>
			<meta name="description" content="Orchid is a VPN client, VPN service and advanced networking tool." />
			<meta name="og:image" content="https://orchid.com/img/contact/social.png" />
		</Helmet>
		<div className="background-white">
			<section id="top">
				<h3 i18n="@@DownloadHero__Title">Get the Orchid app</h3>
			</section>
		</div>

		<div id="instructions" className="background-white">
			<section className="download-images__wrapper">
				<div className="download-images__container">
					<h4 i18n="@@DownloadAndroid__Title">Android</h4>
					<img src="/img/download/phone-1.png" className="download-images__device" alt="" />
					<img src="/img/download/circle.svg" className="download-images__circle" alt="" />
					<ul className="download-instructions__list" i18n="@@DownloadAndroid__Body" style={{ listStyle: "none" }}>
						<li>
							<a href="https://play.google.com/store/apps/details?id=net.orchid.Orchid&referrer=utm_source%3Dwebsite%26utm_campaign%3Ddownloadpage">
								<img width="160" i18n-src="@@GooglePlayBadgeURL" src="/img/shared/google-play-badge.svg" i18n-alt="@@GooglePlayBadgeAlt" alt="Get it on Google Play" style={{ margin: "0.75rem 0" }} />
							</a>
						</li>
						<li>
							- OR -
						</li>
						<li>
							<a href="https://github.com/OrchidTechnologies/orchid/releases">Download the APK from GitHub</a>
						</li>
						<li>
							(Or <a href="https://github.com/OrchidTechnologies/orchid/blob/master/app-android/">get the code</a> and compile it yourself!)
						</li>
					</ul>
				</div>
				<div className="download-images__container">
					<h4 i18n="@@DownloadiOS__Title">iOS</h4>
					<img src="/img/download/phone-2.png" className="download-images__device" alt="" />
					<img src="/img/download/circle.svg" className="download-images__circle" alt="" />
					<ul className="download-instructions__list" i18n="@@DownloadiOS__Body">
						<li>
							<a href="https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=downloadpage&mt=8">
								<img alt="iOS" src="/img/shared/ios.png" style={{ margin: "0.65rem auto", maxWidth: "160px" }} />
							</a>
						</li>
					</ul>
				</div>
				<div className="download-images__container">
					<h4 i18n="@@DownloadMacOS__Title">macOS</h4>
					<img src="/img/download/macbook.png" className="download-images__device mac" alt="" />
					<img src="/img/download/circle.svg" className="download-images__circle" alt="" />
					<ul className="download-instructions__list" i18n="@@DownloadMacOS__Body">
						<li>
							<a href="https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=downloadpage&mt=8">
								<img alt="macOS" src="/img/shared/ios.png" style={{ margin: "0.65rem auto", maxWidth: "160px" }} />
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>


		<div className="background-gray">
			<section className="download-opensource__section">
				<div className="download-opensource__text">
					<h2>Orchid is Open Source</h2>
					<br />
					<p>All of Orchid's code is Open Source and freely available to download on <a href="https://github.com/OrchidTechnologies">GitHub</a>. Use of Orchid's source code is governed by the AGPL copyleft Open Source license.</p>
					<p>The Orchid community develops code "in the open" by <a href="https://github.com/OrchidTechnologies/orchid/commits/master">continually pushing</a> changes that anyone can see on GitHub and <a href="https://github.com/OrchidTechnologies/orchid/releases">tagging releases</a> as appropriate. Orchid's repository uses the continuous integration feature from GitHub, making it easy for developers to fork our repo, make changes, and then get binaries back without having to compile locally. Lastly, the builds are reproducible, so anyone can produce builds from the source and verify they are the same builds we release.</p>
					<p>We invite all developers and any curious parties to explore Orchid's code.</p>
					<br />
					<br />
					<a href="https://github.com/OrchidTechnologies">
						<button className="btn-primary">
							<img alt="" src="/img/shared/social-github-white.svg" /> OrchidTechnologies
						</button>
					</a>
				</div>
				<img alt="" className="download-opensource__image" src="/img/download/integrated-bunny.svg" />

			</section>
		</div>

		<div className="bk-lavender">
			<section className="section-narrow hpad-wide vpad-wide z-index-1 center-text">
				<h2 className="color-primary gap-bot-thin">Where to get OXT</h2>
				<where-oxt></where-oxt>
			</section>
		</div>

		<app-newsletter-signup></app-newsletter-signup>

	</Layout>
)

export default Page
