import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import styles from "./Navigation.module.scss"

function Navigation() {
    return (
        <Navbar variant="dark" expand="lg" sticky="top" className={styles.navigation}>
            <Navbar.Brand href="#home" className={styles.brand}>S & L</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
