import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Store } from "store"
import { title, schedule } from "content/Schedule"

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
                    <Col md={4}>
                        {scheduleItems.map((item, idx) => {
                            const { Title, Date, Time } = item
                            return (
                                <div key={idx}>
                                    <p>
                                        <Title />
                                    </p>
                                    <p>
                                        <Date />
                                    </p>
                                    <p>
                                        <Time />
                                    </p>
                                </div>
                            )
                        })}
                    </Col>
                    <Col md={8}>
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
