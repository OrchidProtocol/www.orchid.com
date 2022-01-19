import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './join.scss'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'
import PricingWidget from '../components/PricingWidget'
import NewsletterSignup from '../components/newsletter-signup-core';
import { css } from '@emotion/react'

class Page extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			androidLink: "https://play.google.com/store/apps/details?id=net.orchid.Orchid&referrer=utm_source=website&utm_campaign=join-page",
			iOSLink: "https://apps.apple.com/app/apple-store/id1474884867?pt=120094961&ct=join-page&mt=8"
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
					title="Get Orchid | Orchid"
					description="We believe the internet should be open and accessible to everyone, which is why we're building a truly open source network overlay VPN."
					image="/img/join/social.jpg"
					location={this.props.location}
				/>
				<Helmet>
					<body className="join-page" />
				</Helmet>
				<div className="join background-white">
					<section className="section-med hpad-thin pad-top-wide z-index-1">
						<div className="join__grid">
							<div className="join__intro">
								<h1 className="gap-bot-thin">Orchid Accounts</h1>
								<p>
									To start using Orchid, you will need a funded account. Orchid accounts are governed by a smart contract that holds funds for users and sends payments as necessary to providers for service.
								</p>
								<br />
								<p>
									Accounts require a funder wallet and Orchid Identity pair that is managed between the <Link to="/download">Orchid app</Link> and the user’s Ethereum wallet. Funds are moved in and out of the account using the Ethereum wallet and funds are spent using the Orchid Identity in the Orchid app.
								</p>
								<br />
								<p>
									Orchid supports users self-funding accounts with their own cryptocurrency through the <a href="https://account.orchid.com/">Orchid DApp</a> and also has a simplified fiat on-ramp within the Orchid app called Prepaid Access Credits, which uses a wallet controlled by Orchid Labs.
								</p>
							</div>
							<div className="join__bunny-container">
								<img src="/img/join/intro_bunny.svg" alt="" />
							</div>
						</div>
						<div>
							<h3>Prepaid Access Credits</h3>
							<p>
								Users can add funds to an Orchid Identity in the Orchid app with a simple in-app purchase using their native fiat currency which is then converted to on-chain funds. These accounts can only spend funds with Orchid’s preferred providers. Orchid Labs custodies the funding Ethereum wallet, so the funds can never be withdrawn by the user.
							</p>
							<h3>Self-funded Crypto Accounts</h3>
							<p>
								To add your own crypto to an Orchid account that you manage yourself, you can move funds into an Orchid Identity using the <a href="https://account.orchid.com/">Orchid DApp</a>. You will need to move enough funds to accommodate both a balance and deposit for the account. The balance is the spendable amount that can be sent to providers. The deposit size determines the overall amount paid in L1 network fees while sending nanopayments and scales up and down with network gas fees. The deposit is also “locked” and requires a 24 hour wait period for these funds to be withdrawn.
							</p>
							<br />
							<p>
								Official latest contract address on all chains: <a href="https://blockscan.com/address/0x6db8381b2b41b74e17f5d4eb82e8d5b04dda0a82">OrchidLotteryV1</a>
							</p>
							<br />
							<p>
								Official hosted Orchid dapp: <a href="https://account.orchid.com/">account.orchid.com</a>
							</p>
							<h3>L1 Fees and Deposit Size Chart</h3>
							<p>
								The network that houses the Orchid account charges fees to interface with the smart contract. There is a one-time gas fee for adding/moving/withdrawing funds as well as an ongoing L1 fee which is determined by the account’s deposit size.
							</p>
							<br />
							<PricingWidget />
							<br />
							<h3>Step-by-step Orchid Account Creation</h3>
						</div>
					</section>
				</div>

				<div className="join-steps">
					<section className="join-steps__grid section-wide">
						<div className="join-step step-1">
							<div className="join-number"><span className="join-number__numeral">1</span></div>
							<div className="join-step__content">
								<h3>Create a new Ethereum wallet</h3>
								<p>
									We recommend using a <a href="https://docs.orchid.com/en/latest/orchid-dapp/#why-do-i-need-a-new-ethereum-wallet-why-cant-i-use-my-main-wallet">new Ethereum wallet address</a> for Orchid that is not linked to other Ethereum products or services you use. We test with <a href="https://metamask.io/">Metamask</a>.
								</p>
							</div>
						</div>
						<div className="join-step step-2">
							<div className="join-number"><span className="join-number__numeral">2</span></div>
							<div className="join-step__content">
								<h3>Select a chain and add funds</h3>
								<p>
									Refer to the deposit size chart above to compare the different supported blockchains and pick one. Add that network to your Metamask wallet by visiting <a href="https://chainlist.org/">ChainList.org</a>, searching for that chain, connecting your wallet and then adding the network details.
								</p>

								<p>
									Acquire enough funds for the recommended deposit, account creation L1 fee, and balance. The balance should be at least as large as the deposit. Note that it is best to use an exchange that allows withdraws directly to that chain or else you will have to bridge funds and incur excessive Ethereum gas fees.
								</p>

								<p>
									You should now have your wallet connected to the chain you want to use and enough funds in that wallet. Copy your wallet address down as the app portion of the set-up will require it.
								</p>
							</div>
						</div>
						<div className="join-step step-3">
							<div className="join-number"><span className="join-number__numeral">3</span></div>
							<div className="join-step__content">
								<h3>Create an account in the Orchid App</h3>
								<p>
									Download the Orchid app for <a href={this.state.androidLink} data-appstorelink>Android</a>, <a href={this.state.iOSLink} data-appstorelink>iOS</a> or <a href={this.state.iOSLink} data-appstorelink>macOS</a>
								</p>
								<div class="join-apps">
									<a href={this.state.androidLink} data-appstorelink>
										<img width="300" height="89" i18n-src="@@GooglePlayBadgeURL" src="/img/shared/google-play-badge.svg" i18n-alt="@@GooglePlayBadgeAlt" alt="Get it on Google Play" style={{ height: "40px", width: "auto", }} />
									</a>
									<a href={this.state.iOSLink} data-appstorelink>
										<img alt="iOS" src="/img/shared/ios.png" style={{ height: "40px", width: "auto" }} />
									</a>
									<a href={this.state.iOSLink} data-appstorelink>
										<img alt="macOS" src="/img/shared/macos.svg" style={{ height: "40px", width: "auto" }} />
									</a>
								</div>
								<p>
									Open the app, tap “I’ll do this later” to minimize the quick fund screen. Tap the “Circuit” card in the lower right to bring up the circuit builder. Tap “Add Hop”, then “Orchid Account”, and then select an Orchid Identity. Paste in your Ethereum wallet address from Step 2 and select the appropriate chain. Tap “Save”.
								</p>
								<p>
									Now you will have an empty Orchid account that is paying for a single hop circuit. Tap the hop to enter the hop details screen. Tap “Copy” to copy the Orchid Identity which you need for the dapp.
								</p>
								<p>
									Tap back twice to get to the homescreen. You should have an empty account displayed and the Orchid Identity copied to your clipboard.
								</p>
							</div>
						</div>
						<div className="join-step step-4">
							<div className="join-number"><span className="join-number__numeral">4</span></div>
							<div className="join-step__content">
								<h3>Connect your wallet and fund the account</h3>
								<p>
									Load <a href="https://account.orchid.com/">account.orchid.com</a> in your wallet’s browser or your preferred browser with a wallet plugin enabled. It’s a good idea to bookmark this page for the future.
								</p>

								<p>
									You might be prompted to “connect” your wallet to the Orchid DApp so it can read the wallet account balances.
								</p>

								<p>
									Input the desired amount of funds for the balance and deposit. Tap “Add Funds”.
								</p>

								<p>
									Approve the transaction and wait for it to be confirmed.
								</p>

								<p>
									That’s it! You can now see in the app that the funds have moved into your account. You can hit the connect button to use the Orchid app!
								</p>
							</div>
						</div>
					</section>
				</div>

				<div className="more-questions">
					<section className="section-med hpad-wide vpad-xl center-text z-index-1">
						<h2>Questions?</h2>
						<p className="medium" i18n="@@MoreQuestions__Subhead">
							Check out the FAQ
						</p>
						<Link to="/faq/"><button className="btn-secondary btn-fixed z-index-1" i18n="@@HomeNextLevel__Whitepaper">FAQ</button></Link>
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
					<h3>Let's Stay Connected</h3>
					<p>Get the Orchid Onlooker newsletter for updates and privacy news</p>
					<NewsletterSignup />
				</div>
			</Layout>
		)
	}
}

export default Page
