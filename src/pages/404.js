import React from 'react'
import { Link } from 'gatsby-i18n';
import Layout from '../components/common/Layout'
import './404.scss'
import { Trans } from 'react-i18next'
import withI18next from '../components/withI18next'

class Page extends React.Component {
	render() {
		const { t } = this.props

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
}

export default withI18next({ ns: "common" })(Page)
