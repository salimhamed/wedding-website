import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Store } from "store"
import { title, schedule } from "content/Schedule"

import { LeftItem } from "./Items"

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
            <Container>
                <Row>
                    <Col sm={2} md={4}>
                        {scheduleItems.map((item, idx) => {
                            const { Title, Date, Time } = item
                            return (
                                <LeftItem
                                    key={idx}
                                    Title={Title}
                                    Date={Date}
                                    Time={Time}
                                />
                            )
                        })}
                    </Col>
                    <Col sm={10} md={8}>
                        {scheduleItems.map((item, idx) => {
                            const { Location, Address, Details, mapLink } = item
                            return (
                                <div key={idx}>
                                    <p>
                                        <Location />
                                    </p>
                                    <p>
                                        <Address />
                                    </p>
                                    <p>
                                        <Details />
                                    </p>
                                    <p>{mapLink}</p>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Schedule
