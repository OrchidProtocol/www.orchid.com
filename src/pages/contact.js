import { graphql } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './contact.scss'
import ContactForm from '../components/ContactForm';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';
import Container from '../components/common/Container';
import { css } from '@emotion/react';

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

			<Container className='phantom p-0 lg:flex lg:justify-between text-center align-stretch'>
				<Container className='lg:m-0 flex flex-col align-center dark' css={css`width: 45%;`}>
					<h4 className='text-white'><Trans>Join the discussion</Trans></h4>
					<p>
						<Trans>
							Join in on the live conversations happening about Orchid and other related topics through one of our official channels:
						</Trans>
					</p>
					<h5 className='mt-auto text-white'>
						<Trans>
							<a href="https://discord.gg/GDbxmjxX9F">DISCORD</a> or <a href="https://www.t.me/OrchidOfficial">TELEGRAM</a>
						</Trans>
					</h5>
				</Container>
				<Container className='lg:m-0 flex flex-col align-center dark' css={css`width: 45%;`}>
					<h4 className='text-white'>
						<Trans>Need product support?</Trans>
					</h4>
					<p>
						<Trans>
							Need help with an Orchid product? Connect with our support team to quickly find a solution to your issue:
						</Trans>
					</p>
					<h5 className='mt-auto text-white'>
						<Trans>
							<a href="https://help.orchid.com/">ORCHID SUPPORT PORTAL</a>
						</Trans>
					</h5>
				</Container>
			</Container>

			<Container className='dark'>
				<h3><Trans>Other inquiries</Trans></h3>
				<p>
					<Trans>
						We are always looking for collaborative opportunities with infrastructure providers and integration partners that want to build with Orchid. If that’s you, or if you have any other general inquiries, please fill out the form below or get in touch at <a href="mailto:contact@orchid.com">contact@orchid.com</a> and we’ll get back to you shortly.
					</Trans>
				</p>
				<br />
				<b>
					<Trans>
						Please note: If you are seeking help from Orchid Support, please visit <a href="https://help.orchid.com/">help.orchid.com</a>
					</Trans>
				</b>
				<ContactForm t={t} />
			</Container>

			<div className="background-white">
				<div className="section-med vpad-wide contact-section">

					<div className="contact-sidebar">
						<div className="contact-page-card">
							<span className="contact-page-card-header color-gray">
								<Trans>
									Orchid Office Address
								</Trans>
							</span>
							<div className="contact-page-card-seperator"></div>
							<div style={{ maxWidth: "11rem" }}>
								1288 Columbus Ave. #122, San Francisco, CA 94133
							</div>
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