import React from "react"
import classNames from "classnames"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./Item.module.scss"

const Item = ({ Type, Title, Details, Address, Phone }) => {
    return (
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
                    <Type />
                </h1>
                <h4 className="text-muted">
                    <Title />
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
                {Address && (
                    <div className={classNames(styles.address, "text-muted")}>
                        <Address />
                    </div>
                )}
                {Phone && (
                    <div className={classNames(styles.address, "text-muted")}>
                        <Phone />
                    </div>
                )}
                <div className={styles.details}>
                    <Details />
                </div>
            </Col>
        </Row>
    )
}

export default Item
