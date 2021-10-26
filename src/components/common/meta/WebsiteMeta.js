import React from 'react'
import Helmet from "react-helmet"
import url from 'url'

import ImageMeta from './ImageMeta'
import config from '../../../utils/config'

class WebsiteMeta extends React.Component {

	render() {
		let { title, description, image, type = "WebSite", location } = this.props;
		let canonical = url.resolve(config.siteUrl, location.pathname)
		if (canonical.substr(canonical.length - 1, 1) !== '/') {
			canonical = canonical + '/';
		}

		const publisherLogo = url.resolve(config.siteUrl, config.logo);
		let shareImage = image || config.image;

		shareImage = shareImage ? url.resolve(config.siteUrl, shareImage) : null;

		description = description || config.description;
		title = `${title ? `${title} - ` : ''} ${config.title}`;

		return (
			<>
				<Helmet>
					<title>{title}</title>
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
}

export default WebsiteMeta
