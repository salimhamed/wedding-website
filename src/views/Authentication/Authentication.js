import React from "react"
import Container from "react-bootstrap/Container"
import classNames from "classnames"

import { SignInForm } from "./Forms"

import styles from "./Authentication.module.scss"

function Authentication() {
    return (
        <Container
            className={classNames(
                "d-flex",
                "flex-column",
                "justify-content-center",
                "h-100",
                styles.container
            )}
        >
            <div>
                <div className="text-center">
                    <h1 className={classNames("mb-4", styles.header)}>S & L</h1>
                </div>
                <SignInForm />
            </div>
        </Container>
    )
}

export default Authentication
