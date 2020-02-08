import React, { useContext } from "react"

import { Store } from "store"
import { title } from "content/Registry"
import { Header } from "components/Header"
import headerImg from "photos/concert.png"

function Registry() {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const { Heading, SubHeading } = title[language]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
        </>
    )
}

export default Registry
