import React from "react"
import classNames from "classnames"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./Item.module.scss"

const Item = ({ Title, Date, Time, Location, Address, Details }) => (
    <Row className={styles.item}>
        <Col
            md={{ span: 3, offset: 1 }}
            className={classNames(
                styles["item-col"],
                styles["left"],
                "my-auto"
            )}
        >
            <h1>
                <Title />
            </h1>
            <h4 className="text-muted">
                <Date />
            </h4>
            <h4 className="text-muted">
                <Time />
            </h4>
        </Col>
        <Col
            md={5}
            className={classNames(
                styles["item-col"],
                styles["right"],
                "my-auto"
            )}
        >
            <h3>
                <Location />
            </h3>
            <Address />
            <Details />
        </Col>
    </Row>
)

export default Item
