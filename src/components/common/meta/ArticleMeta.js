import React from 'react'
import Helmet from "react-helmet"
import _ from 'lodash'
import url from 'url'

import ImageMeta from './ImageMeta'
import config from '../../../utils/config'

const sanitize = (text) => {
    let output = JSON.stringify(text);
    return output.substr(1).substr(0, output.length - 2);
}

const ArticleMetaGhost = ({ data, canonical }) => {
    if (canonical.substr(canonical.length-1, 1) !== '/') {
        canonical = canonical+'/';
    }
    const ghostPost = data

    if (!ghostPost.tags) ghostPost.tags = [];

    const primaryTag = ghostPost.tags[0];
    const publisherLogo = url.resolve(config.siteUrl, config.logo);

    return (
        <>
            <Helmet>
                <title>{ghostPost.title}</title>
                <meta name="description" content={ghostPost.description} />
                <link rel="canonical" href={canonical} />

                <meta property="og:site_name" content={config.title} />
                <meta property="og:type" content="article" />
                <meta property="og:title"
                    content={
                        ghostPost.title
                    }
                />
                <meta property="og:description"
                    content={
                        ghostPost.description
                    }
                />
                <meta property="og:url" content={canonical} />
                <meta property="article:published_time" content={ghostPost.date} />
                <meta property="article:modified_time" content={ghostPost.date} />
                {ghostPost.tags.map((keyword, i) => (<meta property="article:tag" content={keyword} key={i} />))}

                <meta name="twitter:title"
                    content={
                        ghostPost.title
                    }
                />
                <meta name="twitter:description"
                    content={
                        ghostPost.description
                    }
                />
                <meta name="twitter:url" content={canonical} />
                {primaryTag && <meta name="twitter:label2" content="Filed under" />}
                {primaryTag && <meta name="twitter:data2" content={primaryTag} />}

                {config.twitter && <meta name="twitter:site" content={`https://twitter.com/${config.twitter.replace(/^@/, ``)}/`} />}
                {config.twitter && <meta name="twitter:creator" content={config.twitter} />}
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org/",
                        "@type": "Article",
                        "author": {
                            "@type": "Organization",
                            "name": "${sanitize(config.title)}",
                            "image": "${publisherLogo}"
                        },
                        ${ghostPost.tags.length ? `"keywords": "${sanitize(_.join(ghostPost.tags, `, `))}",` : ``}
                        "headline": "${sanitize(ghostPost.title)}",
                        "url": "${canonical}",
                        "datePublished": "${ghostPost.date}",
                        "dateModified": "${ghostPost.date}",
                        ${ghostPost.featuredimage ? `"image": {
                            "@type": "ImageObject",
                            "url": "${url.resolve(config.siteUrl, ghostPost.featuredimage)}"
                        },` : ``}
                        "publisher": {
                            "@type": "Organization",
                            "name": "${sanitize(config.title)}",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "${publisherLogo}",
                                "width": 60,
                                "height": 60
                            }
                        },
                        "description": "${sanitize(ghostPost.description)}",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${config.siteUrl}"
                        }
                    }
                `}</script>
            </Helmet>
            <ImageMeta image={ghostPost.featuredimage} />
        </>
    )
}

export default ArticleMetaGhost
