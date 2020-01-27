import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

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
                <Row style={{ height: 50 }}>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >1</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >2</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >3</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >4</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >5</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >6</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >7</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >8</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >9</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >10</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >11</Col>
                    <Col
                        md={1}
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                        }}
                    >12</Col>
                </Row>
            </Container>
        </>
    )
}

export default Schedule
