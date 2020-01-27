import React, { useContext } from "react"
import Container from "react-bootstrap/Container"

import { Store } from "store"
import { title, faqs } from "content/FAQ"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImg from "photos/deck_with_chicago.jpg"

function FAQ() {
    const { state } = useContext(Store)
    const {
        app: { language },
    } = state

    const { Heading, SubHeading } = title[language]
    const faqItems = faqs[language]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {faqItems.map(({ Question, Answer }, idx) => (
                    <div style={{ marginBottom: 100 }}>
                        <Item
                            key={idx}
                            LeftMainTitle={Question}
                            RightDetails={Answer}
                        />
                    </div>
                ))}
            </Container>
        </>
    )
}

export default FAQ
