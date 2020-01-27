import React, { useContext } from "react"
import Container from "react-bootstrap/Container"

import { Store } from "store"
import { title, travel } from "content/Travel"
import { Header } from "components/Header"
import headerImg from "photos/airplane.jpg"

import { Item } from "./Item"

function Travel() {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const { Heading, SubHeading } = title[language]
    const travelItems = travel[language]

    console.log({ travelItems })

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {travelItems.map((item, idx) => (
                    <Item key={idx} {...item} />
                ))}
            </Container>
        </>
    )
}

export default Travel
