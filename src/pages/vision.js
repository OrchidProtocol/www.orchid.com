import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './vision.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>Our Vision | Orchid</title>
			<meta name="description" content="Orchid’s mission is to build Open Source software that keeps the internet open and accessible — a natural resource for everyone, everywhere." />
			<body className="vision-page" />
		</Helmet>
		<div class="bk-beige-light">
			<section id="splash">
				<div id="splash-text">
					<header>
						<h1>We built Orchid to restore the promise of the internet</h1>
					</header>
					<p>Orchid’s mission is to build Open Source software that keeps the internet open and accessible — a natural resource for everyone, everywhere.</p>
				</div>
				<div id="splash-image">
					<img src="/img/vision/splash/splash.svg" alt="" />
				</div>
			</section>
		</div>

		<div class="pos-relative">
			<div id="adorner">
				<div class="section-narrow hpad-wide pos-relative">
					<img alt="" src="/img/vision/adorn-left.svg" id="adorn-left" class="pos-absolute" />
					<div id="adorn-right" class="pos-absolute">
						<img alt="" src="/img/vision/adorn-right-1.svg" id="adorn-right-1" />
						<img alt="" src="/img/vision/adorn-right-2.svg" id="adorn-right-2" />
					</div>
				</div>
			</div>
			<section id="no-difference" class="section-med hpad-wide vgap-wide z-index-1">
				<div class="mini-outset">
					<h2>There is no division between the natural world and the digital one.</h2>
					<p>
						Because people continue to perceive this false divide, the internet has become depleted of its promise.What began as an open platform full of potential has grown into a series of walled gardens where people are tracked, controlled, and censored.People depend on the internet for all aspects of their lives yet increasingly feel as if they are compromising their values when using it.Products are useful &mdash; but no one wants to be one.
					</p>
					<p>
						With Orchid, the promise of the internet can finally be restored.Nature is the best problem-solver.Understanding that the internet is a natural system begins with a fundamental shift in the dynamic between developers and users.Mutually beneficial relationships and shared network resources create an adaptable, harmonious, and resilient internet for all.
					</p>
					<p>
						The natural internet is a collective effort. Contact us to make it possible.
					</p>
				</div>
			</section>
		</div>

		<app-newsletter-signup></app-newsletter-signup>
	</Layout >
)

export default Page
