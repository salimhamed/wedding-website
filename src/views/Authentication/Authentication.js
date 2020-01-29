import React from "react"
import Container from "react-bootstrap/Container"
import { Route, Switch } from "react-router-dom"
import classNames from "classnames"

import { SignInForm, SignUpForm } from "./Forms"

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
                    <h1 className={classNames("mb-4")}>S & L</h1>
                </div>
                <Switch>
                    <Route exact path={"/auth"} component={SignInForm} />
                    <Route exact path={"/auth/signup"} component={SignUpForm} />
                </Switch>
            </div>
        </Container>
    )
}

export default Authentication
