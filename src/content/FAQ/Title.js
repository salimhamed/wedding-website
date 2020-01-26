import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        heading: () => <>FAQs</>,
        subHeading: () => (
            <>
                If you have any other questions other than what we’ve listed
                here, please reach out to our wedding planner, Annie, at
                555-555-5555.
            </>
        ),
    },
    [LANGUAGE.CAT]: {
        heading: () => <>FAQs</>,
        subHeading: () => (
            <>
                If you have any other questions other than what we’ve listed
                here, please reach out to our wedding planner, Annie, at
                555-555-5555.
            </>
        ),
    },
}
