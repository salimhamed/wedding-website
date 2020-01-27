import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

import { Store } from "store"
import styles from "./Footer.module.scss"
import { footer } from "content"

const Footer = () => {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const { Content } = footer[language]

    return (
        <Container fluid className={styles.footer}>
            <Col md={12}>
                <Content />
            </Col>
        </Container>
    )
}

export default Footer
