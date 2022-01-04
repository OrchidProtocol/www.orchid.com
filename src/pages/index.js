import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './index.scss'
import ExplainerVideo from '../components/explainerVideo';
import NewsletterSignupCore from '../components/newsletter-signup-core';
import withI18next from '../components/withI18next';
import { Trans } from 'react-i18next';

import BlogPosts from '../components/common/BlogPosts';
import { Link } from 'gatsby';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';
import { StaticImage } from "gatsby-plugin-image";

class Page extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<Layout t={t} bodyclassName="index">
				<WebsiteMeta
					title="Crypto VPN App | Orchid"
					description="Orchid provides the best crypto powered VPN by harnessing the power of blockchain technology to ensure digital privacy."
					image="/img/index/social.png"
					location={this.props.location}
				/>
				<Helmet>
					<body className="index-page" />
				</Helmet>

				<section className="home-hero">
					<div className="home-hero__content">
						<img src="/img/index/dont-be-a-product.svg" alt="Don't be a product" width="616" height="314" />
						<h3><span><Trans>No data collection.</Trans></span> <span><Trans>No 3rd-party sharing.</Trans></span> <span><Trans>No profit markup.</Trans></span></h3>
						<h3 className="color-primary"><span><Trans>A new model of VPN.</Trans></span></h3>
						<Link to="/get-orchid" className="btn">
							<button className="btn-primary"><Trans>Get Orchid</Trans></button>
						</Link>
						<br />
						<small><Trans>(starting at just $1)</Trans></small>
					</div>
					<div className="home-hero__picture">
						<StaticImage loading="eager" src="../../static/img/index/phone.png" placeholder="none" width={491} height={765} alt="" />
					</div>
				</section>

				<div className="wavy-element-02"></div>

				<section className="marketplace__wrapper">
					<div className="marketplace__container container-common">
						<h2 className="section-heading"><Trans>Orchid is a decentralized bandwidth marketplace</Trans></h2>
						<p>
							<Trans>
								Buyers use the <Link to="/download">Orchid app</Link> to get protection from snooping ISP's, unblock websites cutoff by firewalls, and for many other privacy benefits. Sellers receive payments in real-time as they provide service and stake <Link to="/oxt">OXT</Link> to compete for service requests. Orchid Technologies charges no fees, and the community maintains the <a href="https://github.com/OrchidTechnologies">Open Source software</a> that powers the entire ecosystem. Try it out!
							</Trans>
						</p>
						<StaticImage loading="lazy" src="../../static/img/index/marketplace.png" placeholder="none" width={1600} height={368} alt="" />
						<div className="marketplace-steps">
							<div>
								<h3><Trans>Fund your Orchid account</Trans></h3>
								<p><Trans>Fund in-app with your native fiat currency or use the DApp to fund an account with your crypto.</Trans></p>
							</div>
							<div>
								<h3><Trans>Connect to a random provider</Trans></h3>
								<p><Trans>Tap "Connect" to match with a VPN server that has locked up OXT to compete for your business.</Trans></p>
							</div>
							<div>
								<h3><Trans>Pay only for what you actually use</Trans></h3>
								<p><Trans>Orchid nanopayments mean you are never locked into a subscription and pay only for actual use.</Trans></p>
							</div>
						</div>
						<Link to="/how-it-works/" className="section-button">
							<button className="btn-secondary"><Trans>Learn More</Trans></button>
						</Link>
					</div>
				</section>

				<div className="wavy-element-03"></div>
				<div className="decorative-island">
					<StaticImage loading="lazy" src="../../static/img/index/island-01.png" placeholder="none" width={600} height={357} alt="" />
				</div>

				<section className="features__wrapper">
					<div className="features__container container-common">
						<h2 className="section-heading"><Trans>Key features</Trans></h2>
						<div className="features-list">
							<div>
								<img src="/img/index/icons/crypto.svg" alt="" width="100" height="100" />
								<h3><Trans>Crypto-powered</Trans></h3>
								<p><Trans>Pay for VPN service using one of our supported cryptocurrencies. Not crypto savvy? You can purchase a pre-loaded account right in the app.</Trans></p>
								<a href="https://docs.orchid.com/en/latest/accounts/#how-to-get-an-orchid-account"><Trans>Learn more.</Trans></a>
							</div>
							<div>
								<img src="/img/index/icons/nano.svg" alt="" width="100" height="100" />
								<h3><Trans>Nanopayment Ecosystem</Trans></h3>
								<p><Trans>Orchid uses a new probabilistic nanopayment system to scale payment throughput via cryptocurrency-backed “tickets”.</Trans></p>
								<a href="https://docs.orchid.com/en/latest/accounts/#orchid-account-efficiency"><Trans>Learn more.</Trans></a>
							</div>
							<div>
								<img src="/img/index/icons/traffic.svg" alt="" width="100" height="100" />
								<h3><Trans>Traffic Analysis</Trans></h3>
								<p><Trans>Peer into the details of your device’s connections by utilizing the built-in network protocol analyzer powered by Wireshark.</Trans></p>
								<a href="https://docs.orchid.com/en/latest/using-orchid/#using-the-traffic-monitor"><Trans>Learn more.</Trans></a>
							</div>
							<div>
								<img src="/img/index/icons/multi-hop.svg" alt="" width="100" height="100" />
								<h3><Trans>Multi-hop</Trans></h3>
								<p><Trans>Compose your own onion-routed VPN circuit by stringing together multiple ‘hops’ for increased privacy.</Trans></p>
								<a href="https://docs.orchid.com/en/latest/using-orchid/#using-the-multi-hop-interface"><Trans>Learn more.</Trans></a>
							</div>
							<div>
								<img src="/img/index/icons/servers.svg" alt="" width="100" height="100" />
								<h3><Trans>Randomized Servers</Trans></h3>
								<p><Trans>Connect randomly to an OXT-staked VPN server. Change to a new provider at any time by toggling the VPN off and back on.</Trans></p>
								<a href="https://docs.orchid.com/en/latest/faq/#technology"><Trans>Learn more.</Trans></a>
							</div>
							<div>
								<img src="/img/index/icons/sharing.svg" alt="" width="100" height="100" />
								<h3><Trans>Unlimited Sharing</Trans></h3>
								<p><Trans>Share a single account across multiple devices and/or users to help out friends and family, or protect your online activity across all of your devices.</Trans></p>
								<a href="https://docs.orchid.com/en/latest/accounts/#sharing-orchid-accounts"><Trans>Learn more.</Trans></a>
							</div>
						</div>
					</div>
				</section>

				<div className="dove-information">
					<a href="https://docs.orchid.com/">
						<button className="btn-primary"><Trans>Read the Docs</Trans></button>
					</a>
					<a href="/whitepaper/english.pdf">
						<button className="btn-secondary"><Trans>Whitepaper</Trans></button>
					</a>
				</div>

				<div className="wavy-element-04"></div>

				<section className="why-orchid__wrapper">
					<div className="why-orchid__container container-common">
						<h2 className="section-heading"><Trans>Why Orchid?</Trans></h2>
						<div className="why-orchid__flex">
							<StaticImage className="why-orchid__image" loading="lazy" src="../../static/img/index/why-orchid__phone.png" placeholder="none" width={800} height={1019} alt="" />
							<div className="why-orchid__text">

								<h4><Trans>No Subscriptions</Trans></h4>
								<p><Trans>When you buy an Orchid account via in-app purchase, your funds are converted into a crypto-backed account that you control. VPN service is paid for on a per-use basis, meaning you only pay for the bandwidth you actually use</Trans></p>

								<h4><Trans>Tracking-free</Trans></h4>
								<p><Trans>Orchid has no tracking pixels, 3rd-party javascript or any code on Orchid.com that harvests information about you. Orchid also has no tracking systems in our applications. We absolutely do not track.</Trans></p>

								<h4><Trans>Open Source</Trans></h4>
								<p><Trans>All of Orchid's code is Open Source and freely available to download <a href="https://github.com/OrchidTechnologies/orchid" target="_blank" rel="noreferrer">on GitHub</a>. Use of Orchid's source code is governed by the AGPL copyleft Open Source license. The Orchid community develops code "in the open" by continually pushing changes that anyone can see on GitHub and <a href="https://github.com/OrchidTechnologies/orchid/releases/">tagging releases</a> as appropriate.</Trans></p>

								<h4><Trans>Decentralized</Trans></h4>
								<p><Trans>Orchid brings leading providers together through a unique, decentralized privacy marketplace. Because there are more (and more widely distributed) servers available, the user\'s data has more possible paths to choose from. This randomness makes user information more difficult for would-be trackers and hackers to exploit and the service is much more resilient.</Trans></p>

								<h4><Trans>Unblock Website & Apps</Trans></h4>
								<p><Trans>Use the Orchid VPN to break through firewalls and access blocked content. Using Orchid you can access the open Internet and bypass restrictions placed by your ISP or network administrator.</Trans></p>

								<h4><Trans>Flexible</Trans></h4>
								<p><Trans>Orchid has a WireGuard and Open VPN client built into the app. Using Orchid is possible with your own VPN server setup ala Streissand or other home grown solutions - even other paid VPN services. Furthermore, Orchid allows you to string multiple types of VPN servers together, which has interesting privacy properties.</Trans></p>
							</div>
						</div>

						<ExplainerVideo />

						<Link to="/get-orchid" className="section-button">
							<button className="btn-secondary"><Trans>Get Orchid</Trans></button>
						</Link>
					</div>
				</section>

				<div className="wavy-element-05"></div>

				<section className="press-wrapper">
					<div className="press-container container-common">
						<h2 className="section-heading"><Trans>Orchid News</Trans></h2>
						<div className="press-list">
							<div className="press-card">
								<p className="press-card__quote">
									In a world where one assumes the Cambridge Analytica scandal is merely the tip of the iceberg
									when it comes to data abuse, it’s easy to see the project’s appeal.
								</p>
								<a href="https://techcrunch.com/2018/04/20/orchid-labs-is-in-the-process-of-raising-125-million-for-its-surveillance-free-layer-atop-the-internet/" className="footer">
									<div className="logo">
										<img width="360" height="51" src="/img/index/seen/techcrunch.png" alt="techcrunch" />
									</div>
									<div className="uppercase">TECHCRUNCH</div>
									<img src="/img/index/read-more-arrow.svg" alt="" />
								</a>
							</div>
							<div className="press-card">
								<p className="press-card__quote">
									This is what the future of VPN tech looks like. And you gotta see it.
								</p>
								<a href="https://www.cnet.com/news/orchid-vpn-review-it-uses-the-tech-behind-bitcoin-to-improve-privacy/" className="footer">
									<div className="logo">
										<img width="180" height="132" src="/img/index/seen/cnet.svg" alt="CNET" />
									</div>
									<div className="uppercase">CNET</div>
									<img src="/img/index/read-more-arrow.svg" alt="" />
								</a>
							</div>
							<div className="press-card">
								<p className="press-card__quote">
									Orchid’s mission is to build open-source software that keeps the Internet open and accessible  —
									a natural resource for everyone, everywhere.
								</p>
								<a href="https://www.coindesk.com/orchid-tops-43-million-raised-in-token-sale-for-crypto-tor-alternative" className="footer">
									<div className="logo">
										<img width="360" height="70" src="/img/index/seen/coindesk.png" alt="coindesk" />
									</div>
									<div className="uppercase">COINDESK</div>
									<img src="/img/index/read-more-arrow.svg" alt="" />
								</a>
							</div>
						</div>
						<h3 className="center-text vpad-thin color-gray" style={{ marginBottom: "-0.5rem" }}>The Orchid community has a lot to say as well!</h3>
						<div className="press-list">
							<div className="press-card">
								<p className="press-card__quote">
									"Orchid’s VPN could be very useful from a point of view of freedom."
									<br /><br />
									<a href="https://twitter.com/search?q=%24OXT&amp;src=cashtag_click">$OXT</a>&nbsp;<a href="https://twitter.com/hashtag/OrchidProtocol?src=hashtag_click">#OrchidProtocol</a>
									<br /><br />
									Excellent read: <a href="https://beincrypto.com/everything-is-an-economy-orchid-ceo-steven-waterhouse/">Orchid CEO Steven Waterhouse on VPNs...</a>
								</p>
								<div className="footer">
									<div className="logo offset">
										<img src="/img/index/TweetBunny.png" alt="" />
									</div>
									<a className="press-card__more uppercase color-gray" href="https://twitter.com/justinsanger/status/1380986189503664131">@justinsanger</a>
								</div>
							</div>
							<div className="press-card">
								<p className="press-card__quote">
									So proud of <a href="https://twitter.com/OrchidProtocol">@OrchidProtocol</a> getting listed in the Apple app store! Privacy and internet access should be synonymous, and Orchid's decentralized VPN is a key step forward. I'm going to try a week of <a href="https://twitter.com/hashtag/OrchidAlwaysOn?src=hashtag_click">#OrchidAlwaysOn</a> and keep my VPN running in the background.
								</p>
								<div className="footer">
									<div className="logo offset">
										<img src="/img/index/TweetBunny.png" alt="" />
									</div>
									<a className="press-card__more uppercase color-gray" href="https://twitter.com/collectionist/status/1281442941186129920">@collectionist</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="wavy-element-06"></div>

				<section className="blog-wrapper">
					<div className="blog-container container-common">
						<h2 className="section-heading"><Trans>From the Orchid Blog</Trans></h2>
						<div className="blog-grid">
							<BlogPosts />
						</div>
						<a href={t("https://blog.orchid.com/")} className="section-button">
							<button className="btn-secondary">
								<Trans>Go to Blog</Trans>
							</button>
						</a>
					</div>
				</section>

				{/*<div className="wavy-element-07"></div>*/}

				<section className="newsletter-wrapper">
					<div className="newsletter-container container-common">
						<h2 className="section-heading"><Trans>Connect</Trans></h2>
						<p><Trans>The Orchid community is one of the things that makes this project truly special. Follow us through one of our many social platforms, meet us in person at one of our upcoming events, and subscribe to our newsletter to stay informed about all things Orchid!</Trans></p>

						<div className="social-icons">
							<a className="inline-block" href="https://twitter.com/OrchidProtocol" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter" title="Twitter">
								<img src="/img/shared/social-twitter-purple.svg" alt="Twitter" width="32" height="32" />
							</a>
							<a className="inline-block" href="https://discord.gg/GDbxmjxX9F" target="_blank" rel="noopener noreferrer" aria-label="Join us on Discord" title="Discord">
								<img src="/img/shared/social-discord-purple.svg" alt="Discord" width="32" height="32" />
							</a>
							<a className="inline-block" href="https://www.t.me/OrchidOfficial" target="_blank" rel="noopener noreferrer" aria-label="Join us on Telegram" title="Telegram">
								<img src="/img/shared/social-telegram-purple.svg" alt="Telegram" width="32" height="32" />
							</a>
							<a className="inline-block" href="https://github.com/OrchidTechnologies" target="_blank" rel="noopener noreferrer" aria-label="See the Source" title="Github">
								<img src="/img/shared/social-github-purple.svg" alt="Github" width="32" height="32" />
							</a>
							<a className="inline-block" href="https://www.facebook.com/OrchidProtocol" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook" title="Facebook">
								<img src="/img/shared/social-facebook-purple.svg" alt="Facebook" width="32" height="32" />
							</a>
							<a className="inline-block" href="https://www.reddit.com/r/orchid/" target="_blank" rel="noopener noreferrer" aria-label="Check out our Subreddit" title="Reddit">
								<img src="/img/shared/social-reddit-purple.svg" alt="Reddit" width="32" height="32" />
							</a>
						</div>

						<h3><Trans>Let’s stay connected</Trans></h3>
						<p><Trans>Get the Orchid Onlooker newsletter for updates and privacy news</Trans></p>
						<NewsletterSignupCore t={t} largePadding="true" />
					</div>
				</section>
			</Layout>
		)
	}
}

export default withI18next({ ns: "common" })(Page)
