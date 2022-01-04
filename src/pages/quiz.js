import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'
import withI18next from '../components/withI18next'
import './quiz.scss'

class Page extends React.Component {

	render() {
		const { t } = this.props;
		return (
			<Layout t={t}>
				<WebsiteMeta
					title="Privacy Quiz | Orchid"
					description="Check to see how much you know about online privacy!"
					image="/img/quiz/social.png"
					location={this.props.location}
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
}

export default withI18next({ ns: "common" })(Page)
