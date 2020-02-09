import React, { useContext } from "react"
import Container from "react-bootstrap/Container"

import { Store } from "store"
import { title, travel } from "content/Travel"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImg from "photos/airplane.jpg"

function Travel() {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const { Heading, SubHeading } = title[language]
    const travelItems = travel[language]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {travelItems.map(
                    ({ Type, Title, Details, Address, Phone, link }, idx) => (
                        <Item
                            key={idx}
                            LeftMainTitle={Type}
                            LeftFirstSubTitle={Title}
                            RightFirstContact={Address}
                            RightSecondContact={Phone}
                            RightDetails={Details}
                            infoLink={link}
                        />
                    )
                )}
            </Container>
        </>
    )
}

export default Travel
