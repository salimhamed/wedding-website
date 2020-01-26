import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        heading: () => <>Travel</>,
        subHeading: () => (
            <>Some travel recommendations for our out-of-town guests.</>
        ),
    },
    [LANGUAGE.CAT]: {
        heading: () => <>Travel</>,
        subHeading: () => (
            <>Some travel recommendations for our out-of-town guests.</>
        ),
    },
}
