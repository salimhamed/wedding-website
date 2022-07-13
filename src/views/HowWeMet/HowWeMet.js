import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { selectLanguage } from "utilities/cookies"
import { howwemet, title } from "content/HowWeMet"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImg from "photos/howWeMet.png"

import styles from "./HowWeMet.module.scss"

function HowWeMet() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]
    const howWeMetItems = howwemet[selectLanguage(cookies)]

    return (
        <section>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container >
                {howWeMetItems.map(({ Title, Details }, idx) => (
                    <Row key={"row" + idx}>
                        <Col className={styles.details}>
                            <h1 className={styles.announcement}>
                                <Title />
                            </h1><br />
                            <h3 className={styles.announcement}>
                                <Details />
                            </h3>
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    )
}

export default HowWeMet