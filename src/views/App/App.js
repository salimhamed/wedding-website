import React from "react"

import { Navigation } from "components/Navigation"
import { Header } from "components/Header"
import { MainDetails } from "components/MainDetails"

import "./App.css"

function App() {
    return (
        <div className="App">
            <Navigation />
            <Header />
            <MainDetails />
        </div>
    )
}

export default App
