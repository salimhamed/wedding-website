import React, { useContext } from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Store } from "store"
import { details } from "content/Home"

import styles from "./Details.module.scss"

function Details() {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const { Title, Date, Location, hashtag } = details[language]
    return (
        <section>
            <Container>
                <Row>
                    <Col className={styles.details}>
                        <h1 className={styles.announcement}>
                            <Title />
                        </h1>
                        <h1 className={styles.date}>
                            <Date />
                        </h1>
                        <h4 className={styles.location}>
                            <Location />
                        </h4>
                        <h4 className={styles.hashtag}>
                            <a
                                href={`https://www.instagram.com/explore/tags/${hashtag}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {`#${hashtag}`}
                            </a>
                        </h4>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Details
