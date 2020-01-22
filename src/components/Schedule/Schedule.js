import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Schedule() {
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <hr />
                        <p>
                            Here's what to expect during our wedding weekend.
                            There will also be a printout of this schedule
                            available in your hotel rooms. We can't wait to
                            celebrate with you!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ol>
                            <li>Welcome Drinks</li>
                            <li>Ceremony</li>
                            <li>Reception</li>
                            <li>Brunch</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Schedule
