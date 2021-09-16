import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './index.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>Crypto VPN App | Orchid</title>
			<meta name="description" content="Orchid provides the best crypto powered VPN by harnessing the power of blockchain technology to ensure digital privacy." />
		</Helmet>
		<section className="home-hero">
			<div className="home-hero__content">
				<img src="/img/index/dont-be-a-product.svg" alt="Don't be a product" width="616" height="314" />
				<h3><span>No data collection.</span> <span>No 3rd-party sharing.</span> <span>No profit markup.</span></h3>
				<h3 className="color-primary"><span>A new model of VPN.</span></h3>
				<a href="/get-orchid" className="btn">
					<button className="btn-primary">Get Orchid</button>
				</a>
				<br />
				<small>(starting at just $1)</small>
			</div>
			<picture className="home-hero__picture" width="491" height="765">
				<source srcSet="/img/index/phone.webp" type="image/webp" />
				<img src="/img/index/phone.png" alt="" className="home-hero__image" width="491" height="765" />
			</picture>
		</section>

		<div className="wavy-element-02"></div>

		<section className="marketplace__wrapper">
			<div className="marketplace__container container-common">
				<h2 className="section-heading">Orchid is a decentralized bandwidth marketplace</h2>
				<p>Buyers use the <a href="/download">Orchid app</a> to get protection from snooping ISP's, unblock websites
					cutoff by firewalls, and for many other privacy benefits. Sellers receive payments in real-time as they
					provide service and stake <a href="/oxt">OXT</a> to compete for service requests. Orchid Technologies charges no
					fees, and the community maintains the <a href="https://github.com/OrchidTechnologies">Open Source software</a> that powers
					the entire ecosystem. Try it out!</p>
				<picture>
					<img src="/img/index/marketplace.png" alt="" width="1921" height="442" />
				</picture>
				<div className="marketplace-steps">
					<div>
						<h3>Fund your Orchid account</h3>
						<p>Fund in-app with your native fiat currency or use the DApp to fund an account with your crypto.</p>
					</div>
					<div>
						<h3>Connect to a random provider</h3>
						<p>Tap "Connect" to match with a VPN server that has locked up OXT to compete for your business.</p>
					</div>
					<div>
						<h3>Pay only for what you actually use</h3>
						<p>Orchid nanopayments mean you are never locked into a subscription and pay only for actual use.</p>
					</div>
				</div>
				<a href="/how-it-works/" className="section-button">
					<button className="btn-secondary">Learn More</button>
				</a>
			</div>
		</section>

		<div className="wavy-element-03"></div>
		<picture>
			<source srcSet="/img/index/island-01.avif" type="image/avif" />
			<source srcSet="/img/index/island-01.webp" type="image/webp" />
			<img className="decorative-island" src="/img/index/island-01.png" alt="" width="1056" height="628" />
		</picture>

		<section className="features__wrapper">
			<div className="features__container container-common">
				<h2 className="section-heading">Key features</h2>
				<div className="features-list">
					<div>
						<img src="/img/index/icons/crypto.svg" alt="" width="100" height="100" />
						<h3>Crypto-powered</h3>
						<p>Pay for VPN service using one of our supported cryptocurrencies. Not crypto savvy? You can purchase a pre-loaded account right in the app.</p>
						<a href="https://docs.orchid.com/en/latest/accounts/#how-to-get-an-orchid-account">Learn more.</a>
					</div>
					<div>
						<img src="/img/index/icons/nano.svg" alt="" width="100" height="100" />
						<h3>Nanopayment Ecosystem</h3>
						<p>Orchid uses a new probabilistic nanopayment system to scale payment throughput via cryptocurrency-backed “tickets”.</p>
						<a href="https://docs.orchid.com/en/latest/accounts/#orchid-account-efficiency">Learn more.</a>
					</div>
					<div>
						<img src="/img/index/icons/traffic.svg" alt="" width="100" height="100" />
						<h3>Traffic Analysis</h3>
						<p>Peer into the details of your device’s connections by utilizing the built-in network protocol analyzer powered by Wireshark.</p>
						<a href="https://docs.orchid.com/en/latest/using-orchid/#using-the-traffic-monitor">Learn more.</a>
					</div>
					<div>
						<img src="/img/index/icons/multi-hop.svg" alt="" width="100" height="100" />
						<h3>Multi-hop</h3>
						<p>Compose your own onion-routed VPN circuit by stringing together multiple ‘hops’ for increased privacy.</p>
						<a href="https://docs.orchid.com/en/latest/using-orchid/#using-the-multi-hop-interface">Learn more.</a>
					</div>
					<div>
						<img src="/img/index/icons/servers.svg" alt="" width="100" height="100" />
						<h3>Randomized Servers</h3>
						<p>Connect randomly to an OXT-staked VPN server. Change to a new provider at any time by toggling the VPN off and back on.</p>
						<a href="https://docs.orchid.com/en/latest/faq/#technology">Learn more.</a>
					</div>
					<div>
						<img src="/img/index/icons/sharing.svg" alt="" width="100" height="100" />
						<h3>Unlimited Sharing</h3>
						<p>Share a single account across multiple devices and/or users to help out friends and family, or protect your online activity across all of your devices.</p>
						<a href="https://docs.orchid.com/en/latest/accounts/#sharing-orchid-accounts">Learn more.</a>
					</div>
				</div>
			</div>
		</section>

		<div className="dove-information">
			<a href="https://docs.orchid.com/">
				<button className="btn-primary">Read the Docs</button>
			</a>
			<a href="/assets/whitepaper/whitepaper.pdf">
				<button className="btn-secondary">Whitepaper</button>
			</a>
		</div>

		<div className="wavy-element-04"></div>

		<section className="why-orchid__wrapper">
			<div className="why-orchid__container container-common">
				<h2 className="section-heading">Why Orchid?</h2>
				<div className="why-orchid__flex">
					<picture>
						<source srcSet="/img/index/why-orchid__phone.avif" type="image/avif" />
						<source srcSet="/img/index/why-orchid__phone.webp" type="image/webp" />
						<img src="/img/index/why-orchid__phone.png" width="507" height="646" alt="" />
					</picture>
					<div className="why-orchid__text">

						<h4>No Subscriptions</h4>
						<p>When you buy an Orchid account via in-app purchase, your funds are converted into a crypto-backed account that you control.VPN service is paid for on a per-use basis, meaning you only pay for the bandwidth you actually use</p>

						<h4>Tracking-free</h4>
						<p>Orchid has no tracking pixels, 3rd-party javascript or any code on Orchid.com that harvests information about you.Orchid also has no tracking systems in our applications.We absolutely do not track.</p>

						<h4>Open Source</h4>
						<p>All of Orchid's code is Open Source and freely available to download <a href="https://github.com/OrchidTechnologies/orchid" target="_blank" rel="noreferrer">on GitHub</a>. Use of Orchid's source code is governed by the AGPL copyleft Open Source license.The Orchid community develops code "in the open" by continually pushing changes that anyone can see on GitHub and <a href="https://github.com/OrchidTechnologies/orchid/releases/">tagging releases</a> as appropriate.</p>

						<h4>Decentralized</h4>
						<p>Orchid brings leading providers together through a unique, decentralized privacy marketplace.Because there are more (and more widely distributed) servers available, the user's data has more possible paths to choose from. This randomness makes user information more difficult for would-be trackers and hackers to exploit and the service is much more resilient.</p>

						<h4>Unblock Website & Apps</h4>
						<p>Use the Orchid VPN to break through firewalls and access blocked content.Using Orchid you can access the open Internet and bypass restrictions placed by your ISP or network administrator.</p>

						<h4>Flexible</h4>
						<p>Orchid has a WireGuard and Open VPN client built into the app.Using Orchid is possible with your own VPN server setup ala Streissand or other home grown solutions - even other paid VPN services.Furthermore, Orchid allows you to string multiple types of VPN servers together, which has interesting privacy properties.</p>
					</div>
				</div>

				<video-section></video-section>

				<a href="/get-orchid" className="section-button">
					<button className="btn-secondary">Get Orchid</button>
				</a>
			</div>
		</section>

		<div className="wavy-element-05"></div>

		<section className="press-wrapper">
			<div className="press-container container-common">
				<h2 className="section-heading" i18n="@@HomeAsSeenIn__Title">Orchid News</h2>
				<div className="press-list">
					<div className="press-card">
						<p className="press-card__quote" i18n="@@HomeAsSeenIn__TechCrunch">
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
						<p className="press-card__quote" i18n="@@HomeAsSeenIn__CNET">
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
						<p className="press-card__quote" i18n="@@HomeAsSeenIn__CoinDesk">
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
							<a href="https://twitter.com/search?q=%24OXT&src=cashtag_click">$OXT</a>&nbsp;<a href="https://twitter.com/hashtag/OrchidProtocol?src=hashtag_click">#OrchidProtocol</a>
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
				<h2 className="section-heading">From the Orchid Blog</h2>
				<div className="blog-grid">

				</div>
				<a href="https://blog.orchid.com/" className="section-button" i18n-href="@@Navigation-Blog-Link" i18n="@@Navigation-Blog">
					<button className="btn-secondary">
						Go to Blog
					</button>
				</a>
			</div>
		</section>

		{/*<div className="wavy-element-07"></div>*/}

		<section className="newsletter-wrapper">
			<div className="newsletter-container container-common">
				<h2 className="section-heading">Connect</h2>
				<p>The Orchid community is one of the things that makes this project truly special. Follow us through one of our many social platforms, meet us in person at one of our upcoming events, and subscribe to our newsletter to stay informed about all things Orchid!</p>

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

				<h3>Let’s stay connected</h3>
				<p>Get the Orchid Onlooker newsletter for updates and privacy news</p>
				<app-newsletter-signup-core largePadding="true"></app-newsletter-signup-core>
			</div>
		</section>
	</Layout>
)

export default Page
