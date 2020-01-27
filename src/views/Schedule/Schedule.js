import React, { useContext } from "react"
import Container from "react-bootstrap/Container"

import { Store } from "store"
import { title, schedule } from "content/Schedule"
import { Header } from "components/Header"
import headerImg from "photos/spain_octopus.jpg"

import { Item } from "./Item"

function Schedule() {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const { Heading, SubHeading } = title[language]
    const scheduleItems = schedule[language]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {scheduleItems.map((item, idx) => (
                    <Item key={idx} {...item} />
                ))}
            </Container>
        </>
    )
}

export default Schedule
