import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', image } = imageInfo

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
