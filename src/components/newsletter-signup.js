import React from 'react'
import { Trans } from 'gatsby-plugin-react-i18next';
import Container from './common/Container';
import NewsletterSignupCore from './newsletter-signup-core';

function NewsletterSignup({ t }) {
	return (<Container className='phantom text-center'>
		<h2 className="section-heading"><Trans>Let’s stay connected</Trans></h2>
		<p><Trans>Get the Orchid Onlooker newsletter for updates and privacy news</Trans></p>
		<NewsletterSignupCore t={t} />
	</Container>)
}

export default NewsletterSignup;
