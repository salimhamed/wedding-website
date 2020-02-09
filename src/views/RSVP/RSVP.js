import React, { useContext } from "react"
import { useCookies } from "react-cookie"

import { Store } from "store"
import { title } from "content/RSVP"
import { Header } from "components/Header"
import headerImg from "photos/snow.png"

import { RSVPForm } from "./Forms"

function RSVP() {
    const { state } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const {
        app: { user },
    } = state

    const { Heading, SubHeading, SubHeadingAuthenticated } = title[
        cookies.language
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
