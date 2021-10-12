import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './join.scss'
import WhereOXT from '../components/where-oxt';

const Page = () => (
	<Layout>
		<Helmet>
			<title>Get Orchid | Orchid</title>
			<meta name="description" content="We believe the internet should be open and accessible to everyone, which is why we\'re building a truly open source network overlay VPN." />
			<meta name="og:image" content="https://www.orchid.com/img/join/social.jpg" />
			<body className="join-page" />
		</Helmet>
		<div className="join background-white">
			<section className="section-med hpad-thin pad-top-wide z-index-1">
				<div className="join__grid">
					<div className="join__intro">
						<h3 className="gap-bot-thin" i18n="@@JoinHero__Title">Orchid Account Set-up</h3>
						<p i18n="@@JoinHero__P1">To start using Orchid, you need an Orchid account. There are three ways to get access to an Orchid account right now:</p>

						<ul i18n="@@JoinHero__UL">
							<li>Someone could share one with you</li>
							<li>You can buy an account on iOS</li>
							<li>You can create an account with OXT</li>
						</ul>

						<p i18n="@@JoinHero__P2">This set-up guide will cover the process to create an account using our web3-based dapp and your own OXT. If you already have a QR code for an existing Orchid account, you can skip to step 4 of this guide.</p>
						<p i18n="@@JoinHero__P3">Check out Coinbase’s <a href="https://www.coinbase.com/earn">Earn Campaign</a> for an opportunity to earn OXT while learning about Orchid!</p>
					</div>
					<div className="join__bunny-container">
						<img src="/img/join/intro_bunny.svg" alt="" />
					</div>
				</div>
			</section>
		</div>

		<div className="join-steps bk-lavender pad-bot-wide">
			<section className="join-steps__grid section-wide">
				<div className="join-step step-1">
					<div className="join-step__content">
						<div className="join-number"><span className="join-number__label" i18n="@@Join__Step">Step</span> <span className="join-number__numeral">1</span></div>
						<h3 className="join-step__title color-gray" i18n="@@JoinStep1__title">Create a new Ethereum wallet</h3>
						<p i18n="@@JoinStep1__p1">
							We recommend using a new Ethereum wallet address for Orchid that is not linked to other Ethereum products or services you use.
						</p>
						<p i18n="@@JoinStep1__p2">
							We test with <a href="https://metamask.io">Metamask</a>, which is a great choice for an Ethereum wallet.
						</p>
						<a href="https://metamask.io">
							<img src="/img/join/metamask.svg" alt="" />
						</a>
					</div>
				</div>
				<div className="join-step step-2">
					<div className="join-step__content">
						<div className="join-number"><span className="join-number__label" i18n="@@Join__Step">Step</span> <span className="join-number__numeral">2</span></div>
						<h3 className="join-step__title color-gray" i18n="@@JoinStep2__title">Load the Orchid DApp</h3>
						<p i18n="@@JoinStep2__p1">
							Load <a href="https://account.orchid.com/">account.orchid.com</a> in your wallet’s browser or your preferred browser with a wallet plugin enabled. It’s a good idea to bookmark this page for the future.
						</p>
						<br />
						<p i18n="@@JoinStep2__p2">
							You might be prompted to “connect” your wallet to the Orchid DApp so it can read the wallet account balances.
						</p>
					</div>
				</div>
				<div className="join-step step-3">
					<div className="join-step__content">
						<div className="join-number"><span className="join-number__label" i18n="@@Join__Step">Step</span> <span className="join-number__numeral">3</span></div>
						<h3 className="join-step__title color-gray" i18n="@@JoinStep3__title">Add funds to your wallet</h3>
						<p i18n="@@JoinStep3__p1">
							Adjust your account to see how much OXT you need for the efficiency you want. Also note the amount of ETH needed for network fees.
						</p>
						<p i18n="@@JoinStep3__p2">
							You will need both of those amounts in your attached wallet in order to create and fund the account. See our <a href="/join#get-oxt">participating exchanges</a> for acquiring OXT.
						</p>
					</div>
				</div>
				<div className="join-step step-4">
					<div className="join-step__content">
						<div className="join-number"><span className="join-number__label" i18n="@@Join__Step">Step</span> <span className="join-number__numeral">4</span></div>
						<h3 className="join-step__title color-gray" i18n="@@JoinStep4__title">Create your account</h3>
						<p i18n="@@JoinStep4__p1">A Signer address is needed to create the account. Generate a Signer in the DApp, or generate one in the app (Android only) and paste it in.</p>

						<p i18n="@@JoinStep4__p2">Hit <b>Create account</b> to submit both transactions to your wallet for approval. Approve both transactions and then wait for them to complete on Ethereum.</p>
					</div>
				</div>
				<div className="join-step step-5">
					<div className="join-step__content">
						<div className="join-number"><span className="join-number__label" i18n="@@Join__Step">Step</span> <span className="join-number__numeral">5</span></div>
						<h3 className="join-step__title color-gray" i18n="@@JoinStep5__title">Connect your account and app</h3>

						<p i18n="@@JoinStep5__p1">Download the Orchid app for <a href="https://play.google.com/store/apps/details?id=net.orchid.Orchid&referrer=utm_source%3Dwebsite%26utm_campaign%3Ddownloadpage">Android</a> or <a href="https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=downloadpage&mt=8">iOS</a>.</p>
						<div className="app-store-badges vgap-thin">
							<a className="app-store-badge" href="https://play.google.com/store/apps/details?id=net.orchid.Orchid&referrer=utm_source%3Dwebsite%26utm_campaign%3Ddownloadpage"><img width="200px" src="/img/shared/google-play-badge.svg" i18n-src="@@GooglePlayBadgeURL" alt="Google Play" /></a>
							<a className="app-store-badge" href="https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=downloadpage&mt=8"><img src="/img/shared/ios.png" alt="iOS" /></a>
						</div>
						<p i18n="@@JoinStep5__p3">
							Open the app, tap Manage Profile, create a New Hop and then Link Orchid Account to pay for VPN service.
						</p>
						<p i18n="@@JoinStep5__p4">
							That’s it! You’re ready to start exploring freely. Stay curious out there!
						</p>
					</div>
				</div>
			</section>
		</div>

		<div className="bk-faint-gray" id="get-oxt">
			<section className="section-narrow hpad-wide vpad-wide z-index-1 center-text">
				<h2 className="color-primary gap-bot-thin" i18n="@@WhereToGetOXT">Where to get OXT?</h2>
				<WhereOXT />
			</section>
		</div>

		<div className="more-questions background-white">
			<section className="section-med hpad-wide vpad-xl center-text z-index-1">
				<h3 i18n="@@MoreQuestions__Heading">More questions?</h3>
				<p className="medium" i18n="@@MoreQuestions__Subhead">
					Check out the FAQ
				</p>
				<a href="/faq/"><button className="btn-secondary btn-fixed z-index-1" i18n="@@HomeNextLevel__Whitepaper">FAQ</button></a>
			</section>
			<div className="home-satellite-4"></div>
		</div>

		<app-newsletter-signup-features></app-newsletter-signup-features>
	</Layout>
)

export default Page
