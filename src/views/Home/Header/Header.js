import React, { useContext } from "react"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"

import { headers } from "content/Home"
import { Store } from "store"

import styles from "./Header.module.scss"

function Header() {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const HeaderContent = headers[language]

    return (
        <Jumbotron fluid className={styles.header}>
            <Container>
                <h1>
                    <HeaderContent />
                </h1>
            </Container>
        </Jumbotron>
    )
}

export default Header
