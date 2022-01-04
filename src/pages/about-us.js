import React from 'react'
import { Helmet } from 'react-helmet'
import { Trans } from 'react-i18next'
import Layout from '../components/common/Layout'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'
import withI18next from '../components/withI18next'
import './about-us.scss'

class Page extends React.Component {

	render() {
		const { t } = this.props;
		return (
			<Layout t={t}>
				<WebsiteMeta
					title="About the Open Accessible Internet | Orchid"
					description="We believe the internet should be open and accessible to everyone, which is why we're building a truly open source network overlay VPN."
					image="/img/company/splash/social.png"
					location={this.props.location}
				/>
				<Helmet>
					<body className="about-us-page" />
				</Helmet>
				<div className="about-company__page-container">
					<div className="bk-beige-light about-company__splash-container">
						<section className="about-company__splash">
							<div className="about-company__splash-text-container">
								<h1>
									<Trans i18nKey="@@AboutCompanyHero__Title">
										We can <br /> reclaim the <br /> internet <br />
										<span className="big">
											together
										</span>
									</Trans>
								</h1>
							</div>
							<div className="about-company__splash-image-container">
								<img src="/img/company/splash/splash-foreground.svg" width="868" height="706" alt="" />
							</div>
						</section>
					</div>

					<div className="about-company__centered-text-section-container">
						<div className="about-company__centered-text-floating-circle-1"></div>
						<div className="about-company__centered-text-floating-circle-2"></div>

						<section className="about-company__centered-text-section section-med hpad-wide vpad-wide center-text">
							<Trans i18nKey="@@AboutCompany__Description">
								<h2>Why build a privacy network?</h2>
								<p>
									The Internet opened up an unlimited world of information. Its creators invited us to bring our curiosity and explore that world freely.
								</p>

								<p>
									As the Internet grew, exploring freely became harder.Web 2.0 business models incentivized companies to watch and track us and sell our data. And in some places, limits were placed on the information we can see.
								</p>

								<p>
									But that is changing. The decentralized Web 3.0 being built on Ethereum is allowing the Internet to be reclaimed by its users.
								</p>

								<p>
									At Orchid we share in this mission. We use Web 3.0 technology to offer users better digital privacy today, so we can realize the promise of the Web 1.0 and explore freely again.
								</p>

								<p>
									Orchid was founded in 2017 to help restore the open and accessible Internet for everyone. Since then, we have grown an incredible team based in San Francisco and Berlin and launched the first incentivized, peer-to-peer privacy network in December, 2019.
								</p>
							</Trans>
						</section>
					</div>

					<div className="bk-beige-light" id="values">
						<section className="section-med hpad-wide vpad-wide">
							<h2><Trans>Our Values</Trans></h2>
							<div className="about-us-split">
								<div className="about-us-half">
									<Trans>
										<p>
											The Internet is as integral to modern life as writing was to the ancient Greeks. Our lives are digital, and the ramifications of the things we do and say online are as real as those in the physical world. Orchid grew from the dream of a future in which our whole lives--both the physical and the digital--could be private , decentralized, and censorship-free.
										</p>

										<p>
											Orchid’s mission is privacy, and privacy is a human right.
										</p>

										<p>
											Privacy is an easy target for those in power, who say “if you have nothing to hide, you have nothing to fear.” This is a lie. The truth is that the people in positions of power have the least to worry about being private. If a powerful dictator is caught doing something, they are beyond reproach. We should never forget the routine violations of privacy visited upon King, Gandhi, Ai Weiwei and many others in the name of “law enforcement” and “national security.”
										</p>
									</Trans>
								</div>
								<div className="about-us-half">
									<picture>
										<source srcSet="/img/company/ValuesBunny.webp" type="image/webp" />
										<img src="/img/company/ValuesBunny.png" width="1000" height="1055" alt="" />
									</picture>
								</div>
							</div>
							<Trans>
								<p>
									Privacy and freedom are not in conflict; they are one and the same.
								</p>

								<p>
									We stand in solidarity with causes dedicated to privacy and to other fundamental human rights. Movements that fight for freedom and equality, that fight against oppression and censorship, that help by creating the tools to level the playing field for all.
								</p>

								<p>
									Causes such as Black Lives Matter; Uyghur liberation; political freedom in Hong Kong and Myanmar, LGBTQ+ rights in Russia and many others must be fought for at the fundamental, human level. They should cut across lines of politics, nationality, or sectarianism.
								</p>

								<p>
									The past year has reminded us that humans are meant to be together, not alone; free, not confined; empowered, not controlled. It is this basic truth that motivates the people who built Orchid.
								</p>
							</Trans>
						</section>

					</div>

					<div className="bk-lavender">
						<section className="about-company__team-section hpad-wide vpad-wide">
							<div className="about-company__team-text">
								<h2><Trans i18nKey="@@OrchidTeamTitle">The Orchid Team</Trans></h2>
								<p>
									<Trans i18nKey="@@OrchidTeamDescription">
										Orchid’s founders bring together deep experience in the open source software community (BASH Shell, GNU Finger), technology management (RPX IPO), blockchain investment (Bitstamp, Pantera Capital), jailbroken app package management (Cydia) and security (Wells Fargo’s 1st Online Banking employee, Ethereum core security team).
									</Trans>
								</p>
							</div>

							<div className="about-company__team about-company__team-big">
								<div className="about-company-team-member">
									<img src="/img/company/staff/DrStevenWaterhouse.png" alt="Dr. Steven Waterhouse" />
									<h5>
										Dr.Steven Waterhouse
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_CoFounderCEO">
											Co-Founder / CEO
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/JayFreeman.png" alt="Jay Freeman" />
									<h5>
										Jay Freeman
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_CoFounderCTO">
											Co-Founder / CTO
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/BrianJFox.png" alt="Brian J. Fox" />
									<h5>
										Brian J.Fox
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_CoFounder">
											Co-Founder
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/GustavSimonsson.png" alt="Gustav Simonsson" />
									<h5>
										Gustav Simonsson
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_CoFounderAdvisor">
											Co-Founder / Advisor
										</Trans>
									</p>
								</div>
							</div>

							<hr />

							<div className="about-company__team about-company__team-small">

								<div className="about-company-team-member">
									<img src="/img/company/staff/AlexKehaya.png" alt="Alex Kehaya" />
									<h5>
										Alex Kehaya
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_BusinessDevelopment">
											Business Development
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/DerekSilva.png" alt="Derek Silva" />
									<h5>
										Derek Silva
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Community">
											Community
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/PaulaKanin.png" alt="Paula Kanin" />
									<h5>
										Paula Kanin
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Community">
											Community
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/ShawneeNova.png" alt="Shawnee Nova" />
									<h5>
										Shawnee Nova
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Community">
											Community
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/ChadHarper.png" alt="Chad Harper" />
									<h5>
										Chad Harper
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Design">
											Design
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/SaskiaEssex.png" alt="Saskia Essex" />
									<h5>
										Saskia Essex
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Design">
											Design
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/ThientamBach.png" alt="Thientam Bach" />
									<h5>
										Thientam Bach
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Design">
											Design
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/AlexandraMcolgan.png" alt="Alexandra McColgan" />
									<h5>
										Alexandra McColgan
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_EA">
											EA
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/MichelleUnderwood.png" alt="Michelle Underwood" />
									<h5>
										Michelle Underwood
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_EA">
											EA
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/DanMontgomery.png" alt="Dan Montgomery" />
									<h5>
										Dan Montgomery
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Engineering">
											Engineering
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/GregHazel.png" alt="Greg Hazel" />
									<h5>
										Greg Hazel
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Engineering">
											Engineering
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/JakeCannell.png" alt="Jake Cannell" />
									<h5>
										Jake Cannell
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Engineering">
											Engineering
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/JenniferRodriguez-Miller.png" alt="Jennifer Rodriguez-Miller" />
									<h5>
										Jennifer Rodriguez-Miller
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Engineering">
											Engineering
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/JustinSheek.png" alt="Justin Sheek" />
									<h5>
										Justin Sheek
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Engineering">
											Engineering
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/AnnaBare.png" alt="Anna Bare" />
									<h5>
										Anna Bare
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Engineering">
											Engineering
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/PatrickNiemeyer.png" alt="Patrick Niemeyer" />
									<h5>
										Patrick Niemeyer
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Engineering">
											Engineering
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/SelinaCheng.png" alt="Selina Cheng" />
									<h5>
										Selina Cheng
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Finance">
											Finance
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/JoyHu.png" alt="Joy Hu" />
									<h5>
										Joy Hu
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Finance">
											Finance
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/PatrickJDietzen.png" alt="Patrick J. Dietzen" />
									<h5>
										Patrick J.Dietzen
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Finance">
											Finance
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/AmandaGutterman.png" alt="Amanda Gutterman" />
									<h5>
										Amanda Gutterman
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Marketing">
											Marketing
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/MonicaPuchner.png" alt="Monica Puchner" />
									<h5>
										Monica Puchner
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Operations">
											Operations
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/TravisCanell.png" alt="Travis Cannell" />
									<h5>
										Travis Cannell
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Product">
											Product
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/MattRoszak.png" alt="Matt Roszak" />
									<h5>
										Matt Roszak
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Advisor">
											Advisor
										</Trans>
									</p>
								</div>

								<div className="about-company-team-member">
									<img src="/img/company/staff/RichStarpoli.png" alt="Rich Staropoli" />
									<h5>
										Rich Staropoli
									</h5>
									<p>
										<Trans i18nKey="@@OrchidTeam_Advisor">
											Advisor
										</Trans>
									</p>
								</div>

							</div>
						</section>
					</div>

					<div>
						<section className="about-company__corporate-info-section section-med hpad-wide vpad-wide">
							<div id="corporate-header">
								<h2><Trans i18nKey="@@AboutCompanyCorporate__Title">Corporate info</Trans></h2>
								<p><Trans i18nKey="@@AboutCompanyCorporate__Subtitle">Orchid is a Delaware c-corp</Trans></p>
							</div>
							<div id="corporate-address">
								<address>
									<Trans i18nKey="@@AboutCompanyCorporate__Address">
										Headquarters: <br />
										1288 Columbus Ave.#122,<br />
										San Francisco, CA 94133
									</Trans>
								</address>
								<address>
									<Trans i18nKey="@@AboutCompanyCorporate__Address2">
										Europe: <br />
										Skalitzer Str. 85,<br />
										10997 Berlin, Germany
									</Trans>
								</address>
							</div>
							<div className="z-index-1" id="corporate-buttons">
								<a href="https://www.sec.gov/Archives/edgar/data/1721086/000172108618000001/xslFormDX01/primary_doc.xml" target="_blank" rel="noreferrer">
									<button className="btn-primary btn-fixed">
										<Trans i18nKey="@@AboutCompanyCorporate__SECFilingButton">
											SEC Filing
										</Trans>
									</button>
								</a>
								<br />
								<a href="/OrchidPressKit.zip" target="_blank" rel="noreferrer">
									<button className="btn-primary btn-fixed">
										<Trans i18nKey="@@AboutCompanyCorporate__PressKitButton">
											Press Kit
										</Trans>
									</button>
								</a>
							</div>
							<div className="adorner" id="buttons-adorner">
								<div className="pos-relative">
									<img alt="" className="adorner-image" src="/img/company/buttons-adorner.png" />
								</div>
							</div>
						</section>
					</div>

				</div >

				<app-newsletter-signup></app-newsletter-signup>
			</Layout>
		)
	}
}

export default withI18next({ ns: "common" })(Page)
