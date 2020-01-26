import React from "react"

import { MainDetails } from "components/MainDetails"

import styles from "./Home.module.scss"

function Home() {
    return (
        <div className={styles.container}>
            <MainDetails />
        </div>
    )
}

export default Home
