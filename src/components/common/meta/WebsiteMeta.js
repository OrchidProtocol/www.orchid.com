import React from 'react'
import Helmet from "react-helmet"
import { StaticQuery } from 'gatsby'
import url from 'url'

import ImageMeta from './ImageMeta'
import config from '../../../utils/config'

const WebsiteMeta = ({ data, settings, canonical, title, description, image, type }) => {
    if (canonical.substr(canonical.length-1, 1) !== '/') {
        canonical = canonical+'/';
    }

    const publisherLogo = url.resolve(config.siteUrl, config.logo)
    let shareImage = image || data.feature_image || config.image;

    shareImage = shareImage ? url.resolve(config.siteUrl, shareImage) : null

    description = description || data.meta_description || data.description || config.description
    title = `${title || data.meta_title || data.name || data.title} - ${config.title}`

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
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org/",
                        "@type": "${type}",
                        "url": "${canonical}",
                        ${shareImage ? `"image": {
                                "@type": "ImageObject",
                                "url": "${shareImage}",
                                "width": "${config.shareImageWidth}",
                                "height": "${config.shareImageHeight}"
                            },` : ``}
                        "publisher": {
                            "@type": "Organization",
                            "name": "${config.title}",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "${publisherLogo}",
                                "width": 60,
                                "height": 60
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${config.siteUrl}"
                        },
                        "description": "${description}"
                    }
                `}</script>
            </Helmet>
            <ImageMeta image={shareImage} />
        </>
    )
}

export default WebsiteMeta
