import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import config from '../../../utils/config'
import url from 'url'

const ImageMeta = ({ image }) => {
    if (!image) {
        return null
    }

    let completeImageUrl = image;

    // TODO improve handling of relative vs absolute image URLs
    // Note that Twitter requires absolute URLs so we're forcing that here
    if (!/^https?:\/\//i.test(image)) {
        completeImageUrl = url.resolve(config.siteUrl, image);
    }
    

    return (
        <Helmet>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={completeImageUrl} />
            <meta property="og:image" content={completeImageUrl} />
        </Helmet >
    )
}

ImageMeta.propTypes = {
    image: PropTypes.string,
}

export default ImageMeta
