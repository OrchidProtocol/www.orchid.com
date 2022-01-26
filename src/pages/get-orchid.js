import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'
import './get-orchid.scss'

function Page(props) {
	const [androidLink, setAndroidLink] = useState("https://play.google.com/store/apps/details?id=net.orchid.Orchid&referrer=utm_source=website&utm_campaign=join-page")
	const [iOSLink, setiOSLink] = useState("https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=join-page&mt=8")

	useEffect(() => {
		setAndroidLink(window.addUTMParameters(androidLink));
		setiOSLink(window.addUTMParameters(iOSLink));
	}, [androidLink, iOSLink]);

	const { t } = useTranslation();

	return (
		<Layout t={t}>
			<WebsiteMeta
				title={t("VPN App | Orchid")}
				description={t("Orchid provides the best crypto powered VPN by harnessing the power of blockchain technology to ensure digital privacy.")}
				location={props.location}
			/>
			<Helmet>
				<body className="get-orchid-page" />
			</Helmet>
			<div className="wavy-element-03"></div>

			<section className="hero__wrapper">
				<div className="hero__content center">
					<h2 className="page__header"><Trans>Get Orchid in 2 easy steps!</Trans></h2>
					<p><Trans>All purchases are 100% covered by the in-app purchase refund policy. iOS/macOS purchases have 90 days to request a refund. For Google Play purchases, the refund window is 48 hours.</Trans></p>
				</div>
				<div className="hero__content">
					<h3><Trans>Step 1: Choose a starting amount for your Orchid account</Trans></h3>
					<p><Trans>Orchid accounts include 24/7 customer support, unlimited devices and are backed by the xDai cryptocurrency.</Trans></p>
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
								<Trans>One-time fee.</Trans>
							</b>
							<p>
								<Trans>Good for browsing and light activity. Refund policy covered by app stores.</Trans>
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
								<Trans>One-time fee.</Trans>
							</b>
							<p>
								<Trans>Ideal size for medium-term, individual usage that includes browsing and light streaming. Refund policy covered by app stores.</Trans>
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
								<Trans>One-time fee.</Trans>
							</b>
							<p>
								<Trans>Bandwidth-heavy, long-term usage or shared accounts. Refund policy covered by app stores.</Trans>
							</p>
						</div>
					</div>
				</div>
				<div className="hero__content disclaimer">
					<p>
						<Trans>*Orchid is a bandwidth marketplace and the price per GB can fluctuate with market demands. Currently the price is $0.06/GB.</Trans>
						<br />
						<Trans>Orchid accounts purchased through the App stores are backed by the xDai crypto currency.</Trans>
						<br />
						<Link to="/oxt"><Trans>Learn more</Trans></Link>
					</p>
				</div>
				<div className="hero__content">
					<h3><Trans>Step 2: Pay in the Orchid app</Trans></h3>
					<p><Trans>Download the Orchid app and fund an account using an in-app purchase. Once funded, you can connect to the Orchid network.</Trans></p>
				</div>
				<div className="hero__content">
					<div className="platforms__container">
						<div className="download-images__container">
							<img src="/img/download/phone-1.png" width="434" height="796" className="download-images__device" alt="" />
							<img src="/img/download/circle.svg" width="387" height="387" className="download-images__circle" alt="" />
							<h4><Trans>Android</Trans></h4>
							<a href={androidLink} data-appstorelink>
								<img width="160" src={t("/img/shared/google-play-badge.svg")} alt={t("Get it on Google Play")} style={{ margin: "0.75rem 0" }} />
							</a>
						</div>
						<div className="download-images__container">
							<img src="/img/download/macbook.png" width="802" height="466" className="download-images__device mac" alt="" />
							<img src="/img/download/circle.svg" width="387" height="387" className="download-images__circle" alt="" />
							<h4><Trans>macOS</Trans></h4>
							<a href={iOSLink} data-appstorelink>
								<img alt="macOS" src="/img/shared/ios.png" style={{ margin: "0.65rem auto", maxWidth: "160px" }} />
							</a>
						</div>
						<div className="download-images__container">
							<img src="/img/download/phone-2.png" width="432" height="796" className="download-images__device" alt="" />
							<img src="/img/download/circle.svg" width="387" height="387" className="download-images__circle" alt="" />
							<h4><Trans i18nKey="@@DownloadiOS__Title">iOS</Trans></h4>
							<a href={iOSLink} data-appstorelink>
								<img alt="iOS" src="/img/shared/ios.png" style={{ margin: "0.65rem auto", maxWidth: "160px" }} />
							</a>
						</div>
					</div>
				</div>
				<div className="hero__content">
					<div className="perks">
						<h3><Trans>Purchasing an Orchid account includes</Trans></h3>
						<div className="perks__row">
							<div className="perks__column">
								<div className="perks__item"><Trans>24/7 customer support via email</Trans></div>
								<div className="perks__item"><Trans>Apps for iOS, macOS, and Android</Trans></div>
								<div className="perks__item"><Trans>Unlimited devices and sharing</Trans></div>
							</div>
							<div className="perks__column">
								<div className="perks__item"><Trans>Open Source code that is trusted and audited</Trans></div>
								<div className="perks__item"><Trans>No app tracking, website tracking or logging</Trans></div>
								<div className="perks__item"><Trans>Not satisfied? Get a refund through the App stores, no questions asked!</Trans></div>
							</div>
						</div>
					</div>
				</div>
				<div className="hero__content center">
					<p><Trans>- OR -</Trans></p>
					<p><Link to="/join"><Trans>Create a custom Orchid Account with your own crypto.</Trans></Link></p>
				</div>
			</section>
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