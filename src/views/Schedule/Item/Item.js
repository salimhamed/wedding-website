import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./Item.module.scss"

const Item = ({ Title, Date, Time, Location, Address, Details }) => (
    <Row className={styles.item}>
        <Col>
            <h3>
                <Title />
            </h3>
            <h4>
                <Date />
            </h4>
            <h4>
                <Time />
            </h4>
        </Col>
        <Col>
            <h3>
                <Location />
            </h3>
            <Address />
            <Details/>
        </Col>
    </Row>
)

export default Item
