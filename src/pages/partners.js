import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'
import withI18next from '../components/withI18next'
import './partners.scss'

class Page extends React.Component {

	render() {
		const { t } = this.props;
		return (
			<Layout t={t}>
				<WebsiteMeta
					title="Our Partners | Orchid"
					description="We believe the internet should be open and accessible to everyone, which is why we're building a truly open source network overlay VPN."
					image="/img/partners/social.png"
					location={this.props.location}
				/>
				<Helmet>
					<body className="partners-page" />
				</Helmet>
				<div className="partners-hero bk-beige-light">
					<section className="section-med hpad-wide vpad-xl center-text z-index-1">
						<div className="hero__text">
							<h1 className="partners-hero__title">Orchid Partnerships</h1>
							<br />
							<p className="partners-hero__subtitle">
								Orchid partners with companies around the world to advance our mission of making the internet a safer,
								more private place for everyone.
							</p>
							<br />
							<Link to="/contact">
								<button className="btn-primary btn__hero z-index-1">Discuss Partnership</button>
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
								<h2>VPN Partners</h2>
							</div>

							<div className="cards-wrapper">
								<div className="card">
									<a href="https://blog.orchid.com/pia-bringing-trusted-private-bandwidth-to-orchid-users/">
										<div className="card-header">
											<img alt="Private Internet Access" src="/img/partners/pia.png" />
										</div>
										<div className="card-body">
											<p>
												We value PIA's commitment to maintaining the highest standards of privacy, while
												simultaneously providing one of the most reliable VPN services in the world.
											</p>
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
												The alliance with BolehVPN, one of the most trusted names in trusted browsing, brings
												the dream of a genuinely secure and private internet closer to fruition.
											</p>
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
												At Orchid, we’re always happy to partner with like-minded firms and individuals, and for
												years we’ve admired the work that VPNSecure has done in the privacy and security space.
											</p>
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
												Orchid’s privacy network is growing every day, with more and more reliable bandwidth
												providers joining the platform. Our partnership with LiquidVPN is another step toward
												making privacy a community experience.
											</p>
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
								<h2>Wallet Partners</h2>
							</div>

							<div className="cards-wrapper">
								<div className="card">
									<a href="https://metamask.io/">
										<div className="card-header">
											<img alt="Metamask" src="/img/partners/metamask.png" />
										</div>
										<div className="card-body">
											<p>
												Available as a browser extension and as a mobile app, MetaMask equips you with a key
												vault, secure login, and token wallet—everything you need to manage your digital assets.
											</p>
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
												imToken has done great work in building a secure and user-friendly product… users will
												now have an easy way to hold their OXT and use it to buy private bandwidth.
											</p>
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
												TrustWallet is a leader in cryptocurrency wallets; integration with the app means that
												many more users will have an easy way to hold, trade, and transfer OXT.
											</p>
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
												Our goal is to make the internet a safer, more free place. BitGo provides that same
												sense of security to our institutional partners, in a streamlined experience.
											</p>
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
												BRD has built a huge community of crypto enthusiasts, many of whom are committed to
												taking control of their privacy. Now, they can access OXT and do exactly that.
											</p>
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
												Ledger wallets have earned their incredible popularity, and we’re very excited that our
												community will be able to store their OXT on a trusted Ledger device.
											</p>
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
								<h2>Exchange Partners</h2>
							</div>

							<div className="cards-wrapper">

								<div className="card">
									<a href="https://blog.orchid.com/oxt-hops-into-new-york-with-coinbase/">
										<div className="card-header">
											<img alt="Coinbase" src="/img/partners/coinbase.png" />
										</div>
										<div className="card-body">
											<p>
												Opening our privacy network to the people of New York
												is an important step in solidifying our global community. We look forward to making the
												internet open for everyone.
											</p>
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
												Making OXT widely available for our users in Europe and around the world is an important
												step in making it easy for anyone to start using it to pay for private bandwidth.
											</p>
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
												Gemini's established history as a globally licensed, trusted name in crypto markets make
												them a perfect partner for Orchid as we continue making OXT widely available.
											</p>
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
												OKEx listing Orchid makes it easier for international users to acquire OXT and start
												using it to access private bandwidth; this is an important day for the growth of
												internet freedom.
											</p>
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
												Our community can feel confident when purchasing OXT on a platform with a proven track
												record of regulatory compliance and security best practices.
											</p>
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
								<h2>Other Partners</h2>
							</div>

							<div className="cards-wrapper">

								<div className="card">
									<a href="https://blog.orchid.com/orchid-partners-with-bloq/">
										<div className="card-header">
											<img alt="Bloq" src="/img/partners/bloq.png" />
										</div>
										<div className="card-body">
											<p>
												Bloq is a key partner in our goal of creating a community that makes the Internet a more
												free and private place.
											</p>
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
												The Blockchain Association comprises many of the most visionary projects, firms, and
												institutions in blockchain.
											</p>
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
												We’re thrilled to work with some of the most forward-thinking minds in tech policy to
												make the decentralized web a reality.
											</p>
										</div>
									</a>
								</div>



							</div>

						</section>
					</div>
				</div>


				<div className="patterning-instance-2"></div>


				<app-newsletter-signup></app-newsletter-signup>
			</Layout >
		)
	}
}

export default withI18next({ ns: "common" })(Page)
