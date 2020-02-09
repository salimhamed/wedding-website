import React, { useContext } from "react"

import { Store } from "store"
import { title } from "content/RSVP"
import { Header } from "components/Header"
import headerImg from "photos/orcas.png"

import { RSVPForm } from "./Forms"

function RSVP() {
    const { state } = useContext(Store)
    const {
        app: { language, user },
    } = state

    const { Heading, SubHeading, SubHeadingAuthenticated } = title[language]

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
