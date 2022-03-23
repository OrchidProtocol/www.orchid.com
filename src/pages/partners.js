import { graphql } from 'gatsby';
import { Link, Trans } from 'gatsby-plugin-react-i18next';
import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/common/Layout'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'
import './partners.scss'
import Container from '../components/common/Container';
import NewsletterSignupCore from '../components/newsletter-signup-core';

function Page(props) {
	const { t } = useTranslation();
	return (
		<Layout t={t}>
			<WebsiteMeta
				title={t("Our Partners | Orchid")}
				description={t("We believe the internet should be open and accessible to everyone, which is why we're building a truly open source network overlay VPN.")}
				image="/img/partners/social.png"
				location={props.location}
			/>
			<Helmet>
				<body className="partners-page" />
			</Helmet>
			<div className="partners-hero bk-beige-light">
				<section className="section-med hpad-wide vpad-xl center-text z-index-1">
					<div className="hero__text">
						<h1 className="partners-hero__title"><Trans>Orchid Partnerships</Trans></h1>
						<br />
						<p className="partners-hero__subtitle">
							<Trans>
								Orchid partners with companies around the world to advance our mission of making the internet a safer, more private place for everyone.
							</Trans>
						</p>
						<br />
						<Link to="/contact">
							<button className="btn-primary btn__hero z-index-1"><Trans>Discuss Partnership</Trans></button>
						</Link>
					</div>
					<div className="hero__patterning"></div>
					<div className="hero__image">
					</div>
				</section>
			</div>

			<div className="partners-wrapper bk-white">
				<div className="overflow-wrapper">
					<section className="section-med hpad-thin vpad-wide z-index-1" id="vpn">
						<div className="center-text">
							<h2><Trans>VPN Partners</Trans></h2>
						</div>

						<div className="cards-wrapper">
							<div className="card">
								<a href="https://blog.orchid.com/pia-bringing-trusted-private-bandwidth-to-orchid-users/">
									<div className="card-header">
										<img alt="Private Internet Access" src="/img/partners/pia.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												We value PIA's commitment to maintaining the highest standards of privacy, while simultaneously providing one of the most reliable VPN services in the world.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/orchid-partners-with-bolehvpn/">
									<div className="card-header">
										<img alt="Boleh VPN" src="/img/partners/boleh.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												The alliance with BolehVPN, one of the most trusted names in trusted browsing, brings the dream of a genuinely secure and private internet closer to fruition.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/orchid-partners-with-vpnsecure/">
									<div className="card-header">
										<img alt="VPNSecure" src="/img/partners/vpnsecure.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												At Orchid, we’re always happy to partner with like-minded firms and individuals, and for years we’ve admired the work that VPNSecure has done in the privacy and security space.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/orchid-partners-with-liquidvpn/">
									<div className="card-header">
										<img alt="LiquidVPN" src="/img/partners/liquidvpn.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												Orchid’s privacy network is growing every day, with more and more reliable bandwidth providers joining the platform. Our partnership with LiquidVPN is another step toward making privacy a community experience.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>
						</div>

					</section>
				</div>
			</div>

			<div className="patterning-instance-1"></div>

			<div className="partners-wrapper bk-lavender">
				<div className="overflow-wrapper">
					<section className="section-med hpad-thin vpad-wide z-index-1" id="wallet">
						<div className="center-text">
							<h2><Trans>Wallet Partners</Trans></h2>
						</div>

						<div className="cards-wrapper">
							<div className="card">
								<a href="https://metamask.io/">
									<div className="card-header">
										<img alt="Metamask" src="/img/partners/metamask.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, and token wallet—everything you need to manage your digital assets.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/orchid-integrates-with-imtoken/">
									<div className="card-header">
										<img alt="imToken" src="/img/partners/imtoken.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												imToken has done great work in building a secure and user-friendly product… users will now have an easy way to hold their OXT and use it to buy private bandwidth.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/orchid-partners-with-trustwallet/">
									<div className="card-header">
										<img alt="TrustWallet" src="/img/partners/trustwallet.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												TrustWallet is a leader in cryptocurrency wallets; integration with the app means that many more users will have an easy way to hold, trade, and transfer OXT.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/oxt-available-on-bitgo/">
									<div className="card-header">
										<img alt="BitGo" src="/img/partners/bitgo.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												Our goal is to make the internet a safer, more free place. BitGo provides that same sense of security to our institutional partners, in a streamlined experience.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/brd-integrates-oxt/">
									<div className="card-header">
										<img alt="BRD" src="/img/partners/brd.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												BRD has built a huge community of crypto enthusiasts, many of whom are committed to taking control of their privacy. Now, they can access OXT and do exactly that.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/ledger-adds-oxt/">
									<div className="card-header">
										<img alt="Ledger" src="/img/partners/ledger.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												Ledger wallets have earned their incredible popularity, and we’re very excited that our community will be able to store their OXT on a trusted Ledger device.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>
						</div>

					</section>
				</div>
			</div>

			<div className="partners-wrapper bk-white">
				<div className="overflow-wrapper">
					<section className="section-med hpad-thin vpad-wide z-index-1" id="exchange">
						<div className="center-text">
							<h2><Trans>Exchange Partners</Trans></h2>
						</div>

						<div className="cards-wrapper">

							<div className="card">
								<a href="https://blog.orchid.com/oxt-hops-into-new-york-with-coinbase/">
									<div className="card-header">
										<img alt="Coinbase" src="/img/partners/coinbase.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												Opening our privacy network to the people of New York is an important step in solidifying our global community. We look forward to making the internet open for everyone.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/oxt-now-live-on-bittrex-global/">
									<div className="card-header">
										<img alt="Bittrex" src="/img/partners/bittrex.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												Making OXT widely available for our users in Europe and around the world is an important step in making it easy for anyone to start using it to pay for private bandwidth.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a
									href="https://blog.orchid.com/orchid-continues-global-expansion-with-gemini-oxt-listing-coming-soon/">
									<div className="card-header">
										<img alt="Gemini" src="/img/partners/gemini.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												Gemini's established history as a globally licensed, trusted name in crypto markets make them a perfect partner for Orchid as we continue making OXT widely available.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/oxt-now-live-on-okex/">
									<div className="card-header">
										<img alt="OKEx" src="/img/partners/okex.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												OKEx listing Orchid makes it easier for international users to acquire OXT and start using it to access private bandwidth; this is an important day for the growth of internet freedom.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/orchid-continues-to-build-momentum-with-listing-on-coinlist/">
									<div className="card-header">
										<img alt="CoinList" src="/img/partners/coinlist.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												Our community can feel confident when purchasing OXT on a platform with a proven track record of regulatory compliance and security best practices.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>
						</div>

					</section>
				</div>
			</div>


			<div className="partners-wrapper bk-lavender">
				<div className="overflow-wrapper">
					<section className="section-med hpad-thin vpad-wide z-index-1" id="other">
						<div className="center-text">
							<h2><Trans>Other Partners</Trans></h2>
						</div>

						<div className="cards-wrapper">

							<div className="card">
								<a href="https://blog.orchid.com/orchid-partners-with-bloq/">
									<div className="card-header">
										<img alt="Bloq" src="/img/partners/bloq.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												Bloq is a key partner in our goal of creating a community that makes the Internet a more free and private place.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>
							<div className="card">
								<a href="https://blog.orchid.com/orchid-joins-the-blockchain-association/">
									<div className="card-header">
										<img alt="Blockchain Association" src="/img/partners/blockchain-association.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												The Blockchain Association comprises many of the most visionary projects, firms, and institutions in blockchain.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>

							<div className="card">
								<a href="https://blog.orchid.com/orchid-joins-the-chamber-of-digital-commerce/">
									<div className="card-header">
										<img alt="Chamber of Digital Commerce" src="/img/partners/chamber-of-digital-commerce.png" />
									</div>
									<div className="card-body">
										<p>
											<Trans>
												We’re thrilled to work with some of the most forward-thinking minds in tech policy to make the decentralized web a reality.
											</Trans>
										</p>
										<span class="learnMore"><Trans>Learn More</Trans></span>
									</div>
								</a>
							</div>



						</div>

					</section>
				</div>
			</div>


			<div className="patterning-instance-2"></div>


			<Container>
				<NewsletterSignupCore />
			</Container>
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