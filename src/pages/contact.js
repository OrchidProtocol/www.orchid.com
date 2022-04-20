import { graphql } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './contact.scss'
import ContactForm from '../components/ContactForm';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';
import Container from '../components/common/Container';

import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

function Page(props) {
	const { t } = useTranslation();
	return (
		<Layout t={t}>
			<WebsiteMeta
				title={t("Get In Touch | Orchid")}
				description={t("Let's reclaim the Internet together! We are looking for partnership opportunities with infrastructure providers and integration partners that want to build with Orchid.")}
				image="/img/contact/social.png"
				location={props.location}
			/>
			<Helmet>
				<body className="contact-page" />
			</Helmet>
			<Container className='phantom text-center'>
				<h1>
					<Trans>
						Contact
					</Trans>
				</h1>
				<h3><Trans>We’d love to hear from you.</Trans></h3>
				<img alt="" className="mx-auto" src="/img/contact/handshake.svg" width="354" height="388" />
			</Container>

			<Container className='phantom p-0 flex flex-wrap justify-around text-center align-stretch'>
				<Container className='lg:w-5/12 lg:m-0 flex flex-col align-center dark'>
					<h4 className='text-white'>Join the discussion</h4>
					<p>Join in on the live conversations happening about Orchid and other related topics through one of our official channels:</p>
					<h5 className='mt-auto text-white'><a href="https://discord.gg/GDbxmjxX9F">DISCORD</a> or <a href="https://www.t.me/OrchidOfficial">TELEGRAM</a></h5>
				</Container>
				<Container className='lg:w-5/12 lg:m-0 flex flex-col align-center dark'>
					<h4 className='text-white'>Need product support?</h4>
					<p>Need help with an Orchid product? Connect with our support team to quickly find a solution to your issue:</p>
					<h5 className='mt-auto text-white'><a href="https://help.orchid.com/">ORCHID SUPPORT PORTAL</a></h5>
				</Container>
			</Container>

			<Container className='dark'>
				<h3>Other inquiries</h3>
				<p>We are always looking for collaborative opportunities with infrastructure providers and integration partners that want to build with Orchid. If that’s you, or if you have any other general inquiries, please fill out the form below or get in touch at contact@orchid.com and we’ll get back to you shortly.</p>
				<br />
				<b>Please note: If you are seeking help from Orchid Support, please visit help.orchid.com</b>
				<ContactForm t={t} />
			</Container>

			<div className="background-white">
				<div className="section-med vpad-wide contact-section">

					<div className="contact-sidebar">
						<div className="contact-page-card">
							<span className="contact-page-card-header color-gray">
								<Trans>
									Mailing Address
								</Trans>
							</span>
							<div className="contact-page-card-seperator"></div>
							<div style={{ maxWidth: "11rem" }}>
								1288 Columbus Ave. #122,
								San Francisco, CA 94133
							</div>
						</div>
						<div className="contact-page-card">
							<span className="contact-page-card-header color-gray">
								<Trans>
									Contact Info
								</Trans>
							</span>
							<div className="contact-page-card-seperator"></div>
							<ul className="contact-page-card-list">
								<a className="phantom-a" href={t("mailto:contact@orchid.com")}>
									<img alt="Email" src="/img/contact/icon-email.svg" width="20" height="20" />
								</a>
								<a className="phantom-a" href={t("https://twitter.com/OrchidProtocol")}>
									<img alt="Twitter" src="/img/contact/icon-twitter.svg" width="20" height="20" />
								</a>
								<a className="phantom-a" href={t("https://discord.gg/GDbxmjxX9F")}>
									<img alt="Discord" src="/img/contact/icon-discord.svg" width="20" height="20" />
								</a>
								<a className="phantom-a" href={t("https://www.t.me/OrchidOfficial")}>
									<img alt="Telegram" src="/img/contact/icon-telegram.svg" width="20" height="20" />
								</a>
								<a className="phantom-a" href={t("https://www.facebook.com/OrchidProtocol")}>
									<img alt="Facebook" src="/img/contact/icon-facebook.svg" width="20" height="20" />
								</a>
							</ul>
						</div>
					</div>
				</div>
			</div>
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