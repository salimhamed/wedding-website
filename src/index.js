import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { Home } from "./views/Home"
import { StoreProvider } from "./store"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
    <StoreProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home} />
            </Switch>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
