import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './mobile-privacy-policy.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>Privacy Policy | Orchid</title>
			<meta name="description" content="The Orchid Privacy Policy explains how our site will collect, use, protect or otherwise handle your Personally Identifiable Information with our free private VPN service." />
			<body className="faq-page" />
		</Helmet>
		<section className="mobile-privacy-policy-page">
			<div class="bk-beige-light">
				<header class="section-wide hpad-wide vpad-wide">
					<h1>Mobile Privacy Policy</h1>
				</header>
			</div>
			<ul class="section-narrow hpad-wide gap-top-wide">
				{/*<!-- NB: these are absolute URLs because of the <base> tag-->*/}
				{/*<!--TODO: the floating header breaks the anchor positions on mobile-->*/}
				<li><a href="#sec1" target="_self">Introduction</a></li>
				<li><a href="#sec2" target="_self">Traffic Activity</a></li>
				<li><a href="#sec3" target="_self">Orchid Mobile Application Privacy Policy Only</a></li>
				<li><a href="#sec4" target="_self">Consent</a></li>
				<li><a href="#sec5" target="_self">Update</a></li>
				<li><a href="#sec6" target="_self">More Information</a></li>
			</ul>
			<article class="section-narrow hpad-wide vpad-wide">
				<h2 id="sec1">Introduction</h2>
				<p>
					Orchid considers the privacy of our visitors to be extremely important. This
					privacy policy document describes in detail the types of personal information that is
					collected and recorded by the Orchid iOS and Android applications and how we use it.
				</p>

				<p>
					Orchid is committed to user privacy and does not collect or store personal data.
					Orchid is committed to protecting user privacy and browsing history.
					The following document discloses our privacy policy and measures taken to protect
					users from data tracking and logging. The information included below is a detailed
					summary on what information is collected and where, through what app partners, and
					how that information is being used. Please refer to their terms and conditions and
					privacy policies for information they store through their app publication services.
				</p>

				<h2 id="sec2">Traffic Activity</h2>
				<p>
					All data surrounding network traffic activity is stored locally on your device
					and is not collected or used by Orchid Labs. This data potentially includes internet
					protocol (IP) addresses of your device and hosts you connect to, source and
					destination ports of these connections, connection protocol, and the date/time
					of the connection. Clearing this data from within the application deletes the
					only stored copy of the information.
				</p>

				<h2 id="sec3">Orchid Mobile Application Privacy Policy Only</h2>
				<p>
					This privacy policy applies only to the Orchid iOS and Android applications
					published by Orchid Labs, Inc and information shared and/or collected there.
					This policy does not apply to any information collected offline, through the
					<a href="www.orchid.com">www.orchid.com</a> website, or via channels other than these applications. Please
					see <a href="https://www.orchid.com/privacy-policy">https://www.orchid.com/privacy-policy</a> for the <a href="www.orchid.com">www.orchid.com</a> Privacy Policy.
				</p>

				<h2 id="sec3">Consent</h2>
				<p>
					By using our application, you hereby consent to our privacy policy and agree to its terms.
				</p>

				<h2 id="sec4">Update</h2>
				<p>
					This Privacy Policy was last updated on: Friday, August 16th, 2019.
					Should we update, amend or make any changes to our privacy policy, those changes will be posted here.
				</p>

				<h2 id="sec5">More Information</h2>
				<p>
					If you require any more information or have any questions about our privacy
					policy, please feel free to contact us by email at <a href="mailto:privacy@orchid.com" title="send an email to privacy@orchid.com">privacy@orchid.com</a>
				</p>
			</article>
		</section>
	</Layout>
)

export default Page
