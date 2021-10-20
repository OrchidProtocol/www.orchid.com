import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './get-orchid.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>VPN App | Orchid</title>
			<meta name="description" content="Orchid provides the best crypto powered VPN by harnessing the power of blockchain technology to ensure digital privacy." />
			<body className="get-orchid-page" />
		</Helmet>
		<div className="wavy-element-03"></div>

		<section className="hero__wrapper">
			<div className="hero__content center">
				<h2 className="page__header">Get Orchid in 2 easy steps!</h2>
				<p>All purchases are 100% covered by the in-app purchase refund policy. iOS/macOS purchases have 90 days to request a refund. For Google Play purchases, the refund window is 48 hours.</p>
			</div>
			<div className="hero__content">
				<h3>Step 1: Choose a starting amount for your Orchid account</h3>
				<p>Orchid accounts include 24/7 customer support, unlimited devices and are backed by the xDai cryptocurrency.</p>
			</div>
			<div className="wavy-element-02"></div>
			<div className="hero__cards">
				<div className="hero__card">
					<div className="card__header">
						~12GB
					</div>
					<div className="card__body">
						<h3>$0.99</h3>
						<b>
							One-time fee.
						</b>
						<p>
							Good for browsing and light activity.
							Refund policy covered by app stores.
						</p>
					</div>
				</div>
				<div className="hero__card center">
					<div className="card__header">
						~60GB
					</div>
					<div className="card__body">
						<h3>$4.99</h3>
						<b>
							One-time fee.
						</b>
						<p>
							Ideal size for medium-term, individual usage that includes browsing and light streaming. Refund policy covered by app stores.
						</p>
					</div>
				</div>
				<div className="hero__card">
					<div className="card__header">
						~240GB
					</div>
					<div className="card__body">
						<h3>$19.99</h3>
						<b>
							One-time fee.
						</b>
						<p>
							Bandwidth-heavy, long-term usage or shared accounts. Refund policy covered by app stores.
						</p>
					</div>
				</div>
			</div>
			<div className="hero__content disclaimer">
				<p>
					*Orchid is a bandwidth marketplace and the price per GB can fluctuate with market demands. Currently the price is $0.06/GB.
					<br />
					Orchid accounts purchased through the App stores are backed by the xDai crypto currency.
					<br />
					<a href="/oxt">Learn more</a>
				</p>
			</div>
			<div className="hero__content">
				<h3>Step 2: Pay in the Orchid app</h3>
				<p>Download the Orchid app and fund an account using an in-app purchase. Once funded, you can connect to the Orchid network.</p>
			</div>
			<div className="hero__content">
				<div className="platforms__container">
					<div className="download-images__container">
						<img src="/img/download/phone-1.png" width="434" height="796" className="download-images__device" alt="" />
						<img src="/img/download/circle.svg" width="387" height="387" className="download-images__circle" alt="" />
						<h4 i18n="@@DownloadAndroid__Title">Android</h4>
						<a href="https://play.google.com/store/apps/details?id=net.orchid.Orchid&referrer=utm_source%3Dwebsite%26utm_campaign%3Ddownloadpage" data-appstorelink>
							<img width="160" i18n-src="@@GooglePlayBadgeURL" src="/img/shared/google-play-badge.svg" i18n-alt="@@GooglePlayBadgeAlt" alt="Get it on Google Play" style={{ margin: "0.75rem 0" }} />
						</a>
					</div>
					<div className="download-images__container">
						<img src="/img/download/macbook.png" width="802" height="466" className="download-images__device mac" alt="" />
						<img src="/img/download/circle.svg" width="387" height="387" className="download-images__circle" alt="" />
						<h4 i18n="@@DownloadMacOS__Title">macOS</h4>
						<a href="https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=downloadpage&mt=8" data-appstorelink>
							<img alt="macOS" src="/img/shared/ios.png" style={{ margin: "0.65rem auto", maxWidth: "160px" }} />
						</a>
					</div>
					<div className="download-images__container">
						<img src="/img/download/phone-2.png" width="432" height="796" className="download-images__device" alt="" />
						<img src="/img/download/circle.svg" width="387" height="387" className="download-images__circle" alt="" />
						<h4 i18n="@@DownloadiOS__Title">iOS</h4>
						<a href="https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=downloadpage&mt=8" data-appstorelink>
							<img alt="iOS" src="/img/shared/ios.png" style={{ margin: "0.65rem auto", maxWidth: "160px" }} />
						</a>
					</div>
				</div>
			</div>
			<div className="hero__content">
				<div className="perks">
					<h3>Purchasing an Orchid account includes</h3>
					<div className="perks__row">
						<div className="perks__column">
							<div className="perks__item">24/7 customer support via email</div>
							<div className="perks__item">Apps for iOS, macOS, and Android</div>
							<div className="perks__item">Unlimited devices and sharing</div>
						</div>
						<div className="perks__column">
							<div className="perks__item">Open Source code that is trusted and audited</div>
							<div className="perks__item">No app tracking, website tracking or logging</div>
							<div className="perks__item">Not satisfied? Get a refund through the App stores, no questions asked!</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hero__content center">
				<p>- OR -</p>
				<p><a href="/join">Create a custom Orchid Account with your own crypto.</a></p>
			</div>
		</section>
	</Layout>
)

export default Page
