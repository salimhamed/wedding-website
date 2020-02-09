import React from "react"
import { useCookies } from "react-cookie"

import { title } from "content/Registry"
import { Header } from "components/Header"
import headerImg from "photos/orcas.png"

function Registry() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[cookies.language]

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
