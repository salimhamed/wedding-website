import React from "react"
import { Route, Switch } from "react-router-dom"

import { Navigation } from "components/Navigation"
import { Footer } from "components/Footer"

import { Home } from "views/Home"
import { Schedule } from "views/Schedule"
import { Travel } from "views/Travel"
import { ThingsToDo } from "views/ThingsToDo"
import { FAQ } from "views/FAQ"

const AppLayout = () => (
    <>
        <main className="mb-4">
            <Navigation />
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/schedule"} component={Schedule} />
                <Route exact path={"/travel"} component={Travel} />
                <Route exact path={"/things-to-do"} component={ThingsToDo} />
                <Route exact path={"/faq"} component={FAQ} />
            </Switch>
        </main>
        <Footer />
    </>
)

export default AppLayout
