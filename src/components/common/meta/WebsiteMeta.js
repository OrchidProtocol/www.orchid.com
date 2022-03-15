import React from 'react'
import Helmet from "react-helmet"

import ImageMeta from './ImageMeta'
import config from '../../../utils/config'
import { useI18next } from 'gatsby-plugin-react-i18next';

const WebsiteMeta = (props) => {
	const { languages, originalPath, language } = useI18next();
	console.log(languages, originalPath, language);

	const languageTags = languages.map((lang) => {
		return (<link key={lang} rel="alternate" href={`${config.siteUrl}${lang === 'en' ? '' : `${lang}`}${lang === 'en' ? originalPath.replace(/^\//, '') : originalPath}`} hreflang={lang} />)
	});

	let { title, description, image, type = "WebSite" } = props;
	let canonical = config.siteUrl + originalPath.replace(/^\//, '');
	if (canonical.substr(canonical.length - 1, 1) !== '/') {
		canonical = canonical + '/';
	}

	const publisherLogo = config.siteUrl + config.logo.replace(/^\//, '');
	let shareImage = image || config.image;

	shareImage = shareImage ? config.siteUrl + shareImage.replace(/^\//, '') : null;

	description = description || config.description;
	if (!title.match(/orchid/i)) {
		title = `${title ? `${title} | ` : ''} ${config.title}`;
	}

	return (
		<>
			<Helmet>
				<title>{title}</title>
				{languageTags}
				<meta name="description" content={description} />
				<link rel="canonical" href={canonical} />
				<meta property="og:site_name" content={config.title} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={canonical} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:url" content={canonical} />
				{config.twitter && <meta name="twitter:site" content={`https://twitter.com/${config.twitter.replace(/^@/, ``)}/`} />}
				{config.twitter && <meta name="twitter:creator" content={config.twitter} />}
				<script type="application/ld+json">{
					JSON.stringify({
						"@context": "https://schema.org/",
						"@type": type,
						"url": canonical,
						"image": shareImage ? {
							"@type": "ImageObject",
							"url": shareImage,
							"width": config.shareImageWidth,
							"height": config.shareImageHeight
						} : undefined,
						"publisher": {
							"@type": "Organization",
							"name": config.title,
							"logo": {
								"@type": "ImageObject",
								"url": publisherLogo,
								"width": 60,
								"height": 60
							}
						},
						"mainEntityOfPage": {
							"@type": "WebPage",
							"@id": config.siteUrl
						},
						"description": description
					})
				}</script>
			</Helmet>
			<ImageMeta image={shareImage} />
		</>
	)
}

export default WebsiteMeta
