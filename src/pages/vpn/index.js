import { Helmet } from 'react-helmet'
import React from 'react'
import Layout from '../../components/common/Layout'
import './index.scss'
import YouTubeEmbed from '../../components/YouTubeEmbed';

import { graphql } from 'gatsby';
import { Link, Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import WebsiteMeta from '../../components/common/meta/WebsiteMeta';
import { StaticImage } from "gatsby-plugin-image";
import { css } from '@emotion/react';
import { break_largeScreen } from '../../components/common/styles';
import Wrapper from '../../components/common/Wrapper';
import Container from '../../components/common/Container';

function Page(props) {
	const { t } = useTranslation();
	const { language } = useI18next();

	return (
		<Layout t={t} bodyclassName="index">
			<WebsiteMeta
				title={t('Crypto VPN App | Orchid')}
				description={t('Orchid provides the best crypto powered VPN by harnessing the power of blockchain technology to ensure digital privacy.')}
				image="/img/vpn/social.png"
				location={props.location}
			/>
			<Helmet>
				<body className="index-page" />
			</Helmet>

			<section css={css`
					position: relative;
					padding: 2rem 0;
					padding-top: 3rem;
					@media (min-width: 768px) {
						margin-top: 1rem;
						padding: 4rem 0 2.5rem;
					}
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					@media (max-width: 870px) {
						align-items: center;
						flex-direction: column-reverse;
						padding-top: 9vw;
					}
				`}>
				<div css={css`
						position: relative;
						z-index: 1;
						text-align: center;
						max-width: 40rem;
						width: 95%;
						font-size: 1.5rem;
						& > h3 {
							color: inherit;
							&.color-primary {
								color: var(--orc-purple);
							}
							line-height: 1rem;
							& > span {
								display: inline-block;
								margin: 0.5em 0.2em;
								@media (max-width: 870px) {
									margin: 0.2em 0;
								}
							}
						}
						small,
						button {
							font-family: var(--font-family-heading);
						}
						small {
							font-weight: 400;
							font-size: 70%;
						}
						button {
							margin-top: 1rem;
							padding: 0.4rem 3rem;
						}
						svg {
							max-width: 100%;
							width: 616px;
							height: auto;
							@media screen and (min-width: (870px + 1px)) {
								margin-bottom: 1rem;
							}
							@media (max-width: 870px) {
								max-width: 300px;
								width: 100%;
							}
						}
						font-weight: 200;
						@media (min-width: 60rem) {
							margin-right: 5rem;
						}
					`}>
					<h1 className={`${language} mb-2 lg:mb-0`} css={css`
						&:not(.secondary) {
							font-family: "Headline One", "Baloo 2", sans-serif;
							color: var(--orc-rock-gray);
							font-size: clamp(2.5rem, 8vw, 5rem);
							&.en {
								font-size: clamp(2.5rem, 9vw, 6rem)
							}
							&.hi {
								font-size: clamp(2rem, 8vw, 5rem);
							}
							&.ja {
								font-size: clamp(1.25rem, 5vw, 3.25rem);
							}
							&.ru {
								font-size: clamp(1.75rem, 6vw, 4rem);
							}
							&.zh {
								margin-bottom: 1ch;
								${break_largeScreen} {
									margin-bottom: 0.5ch;
								}
							}
						}
					`}><Trans>UNBLOCK<br />YOUR INTERNET.</Trans></h1>

					<h3 css={css`
						font-size: 24px;
					`}>
						<Trans>The web has evolved. <span className='text-purple'>So should your VPN.</span></Trans>
					</h3>
					<Link to="/get-orchid" className="btn">
						<button className="btn-primary"><Trans>Get Orchid</Trans></button>
					</Link>
				</div>
				<div css={css`
						width: 350px;
						max-width: 60%;
						@media (max-width: 870px) {
							max-width: 30%;
							margin-bottom: 1rem;
						}
						position: relative;
						& > img {
							position: relative;
							z-index: 1;
						}
						&::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							background-image: url(/img/vpn/wavy-lines-01.svg);
							background-size: contain;
							background-repeat: no-repeat;
							background-position: center;
							transform: scale(2.5) translateX(5%) translateY(5%);
							pointer-events: none;
						}
					`}>
					<StaticImage loading="eager" src="../../../static/img/vpn/phone.png" placeholder="tracedSVG" width={491} height={765} alt="" />
				</div>
			</section>

			<div className="wavy-element-02"></div>

			<Wrapper className="marketplace__wrapper">
				<Container className="marketplace__container">
					<h2 className="section-heading"><Trans>Orchid VPN enables a bandwidth marketplace</Trans></h2>
					<p>
						<Trans>
							Buyers use the <Link to="/download">Orchid app</Link> to get protection from snooping ISP's, unblock websites cutoff by firewalls, and for many other privacy benefits. Sellers receive payments in real-time as they provide service and stake <Link to="/oxt">OXT</Link> to compete for service requests. Orchid Technologies charges no fees, and the community maintains the <a href="https://github.com/OrchidTechnologies">Open Source software</a> that powers the entire ecosystem. Try it out!
						</Trans>
					</p>
					<StaticImage loading="lazy" src="../../../static/img/vpn/marketplace.png" placeholder="none" width={1600} height={368} alt="" />
					<div className="marketplace-steps">
						<div>
							<p className='text-xl font-bold'><Trans>Fund your Orchid account</Trans></p>
							<p><Trans>Fund in-app with your native fiat currency or use the DApp to fund an account with your crypto.</Trans></p>
						</div>
						<div>
							<p className='text-xl font-bold'><Trans>Connect to a random provider</Trans></p>
							<p><Trans>Tap "Connect" to match with a VPN server that has locked up OXT to compete for your business.</Trans></p>
						</div>
						<div>
							<p className='text-xl font-bold'><Trans>Pay only for what you actually use</Trans></p>
							<p><Trans>Orchid nanopayments mean you are never locked into a subscription and pay only for actual use.</Trans></p>
						</div>
					</div>
					<Link to="/how-it-works/" className="section-button">
						<button className="btn-secondary"><Trans>Learn More</Trans></button>
					</Link>
				</Container>
			</Wrapper>

			<div className="wavy-element-03"></div>
			<div className="decorative-island">
				<StaticImage loading="lazy" src="../../../static/img/vpn/island-01.png" placeholder="none" width={600} height={357} alt="" />
			</div>

			<Wrapper className="features__wrapper">
				<Container className="features__container">
					<h2 className="section-heading"><Trans>Key features</Trans></h2>
					<div className="features-list">
						<div>
							<img src="/img/vpn/icons/crypto.svg" alt="" width="100" height="100" />
							<p className='text-xl text-purple font-bold'><Trans>Crypto-powered</Trans></p>
							<p><Trans>Pay for VPN service using one of our supported cryptocurrencies. Not crypto savvy? You can purchase a pre-loaded account right in the app.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/accounts/#how-to-get-an-orchid-account"><Trans>Learn more.</Trans></a>
						</div>
						<div>
							<img src="/img/vpn/icons/nano.svg" alt="" width="100" height="100" />
							<p className='text-xl text-purple font-bold'><Trans>Nanopayment Ecosystem</Trans></p>
							<p><Trans>Orchid uses a new probabilistic nanopayment system to scale payment throughput via cryptocurrency-backed “tickets”.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/accounts/#orchid-account-efficiency"><Trans>Learn more.</Trans></a>
						</div>
						<div>
							<img src="/img/vpn/icons/traffic.svg" alt="" width="100" height="100" />
							<p className='text-xl text-purple font-bold'><Trans>Traffic Analysis</Trans></p>
							<p><Trans>Peer into the details of your device’s connections by utilizing the built-in network protocol analyzer powered by Wireshark.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/using-orchid/#using-the-traffic-monitor"><Trans>Learn more.</Trans></a>
						</div>
						<div>
							<img src="/img/vpn/icons/multi-hop.svg" alt="" width="100" height="100" />
							<p className='text-xl text-purple font-bold'><Trans>Multi-hop</Trans></p>
							<p><Trans>Compose your own onion-routed VPN circuit by stringing together multiple ‘hops’ for increased privacy.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/using-orchid/#using-the-multi-hop-interface"><Trans>Learn more.</Trans></a>
						</div>
						<div>
							<img src="/img/vpn/icons/servers.svg" alt="" width="100" height="100" />
							<p className='text-xl text-purple font-bold'><Trans>Randomized Servers</Trans></p>
							<p><Trans>Connect randomly to an OXT-staked VPN server. Change to a new provider at any time by toggling the VPN off and back on.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/faq/#technology"><Trans>Learn more.</Trans></a>
						</div>
						<div>
							<img src="/img/vpn/icons/sharing.svg" alt="" width="100" height="100" />
							<p className='text-xl text-purple font-bold'><Trans>Unlimited Sharing</Trans></p>
							<p><Trans>Share a single account across multiple devices and/or users to help out friends and family, or protect your online activity across all of your devices.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/accounts/#sharing-orchid-accounts"><Trans>Learn more.</Trans></a>
						</div>
					</div>
				</Container>
			</Wrapper>

			<div className="dove-information">
				<a href="https://docs.orchid.com/">
					<button className="btn-primary"><Trans>Read the Docs</Trans></button>
				</a>
				<a href="/whitepaper/english.pdf">
					<button className="btn-secondary"><Trans>Whitepaper</Trans></button>
				</a>
			</div>

			<div className="wavy-element-04"></div>

			<Wrapper className="why-orchid__wrapper">
				<Container className="why-orchid__container">
					<h2 className="section-heading"><Trans>Why Orchid?</Trans></h2>
					<div className="why-orchid__flex">
						<StaticImage className="why-orchid__image" loading="lazy" src="../../../static/img/vpn/why-orchid__phone.png" placeholder="none" width={800} height={1019} alt="" />
						<div className="why-orchid__text">

							<p className='text-xl font-bold mt-6 lg:mt-4'><Trans>No Subscriptions</Trans></p>
							<p><Trans>When you buy an Orchid account via in-app purchase, your funds are converted into a crypto-backed account that you control. VPN service is paid for on a per-use basis, meaning you only pay for the bandwidth you actually use</Trans></p>

							<p className='text-xl font-bold mt-6 lg:mt-4'><Trans>Tracking-free</Trans></p>
							<p><Trans>Orchid has no tracking pixels, 3rd-party javascript or any code on Orchid.com that harvests information about you. Orchid also has no tracking systems in our applications. We absolutely do not track.</Trans></p>

							<p className='text-xl font-bold mt-6 lg:mt-4'><Trans>Open Source</Trans></p>
							<p><Trans>All of Orchid's code is Open Source and freely available to download <a href="https://github.com/OrchidTechnologies/orchid" target="_blank" rel="noreferrer">on GitHub</a>. Use of Orchid's source code is governed by the AGPL copyleft Open Source license. The Orchid community develops code "in the open" by continually pushing changes that anyone can see on GitHub and <a href="https://github.com/OrchidTechnologies/orchid/releases/">tagging releases</a> as appropriate.</Trans></p>

							<p className='text-xl font-bold mt-6 lg:mt-4'><Trans>Decentralized</Trans></p>
							<p><Trans>Orchid brings leading providers together through a unique, decentralized privacy marketplace. Because there are more (and more widely distributed) servers available, the user's data has more possible paths to choose from. This randomness makes user information more difficult for would-be trackers and hackers to exploit and the service is much more resilient.</Trans></p>

							<p className='text-xl font-bold mt-6 lg:mt-4'><Trans>Unblock Website & Apps</Trans></p>
							<p><Trans>Use the Orchid VPN to break through firewalls and access blocked content. Using Orchid you can access the open Internet and bypass restrictions placed by your ISP or network administrator.</Trans></p>

							<p className='text-xl font-bold mt-6 lg:mt-4'><Trans>Flexible</Trans></p>
							<p><Trans>Orchid has a WireGuard and Open VPN client built into the app. Using Orchid is possible with your own VPN server setup ala Streissand or other home grown solutions - even other paid VPN services. Furthermore, Orchid allows you to string multiple types of VPN servers together, which has interesting privacy properties.</Trans></p>
						</div>
					</div>

					<YouTubeEmbed id="zJHFMxGAqyw" defaultThumbnail={true} />

					<Link to="/get-orchid" className="section-button">
						<button className="btn-secondary"><Trans>Get Orchid</Trans></button>
					</Link>
				</Container>
			</Wrapper>

		</Layout>
	);
}

export default Page;

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