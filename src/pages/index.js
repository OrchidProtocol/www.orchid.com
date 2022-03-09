import React from 'react'
import Layout from '../components/common/Layout'

import BlogPosts from '../components/common/BlogPosts';
import { graphql, Link } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';
import { css } from '@emotion/react';
import Wrapper from '../components/common/Wrapper';
import Container from '../components/common/Container';
import { break_largeScreen, break_xlargeScreen, break_mobile, break_notLargeScreen, break_notMobile, flatShadow, shadow } from '../components/common/styles';
import FooterSocialIcons from '../components/common/FooterSocialIcons';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import NewsletterSignupCore from '../components/newsletter-signup-core';
import ContainerOverflow from '../components/common/ContainerOverflow';
import Circle from '../components/common/Circle';
import Divider from '../components/common/Divider';
import FeaturedTweets from '../components/common/Tweets';

const DiagramArrow = styled.img`
	display: block;
	position: absolute;
	top: 80.5%;
	width: 4%;
	left: 7.8%;
	pointer-events: none;
	&.last {
		left: unset;
		right: 7.8%;
	}
	&.middle {
		left: 50%;
		top: 92.55%;
		margin-left: -2%;
	}
	${break_notLargeScreen} {
		display: none;
	}
`;

export const IndexCard = styled.div`
	${flatShadow}
	position: relative;
	width: 17rem;
	max-width: 100%;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&::before {
		pointer-events: none;
		content: "";
		position: absolute;
		top: 1rem;
		left: -1.25rem;
		width: 2rem;
		height: 2rem;
		background-size: contain;
		background-repeat: no-repeat;
		background-image: url(/img/shared/quotes.svg);
	}
	&.twitter::before {
		background-image: url(/img/shared/double-arrow.svg);
	}
`;

