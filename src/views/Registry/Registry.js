import React from "react"
import { useCookies } from "react-cookie"

import { selectLanguage } from "utilities/cookies"
import { title } from "content/Registry"
import { Header } from "components/Header"
import headerImg from "photos/snow.png"

function Registry() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]

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
