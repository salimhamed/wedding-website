import React, { useContext } from "react"

import { Store } from "store"
import { title } from "content/FAQ"

function FAQ() {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const { Heading, SubHeading } = title[language]

    return (
        <>
            <h1>
                <Heading />
            </h1>
            <h2>
                <SubHeading />
            </h2>
        </>
    )
}

export default FAQ
