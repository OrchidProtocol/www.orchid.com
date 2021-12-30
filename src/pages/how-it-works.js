import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/common/Layout'
import './how-it-works.scss'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'

class Page extends React.Component {

	render() {
		return (
			<Layout>
				<WebsiteMeta
					title="How It Works | Orchid"
					description="The Orchid network enables a decentralized virtual private network (VPN), allowing users to buy bandwidth from a global pool of service providers."
					image="/img/how-it-works/social.png"
					location={this.props.location}
				/>
				<Helmet>
					<body className="how-it-works-page" />
				</Helmet>
				<section className="bk-beige-light how-hero z-index-1">
					<div className="satellite-1">
						<img src="/img/how-it-works/satellite-1.svg" alt="" />
					</div>
					<div className="content section-narrow vpad-wide hpad-thin center-text z-index-1">
						<h1 className="gap-bot-thin"><Trans i18n="@@HowHero__Title">How Orchid delivers digital privacy</Trans></h1>
						<p><Trans i18n="@@HowHero__Subtitle">The Orchid network enables a decentralized virtual private network (VPN), allowing users to buy bandwidth from a global pool of service providers.</Trans></p>
						<p><Trans i18n="@@HowHero__Subtitle2">To do this, Orchid uses an ERC-20 staking token called OXT, a new VPN protocol for token-incentivized bandwidth proxying, and smart-contracts with algorithmic advertising and payment functions. Orchid's users connect to bandwidth sellers using a provider directory, and they pay using probabilistic nanopayments so Ethereum transaction fees on packets are acceptably low.</Trans></p>
					</div>
				</section>

				<section className="bk-white core z-index-1" id="top">
					<div className="satellite-2">
						<img src="/img/how-it-works/satellite-2.svg" alt="" />
					</div>
					<div className="content section-narrow vpad-xl hpad-wide center-text">
						<h2 className="gap-bot-thin">
							<Trans i18n="@@HowIndex__Title">
								<span>Core components</span>
								<span>of the Orchid network</span></Trans>
						</h2>
						<div className="buttons">
							<a className="button" href="/how-it-works#app"><Trans>The Orchid app</Trans></a>
							<a className="button" href="/how-it-works#oxt"><Trans>OXT cryptocurrency</Trans></a>
							<a className="button" href="/how-it-works#accounts"><Trans>Orchid Accounts</Trans></a>
							<a className="button" href="/how-it-works#protocol"><Trans>Orchid Protocol</Trans></a>
							<a className="button" href="/how-it-works#nanopayments"><Trans>Nanopayments</Trans></a>
							<a className="button" href="/how-it-works#nodes"><Trans>Nodes</Trans></a>
							<a className="button" href="/how-it-works#staking"><Trans>Staking</Trans></a>
						</div>
					</div>
					<div className="explainer__start-cap">
						<div></div>
					</div>
				</section>

				<div className="explainers">
					<section className="explainer" id="app">
						<div className="explainer__container">
							<div className="explainer__start"></div>
							<div className="explainer__progress">
								<a className="explainer__dot active" href="/how-it-works#app">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#oxt">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#accounts">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#protocol">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nanopayments">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nodes">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#staking">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
							</div>
							<div className="explainer__text">
								<h3><Trans>The Orchid app</Trans></h3>
								<p>
									<Trans>
										Users of Orchid run a client similar to a typical VPN client for protocols such as OpenVPN, but which speaks the Orchid protocol. The Orchid network client goes past the basic functionality offered by most VPN clients, with features such as the ability to run traffic through an integrated personal firewall. The Orchid client is accessible via iOS, Android, macOS, and Linux.
									</Trans>
								</p>
							</div>
							<div className="explainer__image">

								<img src="/img/how-it-works/app.svg" alt="" />
							</div>
							<div className="explainer__bottom">
								<a className="explainer__to-top" href="/how-it-works#top">
									<img src="/img/how-it-works/angle-up.svg" alt="back to top" />
								</a>
							</div>
							<div className="explainer__connector"></div>
						</div>
					</section>
					<section className="explainer" id="oxt">
						<div className="explainer__container">
							<div className="explainer__progress">
								<a className="explainer__dot" href="/how-it-works#app">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot active" href="/how-it-works#oxt">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#accounts">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#protocol">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nanopayments">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nodes">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#staking">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
							</div>
							<div className="explainer__text">
								<h3><Trans>The Orchid digital currency (OXT)</Trans></h3>
								<div>
									<Trans i18n="@@HowOxt__Content">
										<p>OXT’s primary purpose is to provide a staking-advertising mechanism that aligns operator incentives to the benefit of the Orchid network and mitigates certain risks.</p>
										<p>The OXT digital currency provides value in the Orchid network in a number of ways:</p>
										<ul>
											<li>A Bandwidth Provider - Anyone can operate an Orchid Node, but must first stake OXT, with the more OXT that is staked, the greater the chances of reward in the Network.</li>
											<li>A Bandwidth User - For the first time, users can pay-on-the-fly for a private, secure internet connection using nanopayments. Users add OXT or any of the supported cryptocurrencies to their Orchid account which is then used to pay providers for service while the VPN is connected.</li>
										</ul>
										<p><Link to="/oxt">Learn more about OXT.</Link></p>
										<p>The bandwidth marketplace is peer-to-peer and run in a completely decentralized manner without reliance on any central party. The primary reasons for this new digital currency OXT are:</p>
										<ol>
											<li>To have a digital currency that is specifically tied to consumption of bandwidth on the Orchid network
											</li>
											<li>To align operator incentives towards the benefit of the Orchid Network.</li>
										</ol>
										<p>Accordingly, in addition to facilitating bandwidth transactions on the Network, the Orchid digital currency is used to prove a stake within the Orchid network that demonstrates a commitment by bandwidth providers, as well as to mitigate certain risks.</p>
									</Trans>
								</div>
							</div>
							<div className="explainer__image">

								<img src="/img/how-it-works/token.svg" alt="" />
							</div>
							<div className="explainer__bottom">
								<a className="explainer__to-top" href="/how-it-works#top">
									<img src="/img/how-it-works/angle-up.svg" alt="back to top" />
								</a>
							</div>
							<div className="explainer__connector"></div>
						</div>
					</section>
					<section className="explainer" id="accounts">
						<div className="explainer__container">
							<div className="explainer__progress">
								<a className="explainer__dot" href="/how-it-works#app">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#oxt">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot active" href="/how-it-works#accounts">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#protocol">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nanopayments">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nodes">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#staking">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
							</div>
							<div className="explainer__text">
								<h3><Trans>Orchid Accounts</Trans></h3>
								<div>
									<Trans i18n="@@HowAccounts__Description">
										<p>
											<b>Purchased accounts:</b><br /> Orchid supports the ability for users to buy a pre funded Orchid account from within the official iOS app using native FIAT currency. “Orchid credits” are special accounts where the cryptocurrency, xDai, must be spent only with our preferred providers. Like all Orchid accounts, the account can be shared among devices.
										</p>
										<p>
											What is being purchased when a user buys Orchid credits?
										</p>
										<ul>
											<li><b>Balance</b> Based on the chosen pricing tier, the user will receive an Orchid account funded with an amount of xDai, subject to market fluctuations, which can be used to purchase bandwidth on the Orchid network.</li>
											<li><b>Deposit</b> A portion of the purchase is invested as a deposit to the generated account. This is required for participation in the Orchid network as both a deterrent of client malfeasance as well as a determinant for ticket sizing in our nanopayment system.</li>
											<li><b>Gas</b> Transactions made on the blockchain require small payments and a portion of the credits purchase goes to covering these costs for creating the Orchid account.</li>
											<li><b>Fees</b> Transaction fees for accepting FIAT.</li>
										</ul>
										<p>
											The purpose of Orchid credits is to open up use of the Orchid network to a wider range of users, such as users who aren’t familiar with cryptocurrency or don’t want to deal with the intricacies themselves. No personal information is accessed or stored by Orchid during the purchase process or in the use of the Orchid app.
										</p>
										<p>
											<b>Crypto-native accounts:</b><br /> Users looking to supply their own OXT or other supported cryptocurrencies to fund their participation in the Orchid network can create a custom account using Orchid’s web3 based dapp at <a href="https://account.orchid.com/">account.orchid.com</a>. The Orchid Account dapp can only be accessed using a web3 browser such as <a href="https://metamask.io/">Metamask</a>, and allows linking of crypto wallets in order to build custom accounts with granular controls. Here, users can fund an account with their own specified values as well as control the size of the associated deposit, influencing <a href="https://docs.orchid.com/en/latest/accounts/#orchid-account-efficiency">efficiency</a> experienced within the Orchid app. These accounts can be easily linked to the Orchid app as an alternative to purchased accounts as well as shared with an unlimited number of people and/or devices.
										</p>
										<p>
											<Link to="/join">Learn more about creating an Orchid account.</Link>
										</p>
									</Trans>
								</div>
							</div>
							<div className="explainer__image">

								<img src="/img/how-it-works/accounts.svg" alt="" />
							</div>
							<div className="explainer__bottom">
								<a className="explainer__to-top" href="/how-it-works#top">
									<img src="/img/how-it-works/angle-up.svg" alt="back to top" />
								</a>
							</div>
							<div className="explainer__connector"></div>
						</div>
					</section>
					<section className="explainer" id="protocol">
						<div className="explainer__container">
							<div className="explainer__progress">
								<a className="explainer__dot" href="/how-it-works#app">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#oxt">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#accounts">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot active" href="/how-it-works#protocol">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nanopayments">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nodes">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#staking">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
							</div>
							<div className="explainer__text">
								<h3><Trans>The Orchid Protocol</Trans></h3>
								<p><Trans i18n="@@HowProtocol__Description">The Orchid software is designed to use a custom VPN protocol, similar in scope to <a href="https://openvpn.net/">OpenVPN</a> or <a href="https://www.wireguard.com/">WireGuard</a>. The Orchid protocol is designed for high-performance networking and runs on top of WebRTC, a common web standard, widely used to transmit video and audio from inside browsers. Our protocol allows users to request access to remote network resources and pay for these resources using cryptocurrencies via the Orchid nanopayments system.</Trans></p>
							</div>
							<div className="explainer__image">

								<img src="/img/how-it-works/protocol.svg" alt="" />
							</div>
							<div className="explainer__bottom">
								<a className="explainer__to-top" href="/how-it-works#top">
									<img src="/img/how-it-works/angle-up.svg" alt="back to top" />
								</a>
							</div>
							<div className="explainer__connector"></div>
						</div>
					</section>
					<section className="explainer" id="nanopayments">
						<div className="explainer__container">
							<div className="explainer__progress">
								<a className="explainer__dot" href="/how-it-works#app">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#oxt">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#accounts">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#protocol">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot active" href="/how-it-works#nanopayments">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nodes">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#staking">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
							</div>
							<div className="explainer__text">
								<h3><Trans>Nanopayments</Trans></h3>
								<div>
									<Trans i18n="@@HowNano__Content">
										<p>Orchid uses a new probabilistic nanopayment system to scale payment throughput.</p>
										<p>This nanopayment system is the foundation of the Orchid peer to peer bandwidth marketplace where clients pay Node operators cryptocurrency-backed “tickets” for proxy bandwidth. The system is designed to lower the transaction fees on small payments by amortizing transaction fees across many transactions and even across multiple parties.</p>
										<p>For more information, see our recent article:
											<a href="https://blog.orchid.com/introducing-nanopayments/">Introducing Nanopayments</a>
										</p>
									</Trans>
								</div>
							</div>
							<div className="explainer__image">
								<img src="/img/how-it-works/nano.svg" alt="" />
							</div>
							<div className="explainer__bottom">
								<a className="explainer__to-top" href="/how-it-works#top">
									<img src="/img/how-it-works/angle-up.svg" alt="back to top" />
								</a>
							</div>
							<div className="explainer__connector"></div>
						</div>
					</section>
					<section className="explainer" id="nodes">
						<div className="explainer__container">
							<div className="explainer__progress">
								<a className="explainer__dot" href="/how-it-works#app">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#oxt">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#accounts">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#protocol">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nanopayments">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot active" href="/how-it-works#nodes">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#staking">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
							</div>
							<div className="explainer__text">
								<h3><Trans>Nodes</Trans></h3>
								<div>
									<Trans i18n="@@HowNodes__Content">
										<p>Service providers on Orchid run software similar to a typical VPN daemon for protocols such as OpenVPN, but which speaks the Orchid protocol.</p>
										<p>Orchid nodes maintain registration information in a stake registry and provider directory on Ethereum. The stake registry is optimized for enabling the Orchid app to automatically discover random servers in a decentralized environment, while the provider directory allows Orchid nodes to register metadata such as geolocation or additional services offered.</p>
									</Trans>
								</div>
							</div>
							<div className="explainer__image">

								<img src="/img/how-it-works/node.svg" alt="" />
							</div>
							<div className="explainer__bottom">
								<a className="explainer__to-top" href="/how-it-works#top">
									<img src="/img/how-it-works/angle-up.svg" alt="back to top" />
								</a>
							</div>
							<div className="explainer__connector"></div>
						</div>
					</section>
					<section className="explainer" id="staking">
						<div className="explainer__container">
							<div className="explainer__progress">
								<a className="explainer__dot" href="/how-it-works#app">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#oxt">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#accounts">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#protocol">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nanopayments">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot" href="/how-it-works#nodes">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
								<a className="explainer__dot active" href="/how-it-works#staking">
									<img src="/img/how-it-works/progress-dot.svg" alt="" />
								</a>
							</div>
							<div className="explainer__text">
								<h3><Trans>Staking</Trans></h3>
								<div>
									<Trans i18n="@@HowStaking__Content">
										<p>A provider stakes some number of OXT to create a stake deposit.</p>
										<ul>
											<li>Anyone can stake OXT on nodes using the smart contract.</li>
											<li>Clients select new nodes in proportion to their relative OXT deposit size.</li>
											<li>Larger stake deposits thus lead to proportionally more users, bandwidth, and revenue.</li>
											<li>If the node is already at max bandwidth capacity additional stake is effectively wasted.</li>
										</ul>
										<p>
											Once tokens have been locked into a stake deposit they can be used immediately for bandwidth provisioning. If the provider wants to withdraw tokens from the staking contract, they have to start an “unlocking” process period, which involves a three month cooldown where their funds cannot be used as a stake deposit or transferred elsewhere by the provider.
										</p>
										<p>
											Whatever the amount of value that is exchanged in the Orchid ecosystem, a given seller’s relative stake amount, as a percentage of the total stake, provides them that same percentage of user traffic and dealflow. Assuming typical and honest selling behavior (no users drop them for bad service) this dealflow will translate into a similar portion of the total revenue. The staking decisions of sellers is left to their own choices.
										</p>
									</Trans>
								</div>
							</div>
							<div className="explainer__image">
								<img src="/img/how-it-works/stake.svg" alt="" />
							</div>
							<div className="explainer__bottom">
								<a className="explainer__to-top" href="/how-it-works#top">
									<img src="/img/how-it-works/angle-up.svg" alt="back to top" />
								</a>
							</div>
							<div className="explainer__connector"></div>
						</div>
					</section>
				</div>

				<div className="bk-lavender whitepaper-section">
					<div className="explainer__finish">
						<img src="/img/how-it-works/dash-end-cap.svg" alt="" />
					</div>
					<section className="section-med hpad-wide vpad-wide overflow-hidden">
						<div id="read-whitepaper">
							<div className="pos-relative">

								<img alt="" id="read-whitepaper-adorner" src="/img/network/read-whitepaper.svg" />
								<a i18n-href="@@WhitepaperLink" href="/whitepaper/english.pdf">
									<button className="btn-primary z-index-1">
										<Trans i18n="@@ReadOurWhitepaper">
											Read our Whitepaper
										</Trans>
									</button>
								</a>
							</div>
						</div>
					</section>
				</div>

				<app-newsletter-signup></app-newsletter-signup>
			</Layout>
		)
	}
}

export default Page
