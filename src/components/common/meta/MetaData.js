import React from 'react'
import { StaticQuery } from 'gatsby'
import url from 'url'

import config from '../../../utils/config'
import ArticleMeta from './ArticleMeta'
import WebsiteMeta from './WebsiteMeta'

/**
* MetaData will generate all relevant meta data information incl.
* JSON-LD (schema.org), Open Graph (Facebook) and Twitter properties.
*
*/
const MetaData = ({
    data,
    title,
    description,
    image,
    location,
}) => {
    let canonical = url.resolve(config.siteUrl, location.pathname)
    if (canonical.substr(canonical.length-1, 1) !== '/') {
        canonical = canonical+'/';
    }
    const { post, tag, page } = data

    if (post) {
        return (
            <ArticleMeta
                data={post}
                canonical={canonical}
            />
        )
    } else if (tag) {
        return (
            <WebsiteMeta
                data={tag}
                canonical={canonical}
                type="Series"
            />
        )
    } else if (page) {
        return (
            <WebsiteMeta
                data={page}
                canonical={canonical}
                type="WebSite"
            />
        )
    } else {
        title = title || config.siteTitleMeta || config.title
        description = description || config.siteDescriptionMeta || config.description
        image = image || config.feature_image || null

        image = image ? url.resolve(config.siteUrl, image) : null

        return (
            <WebsiteMeta
                data={{}}
                canonical={canonical}
                title={title}
                description={description}
                image={image}
                type="WebSite"
            />
        )
    }
}

export default MetaData
