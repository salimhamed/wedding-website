import React from "react"
import { useCookies } from "react-cookie"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { details } from "content/Home"

import styles from "./Details.module.scss"

function Details() {
    const [cookies] = useCookies(["language"])

    const { Title, Date, Location, hashtag } = details[cookies.language]
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
                        <h2 className={styles.location}>
                            <Location />
                        </h2>
                        <h3 className={styles.hashtag}>
                            <a
                                href={`https://www.instagram.com/explore/tags/${hashtag}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {`#${hashtag}`}
                            </a>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Details