function Page(props) {
	const { t } = useTranslation();

	return (
		<Layout t={t} bodyclassName='index'>
			<WebsiteMeta
				title={t('Crypto VPN App | Orchid')}
				description={t('Orchid provides the best crypto powered VPN by harnessing the power of blockchain technology to ensure digital privacy.')}
				image='/img/vpn/social.png'
				location={props.location}
			/>

			<div className='relative z-10 flex items-center' css={css`
				${break_largeScreen} {
					min-height: 700px;
				}
				${break_xlargeScreen} {
					min-height: 800px;
				}
			`}>
				<Container className='phantom lg:p-0 relative'>

					<Circle css={css`
						top: 0%;
						right: 75%;
						width: 46%;
						max-width: 700px;
						${break_largeScreen} {
							top: -15%;
							right: 75%;
						}
						${break_xlargeScreen} {
							top: -22%;
							right: 75%;
						}
					`} />
					<Circle css={css`
						top: 0%;
						right: 50%;
						width: 11%;
						max-width: 180px;
						${break_largeScreen} {
							top: -5%;
							right: 50%;
						}
						${break_xlargeScreen} {
							top: -20%;
							right: 45%;
						}
					`} />
					<Circle css={css`
						top: 60%;
						right: 52%;
						width: 23%;
						max-width: 280px;
						${break_xlargeScreen} {
							top: 70%;
							right: 52%;
						}
					`} />

					<div className='lg:w-1/2 h-auto relative z-10'>
						<h1><img alt={t('A Decentralized Marketplace')} title={t('A Decentralized Marketplace')} src='/img/home/a-decentralized-marketplace.svg' width={620} height={251} /></h1>
						<p className='my-2'><Trans>Orchid is a Web3 platform that enables an onion routing network incentivized by OXT and a multi-hop VPN client. The Orchid community believes in Open Source software and that Orchid can enable a brighter, freer and empowered future.</Trans></p>
						<p className='mt-8'><FooterSocialIcons /></p>
					</div>
				</Container>

				<img className='lg:hidden absolute right-0 top-0 h-auto w-1/4' alt='' src='/img/home/logo-trimmed.svg' width={613} height={875} />
				<img className='hidden lg:block absolute right-0 h-auto w-1/3' alt='' src='/img/home/logo-trim.svg' width={800} height={875} css={css`top: 10%;`} />
			</div>

			<Divider className='bg-purple-500' />

			<Wrapper>
				<Container className='phantom flex flex-wrap justify-around relative z-10'>
					<div className='lg:w-5/12 flex flex-col justify-between items-start pb-4 md:py-4'>
						<h2><Trans>Orchid’s mission is privacy, and privacy is a human right.</Trans></h2>
						<Link to="/about-us/"><button className='btn btn-primary mt-4 hidden lg:block'><Trans>About Orchid</Trans></button></Link>
					</div>
					<div className='lg:w-5/12'>
						<p className='my-4'><Trans>Privacy and freedom are not in conflict; they are one and the same.</Trans></p>
						<p className='my-4'><Trans>Privacy is an easy target for those in power who say, “if you have nothing to hide, you have nothing to fear.” This is a lie. The truth is that the people in positions of power have the least to worry about being private.</Trans></p>
						<p className='my-4'><Trans>We stand in solidarity with causes dedicated to privacy and to other fundamental human rights. Movements that fight for freedom and equality, that fight against oppression and censorship, that help by creating the tools to level the playing field for all.</Trans></p>
					</div>
					<Link to="/about-us/"><button className='btn btn-primary mt-4 mx-auto lg:hidden'><Trans>About Orchid</Trans></button></Link>
				</Container>
			</Wrapper>

			<Wrapper className='text-center relative'>
				<Circle css={css`
					top: 0%;
					left: 65%;
					width: 46%;
					max-width: 700px;
					${break_largeScreen} {
						top: -200px;
					}
				`} />
				<Circle css={css`
					top: 0%;
					right: 70%;
					width: 20%;
					max-width: 300px;
					${break_largeScreen} {
						top: 200px;
						right: 50%;
						transform: translateX(-500px);
					}
				`} />
				<Circle css={css`
					top: 60%;
					right: 27%;
					width: 23%;
					max-width: 280px;
					${break_largeScreen} {
						top: 890px;
					}
				`} />
				<div className='w-11/12 mx-auto relative z-10'>
					<h4 className='text-gray'><Trans>Components of the Marketplace</Trans></h4>
					<h2><Trans>Pursuing Internet freedom with new technologies</Trans></h2>
				</div>
				<Container>
					<div className="relative">
						<img alt='How Buyers, Sellers, Payments and Services fit into the Orchid marketplace.' src='/img/home/marketplace-diagram.svg' width={1000} height={290} className="w-full block m-0" css={css`
							${break_notLargeScreen} {
								width: calc(100% + 3rem);
								margin: 0 -1.5rem;
								max-width: unset;
							}
						`} />
						<DiagramArrow alt='' src='/img/home/marketplace-diagram-arrow.svg' className='first' width={36} height={187} />
						<DiagramArrow alt='' src='/img/home/marketplace-diagram-arrow2.svg' className='middle' width={36} height={650} />
						<DiagramArrow alt='' src='/img/home/marketplace-diagram-arrow.svg' className='last' width={36} height={187} />
					</div>
				</Container>
				<div className='flex flex-wrap justify-between text-left relative z-20 lg:-my-15' css={css`width: 60rem; max-width: 100%; margin: auto;`}>
					<div className='w-full lg:w-1/2'>
						<Container>
							<h4><Trans>The Orchid protocol: A tunneling protocol incorporating payments</Trans></h4>
							<p><Trans>Orchid has a new VPN protocol developed to work in concert with nanopayments to provide payments at networking speeds. The protocol runs on top of WebRTC for firewall traversal.</Trans></p>
							<Link to='/how-it-works/' className='underline'><Trans>Learn more</Trans></Link>
						</Container>
					</div>
					<div className='w-full lg:w-1/2 lg:text-right'>
						<Container>
							<h4><Trans>The Orchid server: Configuring nodes for service exchange</Trans></h4>
							<p><Trans>Providers on Orchid run the Orchid server which accepts connection requests and provides service in exchange for immediate payment via the nanopayment system.</Trans></p>
							<Link to='/how-it-works/' className='underline'><Trans>Learn more</Trans></Link>
						</Container>
					</div>
				</div>
				<Container>
					<h2><Trans>Orchid Accounts</Trans></h2>
					<p className='text-xl font-bold mb-2'><Trans>The cornerstone of the nanopayment system</Trans></p>
					<p><Trans>Orchid Accounts hold the funds that are sent through Orchid’s scaling nanopayment system. Users are responsible for managing their accounts on the blockchain within the <a href='https://account.orchid.com/'>Orchid DApp</a>. Alternatively, fiat users can utilize a Prepaid Access Credits Account managed by Orchid. Each account is composed of a public/private keypair, a special funder wallet that controls the account, and the account makeup (deposit & balance), which determines how efficient the account is at transmitting payments.</Trans></p>
					<div className='flex flex-wrap justify-around mt-4'>
						<div className='lg:p-2 w-64 max-w-full my-4'>
							<img className='mx-auto max-w-10/12' src='/img/home/icon-nanopayment.svg' alt='' width={80} height={80} />
							<p className='text-xl font-bold my-2'><Trans>Nanopayments:<br />Layer 2 scaling that enables high-frequency, trustless interactions</Trans></p>
							<p>
								<Trans>Orchid uses off-chain probabilistic payments to create a highly liquid marketplace for buying and selling bandwidth. Payments at packet scale allow for trustless interactions by reducing implicit floated balances between buyers and sellers. Marketplace participants can send &amp; receive payments at networking speeds.</Trans>
							</p>
						</div>
						<div className='lg:p-2 w-64 max-w-full my-4'>
							<img className='mx-auto max-w-10/12' src='/img/home/icon-efficiency.svg' alt='' width={80} height={80} />
							<p className='text-xl font-bold my-2'><Trans>Efficiency controls:<br />Fully customize Account payment parameters and composition.</Trans></p>
							<p>
								<Trans>The Orchid dApp is a hosted front-end for creating and managing Orchid accounts that allows users to circumvent interacting with smart contracts directly. At its core, the dApp is a wrapper for the function calls of the smart contract which helps users make custom modifications for account makeup, payment efficiency and ticket sizing.</Trans>
							</p>
						</div>
						<div className='lg:p-2 w-64 max-w-full my-4'>
							<img className='mx-auto max-w-10/12' src='/img/home/icon-multichain.svg' alt='' width={80} height={80} />
							<p className='text-xl font-bold my-2'><Trans>Multichain support:<br />Make payments on an expanding list of EVM-compatible blockchains</Trans></p>
							<p>
								<Trans>Multi-chain compatibility gives users an alternative to high gas prices on Ethereum by allowing them to pay for service on other chains. A system for multiple chains allows users and providers options to find lower transaction fees, and helps provide the most competitive network fee pricing to users everywhere.</Trans>
							</p>
						</div>
					</div>
					<a href='https://account.orchid.com/'><button className='btn btn-secondary m-4'><Trans>Launch DApp</Trans></button></a>
				</Container>
			</Wrapper>

			<Wrapper className='relative'>
				<Circle css={css`
					top: 55%;
					left: 40%;
					width: 46%;
					max-width: 700px;
				`} />
				<Circle css={css`
					top: -3%;
					right: 70%;
					width: 20%;
					max-width: 300px;
					${break_largeScreen} {
						top: -200px;
						right: 50%;
						transform: translateX(-500px);
					}
				`} />
				<Circle css={css`
					top: 110%;
					right: 80%;
					width: 23%;
					max-width: 280px;
				`} />
				<Container className="relative z-10">
					<div className='flex lg:flex-row flex-col-reverse items-center'>
						<div>
							<h2 className='my-4'><Trans>OXT: The staking asset for the VPN market</Trans></h2>
							<p className='text-xl font-bold'><Trans>Decentralizing trust between buyers and sellers</Trans></p>
							<p><Trans>The VPN market is exploding with worldwide growth as users fight to regain privacy and break out of state controlled firewalls. OXT is Orchid’s native ERC-20 digital asset that providers use to compete for user payment flow.</Trans></p>
							<p className='font-bold mt-8'><Trans>STAKING &amp; STAKEWEIGHTING: Algorithmic, incentive-aligned server selection</Trans></p>
							<p>
								<Trans>Providers on Orchid run the Orchid server which accepts connection requests and provides VPN service in exchange for immediate payment via nanopayments. Orchid providers stake OXT tokens in an Ethereum smart contract (the directory) to advertise their services to clients. Orchid clients then select providers randomly, weighted by proportional stake, so that the probability of picking a particular provider is equal to their fraction of the total stake. Users benefit by getting a provably randomized server from a pool of providers while providers have a mechanism to advertise for users through OXT stake.</Trans>
							</p>
							<p className='my-8 text-center md:text-left'>
								<Link to='/oxt/'><button className='btn btn-primary'><Trans>Learn more</Trans></button></Link>
							</p>
						</div>
						<div className='relative mb-4' css={css`
								${break_notLargeScreen} {
									width: 90%;
									max-width: 12rem;
								}
								${break_largeScreen} {
									padding: 20%;
									margin-right: -20%;
								}
							`}>
							<div className='lg:absolute lg:top-0 lg:left-0'>
								<StaticImage alt='' className='w-full h-full' src='../../static/img/home/token_hifi.png' objectFit='contain' width={1680 * 0.25} height={1816 * 0.25} loading="lazy" placeholder='blurred' />
							</div>
						</div>
					</div>
				</Container>
			</Wrapper>

			<Wrapper className='relative z-10'>
				<Container className='lg:text-right'>
					<div className='flex lg:flex-row flex-col items-center'>
						<div className='relative mb-4' css={css`
								${break_notLargeScreen} {
									width: 90%;
									max-width: 12rem;
								}
								${break_largeScreen} {
									padding: 20%;
									margin-left: -20%;
								}
							`}>
							<div className='lg:absolute lg:top-0 lg:right-0'>
								<StaticImage alt='' className='w-full h-full' src='../../static/img/home/deviceTrio.png' objectFit='contain' width={1680 * 0.25} height={1904 * 0.25} loading="lazy" placeholder='blurred' />
							</div>
						</div>
						<div>
							<h2 className='my-4'><Trans>Orchid VPN: Crypto-powered security</Trans></h2>
							<p className='text-xl font-bold'><Trans>An advanced VPN client built on the Orchid platform</Trans></p>
							<p><Trans>The Orchid VPN app is a demonstrated use-case of Orchid’s decentralized marketplace, tunneling protocol, and the networks other interconnected components. The client provides protection from snooping ISP's, unblocks websites cutoff by firewalls, and many other privacy benefits. Bandwidth sellers receive payments in real-time as they provide service and stake OXT to compete for service requests. Buyers use customized or pre-paid cryptocurrency accounts to purchase bandwidth from stakeweighted providers using Orchid’s probabilistic nanopayment system.</Trans></p>
							<p><Trans>Available on <Link to='/download/'>Android</Link>, <Link to='/download/'>iOS</Link> and <Link to='/download/'>macOS</Link>.</Trans></p>
							<p className='font-bold mt-4'><Trans>PREPAID ACCESS CREDITS: A frictionless payment system</Trans></p>
							<p>
								<Trans>Orchid’s Prepaid Access Credits provide users the option to pay in fiat for VPN credits denominated in the xDAI stablecoin through a simple in-app purchase on mobile devices. The credits are only spendable with Orchid’s preferred providers for VPN service. The system allows for a simple 30-second onramp from any credit card connected to your phone to fund an account with xDAI.</Trans>
							</p>
							<p className='my-4 text-center md:text-left'>
								<Link to='/get-orchid'><button className='btn btn-primary m-2'><Trans>Get Orchid VPN</Trans></button></Link>
								<Link to='/vpn'><button className='btn-secondary m-2'><Trans>Learn more</Trans></button></Link>
							</p>
						</div>
					</div>
				</Container>
			</Wrapper>

			<Wrapper className='relative lg:py-10'>
				<Container className='phantom text-center relative z-10'>
					<Circle css={css`
						top: 15%;
						left: 80%;
						width: 23%;
						max-width: 280px;
					`} />
					<div className='relative z-10'>
						<h2><Trans>Orchid is Open Source</Trans></h2>
						<p className='text-xl font-bold my-4'><Trans>Explore our code</Trans></p>
						<p className='mb-10'><Trans>All of Orchid’s code is Open Source and freely available to download on GitHub. Use of Orchid’s source code is governed by the AGPLv3 copyleft Open Source license. Come and follow our project, the community develops code “in the open” by continually pushing changes that anyone can see on GitHub and tagging releases as appropriate. We invite all developers and any curious parties to explore Orchid’s code.</Trans></p>
						<div css={css`
							margin: 1rem auto;
							& > a {
								margin: 1rem 0;
							}
							${break_notMobile} {
								margin: 3rem auto;
							}
							width: 80%;
							max-width: 400px;
							position: relative;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;

							&::before,
							&::after {
								content: "";
								position: absolute;
								top: 0;
								bottom: 0;
								width: 150px;
								max-width: 10vw;
								background-image: url(/img/vpn/bird.svg);
								background-size: contain;
								background-position: center;
								background-repeat: no-repeat;
								pointer-events: none;
							}
							&::before {
								right: 100%;
							}
							&::after {
								left: 100%;
								transform: scaleX(-100%);
							}
						`}>
							<a href='https://github.com/OrchidTechnologies'><button className='btn btn-primary block my-2 mx-auto'><Trans>GitHub</Trans></button></a>
							<a href='/whitepaper/english.pdf' target='_blank'><button className='btn-secondary block my-2 mx-auto'><Trans>Whitepaper</Trans></button></a>
						</div>
					</div>
				</Container>

				<Container className='phantom relative'>
					<Circle css={css`
						top: -10%;
						right: 40%;
						width: 60%;
						max-width: 1200px;
						${break_largeScreen} {
							top: -42%;
						}
					`} />
					<div className='relative z-10'>
						<ContainerOverflow className="-mt-16 lg:-mt-32 flex flex-wrap flex-col lg:flex-row items-center lg:items-stretch lg:justify-between">
							<IndexCard className='my-4 p-4 pl-5 bg-white'>
								<p>
									In a world where one assumes the Cambridge Analytica scandal is merely the tip of the iceberg when it comes to data abuse, it’s easy to see the project’s appeal."
								</p>
								<div div className='flex items-center mt-4 relative justify-between'>
									<div className='rounded-full border-2 border-gray bg-white w-14 h-14 -ml-8 mr-2 flex justify-center items-center'>
										<img width="360" height="51" src="/img/vpn/seen/techcrunch.png" alt="techcrunch" loading="lazy" className='w-11/12' />
									</div>
									<div className="uppercase">TECHCRUNCH</div>
									<img src="/img/vpn/read-more-arrow.svg" width="42" height="16" alt="" loading="lazy" />
									<a className='inset-0 absolute' href="https://techcrunch.com/2018/04/20/orchid-labs-is-in-the-process-of-raising-125-million-for-its-surveillance-free-layer-atop-the-internet/" target="_blank" rel='noreferrer' />
								</div>
							</IndexCard>
							<IndexCard className='my-4 p-4 pl-5 bg-white'>
								<p>
									This is what the future of VPN tech looks like. And you gotta see it.”
								</p>
								<div div className='flex items-center mt-4 relative justify-between'>
									<div className='rounded-full border-2 border-gray bg-white w-14 h-14 -ml-8 mr-2 flex justify-center items-center'>
										<img width="180" height="132" src="/img/vpn/seen/cnet.svg" alt="CNET" loading="lazy" className='w-11/12' />
									</div>
									<div className="uppercase">CNET</div>
									<img src="/img/vpn/read-more-arrow.svg" width="42" height="16" alt="" loading="lazy" />
									<a className='inset-0 absolute' href="https://www.cnet.com/tech/services-and-software/orchid-vpn-review-it-uses-the-tech-behind-bitcoin-to-improve-privacy/" target="_blank" rel='noreferrer' />
								</div>
							</IndexCard>
							<IndexCard className='my-4 p-4 pl-5 bg-white'>
								<p>
									Orchid’s mission is to build open-source software that keeps the Internet open and accessible — a natural resource for everyone, everywhere.”
								</p>
								<div div className='flex items-center mt-4 relative justify-between'>
									<div className='rounded-full border-2 border-gray bg-white w-14 h-14 -ml-8 mr-2 flex justify-center items-center'>
										<img width="360" height="70" src="/img/vpn/seen/coindesk.png" alt="coindesk" loading="lazy" className='w-11/12' />
									</div>
									<div className="uppercase">COINDESK</div>
									<img src="/img/vpn/read-more-arrow.svg" width="42" height="16" alt="" loading="lazy" />
									<a className='inset-0 absolute' href="https://www.coindesk.com/markets/2019/05/07/orchid-tops-43-million-raised-in-token-sale-for-crypto-tor-alternative/" target="_blank" rel='noreferrer' />
								</div>
							</IndexCard>
						</ContainerOverflow>
					</div>
				</Container>
			</Wrapper>

			<Wrapper className='relative z-10'>
				<Container>
					<h2 className='text-center'><Trans>From the Orchid Blog</Trans></h2>
					<div css={css`
						margin: auto;
						display: grid;
						grid-gap: 1rem;
						grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
						${break_mobile} {
							grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
						}
						justify-items: center;

						margin: 1rem auto;
					`}>
						<BlogPosts />
					</div>
					<a href={t('https://blog.orchid.com/')} className='section-button'>
						<button className='btn-secondary mx-auto my-4 lg:mt-8 block'>
							<Trans>Go to Blog</Trans>
						</button>
					</a>
				</Container>
			</Wrapper>

			<Wrapper className='relative'>
				<Circle css={css`
					top: 5%;
					right: 80%;
					width: 30%;
					max-width: 300px;
				`} />
				<Circle css={css`
					top: 30%;
					left: 80%;
					width: 40%;
					max-width: 400px;
				`} />
				<Circle css={css`
					bottom: -1%;
					right: 60%;
					width: 20%;
					max-width: 170px;
					${break_largeScreen} {
						bottom: -5%;
					}
				`} />
				<Container className="text-center relative z-10">
					<h2 className='my-4'><Trans>Connect</Trans></h2>
					<p className='inline-block max-w-2xl'><Trans>The Orchid community is one of the things that makes this project truly special. Follow us through one of our many social platforms, meet us in person at one of our upcoming events, and subscribe to our newsletter to stay informed about all things Orchid!</Trans></p>
					<p><FooterSocialIcons purple="true" /></p>
					<ContainerOverflow className="flex flex-wrap flex-col lg:flex-row items-center lg:items-stretch lg:justify-between">
						<FeaturedTweets />
					</ContainerOverflow>
					<h3 className='my-4'><Trans>Let’s stay connected</Trans></h3>
					<p><Trans>Get the Orchid Onlooker newsletter for updates and privacy news</Trans></p>
					<NewsletterSignupCore t={t} largePadding="true" />
					<div className='h-4' />
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