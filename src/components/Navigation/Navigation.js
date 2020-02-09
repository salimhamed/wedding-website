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
import { signOut } from "actions"
import { Store } from "store"
import { navigation } from "content"

import styles from "./Navigation.module.scss"

function Navigation({ history }) {
    const [cookies, setCookie] = useCookies(["language"])
    const { state, dispatch } = useContext(Store)

    const {
        app: {
            user: { name, isAuthenticated, email },
        },
    } = state

    const handleSelectLanguage = lang =>
        setCookie("language", lang, { path: "/" })

    const handleSignOut = () => signOut(dispatch)

    const languageCodes = {
        [LANGUAGE.CAT]: "ES-CT",
        [LANGUAGE.EN]: "US",
    }

    const {
        schedule: ScheduleNavText,
        travel: TravelNavText,
        thingsToDo: ThingsToDoNavText,
        faq: FAQNavText,
        registry: RegistryNavText,
        rsvp: RSVPNavText,
        signOut: SignOutText,
        signIn: SignInText,
        manageRsvp: ManageRSVPText,
    } = navigation[selectLanguage(cookies)]

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
                S & L
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
                    </RouterNavLink>
                </Nav>
                <Nav className="ml-auto">
                    {isAuthenticated ? (
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>
                                {name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight>
                                <Dropdown.Item className={styles.email}>
                                    <strong>{email}</strong>
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={handleSignOut}>
                                    <SignOutText />
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onSelect={() => history.push("/rsvp")}
                                >
                                    <ManageRSVPText />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <RouterNavLink
                            to="/auth"
                            className="nav-link"
                            role="button"
                        >
                            <SignInText />
                        </RouterNavLink>
                    )}
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
                                eventKey={LANGUAGE.EN}
                                onSelect={handleSelectLanguage}
                            >
                                <ReactCountryFlag countryCode="US" svg />{" "}
                                {LANGUAGE.EN}
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey={LANGUAGE.CAT}
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

export default withRouter(Navigation)
