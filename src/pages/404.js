import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/common/Layout'
import './404.scss'

const NotFoundPage = () => (
	<Layout>
		<div>
			<section id="not-found" className="section-med hpad-wide vpad-wide">
				<h1>Not Found</h1>
				<h3>We couldn't find that page!</h3>
				<p><Link href="/">Go back home</Link></p>
			</section>
		</div>
	</Layout>
)

export default NotFoundPage
