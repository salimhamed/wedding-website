import React, { useContext } from "react"
import Container from "react-bootstrap/Container"

import { Store } from "store"
import { title, thingsToDo } from "content/ThingsToDo"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImg from "photos/sky_diving.jpeg"

function ThingsToDo() {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const { Heading, SubHeading } = title[language]
    const thingsToDoItems = thingsToDo[language]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {thingsToDoItems.map(
                    ({ Title, Address, Details, link }, idx) => (
                        <Item
                            key={idx}
                            LeftMainTitle={Title}
                            RightFirstContact={() => (
                                <a
                                    href={link}
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

export default ThingsToDo
