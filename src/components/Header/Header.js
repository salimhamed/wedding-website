import React from 'react'

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"

import styles from "./Header.module.scss"

function Header() {
    return (
        <Jumbotron fluid className={styles.header}>
            <Container>
                <h1>We&apos;re getting married!</h1>
            </Container>
        </Jumbotron>
    )
}

export default Header
