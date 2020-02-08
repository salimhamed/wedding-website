import React from "react"
import { Helmet } from "react-helmet"
import { withRouter } from "react-router-dom"

import { getPublicURL } from "utilities/pages"
import imageUrl from "photos/orcas_thumb.png"

const SEO = ({
    title = "Lledó and Salim",
    description = "We're getting married!",
    image = imageUrl,
    article = false,
    location: { pathname },
}) => {
    const url = getPublicURL(pathname)

    return (
        <Helmet>
            <meta name="description" content={description} />

            {image && <meta name="image" content={getPublicURL(image)} />}

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

            <meta name="twitter:card" content="summary_large_image" />

            {title && <meta name="twitter:title" content={title} />}

            {description && (
                <meta name="twitter:description" content={description} />
            )}

            {image && <meta name="twitter:image" content={getPublicURL(image)} />}
        </Helmet>
    )
}

export default withRouter(SEO)
