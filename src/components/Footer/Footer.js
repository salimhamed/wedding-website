import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
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
        <Container fluid>
            <Col
                md={12}
                className={classNames(
                    "text-center",
                    "text-muted",
                    styles.footer
                )}
            >
                <Content />
            </Col>
        </Container>
    )
}

export default Footer
