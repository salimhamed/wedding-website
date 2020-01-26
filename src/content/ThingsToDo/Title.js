import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        heading: () => <>Things to Do</>,
        subHeading: () => (
            <>
                We’re so excited to share a few of our favorite places in the
                area with you.
            </>
        ),
    },
    [LANGUAGE.CAT]: {
        heading: () => <>Things to Do</>,
        subHeading: () => (
            <>
                We’re so excited to share a few of our favorite places in the
                area with you.
            </>
        ),
    },
}
