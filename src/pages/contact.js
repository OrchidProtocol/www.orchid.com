import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './contact.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>Get In Touch | Orchid</title>
			<meta name="description" content="Let's reclaim the Internet together! We are looking for partnership opportunities with infrastructure providers and integration partners that want to build with Orchid." />
			<meta name="og:image" content="https://orchid.com/img/contact/social.png" />
		</Helmet>
		<div className="splash-circuit">
			<div className="splash-circuit-image section-med"></div>
			<div className="splash-circuit-grid section-med">
				<div className="splash-circuit-grid-item hpad-thin">
					<h1 i18n="@@ContactHero__Title">Contact</h1>

					<div className="splash-circuit-grid-text" i18n="@@ContactHero__Description">
						<h3>We want to hear from you</h3>
						<p>Let's reclaim the Internet together! We are looking for partnership opportunities with infrastructure providers and integration partners that want to build with Orchid. Contact us and we'll get back to you shortly.</p>
					</div>
				</div>
				<div className="splash-circuit-grid-item">
					<img alt="" className="splash-circuit-feature" src="/img/contact/handshake.svg" width="354" height="388" />
				</div>
			</div>
		</div>

		<div className="background-white">
			<div className="section-med vpad-wide contact-section">

				<div className="contact-sidebar">
					<div className="contact-page-card">
						<span className="contact-page-card-header color-gray" i18n="@@ContactOffice__Title">Mailing Address</span>
						<div className="contact-page-card-seperator"></div>
						<div style={{ maxWidth: "11rem" }} i18n="@@ContactOffice__Address">
							1288 Columbus Ave. #122,
							San Francisco, CA 94133
						</div>
					</div>
					<div className="contact-page-card">
						<span className="contact-page-card-header color-gray" i18n="@@ContactSidebar__Title">Contact Info</span>
						<div className="contact-page-card-seperator"></div>
						<ul className="contact-page-card-list">
							<li>
								<a className="phantom-a" href="mailto:contact@orchid.com" i18n-href="@@ContactSidebar__EmailLink">
									<img alt="Email" src="/img/contact/icon-email.svg" width="20" height="20" />
									<span i18n="@@ContactSidebar__Email">contact@orchid.com</span>
								</a>
							</li>
							<li>
								<a className="phantom-a" href="https://twitter.com/OrchidProtocol" i18n-href="@@ContactSidebar__TwitterLink">
									<img alt="Twitter" src="/img/contact/icon-twitter.svg" width="20" height="20" />
									<span i18n="@@ContactSidebar__Twitter">@OrchidProtocol</span>
								</a>
							</li>
							<li>
								<a className="phantom-a" href="https://discord.gg/GDbxmjxX9F" i18n-href="@@ContactSidebar__DiscordLink">
									<img alt="Discord" src="/img/contact/icon-discord.svg" width="20" height="20" />
									<span i18n="@@ContactSidebar__Discord">Discord Server</span>
								</a>
							</li>
							<li>
								<a className="phantom-a" href="https://www.t.me/OrchidOfficial" i18n-href="@@ContactSidebar__TelegramLink">
									<img alt="Telegram" src="/img/contact/icon-telegram.svg" width="20" height="20" />
									<span i18n="@@ContactSidebar__Telegram">@OrchidOfficial</span>
								</a>
							</li>
							<li>
								<a className="phantom-a" href="https://www.facebook.com/OrchidProtocol" i18n-href="@@ContactSidebar__FacebookLink">
									<img alt="Facebook" src="/img/contact/icon-facebook.svg" width="20" height="20" />
									<span i18n="@@ContactSidebar__Facebook">OrchidProtocol</span>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<form className="contact-form-container">
					<div className="contact-form-input-wrapper">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							i18n-placeholder="@@ContactForm__NamePlaceholder"
							required />
					</div>

					<div className="contact-form-input-wrapper">
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							i18n-placeholder="@@ContactForm__EmailPlaceholder"

							required />
					</div>

					<div className="contact-form-input-wrapper">
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							i18n-placeholder="@@ContactForm__SubjectPlaceholder"
							required />
					</div>

					<div className="contact-form-input-wrapper">
						<textarea
							name="message"
							placeholder="Enter your message..."
							i18n-placeholder="@@ContactForm__MessagePlaceholder"
							required></textarea>
					</div>

					<div className="contact-form-error contact-form-message">
					</div>
					<div className="contact-form-error contact-form-message" i18n="@@ContactForm__RequiredFields">
						Required fields are missing
					</div>
					<div className="contact-form-error contact-form-message" i18n="@@ContactForm__UnknownError">
						There was an unknown error, your message may not have been sent
					</div>
					<div className="contact-form-success contact-form-message" i18n="@@ContactForm__Success">
						Your message has been sent
					</div>

					<button className="btn-primary" i18n="@@ContactForm__SubmitButton"> Submit</button>
					<button i18n="@@ContactForm__ClearButton"> Clear</button>
				</form>
			</div>
		</div>
	</Layout>
)

export default Page
