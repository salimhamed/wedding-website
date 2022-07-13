import React, { useContext } from "react"
import { useCookies } from "react-cookie"
import { NavLink as RouterNavLink, withRouter } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import NavLink from "react-bootstrap/NavLink"
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"
import Dropdown from "react-bootstrap/Dropdown"
import ReactCountryFlag from "react-country-flag"
import classNames from "classnames"

import { selectLanguage } from "utilities/cookies"
import { LANGUAGE } from "actions/constants"
//import { signOut } from "actions"
//import { Store } from "store"
import { navigation } from "content"

import styles from "./Navigation.module.scss"

function Navigation({ history }) {
    const [cookies, setCookie] = useCookies(["language"])
    //const { state, dispatch } = useContext(Store)

    /*const {
        app: {
            user: { name, isAuthenticated, email },
        },
    } = state*/

    const handleSelectLanguage = lang =>
        setCookie("language", lang, { path: "/" })

    //const handleSignOut = () => signOut(dispatch)

    const languageCodes = {
        [LANGUAGE.ES]: "ES",
        [LANGUAGE.CAT]: "ES",
        [LANGUAGE.EN]: "US"
    }

    const {
        schedule: ScheduleNavText,
        travel: TravelNavText,
        thingsToDo: ThingsToDoNavText,
        faq: FAQNavText,
    } = navigation[selectLanguage(cookies)]

    /*
    registry: RegistryNavText,
        rsvp: RSVPNavText,
        signOut: SignOutText,
        signIn: SignInText,
        manageRsvp: ManageRSVPText,
        
    <RouterNavLink
        to="/registry"
        className="nav-link"
        role="button"
    >
        <RegistryNavText />
    </RouterNavLink>
    <RouterNavLink
        to="/rsvp"
        className="nav-link"
        role="button"
    >
        <RSVPNavText />
    </RouterNavLink>*/

    console.log(selectLanguage)
    return (
        <Navbar
            variant="dark"
            expand="lg"
            sticky="top"
            className={styles.navigation}
        >
            <RouterNavLink
                to="/"
                className={classNames("navbar-brand", styles.brand)}
            >
                A & E
            </RouterNavLink>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <RouterNavLink
                        to="/schedule"
                        className="nav-link"
                        role="button"
                    >
                        <ScheduleNavText />
                    </RouterNavLink>
                    <RouterNavLink
                        to="/travel"
                        className="nav-link"
                        role="button"
                    >
                        <TravelNavText />
                    </RouterNavLink>
                    <RouterNavLink
                        to="/things-to-do"
                        className="nav-link"
                        role="button"
                    >
                        <ThingsToDoNavText />
                    </RouterNavLink>
                    <RouterNavLink to="/faq" className="nav-link" role="button">
                        <FAQNavText />
                    </RouterNavLink>
                </Nav>
                <Nav className="ml-auto">
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>
                            <ReactCountryFlag
                                countryCode={
                                    languageCodes[selectLanguage(cookies)]
                                }
                                svg
                            />{" "}
                            {selectLanguage(cookies)}
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight>
                            <Dropdown.Item
                                eventKey={LANGUAGE.ES}
                                onSelect={handleSelectLanguage}
                            >
                                <ReactCountryFlag countryCode="ES" svg />{" "}
                                {LANGUAGE.ES}
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey={LANGUAGE.EN}
                                onSelect={handleSelectLanguage}
                            >
                                <ReactCountryFlag countryCode="US" svg />{" "}
                                {LANGUAGE.EN}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation)
