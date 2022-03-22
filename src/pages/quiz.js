import { graphql } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/common/Layout'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'
import './quiz.scss'


function Page(props) {
	const { t } = useTranslation();
	return (
		<Layout t={t}>
			<WebsiteMeta
				title="Privacy Quiz | Orchid"
				description="Check to see how much you know about online privacy!"
				image="/img/quiz/social.png"
				location={props.location}
			/>
			<Helmet>
				<body className="webinar-page" />
			</Helmet>

			<div className="quiz-page">
				<h2>Quiz is under maintenance</h2>
				<p>
					Follow us on <a href="https://twitter.com/OrchidProtocol">Twitter</a> for updates on the next release!
				</p>
			</div>

		</Layout >
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