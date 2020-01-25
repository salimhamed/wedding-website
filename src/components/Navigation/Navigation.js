import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import ReactCountryFlag from "react-country-flag"

import { LANGUAGE } from "actions/constants"
import styles from "./Navigation.module.scss"

function Navigation() {
    return (
        <Navbar
            variant="dark"
            expand="lg"
            sticky="top"
            className={styles.navigation}
        >
            <Navbar.Brand href="#home" className={styles.brand}>
                S & L
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <NavDropdown title="English">
                        <NavDropdown.Item eventKey={LANGUAGE.EN}>
                            English <ReactCountryFlag countryCode="US" svg />
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey={LANGUAGE.CAT}>
                            Catalan <ReactCountryFlag countryCode="ES-CT" svg />
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
