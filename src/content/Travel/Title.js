import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>Some travel recommendations for our out-of-town guests.</>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>Some travel recommendations for our out-of-town guests.</>
        ),
    },
}
