import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"

import { selectLanguage } from "utilities/cookies"
import { schedule, title } from "content/Schedule"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImg from "photos/spain_octopus.jpg"

function Schedule() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]
    const scheduleItems = schedule[cookies.language]

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
                            locationLink,
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
                            RightMainTitle={() => (
                                <a
                                    href={locationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Location />
                                </a>
                            )}
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
