import React from "react"
import { useCookies } from "react-cookie"
import classNames from "classnames"

import { selectLanguage } from "utilities/cookies"
import { footer } from "content"

import styles from "./Footer.module.scss"

const Footer = () => {
    const [cookies] = useCookies(["language"])

    const { Content } = footer[selectLanguage(cookies)]

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
