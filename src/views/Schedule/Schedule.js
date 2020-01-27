import React, { useContext } from "react"
import Container from "react-bootstrap/Container"

import { Store } from "store"
import { title, schedule } from "content/Schedule"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImg from "photos/spain_octopus.jpg"

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
                {scheduleItems.map(
                    (
                        {
                            Title,
                            Date,
                            Time,
                            Location,
                            Address,
                            Details,
                            mapLink,
                        },
                        idx
                    ) => (
                        <Item
                            key={idx}
                            LeftMainTitle={Title}
                            LeftFirstSubTitle={Date}
                            LeftSecondSubTitle={Time}
                            RightMainTitle={Location}
                            RightFirstContact={() => (
                                <a
                                    href={mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Address />
                                </a>
                            )}
                            RightDetails={Details}
                        />
                    )
                )}
            </Container>
        </>
    )
}

export default Schedule
