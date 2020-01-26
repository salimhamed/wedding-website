import React from "react"

import { Navigation } from "components/Navigation"
import { Header } from "components/Header"
import { MainDetails } from "components/MainDetails"

import styles from "./Home.module.scss"

function Home() {
    return (
        <div className={styles.container}>
            <Navigation />
            <Header />
            <MainDetails />
        </div>
    )
}

export default Home
