import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './oxt.scss'

import WhereOXTExtended from '../components/where-oxt-extended';

const Page = () => (
	<Layout>
		<Helmet>
			<title>OXT Digital Currency | Orchid</title>
			<meta name="description" content="OXT is an Ethereum (ERC-20) digital currency used to exchange value on the Orchid network. Orchid offers VPN privacy tools at an affordable cost." />
			<meta name="og:image" content="https://www.orchid.com/img/oxt/social.png" />
			<body className="oxt-page" />
		</Helmet>
		<div className="oxt-hero bk-beige-light">
			<section className="section-med hpad-thin z-index-1">
				<div className="hero-flex__wrapper">
					<div className="hero-flex__container">
						<h1 className="oxt-hero__title">OXT</h1>
						<h2 className="oxt-hero__subtitle" i18n="@@OXTHeroSubtitle">
							The staking asset <br /> for the $35B* VPN market
						</h2>
						<p i18n="@@OXTHeroParagraph">
							The VPN market is exploding with worldwide growth as users fight to regain privacy and break out of state controlled firewalls. OXT is Orchid's native ERC-20 digital asset that powers and secures a new approach to VPN service and providers compete for user payment flow by staking OXT. As more bandwidth is purchased on the Orchid network node providers can add and stake OXT in order to capture additional bandwidth sales on the network.
						</p>
						<div className="hero__buttons">
							<a href="/download">
								<button className="btn-primary btn-fixed z-index-1" i18n="@@HomeNextLevel__Download">Download</button>
							</a>
							<a href="https://github.com/OrchidTechnologies">
								<button className="btn-secondary btn-fixed z-index-1" i18n="@@HomeNextLevel__GitHub">GitHub</button>
							</a>
							<a href="/whitepaper/english.pdf">
								<button className="btn-secondary btn-fixed z-index-1" i18n="@@HomeNextLevel__Whitepaper">Whitepaper</button>
							</a>
						</div>
					</div>
					<div className="hero-flex__container logo">
						<picture>
							<source srcset="/img/oxt/oxt_hero.webp" type="image/webp" />
							<img className="oxt-hero__logomark" alt="" src="/img/oxt/oxt_hero.png" width="980" height="978" />
						</picture>
					</div>
				</div>
			</section>
		</div>

		<div className="why-oxt bk-lavender">
			<div className="overflow-wrapper">
				<section className="section-med hpad-thin vpad-wide z-index-1">
					<div className="why-oxt__text">
						<h2 className="color-primary gap-bot-thin" i18n="@@OXTWhereToBuy">Where to get OXT</h2>
						<WhereOXTExtended />
					</div>
					<img width="476" height="487" className="why-oxt__img" src="/img/oxt/rabbit-pulls-token.svg" alt="" />
				</section>
			</div>
		</div>

		<div className="supply-section bk-white">
			<section className="section-med hpad-wide vpad-wide z-index-1">
				<div>
					<h2 className="color-primary gap-bot-thin" i18n="@@OXTSupplyTitle">Supply</h2>
					<p i18n="@@OXTSupplyDescription">
						As noted in the Orchid network whitepaper, the total supply of OXT is fixed at one billion units. All information about the supply of OXT and addresses where OXT is located are publicly available on the Ethereum blockchain.
					</p>
					<div className="supply-logos">
						<a href="https://messari.io/asset/orchid">
							<img src="/img/oxt/messari.png" alt="messari" />
						</a>
						<a href="https://www.coingecko.com/en/coins/orchid-protocol">
							<img src="/img/oxt/coingecko.png" alt="coingecko" />
						</a>
						<a href="https://coinmarketcap.com/currencies/orchid/">
							<img src="/img/oxt/coinmarketcap.png" alt="coinmarketcap" />
						</a>
						<a href="https://etherscan.io/token/0x4575f41308ec1483f3d399aa9a2826d74da13deb">
							<img src="/img/oxt/etherscan.png" alt="etherscan" />
						</a>
						<a href="https://xangle.io/project/OXT/profile/">
							<img src="/img/oxt/xangle.png" style={{ width: "120px" }} alt="xangle" />
						</a>
					</div>
					<h4 className="grey-heading small" i18n="@@OXTTreasuryTitle">
						Treasury
					</h4>
					<br />
					<p i18n="@@OXTTreasuryDescription">
						A maximum 1 billion OXT were eligible for creation, all of which has been created. As of December 9 2019, Orchid Labs, Inc. held 400,579,272 OXT in its treasury that has been subject to its treasury policy. Pursuant to Orchid Labs, Inc.'s treasury policy, it is anticipated that as to 400,579,272 OXT of the treasury OXT, starting as of December 9, 2019, no more than 10 million OXT per month will be available to be released from the treasury.
					</p>
					<br />
					<br />
				</div>
				<div i18n="@@OXTSupplyParagraph2">
					<h4 className="grey-heading small">Audit of Smart Contract for use with OXT Release Schedule</h4>
					<br />
					<p>
						Audit of Smart Contract On March 21, 2020, <a className="oxt-special-link" href="https://diligence.consensys.net/">Consensys Diligence</a> published a technical audit on Orchid’s batch send smart contract, which may be used for multiple disbursements of ether and ERC20 tokens in a single transaction. The audit report is public and can be found here:
						<br />
						<a href="https://diligence.consensys.net/audits/2020/01/orchid-multisend/">
							https://diligence.consensys.net/audits/2020/01/orchid-multisend/
						</a>
					</p>

					<p>
						For purposes of the audit, Orchid posted all the information needed to perform the audit in a technical repository on GitHub that can be found here:
						<br />
						<a href="https://github.com/OrchidTechnologies/orchid/tree/3187d0716f16eeb59552d2c103c02efd5a530a76/tst-ethereum/distributor">
							https://github.com/OrchidTechnologies/orchid/tree/3187d0716f16eeb59552d2c103c02efd5a530a76/tst-ethereum/distributor
						</a>

					</p>
					<p>
						Anyone can re-perform the smart contracts audit using the same information provided to Consensys Diligence.
					</p>

					<p>
						The information posted to GitHub and provided to Consensys Diligence includes the OXT token contract, found here:
						<br />
						<a href="https://github.com/OrchidTechnologies/orchid/blob/3187d0716f16eeb59552d2c103c02efd5a530a76/tok-ethereum/token.sol">
							https://github.com/OrchidTechnologies/orchid/blob/3187d0716f16eeb59552d2c103c02efd5a530a76/tok-ethereum/token.sol
						</a>
					</p>

					<p>
						It also includes the OXT release schedule, found here:
						<br />
						<a href="https://github.com/OrchidTechnologies/orchid/blob/3187d0716f16eeb59552d2c103c02efd5a530a76/tst-ethereum/distributor/release_schedule.pdf">
							https://github.com/OrchidTechnologies/orchid/blob/3187d0716f16eeb59552d2c103c02efd5a530a76/tst-ethereum/distributor/release_schedule.pdf
						</a>
					</p>

					<p>
						In December 2020 Consensys Diligence published a technical audit on a new version of Orchid's batch send smart contract, which may be used for multiple disbursements of ether and ERC20 tokens in a single transaction. The audit report is public and can be found here: <a href="https://consensys.net/diligence/audits/2020/12/orchid-multisend/">https://consensys.net/diligence/audits/2020/12/orchid-multisend/</a>
					</p>
					<p>
						A link to the Additional Release Schedule that was also subject to Consensys Audit: <a href="https://consensys.net/diligence/audits/2020/12/orchid-multisend/Deferred-Comp-Release-Schedule.pdf">https://consensys.net/diligence/audits/2020/12/orchid-multisend/Deferred-Comp-Release-Schedule.pdf</a>
					</p>

				</div>
			</section>
		</div>


		<div className="tokenomics bk-faint-gray">
			<section className="section-med hpad-wide vpad-wide z-index-1">
				<div className="tokenomics__subhead">
					<div className="tokenomics-column">
						<h2 className="color-primary vgap-xs" i18n="@@OXTStakingHeadline">Staking</h2>
						<p i18n="@@OXTStakingDescription">
							Orchid's staking directory randomly connects users with providers based on the amount of OXT staked; providers that stake more are connected to more users. The more bandwidth that is purchased by users on the Orchid network, the more incentive that node providers have to stake OXT in order to sell bandwidth and meet the demand.
						</p>
					</div>
					<img src="/img/oxt/staking-2.svg" alt="" width="454" height="259" />
				</div>
				<br />
				<div i18n="@@OXTStakingBody">
					<p>
						Users need an Orchid account that holds funds to pay for VPN service. Orchid accounts can use OXT on Ethereum, or be homed on other EVM-compatible chains. The Orchid nanopayment system is chain-agnostic. While providers can receive payments from multiple blockchains, staking is always and only done with OXT on Ethereum.
					</p>
					<p>
						<a href="/how-it-works">Read more about provider staking here.</a>
					</p>
				</div>
			</section>
		</div>

		<div className="oxt-audits bk-lavender">
			<section className="section-med hpad-wide vpad-wide z-index-1">
				<h2 className="color-primary center-text gap-bot-thin" i18n="@@OXTAuditsHeadline">OXT Audits</h2>
				<div className="oxt-audits__columns center-text">
					<div i18n="@@OXTAudits__Consensys">
						<img width="160" height="138" src="/img/oxt/consensus-systems-logo.svg" alt="Consensys" />
						<h4>Consensys Diligence</h4>
						<a className="oxt-special-link" href="https://consensys.net/diligence/audits/2019/11/orchid-network-protocol/">
							Read the full public ConsenSys Diligence Audit here.
						</a>
					</div>
					<div i18n="@@OXTAudits__Certora">
						<img width="160" height="131" className="certora-logo" src="/img/oxt/CertoraLogo@3x.png" alt="Certora" />
						<h4>Certora</h4>
						<a className="oxt-special-link" href="/img/oxt/certora.pdf">
							Read the full public Certora Audit here.
						</a>
					</div>
				</div>
				<br />
				<br />
				<p className="center-text" i18n="OXTAuditsFootnote">*Virtual Private Network (VPN) Market Report, <a href="https://www.gminsights.com/industry-analysis/virtual-private-network-vpn-market">Global Market Insights</a></p>
			</section>
		</div>

		<app-newsletter-signup></app-newsletter-signup>
	</Layout >
)

export default Page
