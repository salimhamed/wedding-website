import React from "react"

import { Navigation } from "components/Navigation"
import { Header } from "components/Header"
import { MainDetails } from "components/MainDetails"

function Home() {
    return (
        <div>
            <Navigation />
            <Header />
            <MainDetails />
        </div>
    )
}

export default Home
