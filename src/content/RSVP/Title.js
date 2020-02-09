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
        Heading: () => <>RSVP</>,
        SubHeadingAuthenticated: ({ user }) => (
            <span>
                Hi {user.name}! We can't wait to see you! Use the form below to
                manager your RSVP.
            </span>
        ),
        SubHeading: () => <span>Sign up to manage your RSVP.</span>,
    },
}
