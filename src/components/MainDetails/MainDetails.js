import React from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./MainDetails.module.scss"

function MainDetails() {
    return (
        <section>
            <Container>
                <Row>
                    <Col className={styles.details}>
                        <h1 className={styles.announcement}>Salim and Lledó are getting married!</h1>
                        <h1>August 22, 2020</h1>
                        <h4>L'ampolla, Catalonia</h4>
                        <h4>#LledoiSalim</h4>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MainDetails
