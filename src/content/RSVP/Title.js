import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>RSVP</>,
        SubHeadingAuthenticated: ({ user }) => (
            <span>
                Hi <strong>{user.name}</strong>! We can't wait to see you in
                Catalonia! Use the form below to manage your RSVP.
            </span>
        ),
        SubHeading: () => (
            <span>
                <Link to="/auth">Sign in</Link> to manage your RSVP. Don't have
                an account? <Link to="/auth/signup">Sign up</Link> now!
            </span>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>RSUP</>,
        SubHeadingAuthenticated: ({ user }) => (
            <span>
                Hola {user.name}! Quines ganes tenim de veure-us! Fes servir el
                següent formulari per confirmar-nos la vostra asistència.
            </span>
        ),
        SubHeading: () => (
            <span>
                <Link to="/auth">Inicieu la sessió</Link> per confirmar-nos la
                vostra asistència. No teniu un compte?
                <Link to="/auth/signup">Registreu-vos</Link>!
            </span>
        ),
    },
}
