import React from "react"
import classNames from "classnames"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./Item.module.scss"

const Item = ({ Title, Date, Time, Location, Address, Details, mapLink }) => (
    <Row className={styles.item}>
        <Col
            sm={12}
            md={{ span: 3, offset: 2 }}
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
            sm={12}
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
            <div className={classNames(styles.address)}>
                <a href={mapLink} target="_blank" rel="noopener noreferrer">
                    <Address />
                </a>
            </div>
            <div className={styles.details}>
                <Details />
            </div>
        </Col>
    </Row>
)

export default Item
