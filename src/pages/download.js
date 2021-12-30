import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './download.scss'
import WhereOxt from '../components/where-oxt';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';
import { StaticImage } from "gatsby-plugin-image";
import { t } from 'i18next';

class Page extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			androidLink: "https://play.google.com/store/apps/details?id=net.orchid.Orchid&referrer=utm_source=website&utm_campaign=downloadpage",
			iOSLink: "https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=downloadpage&mt=8"
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
			<Layout>
				<WebsiteMeta
					title="VPN App for iOS, Android &amp; macOS | Orchid"
					description="Orchid is a VPN client, VPN service and advanced networking tool."
					image="/img/contact/social.png"
					location={this.props.location}
				/>
				<Helmet>
					<body className="download-page" />
				</Helmet>
				<div className="background-white">
					<section id="top">
						<h3><Trans i18n="@@DownloadHero__Title">Get the Orchid app</Trans></h3>
					</section>
				</div>

				<div id="instructions" className="background-white">
					<section className="download-images__wrapper">
						<div className="download-images__container">
							<h4><Trans i18n="@@DownloadAndroid__Title">Android</Trans></h4>
							<StaticImage src="../../static/img/download/phone-android.png" width={450} height={913} className="download-images__device" alt="" />
							<img src="/img/download/circle.svg" className="download-images__circle" alt="" width="325" height="325" />
							<ul className="download-instructions__list" style={{ listStyle: "none" }}>
								<Trans i18n="@@DownloadAndroid__Body">
									<li>
										<a href={this.state.androidLink} data-appstorelink>
											<img width="300" height="89" src={t("/img/shared/google-play-badge.svg")} alt={t("Get it on Google Play")} style={{ margin: "0.75rem 0", height: "auto", maxWidth: "160px", }} />
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
								</Trans>
							</ul>
						</div>
						<div className="download-images__container">
							<h4><Trans i18n="@@DownloadMacOS__Title">macOS</Trans></h4>
							<StaticImage src="../../static/img/download/laptop.png" width={800} height={418} className="download-images__device mac" alt="" />
							<img src="/img/download/circle.svg" className="download-images__circle" alt="" width="325" height="325" />
							<ul className="download-instructions__list">
								<li>
									<a href={this.state.iOSLink} data-appstorelink>
										<img alt="macOS" src="/img/shared/ios.png" width="1280" height="379" style={{ margin: "0.65rem auto", maxWidth: "160px" }} />
									</a>
								</li>
							</ul>
						</div>
						<div className="download-images__container">
							<h4><Trans i18n="@@DownloadiOS__Title">iOS</Trans></h4>
							<StaticImage src="../../static/img/download/phone-ios.png" width={450} height={913} className="download-images__device" alt="" />
							<img src="/img/download/circle.svg" className="download-images__circle" alt="" width="325" height="325" />
							<ul className="download-instructions__list">
								<li>
									<a href={this.state.iOSLink} data-appstorelink>
										<img alt="iOS" src="/img/shared/ios.png" width="1280" height="379" style={{ margin: "0.65rem auto", maxWidth: "160px" }} />
									</a>
								</li>
							</ul>
						</div>
					</section>
				</div>


				<div className="background-gray">
					<section className="download-opensource__section">
						<div className="download-opensource__text">
							<h2><Trans>Orchid is Open Source</Trans></h2>
							<br />
							<p><Trans>All of Orchid's code is Open Source and freely available to download on <a href="https://github.com/OrchidTechnologies">GitHub</a>. Use of Orchid's source code is governed by the AGPL copyleft Open Source license.</Trans></p>
							<p><Trans>The Orchid community develops code "in the open" by <a href="https://github.com/OrchidTechnologies/orchid/commits/master">continually pushing</a> changes that anyone can see on GitHub and <a href="https://github.com/OrchidTechnologies/orchid/releases">tagging releases</a> as appropriate. Orchid's repository uses the continuous integration feature from GitHub, making it easy for developers to fork our repo, make changes, and then get binaries back without having to compile locally. Lastly, the builds are reproducible, so anyone can produce builds from the source and verify they are the same builds we release.</Trans></p>
							<p><Trans>We invite all developers and any curious parties to explore Orchid's code.</Trans></p>
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
						<h2 className="color-primary gap-bot-thin"><Trans>Where to get OXT</Trans></h2>
						<WhereOxt />
					</section>
				</div>

				<app-newsletter-signup></app-newsletter-signup>

			</Layout>
		)
	}
}

export default Page
