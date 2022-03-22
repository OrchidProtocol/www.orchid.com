import React, { useEffect } from 'react'
import { graphql } from 'gatsby';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/common/Layout'
import './404.scss'

function Page(props) {
	const { t } = useTranslation();

	useEffect(() => {
		if (window.location.pathname.match(/^\/pt-br/i)) {
			window.location.href = window.location.href.replace(/\/pt-br/i, '/ptbr');
		}
	}, [])

	return (<Layout t={t}>
		<div>
			<section id="not-found" className="section-med hpad-wide vpad-wide">
				<h1><Trans>Not Found</Trans></h1>
				<h3><Trans>We couldn't find that page!</Trans></h3>
				<p><Link to="/"><Trans>Go back home</Trans></Link></p>
			</section>
		</div>
	</Layout>)
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