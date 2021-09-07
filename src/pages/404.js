import React from 'react'
import Layout from '../components/common/Layout'
import './404.scss'

const NotFoundPage = () => (
	<Layout>
		<div>
			<section id="not-found" class="section-med hpad-wide vpad-wide">
				<h1>Not Found</h1>
				<h3>We couldn't find that page!</h3>
				<p><a href="/">Go back home</a></p>
			</section>
		</div>
	</Layout>
)

export default NotFoundPage
