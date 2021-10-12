import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './service-terms.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>Terms of Service | Orchid</title>
			<meta name="description" content="Orchid Labs Inc. owns the intellectual property rights for all material on this site, please read our terms of service for more details." />
			<body className="faq-page" />
		</Helmet>
		<section className="service-terms-page">
			<div className="bk-beige-light">
				<header className="section-wide hpad-wide vpad-wide">
					<h1>Terms of Service</h1>
				</header>
			</div>
			<ul className="section-narrow hpad-wide gap-top-wide">
				{/*<!-- NB: these are absolute URLs because of the <base> tag-->*/}
				{/*<!--TODO: the floating header breaks the anchor positions on mobile-->*/}
				<li><a href="/service-terms#sec1" target="_self">Cookies</a></li>
				<li><a href="/service-terms#sec2" target="_self">License</a></li>
				<li><a href="/service-terms#sec3" target="_self">User Comments</a></li>
				<li><a href="/service-terms#sec4" target="_self">Hyperlinking to our Content</a></li>
				<li><a href="/service-terms#sec5" target="_self">IFrames</a></li>
				<li><a href="/service-terms#sec6" target="_self">Content Liability</a></li>
				<li><a href="/service-terms#sec7" target="_self">Reservation of Rights</a></li>
				<li><a href="/service-terms#sec8" target="_self">Removial of Links from our website</a></li>
				<li><a href="/service-terms#sec9" target="_self">Disclaimer</a></li>
			</ul>
			<article className="section-narrow hpad-wide vpad-wide">
				<h2 id="sec1">Cookies</h2>
				<p>We employ the use of cookies. By using this website you consent to the use of cookies in accordance with <a title="Privacy Policy" href="/privacy-policy">the privacy policy</a>.</p>
				<p>Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.</p>
				<h2 id="sec2">License</h2>
				<p>Unless otherwise stated, Orchid Labs Inc. and/or its licensors own the intellectual property rights for all material on this site. All intellectual property rights are reserved. You may view and/or print pages from this site for your own personal use subject to restrictions set in these terms and conditions.</p>
				<p>You must not:</p>
				<ul>
					<li>Republish material from either this site or any of the associated applications, including iOS and Android</li>
					<li>Sell, rent or sub-license material from either this site or any of the associated applications, including iOS and Android.</li>
					<li>Reproduce, duplicate or copy material from either this site or any of the associated applications, including iOS and Android.</li>
				</ul>
				<p>Redistribute content from either this site or any of the associated applications (unless content is specifically made for redistribution).</p>
				<h2 id="sec3">User Comments</h2>
				<ol>
					<li>This Agreement shall begin on the date hereof.</li>
					<li>Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. Orchid Labs Inc. does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of Orchid Labs Inc., its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws Orchid Labs Inc. shall not be responsible or liable for the Comments or for any loss cost, liability, damages or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</li>
					<li>Orchid Labs Inc. reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions.</li>
					<li>You warrant and represent that:
						<ol>
							<li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
							<li>The Comments do not infringe any intellectual property right, including without limitation copyright, patent or trademark, or other proprietary right of any third party;</li>
							<li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material or material which is an invasion of privacy</li>
							<li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
						</ol>
					</li>
					<li>You hereby grant to <strong>Orchid Labs Inc.</strong> a non-exclusive royalty-free license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</li>
				</ol>
				<h2 id="sec4">Hyperlinking to our Content</h2>
				<ol>
					<li>The following organizations may link to our Web site without prior written approval:
						<ul>
							<li>Government agencies;</li>
							<li>Search engines;</li>
							<li>News organizations;</li>
							<li>Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and</li>
							<li>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
						</ul>
					</li>
				</ol>
				<ol start="2">
					<li>These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</li>
					<li>We may consider and approve in our sole discretion other link requests from the following types of organizations:
						<ul>
							<li>commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;</li>
							<li>dot.com community sites;</li>
							<li>associations or other groups representing charities, including charity giving sites,</li>
							<li>online directory distributors;</li>
							<li>internet portals;</li>
							<li>accounting, law and consulting firms whose primary clients are businesses; and</li>
							<li>educational institutions and trade associations.</li>
						</ul>
					</li>
				</ol>
				<p>We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of Orchid Labs Inc.; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.</p>
				<p>These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site.</p>
				<p>If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to <a href="mailto:info@orchid.com" title="send an email to info@orchid.com">info@orchid.com</a>. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</p>
				<p>Approved organizations may hyperlink to our Web site as follows:</p>
				<ul>
					<li>By use of our corporate name; or</li>
					<li>By use of the uniform resource locator (Web address) being linked to; or</li>
					<li>By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site.</li>
				</ul>
				<p>No use of (cname)’s logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
				<h2 id="sec5">IFrames</h2>
				<p>Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site.</p>
				<h2 id="sec6">Content Liability</h2>
				<p>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
				<h2 id="sec7">Reservation of Rights</h2>
				<p>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.</p>
				<h2 id="sec8">Removal of links from our website</h2>
				<p>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.</p>
				<p>Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.</p>
				<h2 id="sec9">Disclaimer</h2>
				<p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:</p>
				<ol>
					<li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
					<li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
					<li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
					<li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
				</ol>
				<p>The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.</p>
				<p>To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
			</article>
		</section>
	</Layout>
)

export default Page
