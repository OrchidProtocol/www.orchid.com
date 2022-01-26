import { graphql } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './webinar.scss'
import WhereOXT from '../components/where-oxt';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';
import { useTranslation } from 'gatsby-plugin-react-i18next';


function Page(props) {
	const { t } = useTranslation();
	return (
		<Layout t={t}>
			<WebsiteMeta
				title="Webinar: Creating an Orchid Account | Orchid"
				description="Join to learn how to get Orchid setup and running. You will learn how to use Metamask to fund an Orchid account with OXT."
				image="/img/how-it-works/social.png"
				location={props.location}
			/>
			<Helmet>
				<body className="webinar-page" />
			</Helmet>
			<div className="webinar__page-container">
				<div className="bk-beige-light webinar__splash-container">
					<section className="webinar__splash">
						<div className="webinar__splash-image-container">
							<img src="/img/webinar-lp/HelpBunny.svg" alt="" />
						</div>
						<div className="webinar__splash-text-container">
							<h2>Webinar: Mar 2, 2020 @ 11am PST</h2>
							<h1>Creating an Orchid Account 101</h1>
							<p className="medium">Join to learn how to get Orchid setup and running. You will learn how to use Metamask to fund an Orchid account with OXT so that you can begin browsing.</p>
							{/*<div className="webinar__buttons">
							<a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Webinar: Get Started with Orchid&dates=20200302T170000Z/20200302T180000Z&ctz=America/Los_Angeles&details=Learn how to get Orchid set up and running. You will learn how to use Metamask to fund an Orchid account with OXT so that you can begin browsing privately. Join us on Zoom here: https://zoom.us/j/151276295&location=https://zoom.us/j/151276295&trp=true"><button className="btn-primary btn-fixed webinar-signup__button gap-bot-thin">Add to Google Calendar</button></a>
							<a href="/calendar/Webinar_Get_Started_with_Orchid.ics"><button className="btn-primary btn-fixed webinar-signup__button gap-bot-thin">Add to Outlook Calendar (.ics)</button></a></div>*/}
						</div>
					</section>
				</div>
				<div className="bk-faint-gray">
					<section className="section-narrow hpad-wide vpad-wide z-index-1 center-text">
						<h2 className="color-primary gap-bot-thin">Where to get OXT?</h2>
						<WhereOXT />
					</section>
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