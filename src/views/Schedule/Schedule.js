import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Store } from "store"
import { title, schedule } from "content/Schedule"
import { ShowGrid } from "components/Helpers"

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
            <h1>
                <Heading />
            </h1>
            <h2>
                <SubHeading />
            </h2>
            <Container
                fluid
                style={{
                    borderStyle: "solid",
                    borderWidth: 1,
                }}
            >
                {scheduleItems.map((item, idx) => (
                    <Item key={idx} {...item} />
                ))}
                <ShowGrid />
            </Container>
        </>
    )
}

export default Schedule
