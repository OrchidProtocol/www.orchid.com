import { graphql } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/common/Layout'
import WebsiteMeta from '../components/common/meta/WebsiteMeta'
import './slides-2021.scss'
import Container from '../components/common/Container';
import NewsletterSignupCore from '../components/newsletter-signup-core';


function Page(props) {
	const { t } = useTranslation();
	return (
		<Layout t={t}>
			<WebsiteMeta
				title="Decentralization is the new encryption | Orchid"
				description="Decentralization is the new encryption presentation - how decentralized and encrypted technologies complement each other for better privacy solutions."
				image=""
				location={props.location}
			/>
			<Helmet>
				<body className="slides-2021-page" />
			</Helmet>
			<div className="slides-wrapper">
				<h2>Decentralization is the new encryption</h2>
				<h4>(Presentation)</h4>
				<br />
				<p>How decentralized and encrypted technologies complement each other for better privacy solutions.</p>
				<div className="slide">
					<div className="label">1 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_01.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">2 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_02.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">3 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_03.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">4 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_04.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">5 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_05.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">6 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_06.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">7 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_07.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">8 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_08.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">9 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_09.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">10 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_10.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">11 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_11.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">12 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_12.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">13 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_13.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">14 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_14.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">15 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_15.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">16 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_16.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">17 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_17.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">18 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_18.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">19 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_19.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">20 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_20.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">21 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_21.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">22 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_22.jpg" alt="" loading="lazy" />
				</div>
				<div className="slide">
					<div className="label">23 / 23</div>
					<img width="1920" height="1080" src="/img/slides/Orchid_Decentralization_Deck_Page_23.jpg" alt="" loading="lazy" />
				</div>
			</div>

			<div className="patterning-instance-1"></div>

			<Container>
				<NewsletterSignupCore t={t} />
			</Container>
		</Layout >
	)
}

export default Page

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: {language: {eq: $language}}) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;