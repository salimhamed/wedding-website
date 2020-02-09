import React, { useEffect, useContext } from "react"
import { useCookies } from "react-cookie"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Auth from "@aws-amplify/auth"
import { CookiesProvider } from "react-cookie"
import get from "lodash/get"
import isNull from "lodash/isNull"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { Authentication } from "views/Authentication"
import { AppLayout } from "views/AppLayout"
import { initializeApp } from "actions"
import { LANGUAGE } from "actions/constants"

import { StoreProvider, Store } from "./store"
import * as serviceWorker from "./serviceWorker"

Auth.configure({
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT,
    mandatorySignIn: false, // Enforce user authentication prior to accessing AWS resources or not
})

const App = () => {
    const { dispatch } = useContext(Store)

    const [cookies, setCookie] = useCookies(["language"])
    const language = get(cookies, ["language"], null)

    useEffect(() => {
        initializeApp(dispatch)
        if (isNull(language)) {
            setCookie("language", LANGUAGE.EN, { path: "/" })
        }
    }, [dispatch, setCookie, language])

    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/auth"} component={Authentication} />
                <Route component={AppLayout} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <CookiesProvider>
        <StoreProvider>
            <App />
        </StoreProvider>
    </CookiesProvider>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
