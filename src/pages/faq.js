import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './faq.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>FAQs and Customer Support | Orchid</title>
			<meta name="description" content="A guide to getting started with Orchid\'s VPN, an open-source project committed to ending surveillance and censorship on the Internet." />
		</Helmet>
		<div className="splash-circuit">
			<div className="splash-circuit-image section-med">
			</div>
			<div className="splash-circuit-grid section-med">
				<div className="splash-circuit-grid-item hpad-thin vpad-wide">
					<h1 i18n="@@FaqHero__Title">FAQ
					</h1>
				</div>
			</div>
		</div>
		<div className="background-white splash-circuit-after">
			<div className="section-med faq-section">
				<div className="faq-sidebar">
					<ul className="faq-nav">
						<li className="faq-sidebar-category-active">
							<a className="faq-category-heading-sidebar faq-link" href="/faq#about-orchid" i18n="@@Faq-AboutOrchid__Title">About Orchid</a>
							<img alt="Toggle" className="faq-category-expand" height="24" src="/img/shared/more-orc-green.svg" width="24" />
							<ul className="faq-sidebar-questions">
								<li>
									<a i18n className="faq-link" href="/faq#about-orchid--what-is-orchid"> What is Orchid?</a>
								</li>
								<li>
									<a i18n className="faq-link" href="/faq#about-orchid--the-purpose"> What is the purpose of Orchid?</a>
								</li>
								<li>
									<a i18n className="faq-link" href="/faq#about-orchid--how-does-it-work"> How does it work?</a>
								</li>
							</ul>
						</li>
						<li className="faq-sidebar-category-active">
							<a className="faq-category-heading-sidebar faq-link" href="/faq#security-privacy" i18n> Security and Privacy</a>
							<img alt="Toggle" className="faq-category-expand" height="24" src="/img/shared/more-orc-green.svg" width="24" />
							<ul className="faq-sidebar-questions">
								<li>
									<a i18n className="faq-link" href="/faq#privacy--what-protections"> What protections does the Orchid app provide?</a>
								</li>
								<li>
									<a i18n className="faq-link" href="/faq#privacy--how-can-orchid-help-today"> How can the Orchid app help me with privacy today?</a>
								</li>
								<li>
									<a i18n className="faq-link" href="/faq#privacy--how-is-orchid-private"> How is Orchid private given that it has public payments on Ethereum?</a>
								</li>
								<li>
									<a i18n className="faq-link" href="/faq#privacy--can-nodes-monitor-traffic"> Can Orchid nodes monitor network traffic?</a>
								</li>
								<li>
									<a i18n className="faq-link" href="/faq#privacy--am-i-totally-private"> So I'm totally private and anonymous when I use a VPN like Orchid? </a>
								</li>
							</ul>
						</li>
						<li className="faq-sidebar-category-active">
							<a className="faq-category-heading-sidebar faq-link" href="/faq#technology" i18n> On Technology</a>
							<img alt="Toggle" className="faq-category-expand" height="24" src="/img/shared/more-orc-green.svg" width="24" />
							<ul className="faq-sidebar-questions">
								<li>
									<a i18n className="faq-link" href="/faq#technology--how-does-oxt-work"> How does (OXT) work?</a>
								</li>
								<li>
									<a i18n className="faq-link" href="/faq#technology--how-do-curated-lists-work"> How do curated lists work on Orchid?</a>
								</li>
								<li>
									<a i18n className="faq-link" href="/faq#technology--what-is-the-orchid-protocol"> What is the Orchid Protocol?</a>
								</li>
							</ul>
						</li>
						<li className="faq-sidebar-category-active">
							<a className="faq-category-heading-sidebar faq-link" href="/faq#staking" i18n> Staking</a>
							<img alt="Toggle" className="faq-category-expand" height="24" src="/img/shared/more-orc-green.svg" width="24" />
						</li>
						<ul className="faq-sidebar-questions">
							<li>
								<a i18n className="faq-link" href="/faq#staking--what-is-staking-in-orchid"> What is Staking in Orchid?</a>
							</li>
							<li>
								<a i18n className="faq-link" href="/faq#staking--is-orchid-staking-like-proof-of-stake"> Is Orchid Staking like Proof of Stake?</a>
							</li>
							<li>
								<a i18n className="faq-link" href="/faq#staking--how-can-i-earn-passive-revenue-on-my-oxt"> How can I earn passive revenue on my OXT?</a>
							</li>
						</ul>
						<li className="faq-sidebar-category-active">
							<a className="faq-category-heading-sidebar faq-link" href="/faq#staking" i18n> Orchid App</a>
							<img alt="Toggle" className="faq-category-expand" height="24" src="/img/shared/more-orc-green.svg" width="24" />
							<ul className="faq-sidebar-questions">
								<li>
									<a i18n className="faq-link" href="/faq#orchid-app--why-new-wallet"> Why do I need a new Ethereum wallet?Why can’t I use my main wallet?</a>
								</li>
								<li>
									<a i18n className="faq-link" href="/faq#orchid-app--why-big-exchange"> Why should I trust a big exchange with my personal info?Would a decentralized exchange that doesn’t store my personal info be better?</a>
								</li>
								<li>
									<a i18n className="faq-link" href="/faq#orchid-app--why-eth-and-oxt"> Why do I need ETH and OXT?</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="faq-main gap-bot-wide">
					<ul className="categories">
						<li>
							<div id="about-orchid"></div>
							<h2 className="faq-category-heading" i18n>
								About Orchid
							</h2>
							<ul className="faq-questions">
								<li className="faq-question-container" id="about-orchid--what-is-orchid">
									<h4 className="faq-question" i18n>
										What is Orchid?
									</h4>
									<p i18n className="faq-answer">Orchid is a decentralized, market-based system for anonymous communication and virtual private networking, including a bandwidth market where node providers stake digital currency to advertise their services using the Ethereum blockchain and receive payment in OXT (Orchid’s native cryptocurrency).
									</p>
								</li>
								<li className="faq-question-container" id="about-orchid--the-purpose">
									<h4 className="faq-question" i18n>
										What is the purpose of Orchid?
									</h4>
									<p i18n className="faq-answer">Orchid’s mission is to build Open Source software that keeps the Internet open and accessible — a natural resource for everyone, everywhere.
									</p>
								</li>
								<li className="faq-question-container" id="about-orchid--how-does-it-work">
									<h4 className="faq-question" i18n>
										How does it work?
									</h4>
									<p i18n className="faq-answer">
										The Orchid network enables a decentralized virtual private network (VPN), allowing users to buy bandwidth from a global pool of service providers.
										<br />
										<br />
										To do this, Orchid uses a digital currency called OXT, a new VPN protocol for incentivized bandwidth proxying, and smart-contracts with algorithmic advertising and payment functions.Orchid's users connect to bandwidth sellers using a provider directory, and they pay using probabilistic nanopayments so Ethereum transaction fees on packets are acceptably low.
									</p>
								</li>
							</ul>
						</li>
						<li>
							<div id="security-privacy"></div>
							<h2 className="faq-category-heading" i18n>
								Security and Privacy
							</h2>
							<ul className="faq-questions">
								<li className="faq-question-container" id="privacy--what-protections">
									<h4 className="faq-question" i18n>
										What protections does the Orchid app provide?
									</h4>
									<p i18n className="faq-answer">
										Basic Internet connections function by transmitting packets of data between two hosts (computers).In order to find their way, packets contain both a source and destination IP address.As packets move from the destination to the source, different routers and physical infrastructure require both of these addresses for the two-way connection to be established and maintained.This means that instantly and over time, the owners of the physical infrastructure are in a position to build a profile of Internet usage on their paying user (you!) and also to block content as the owner sees fit.
										<br />
										<br />
										Typically these infrastructure owners are ISPs — mobile carriers providing phone data connections, home cable Internet providers, WiFi hotspot operators, and any Internet backbone operators that have peering agreements with user-facing ISPs.In all these cases, the ISP is in an advantaged position to monitor and/or restrict Internet usage.It is common in many countries for ISPs to restrict content so that users cannot load certain websites.
										<br />
										<br />
										If you are not happy with or do not trust your existing ISP(s), by using Orchid you can currently limit their knowledge to knowing only that you are sending and receiving bytes through Orchid, and completely block their ability to mess with the details of your traffic, unblocking the previously blocked content.They either block all of Orchid or nothing, so if things continue to work after turning on Orchid, then your ISP has allowed “Orchid in general” and cannot manipulate the individual bytes between you and the rest of the Internet.
									</p>
								</li>
								<li className="faq-question-container" id="privacy--how-can-orchid-help-today">
									<h4 className="faq-question" i18n>
										How can the Orchid app help me with privacy today?
									</h4>
									<p i18n className="faq-answer">
										The goal with the Orchid app is to give users insight and control over the network connection of their device.To gain privacy, users configure a circuit in Orchid by setting up an Orchid account and funding it with OXT.Then the Orchid app connects to the Orchid network and selects a node using Orchid’s <a href="https://blog.orchid.com/orchids-network-random-selection-stake-weighting/">linear stake-weighted algorithm</a> to serve as a VPN and pays for bandwidth via a continuous stream of tiny OXT <a href="https://blog.orchid.com/introducing-nanopayments/">nanopayments</a>.
										<br />
										<br />
										In a single-hop circuit configuration, Orchid provides:
									</p>
									<ul>
										<li i18n>Protection from websites seeing your real IP address and physical location
										</li>
										<li i18n>Protection from the ISP from seeing what websites you are visiting and when
										</li>
										<li i18n>Access to the open Internet--once a user can connect to Orchid, they are not restricted by ISP level firewalls and can browse the entire Internet freely
										</li>
									</ul>
									<p i18n className="faq-answer">
										A potential problem with using only a single VPN provider is that the provider running the single node circuit knows both your IP address and the content you are accessing.If the provider maintains logs, those logs could be sold to advertisers or otherwise used against you.In the current VPN marketplace, it is hard to know who is maintaining logs and who is not.For Orchid nodes, we have developed a flexible curation system that gives users a way to pick whom to trust.<a href="/faq#technology--how-do-curated-lists-work">Read more here</a>.
										<br />

										<br />
										Another solution is to trust no single provider with enough information to know both who you are and what information you are accessing.To that end, Orchid supports an advanced feature that allows users to configure multi-hop routes of their own, by stringing together several Orchid nodes into a multi-hop circuit.Each hop may be constructed with any protocol supported by Orchid (initially just Orchid hops and OpenVPN).While the potential is there to protect the user from any one provider knowing enough information to reveal their circuit, this is an advanced feature that is currently “use at your own risk”.
									</p>
								</li>
								<li className="faq-question-container" id="privacy--how-is-orchid-private">
									<h4 className="faq-question" i18n>
										How is Orchid private given that it has public payments on Ethereum?
									</h4>
									<p i18n className="faq-answer">
										When a user sets up an Orchid hop, the Orchid protocol requires a digital currency, OXT, to send tiny and continuous nanopayments to providers for the duration of the connection.While the <a href="https://blog.orchid.com/introducing-nanopayments/">nanopayment architecture</a> locks user funds into a smart contract and only issues on-chain payments to providers very rarely, occasional winning tickets result in OXT payments posted on the public Ethereum blockchain.When that happens, the user’s Ethereum address, the provider’s Ethereum address, and a timestamp are stored on the Ethereum blockchain.Note that the address of the provider is not a mapping to a single server, but rather the wallet that the provider created to receive funds for running the Orchid node.Also, the frequency of how often on-chain payments occur is configurable.
										<br />

										<br />
										All information gained by a potential network attacker is an advantage.However, consider exactly what information is revealed.For an Orchid user running a single hop circuit: the provider sees the user’s payment address when it accepts service, along with the user’s real IP address and the destination addresses that the user is connecting to (if it maintains logs).Once a rare on-chain payment is made, the user’s payment address and provider’s payment address are stored on Ethereum with a timestamp available to the public.
										<br />

										<br />
										When considering anonymity, it is important to understand if the user is linked to the OXT used in their circuit.Worst case, if the user purchased OXT on an exchange with their real identity, AND the VPN provider used in the circuit maintained logs, then either of those two entities could be compelled to give information that could deanonymize the user.Similarly, a user who paid for a VPN service that maintained logs with a credit card could be deanonymized with just one entity being compelled.
										<br />

										<br />
										A multi-hop circuit affords greater network protections, but to setup a multi-hop Orchid circuit, it would be naive to pay for each hop from the same Ethereum wallet.In that configuration, each provider would be able to see that wallet’s address and potentially use that address to get information about the user.To mitigate that, a better way to setup multi-hop circuits would be to use different wallet addresses for each Orchid hop.If every wallet address is independently dissociated from the user, the full circuit might be quite difficult to link back to the user.Again, the multi-hop circuit feature in Orchid is advanced, and use it at your own risk.
									</p>
								</li>
								<li className="faq-question-container" id="privacy--can-nodes-monitor-traffic">
									<h4 className="faq-question" i18n>
										Can Orchid nodes monitor network traffic?
									</h4>
									<p i18n className="faq-answer">
										Yes, providers on Orchid could monitor the bytes that come in and out of the Orchid node.However, all traffic carried over Orchid between hops from the user to the exit is encrypted at the Orchid protocol level, which is an additional layer of encryption.The final exit traffic is then decrypted by the exit node and sent to the destination.In many cases the underlying traffic will also be encrypted with protocols such as TLS, providing at least two layers of encryption.
										<br />

										<br />
										However, not all traffic on the Internet is encrypted and Orchid doesn’t fix that problem.The last hop configured in the active circuit will need to send the user requests out onto the Internet.So if the user sends an HTTP request, which has no SSL/TLS encryption, Orchid will honor that request and cleartext information would be revealed to the Orchid node.For this reason, you should always use SSL/TLS for sensitive Internet connections, even on Orchid.And even SSL/TLS encryption leaves metadata that the Orchid node could monitor, including the destination address, hostname, packet sizes and the timing of packets.
										<br />

										<br />
										Using Orchid’s multi-hop feature with a three hop circuit would compartmentalize the information any one provider could monitor.With a properly configured multi-hop circuit the origin and destination of the traffic would be anonymized from any one provider, however, that is an advanced feature which is certainly “use at your own risk”.The way the different Orchid hops are funded has an impact on information leakage that could potentially de-anonymize.
										<br />

										<br />
										Lastly, every Orchid user has a “curated list” of providers.This adds an additional layer of protection as users could pick or make their own curated list of providers that they trust or someone that they trust, trusts.Orchid has a default list of trusted providers that will ship with the Orchid app.
									</p>
								</li>
								<li className="faq-question-container" id="privacy--am-i-totally-private">
									<h4 className="faq-question" i18n>
										So I'm totally private and anonymous when I use a VPN like Orchid?
									</h4>
									<p i18n className="faq-answer">
										<br />

										<strong>No.
										</strong>
										<br />

										<br />
										Orchid is a tool that keeps private certain types of information from ISPs, websites, and providers.Orchid adds layers that separate you from the content you are trying to access.If you login to Amazon, the website will know that it is you and can build out information about what you are doing on their website, even with Orchid enabled.However, your local ISP or network provider will not know you are visiting Amazon.Amazon will not know where you are in the world, and will not get your real IP address.If using at least three hops, no single provider will know your IP address and know that you are accessing Amazon.
										<br />

										<br />
										Also consider that Orchid is a VPN and that all VPNs have vulnerabilities at the software level.Typical modern browsers that are not “hardened” run all sorts of “active content” such as Java, Javascript, Adobe Flash, Adobe Shockwave, QuickTime, RealAudio, ActiveX controls, and VBScript and other binary applications.This code runs at the operating system level with user account access, meaning they can access anything your user account can access.These technologies could store cookies, bypass proxy settings, store other types of data and share information directly to other sites on the Internet.Therefore, these technologies must be disabled in the browser you are using to improve your security in conjunction with using Orchid.
										<br />

										<br />
										Also certain apps or code running on your device could send de-anonymizing data out to the Internet or third parties.No VPN can prevent attacks from software running on your device, such as malware or a virus.
										<br />

										<br />
										Furthermore, there are active areas of network security research into “traffic fingerprinting” that attempt to reveal private information by monitoring encrypted connections.By watching the timing and size of packets, an adversary watching an encrypted connection could get a good idea if a particular user is watching a video, browsing the Internet or downloading a large file, based on the timing and size of the packets flowing.Further analysis could reveal what websites are visited by seeing the sequence of things that are loaded— again, the timing and size of packets along with when requests are made.Other metadata such as the size of the browser window, type of pointing device used and other unique information could be used to “fingerprint” the user and potentially de-anonymize.These are attacks that affect all VPN users, Orchid included.
										<br />

										<br />
										Orchid is researching “bandwidth burning” and related techniques to help obfuscate a user’s traffic against these advanced packet timing and size analysis attacks.
									</p>
								</li>
							</ul>
						</li>
						<li>
							<div id="technology"></div>
							<h2 className="faq-category-heading" i18n>
								On Technology
							</h2>
							<ul className="faq-questions">
								<li className="faq-question-container" id="technology--how-does-oxt-work">
									<h4 className="faq-question" i18n>
										How does OXT work?
									</h4>
									<p i18n className="faq-answer">OXT is a “pre-mined” cryptocurrency based on the ERC-20 standard that will be used to decentralize trust between buyers and sellers in the Orchid marketplace.It also functions as a tool to promote security and healthy market dynamics, as providers can adjust their OXT stake to remain competitive.At launch we intend there to be a limited supply of one billion (1,000,000,000).We do not intend ever to create any additional OXT.
									</p>
								</li>
								<li className="faq-question-container" id="technology--how-do-curated-lists-work">
									<h4 className="faq-question" i18n>
										How do curated lists work on Orchid?
									</h4>
									<p i18n className="faq-answer">The Orchid client calls an on-chain ‘curated list’ function which filters the viable nodes on Orchid (that is, nodes that have properly staked) into a custom subset.Initial releases of the official Orchid client will use this feature to prevent certain kinds of attacks from malicious exit nodes (e.g.SSL downgrade attacks) by using a default list consisting of trusted VPN partners.
										<br />

										<br />
										Overall, the curated lists are a federated reputation solution for determining what VPN providers on Orchid you can trust.The system is fully programmable, exists on-chain and is Turing complete.The list function can take information as an argument, and then use that information to determine, for any given Orchid node, whether you want to connect to that node or not.
										<br />

										<br />
										Customized Orchid clients can use their own lists, the official Orchid client can select from different lists and eventually we expect well known third parties to emerge as curators.Given that this system is on-chain, an entity such as a DAO could manage a list too.
										<br />

										<br />
										The curated list mechanism is a means for the importation of external reputational trust to supplement the economic incentive based trust provided by node staking.
									</p>
								</li>
								<li className="faq-question-container" id="technology--what-is-the-orchid-protocol">
									<h4 className="faq-question" i18n>
										What is the Orchid Protocol?
									</h4>
									<p i18n className="faq-answer">The Orchid software is designed to use a custom VPN protocol, similar in scope to OpenVPN or WireGuard.The Orchid protocol is designed for high-performance networking and runs on top of WebRTC, a common web standard, widely used to transmit video and audio from inside browsers.Our protocol is intended to allow users to request access to remote network resources and pay for these resources using OXT via a nanopayments system.
									</p>
								</li>
							</ul>
						</li>
						<li>
							<div id="staking"></div>
							<h2 className="faq-category-heading" i18n>
								Staking
							</h2>
							<ul className="faq-questions">
								<li className="faq-question-container" id="staking--what-is-staking-in-orchid">
									<h4 className="faq-question" i18n>
										What is Staking in Orchid?
									</h4>
									<p i18n className="faq-answer">Staking is a process where one deposits and locks up an asset into an illiquid contract or mechanism in exchange for revenue or rewards.Orchid providers stake OXT in an Ethereum smart contract (the directory) to advertise their services to clients.Orchid clients then select providers randomly, weighted by proportional stake, so that the probability of picking a particular provider is equal to their fraction of the total stake.
										<br />

										<br />
										Anyone else can also stake on a provider’s address, allowing a form of “delegated staking”.Any OXT holder can stake their OXT on providers of their choosing.There are no automatic benefits of staking on someone else’s behalf, but the staking mechanism could be combined with a revenue sharing contract between the staker and the stakee.
									</p>
								</li>
								<li className="faq-question-container" id="staking--is-orchid-staking-like-proof-of-stake">
									<h4 className="faq-question" i18n>
										Is Orchid Staking like Proof of Stake?
									</h4>
									<p i18n className="faq-answer">Staking in Orchid is similar to proof of stake systems only in the sense of using stake as a linear weighting mechanism.In most proof-of-stake systems stakeholders can automatically earn revenue just by running nodes with stake.Orchid has no such automatic mechanism, and has no inflation to fund staking.The only source of income on Orchid is customers paying for bandwidth.
									</p>
								</li>
								<li className="faq-question-container" id="staking--how-can-i-earn-passive-revenue-on-my-oxt">
									<h4 className="faq-question" i18n>
										How can I earn passive revenue on my OXT?
									</h4>
									<p i18n className="faq-answer">You can find an Orchid bandwidth provider who is seeking staking partners in exchange for a share of revenue or recurring payments - using any on-chain or off-chain mechanism.
										<br />

										<br />
										An Ethereum smart contract can be used to help automatically split revenue between a staker and a provider.The staker would stake on the smart contract, and the provider would direct client payments to the smart contract, which would then allow each party to withdraw some parameterized fraction of the funds.
										<br />

										<br />
										Note that any such delegated staking arrangement (even using on-chain mechanisms) can not guarantee that the provider will actually honor the contract: the provider could easily direct clients to a different payment address.And even if the provider is perfectly honest, there is still ultimately uncertainty in revenue and consequent return on stake.
										<br />

										<br />
										As an alternative to revenue sharing, providers could send recurring payments to the staker - essentially a stake rental or leasing arrangement.In this case the return is more predictable, but there is still no guarantee that the provider will make the scheduled payments.Again a smart contract could be used to help automate the payments, but can not guarantee the provider will have the necessary funds.There is always risk.
										<br />

										<br />
										When a staker decides to repoint their stake to a different provider, there is a lengthy withdrawal delay (currently about 3 months).So it is important for stakers to choose providers carefully.Stakers should start with small allocations and slowly increase them based on measured profitability.
										<br />

										<br />
										Eventually third party websites could provide an interface to help simplify and automate the process of finding, evaluating and staking on Orchid bandwidth providers.
									</p>
								</li>
							</ul>
						</li>
						<li>
							<div id="about-orchid"></div>
							<h2 className="faq-category-heading" i18n>
								Orchid App
							</h2>
							<ul className="faq-questions">
								<li className="faq-question-container" id="orchid-app--why-new-wallet">
									<h4 className="faq-question" i18n>
										Why do I need a new Ethereum wallet?Why can’t I use my main wallet?
									</h4>
									<p i18n className="faq-answer">While you could use your primary Ethereum wallet that you typically use for other Ethereum applications, we do not recommend it if you are seeking privacy with Orchid.The main reason is that using Orchid results in on chain payments flowing from your wallet to the Orchid nanopayment contract, and then on to VPN providers selling bandwidth.Ethereum on-chain analytics can easily link payments to/ from the nanopayment smart contract and then to providers.If the source of the funds comes from your personal Ethereum wallet linked to other services, anyone using Etherscan would be able to see that you used Orchid and sent payments to VPN providers, when the occasional Orchid nanopayment system issues a winning ticket.
									</p>
								</li>
								<li className="faq-question-container" id="orchid-app--why-big-exchange">
									<h4 className="faq-question" i18n>
										Why should I trust a big exchange with my personal info?Would a decentralized exchange that doesn’t store my personal info be better?
									</h4>
									<p i18n className="faq-answer">While a decentralized exchange does not store your personal information that could link your source of funds to your identity, a decentralized exchange does typically require an Ethereum account with some sort of crypto such as ETH, which has its own history of transactions.If that ETH or wallet is linked to your identity, then the source of funds could be linked through the DEX back to your originating Ethereum wallet.
										<br />

										<br />
										A large exchange typically has a ledger they use to keep track of ownership, with a hot wallet they use to send funds in and out of the exchange.While the exchange knows your identity, the movement of currency in and out of the exchange is anonymous, as the funds can’t be tracked to your identity on the blockchain without the exchange being hacked, subpoenaed or otherwise compromised.
									</p>
								</li>
								<li className="faq-question-container" id="orchid-app--why-eth-and-oxt">
									<h4 className="faq-question" i18n>
										Why do I need ETH and OXT?
									</h4>
									<p i18n className="faq-answer">Orchid is a series of decentralized smart contracts and client software that uses Ethereum.Certain operations require the use of ETH for gas to power the smart contracts that run Orchid.For users who use the Orchid app, ETH is required when adding or removing funds from your Orchid account through the web3 browser interface.
									</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Layout>
)

export default Page
