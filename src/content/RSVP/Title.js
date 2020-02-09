import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>RSVP</>,
        SubHeadingAuthenticated: () => (
            <span>
                Manage your RSVP below.
            </span>
        ),
        SubHeading: () => (
            <span>
                Sign in to manage your RSVP. Don't have an account? Click here to sign up!
            </span>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>RSVP</>,
        SubHeadingAuthenticated: () => (
            <span>
                Manage your RSVP below.
            </span>
        ),
        SubHeading: () => (
            <span>
                Sign up to manage your RSVP.
            </span>
        ),
    },
}
