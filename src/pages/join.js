import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './join.scss'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'
import PricingWidget from '../components/PricingWidget'
import NewsletterSignup from '../components/newsletter-signup-core';
import { css } from '@emotion/react'
import YouTubeEmbed from '../components/YouTubeEmbed';

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
				title="Get Orchid | Orchid"
				description="We believe the internet should be open and accessible to everyone, which is why we're building a truly open source network overlay VPN."
				image="/img/join/social.jpg"
				location={props.location}
			/>
			<Helmet>
				<body className="join-page" />
			</Helmet>
			<div className="join background-white">
				<section className="section-med hpad-thin pad-top-wide z-index-1">
					<div className="join__grid">
						<div className="join__intro">
							<h1 className="gap-bot-thin"><Trans>Orchid Accounts</Trans></h1>
							<p>
								<Trans>To start using Orchid, you will need a funded account. Orchid accounts are governed by a smart contract that holds funds for users and sends payments as necessary to providers for service.</Trans>
							</p>
							<br />
							<p>
								<Trans>Accounts require a funder wallet and Orchid Identity pair that is managed between the <Link to="/download">Orchid app</Link> and the user’s Ethereum wallet. Funds are moved in and out of the account using the Ethereum wallet and funds are spent using the Orchid Identity in the Orchid app.</Trans>
							</p>
							<br />
							<p>
								<Trans>Orchid supports users self-funding accounts with their own cryptocurrency through the <a href="https://account.orchid.com/">Orchid DApp</a> and also has a simplified fiat on-ramp within the Orchid app called Prepaid Access Credits, which uses a wallet controlled by Orchid Labs.</Trans>
							</p>
						</div>
						<div className="join__bunny-container">
							<img src="/img/join/intro_bunny.svg" alt="" />
						</div>
					</div>
					<div>
						<h3><Trans>Prepaid Access Credits</Trans></h3>
						<p>
							<Trans>Users can add funds to an Orchid Identity in the Orchid app with a simple in-app purchase using their native fiat currency which is then converted to on-chain funds. These accounts can only spend funds with Orchid’s preferred providers. Orchid Labs custodies the funding Ethereum wallet, so the funds can never be withdrawn by the user.</Trans>
						</p>
						<h3><Trans>Self-funded Crypto Accounts</Trans></h3>
						<p>
							<Trans>To add your own crypto to an Orchid account that you manage yourself, you can move funds into an Orchid Identity using the <a href="https://account.orchid.com/">Orchid DApp</a>. You will need to move enough funds to accommodate both a balance and deposit for the account. The balance is the spendable amount that can be sent to providers. The deposit size determines the overall amount paid in L1 network fees while sending nanopayments and scales up and down with network gas fees. The deposit is also “locked” and requires a 24 hour wait period for these funds to be withdrawn.</Trans>
						</p>
						<br />
						<p>
							<Trans>Official latest contract address on all chains: <a href="https://blockscan.com/address/0x6db8381b2b41b74e17f5d4eb82e8d5b04dda0a82">OrchidLotteryV1</a></Trans>
						</p>
						<br />
						<p>
							<Trans>Official hosted Orchid dapp: <a href="https://account.orchid.com/">account.orchid.com</a></Trans>
						</p>
						<h3><Trans>L1 Fees and Deposit Size Chart</Trans></h3>
						<p>
							<Trans>The network that houses the Orchid account charges fees to interface with the smart contract. There is a one-time gas fee for adding/moving/withdrawing funds as well as an ongoing L1 fee which is determined by the account’s deposit size.</Trans>
						</p>
						<br />
						<PricingWidget />
						<br />
						<h3 className='md:text-center'><Trans>Step-by-step Orchid Account Creation</Trans></h3>
						<YouTubeEmbed id="WLKjCaX6X_E" />
					</div>
				</section>
			</div>

			<div className="join-steps">
				<section className="join-steps__grid section-wide">
					<div className="join-step step-1">
						<div className="join-number"><span className="join-number__numeral">1</span></div>
						<div className="join-step__content">
							<h3><Trans>Create a new Ethereum wallet</Trans></h3>
							<p>
								<Trans>We recommend using a <a href="https://docs.orchid.com/en/latest/orchid-dapp/#why-do-i-need-a-new-ethereum-wallet-why-cant-i-use-my-main-wallet">new Ethereum wallet address</a> for Orchid that is not linked to other Ethereum products or services you use. We test with <a href="https://metamask.io/">Metamask</a>.</Trans>
							</p>
						</div>
					</div>
					<div className="join-step step-2">
						<div className="join-number"><span className="join-number__numeral">2</span></div>
						<div className="join-step__content">
							<h3><Trans>Select a chain and add funds</Trans></h3>
							<p>
								<Trans>Refer to the deposit size chart above to compare the different supported blockchains and pick one. Add that network to your Metamask wallet by visiting <a href="https://chainlist.org/">ChainList.org</a>, searching for that chain, connecting your wallet and then adding the network details.</Trans>
							</p>

							<p>
								<Trans>Acquire enough funds for the recommended deposit, account creation L1 fee, and balance. The balance should be at least as large as the deposit. Note that it is best to use an exchange that allows withdraws directly to that chain or else you will have to bridge funds and incur excessive Ethereum gas fees.</Trans>
							</p>

							<p>
								<Trans>You should now have your wallet connected to the chain you want to use and enough funds in that wallet. Copy your wallet address down as the app portion of the set-up will require it.</Trans>
							</p>
						</div>
					</div>
					<div className="join-step step-3">
						<div className="join-number"><span className="join-number__numeral">3</span></div>
						<div className="join-step__content">
							<h3><Trans>Create an account in the Orchid App</Trans></h3>
							<p>
								<Trans>Download the Orchid app for <a href={androidLink} data-appstorelink>Android</a>, <a href={iOSLink} data-appstorelink>iOS</a> or <a href={iOSLink} data-appstorelink>macOS</a></Trans>
							</p>
							<div className="join-apps">
								<a href={androidLink} data-appstorelink>
									<img className='inline-block w-auto my-1' width="300" height="89" i18n-src="@@GooglePlayBadgeURL" src="/img/shared/google-play-badge.svg" i18n-alt="@@GooglePlayBadgeAlt" alt="Get it on Google Play" style={{ height: "40px" }} />
								</a>
								<a href={iOSLink} data-appstorelink>
									<img className='inline-block w-auto my-1' alt="iOS" src="/img/shared/ios.png" style={{ height: "40px" }} />
								</a>
								<a href={iOSLink} data-appstorelink>
									<img className='inline-block w-auto my-1' alt="macOS" src="/img/shared/macos.svg" style={{ height: "40px" }} />
								</a>
							</div>
							<p>
								<Trans>Open the app, tap “I’ll do this later” to minimize the quick fund screen. Tap the “Circuit” card in the lower right to bring up the circuit builder. Tap “Add Hop”, then “Orchid Account”, and then select an Orchid Identity. Paste in your Ethereum wallet address from Step 2 and select the appropriate chain. Tap “Save”.</Trans>
							</p>
							<p>
								<Trans>Now you will have an empty Orchid account that is paying for a single hop circuit. Tap the hop to enter the hop details screen. Tap “Copy” to copy the Orchid Identity which you need for the dapp.</Trans>
							</p>
							<p>
								<Trans>Tap back twice to get to the homescreen. You should have an empty account displayed and the Orchid Identity copied to your clipboard.</Trans>
							</p>
						</div>
					</div>
					<div className="join-step step-4">
						<div className="join-number"><span className="join-number__numeral">4</span></div>
						<div className="join-step__content">
							<h3><Trans>Connect your wallet and fund the account</Trans></h3>
							<p>
								<Trans>Load <a href="https://account.orchid.com/">account.orchid.com</a> in your wallet’s browser or your preferred browser with a wallet plugin enabled. It’s a good idea to bookmark this page for the future.</Trans>
							</p>

							<p>
								<Trans>You might be prompted to “connect” your wallet to the Orchid DApp so it can read the wallet account balances.</Trans>
							</p>

							<p>
								<Trans>Input the desired amount of funds for the balance and deposit. Tap “Add Funds”.</Trans>
							</p>

							<p>
								<Trans>Approve the transaction and wait for it to be confirmed.</Trans>
							</p>

							<p>
								<Trans>That’s it! You can now see in the app that the funds have moved into your account. You can hit the connect button to use the Orchid app!</Trans>
							</p>
						</div>
					</div>
				</section>
			</div>

			<div className="more-questions">
				<section className="section-med hpad-wide vpad-xl center-text z-index-1">
					<h2><Trans>Questions?</Trans></h2>
					<p className="medium">
						<Trans>Check out the FAQ</Trans>
					</p>
					<Link to="/faq/"><button className="btn-secondary btn-fixed z-index-1"><Trans>FAQ</Trans></button></Link>
				</section>
				<div className="home-satellite-4"></div>
			</div>

			<div css={css`
					text-align: center;
					box-shadow: 0px 4px 24px 0px #00000026;
					padding: 2rem;
					border-radius: 2rem;
					@media (max-width: 1000px) {
						border-radius: 1rem;
						padding: 1rem;
					}
					margin: 2rem auto;
					max-width: 750px;
					width: 95%;
					box-sizing: border-box;
				`}>
				<h3><Trans>Let's Stay Connected</Trans></h3>
				<p><Trans>Get the Orchid Onlooker newsletter for updates and privacy news</Trans></p>
				<NewsletterSignup t={t} />
			</div>
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