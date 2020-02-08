import React from "react"
import { Helmet } from "react-helmet"
import get from "lodash/get"
import { withRouter } from "react-router-dom"

import { Store } from "store"
import { getPublicURL } from "utilities/pages"
import imageUrl from "photos/orcas.png"

const SEO = ({
    title: propsTitle = "Lledó and Salim",
    description: propsDescription = "We're getting married!",
    image: propsImage = imageUrl,
    article = false,
    location: { pathname },
}) => {
    const { state } = React.useContext(Store)

    const appSeo = get(state, ["app", "seo"])
    const appDescription = get(appSeo, ["description"])
    const appTitle = get(appSeo, ["title"])
    const appImage = get(appSeo, ["image", "fields", "file", "url"])

    const description = propsDescription || appDescription
    const title = propsTitle || appTitle
    const image = propsImage || appImage
    const url = getPublicURL(pathname)

    return (
        <Helmet>
            <meta name="description" content={description} />

            {image && <meta name="image" content={image} />}

            {url && <meta property="og:url" content={url} />}

            {article && <meta property="og:type" content="article" />}

            {title && <meta property="og:title" content={title} />}

            {description && (
                <meta property="og:description" content={description} />
            )}

            {image && <meta property="og:image" content={image} />}

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
