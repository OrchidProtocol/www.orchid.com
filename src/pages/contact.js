import { graphql } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './contact.scss'
import ContactForm from '../components/ContactForm';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';
import Container from '../components/common/Container';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import FooterSocialIcons from '../components/common/FooterSocialIcons';
import { break_mobile } from '../components/common/styles';

const CustomIcon = styled.img`
	margin: auto;
	margin-top: -6rem;
    width: 7.5rem;
	filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25));
	${break_mobile} {
		margin-top: -4.2rem;
		width: 5rem;
	}
`;

const WithBgCircle = styled.div`
	background-image: url(/img/contact/bg-circle.svg);
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	${break_mobile} {
		background-size: auto 100%;
	}
`;

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
				<h1
					className='uppercase text-gray lg:text-8xl'
					css={css`font-family: 'Headline One', "Baloo 2", sans-serif !important;`}
				>
					<Trans>
						Reach out
					</Trans>
				</h1>
				<h4 className='text-gray'><Trans>We’d love to hear from you.</Trans></h4>
				<img alt="" className="mx-auto" src="/img/contact/handshake.svg" width="354" height="388" />
			</Container>

			<WithBgCircle>
				<Container className='phantom no-padding lg:flex lg:justify-between text-center align-stretch gap-4'>
					<Container className='nested-half-col mt-12 flex flex-col justify-between align-center dark'>
						<CustomIcon src='/img/contact/icon-chat.svg' width={140} height={140} />
						<h4 className='text-white'><Trans>Join the discussion</Trans></h4>
						<p>
							<Trans>
								Join in on the live conversations happening about Orchid and other related topics through one of our official channels:
							</Trans>
						</p>
						<h5 className='mt-auto text-white text-lg mt-6'>
							<Trans>
								<a href="https://discord.gg/invite/GDbxmjxX9F">DISCORD</a> or <a href="https://www.t.me/OrchidOfficial">TELEGRAM</a>
							</Trans>
						</h5>
					</Container>
					<Container className='nested-half-col mt-12 flex flex-col justify-between align-center dark' css={css`width: 45%;`}>
						<CustomIcon src='/img/contact/icon-help.svg' width={140} height={140} />
						<h4 className='text-white'>
							<Trans>Need product support?</Trans>
						</h4>
						<p>
							<Trans>
								Need help with an Orchid product? Connect with our support team to quickly find a solution to your issue:
							</Trans>
						</p>
						<h5 className='mt-auto text-white text-lg mt-6'>
							<Trans>
								<a href="https://discord.gg/invite/GDbxmjxX9F/">ORCHID DISCORD SERVER</a>
							</Trans>
						</h5>
					</Container>
				</Container>

				<Container className='dark mt-12'>
					<CustomIcon src='/img/contact/icon-shake.svg' width={140} height={140} />
					<div className='text-center'>
						<h3><Trans>Other inquiries</Trans></h3>
						<p>
							<Trans>
								We are always looking for collaborative opportunities with infrastructure providers and integration partners that want to build with Orchid. If that’s you, or if you have any other general inquiries, please fill out the form below or get in touch at <a href="mailto:contact@orchid.com">contact@orchid.com</a> and we’ll get back to you shortly.
							</Trans>
						</p>
						<br />
						<b>
							<Trans>
								Please note: If you are seeking help from Orchid Support, please visit <a href="https://discord.gg/invite/GDbxmjxX9F/">discord.gg/invite/GDbxmjxX9F</a>
							</Trans>
						</b>
					</div>
					<ContactForm t={t} />
				</Container>
			</WithBgCircle>


			<Container className='phantom text-center'>
				<p className="color-gray text-xl font-bold">
					<Trans>
						Orchid Office Address
					</Trans>
				</p>
				<p>
					1288 Columbus Ave. #122, San Francisco, CA 94133
				</p>
				<FooterSocialIcons />
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