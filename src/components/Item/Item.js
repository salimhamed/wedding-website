import React from "react"
import classNames from "classnames"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./Item.module.scss"

const Item = ({
    LeftMainTitle = null,
    LeftFirstSubTitle = null,
    LeftSecondSubTitle = null,
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
                {LeftFirstSubTitle && (
                    <h4 className="text-muted">
                        <LeftFirstSubTitle />
                    </h4>
                )}
                {LeftSecondSubTitle && (
                    <h4 className="text-muted">
                        <LeftSecondSubTitle />
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
                {RightFirstContact || RightSecondContact ? (
                    <div className={classNames(styles.contact, "text-muted")}>
                        {RightFirstContact && <RightFirstContact />}
                        {RightSecondContact && <RightSecondContact />}
                    </div>
                ) : null}
                {RightDetails && (
                    <div>
                        <RightDetails />
                    </div>
                )}
            </Col>
        </Row>
    )
}

export default Item
