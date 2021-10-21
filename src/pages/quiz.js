import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './quiz.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>Privacy Quiz | Orchid</title>
			<meta name="description" content="Check to see how much you know about online privacy!" />
			<meta name="og:image" content="https://www.orchid.com/img/quiz/social.png" />
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

export default Page
