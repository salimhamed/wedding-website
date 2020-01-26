import React from "react"

import styles from "./Items.module.scss"

const LeftItem = ({ Title, Date, Time }) => (
    <div className={styles.item}>
        <h3>
            <Title />
        </h3>
        <h4>
            <Date />
        </h4>
        <h4>
            <Time />
        </h4>
    </div>
)

export default LeftItem
