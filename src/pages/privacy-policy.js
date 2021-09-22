import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './privacy-policy.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>Privacy Policy | Orchid</title>
			<meta name="description" content="The Orchid Privacy Policy explains how our site will collect, use, protect or otherwise handle your Personally Identifiable Information with our free private VPN service." />
			<body className="faq-page" />
		</Helmet>
		<section className="privacy-policy-page">
			<div class="bk-beige-light">
				<header class="section-wide hpad-wide vpad-wide">
					<h1>Privacy Policy</h1>
				</header>
			</div>
			<ul class="section-narrow hpad-wide gap-top-wide">
				{/*<!-- NB: these are absolute URLs because of the <base> tag-->*/}
				{/*<!--TODO: the floating header breaks the anchor positions on mobile-->*/}
				<li><a href="/privacy-policy#sec1" target="_self">Introduction</a></li>
				<li><a href="/privacy-policy#sec2" target="_self">Traffic Activity</a></li>
				<li><a href="/privacy-policy#sec3" target="_self">Cookies</a></li>
				<li><a href="/privacy-policy#sec4" target="_self">Third Parties</a></li>
				<li><a href="/privacy-policy#sec5" target="_self">Consent</a></li>
				<li><a href="/privacy-policy#sec6" target="_self">Update</a></li>
				<li><a href="/privacy-policy#sec7" target="_self">More Information</a></li>
				<li><a href="/privacy-policy#sec8" target="_self">Orchid Website Privacy Policy Only</a></li>
			</ul>
			<article class="section-narrow hpad-wide vpad-wide">
				<h2 id="sec1">Introduction</h2>
				<p>Orchid considers the privacy of our visitors to be extremely important. This privacy policy document describes in detail the types of personal information that is collected and recorded by www.orchid.com and how we use it.</p>
				<p>Orchid is committed to user privacy and does not collect or store personal data. Orchid is committed to protecting user privacy and browsing history. The following document discloses our privacy policy and measures taken to protect users from data tracking and logging. The information included below is a detailed summary on what information is collected and where, through what partners, and how that information is being used. </p>
				<h2 id="sec2">Traffic Activity</h2>
				<p>Orchid Labs, Inc maintains and manages the infrastructure that serves www.orchid.com. During the process of regular website operations, webserver logs record information in aggregate about user sessions including metadata such as page requests and timestamps.</p>
				<h2 id="sec3">Cookies</h2>
				<p>Orchid Labs, Inc does not use any cookies or tracking pixels for tracking user activity either on <a href="https://www.orchid.com">www.orchid.com</a> or across the web.</p>
				<p>Cookies could be used to provide a more optimal website experience, such as server load balancing.</p>
				<h2 id="sec4">Third Parties</h2>
				<p>We do not sell, trade, or otherwise transfer to outside parties any information that we collect on <a href="https://www.orchid.com">www.orchid.com</a>. We do use some third party vendors, which are listed here.</p>
				<p>Orchid Labs, Inc uses Mailchimp to manage Orchid’s newsletter list. Mailchimp collects and stores emails for anyone that signs up for our newsletter. Their privacy <a href="https://mailchimp.com/legal/privacy/#3._Privacy_for_Contacts">policy is here</a></p>
				<p>Orchid Labs, Inc uses Branch.io to simplify links to our iOS and Android applications on <a href="https://www.orchid.com">www.orchid.com</a>. Occasionally when clicking on Branch links, the user will be re-directed to the appropriate experience after Branch performs device detection. Branch’s privacy <a href="https://branch.io/policies/#privacy">policy is here.</a></p>
				<h2 id="sec5">Consent</h2>
				<p>By using our application, you hereby consent to our privacy policy and agree to its terms.</p>
				<h2 id="sec6">Update</h2>
				<p>This Privacy Policy was last updated on: Monday, December 9th, 2019. Should we update, amend or make any changes to our privacy policy, those changes will be posted here.</p>
				<h2 id="sec7">More Information</h2>
				<p>If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at privacy@orchid.com</p>
				<h2 id="sec8">Orchid Website Privacy Policy Only</h2>
				<p>This privacy policy applies only to the <a href="https://www.orchid.com">www.orchid.com</a> website and information shared and/or collected there. This policy does not apply to any information collected offline, through the Orchid iOS and Android applications published by Orchid Labs, Inc or via channels other than <a href="https://www.orchid.com">www.orchid.com</a>. Please see <a href="https://www.orchid.com/mobile-privacy-policy">https://www.orchid.com/mobile-privacy-policy</a> for the mobile privacy policy.</p>
			</article>
		</section>
	</Layout>
)

export default Page
