import React from "react"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"

import styles from "./Header.module.scss"

const Header = ({ imageUrl, Heading, SubHeading }) => (
    <>
        <Jumbotron
            fluid
            className={styles.heading}
            style={{
                backgroundImage: `url("${imageUrl}")`,
            }}
        >
            <Container>
                <h1>
                    <Heading />
                </h1>
            </Container>
        </Jumbotron>
        <Container className={styles["sub-heading"]}>
            <h5 className="text-muted">
                <SubHeading />
            </h5>
        </Container>
    </>
)

export default Header
