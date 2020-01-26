import React, { useContext } from "react"
import Navbar from "react-bootstrap/Navbar"
import NavLink from "react-bootstrap/NavLink"
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"
import Dropdown from "react-bootstrap/Dropdown"
import ReactCountryFlag from "react-country-flag"

import { LANGUAGE } from "actions/constants"
import { switchLanguage } from "actions"
import { Store } from "store"
import { navigation } from "content"

import styles from "./Navigation.module.scss"

function Navigation() {
    const { state, dispatch } = useContext(Store)

    const {
        app: { language },
    } = state

    const handleSelectLanguage = language => switchLanguage(language, dispatch)

    const languageCodes = {
        [LANGUAGE.CAT]: "ES-CT",
        [LANGUAGE.EN]: "US",
    }

    const {
        schedule: ScheduleNavText,
        travel: TravelNavText,
        thingsToDo: ThingsToDoNavText,
        faq: FAQNavText,
    } = navigation[language]

    return (
        <Navbar
            variant="dark"
            expand="lg"
            sticky="top"
            className={styles.navigation}
        >
            <Navbar.Brand href="/" className={styles.brand}>
                S & L
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/schedule">
                        <ScheduleNavText />
                    </Nav.Link>
                    <Nav.Link href="/travel">
                        <TravelNavText />
                    </Nav.Link>
                    <Nav.Link href="/things-to-do">
                        <ThingsToDoNavText />
                    </Nav.Link>
                    <Nav.Link href="/faq">
                        <FAQNavText />
                    </Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>
                            <ReactCountryFlag
                                countryCode={languageCodes[language]}
                                svg
                            />{" "}
                            {language}
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight>
                            <Dropdown.Item
                                eventKey={LANGUAGE.EN}
                                className={styles["dropdown-item"]}
                                onSelect={handleSelectLanguage}
                            >
                                <ReactCountryFlag countryCode="US" svg />{" "}
                                {LANGUAGE.EN}
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey={LANGUAGE.CAT}
                                className={styles["dropdown-item"]}
                                onSelect={handleSelectLanguage}
                            >
                                <ReactCountryFlag countryCode="ES-CT" svg />{" "}
                                {LANGUAGE.CAT}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
