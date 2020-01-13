import React from 'react'

import { Navigation } from "components/Navigation"
import { Header } from "components/Header"
import { MainDetails } from "components/MainDetails"
import { Schedule } from "components/Schedule"
import { Travel } from "components/Travel"

import './App.css'

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Header/>
            <MainDetails/>
            <Schedule/>
            <Travel/>
        </div>
    )
}

export default App
