import React, { useContext } from "react"
import Container from "react-bootstrap/Container"

import { Store } from "store"
import { title, schedule } from "content/Schedule"

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
            <Container>
                <h1>
                    <Heading />
                </h1>
                <h2>
                    <SubHeading />
                </h2>
            </Container>
            <Container fluid>
                {scheduleItems.map((item, idx) => (
                    <Item key={idx} {...item} />
                ))}
            </Container>
        </>
    )
}

export default Schedule
