import React, { useContext } from "react"
import { useCookies } from "react-cookie"

import { selectLanguage } from "utilities/cookies"
import { Store } from "store"
import { title } from "content/RSVP"
import { Header } from "components/Header"
import headerImg from "photos/orcas.png"

import { RSVPForm } from "./Forms"

function RSVP() {
    const { state } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const {
        app: { user },
    } = state

    const { Heading, SubHeading, SubHeadingAuthenticated } = title[
        selectLanguage(cookies)
    ]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={
                    user.isAuthenticated
                        ? () => <SubHeadingAuthenticated user={user} />
                        : SubHeading
                }
            />
            {user.isAuthenticated && <RSVPForm />}
        </>
    )
}

export default RSVP
