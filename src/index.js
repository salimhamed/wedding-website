import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { Navigation } from "components/Navigation"
import { Header } from "components/Header"

import { Home } from "views/Home"
import { Schedule } from "views/Schedule"
import { Travel } from "views/Travel"
import { ThingsToDo } from "views/ThingsToDo"
import { FAQ } from "views/FAQ"

import { StoreProvider } from "./store"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
    <StoreProvider>
        <BrowserRouter>
            <Switch>
                <div>
                    <Navigation />
                    <Header />
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/schedule"} component={Schedule} />
                    <Route exact path={"/travel"} component={Travel} />
                    <Route
                        exact
                        path={"/things-to-do"}
                        component={ThingsToDo}
                    />
                    <Route exact path={"/faq"} component={FAQ} />
                </div>
            </Switch>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
