import React, { useContext } from "react"
import classNames from "classnames"

import { Store } from "store"
import { footer } from "content"

import styles from "./Footer.module.scss"

const Footer = () => {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const { Content } = footer[language]

    return (
        <footer
            className={classNames(
                "text-center",
                "text-muted",
                "mt-auto",
                "py-3",
                styles.footer
            )}
        >
            <Content />
        </footer>
    )
}

export default Footer
