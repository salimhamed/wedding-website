import React from "react"

import { Header } from "./Header"
import { Details } from "./Details"
import styles from "./Home.module.scss"

function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Details />
        </div>
    )
}

export default Home
