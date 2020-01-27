import React from "react"
import classNames from "classnames"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./Item.module.scss"

const Item = ({
    LeftMainTitle = null,
    LeftSubTitle = null,
    RightMainTitle = null,
    RightFirstContact = null,
    RightSecondContact = null,
    RightDetails = null,
}) => {
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
                {LeftMainTitle && (
                    <h1>
                        <LeftMainTitle />
                    </h1>
                )}
                {LeftSubTitle && (
                    <h4 className="text-muted">
                        <LeftSubTitle />
                    </h4>
                )}
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
                {RightMainTitle && (
                    <h3>
                        <RightMainTitle />
                    </h3>
                )}
                {RightFirstContact && (
                    <div className={classNames(styles.contact, "text-muted")}>
                        <RightFirstContact />
                    </div>
                )}
                {RightSecondContact && (
                    <div className={classNames(styles.contact, "text-muted")}>
                        <RightSecondContact />
                    </div>
                )}
                {RightDetails && (
                    <div className={styles.details}>
                        <RightDetails />
                    </div>
                )}
            </Col>
        </Row>
    )
}

export default Item
