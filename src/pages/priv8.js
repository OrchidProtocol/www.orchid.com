import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './priv8.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>Priv8 | Orchid</title>
			<meta name="description" content="Join us for an in-depth discussion on the state of privacy in today’s world with the foremost experts, policymakers, and builders." />
			<meta name="og:image" content="https://orchid.com/img/priv8/priv8_social.png" />
			<body className="webinar-page" />
		</Helmet>

		<div className="priv8-page">
			<h2>Priv8</h2>
			<p>Page under maintenance</p>
			<p>
				Follow us on <a href="https://twitter.com/OrchidProtocol">Twitter</a> for updates!
			</p>
		</div>

	</Layout >
)

export default Page
