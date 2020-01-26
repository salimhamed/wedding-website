import React, { useContext } from "react"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"

import headerContent from "content/Header"
import { Store } from "store"

import styles from "./Header.module.scss"

function Header() {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const Header = headerContent[language]

    return (
        <Jumbotron fluid className={styles.header}>
            <Container>
                <Header />
            </Container>
        </Jumbotron>
    )
}

export default Header
