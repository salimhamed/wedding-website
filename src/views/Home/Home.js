import React from "react"

import { Header } from "components/Header"

import { Details } from "./Details"
import styles from "./Home.module.scss"

function Home() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Details />
            </div>
        </>
    )
}

export default Home
