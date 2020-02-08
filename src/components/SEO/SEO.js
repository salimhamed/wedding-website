import React from "react"
import { Helmet } from "react-helmet"
import { withRouter } from "react-router-dom"

import { getPublicURL } from "utilities/pages"
import imageUrl from "photos/orcas_thumb.jpg"

const SEO = ({
    title = "Lledó and Salim",
    description = "We're getting married!",
    image = imageUrl,
    imageHeight = 195,
    imageWidth = 309,
    imageType = "image/jpeg",
    article = false,
    location: { pathname },
}) => {
    const url = getPublicURL(pathname)

    return (
        <Helmet>
            <meta property="og:type" content="website" />

            <meta name="description" content={description} />

            {image && <meta name="image" content={image} />}

            {url && <meta property="og:url" content={url} />}

            {article && <meta property="og:type" content="article" />}

            {title && <meta property="og:title" content={title} />}

            {description && (
                <meta property="og:description" content={description} />
            )}

            {image && (
                <meta property="og:image" content={getPublicURL(image)} />
            )}

            {image && (
                <meta
                    property="og:image:secure_url"
                    content={getPublicURL(image)}
                />
            )}

            {imageType && <meta property="og:image:type" content={imageType} />}

            {imageWidth && (
                <meta property="og:image:width" content={imageWidth} />
            )}

            {imageHeight && (
                <meta property="og:image:height" content={imageHeight} />
            )}

            <meta name="twitter:card" content="summary_large_image" />

            {title && <meta name="twitter:title" content={title} />}

            {description && (
                <meta name="twitter:description" content={description} />
            )}

            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    )
}

export default withRouter(SEO)
