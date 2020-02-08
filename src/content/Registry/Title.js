import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Registry</>,
        SubHeading: () => (
            <span>
                Your presence is more than enough and we're not expecting any
                gifts. But, if you wish to contribute to our married life, come
                back soon to see our registry.
            </span>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>Registre</>,
        SubHeading: () => (
            <span>
                Your presence is more than enough and we're not expecting any
                gifts. But, if you wish to contribute to our married life, come
                back soon to see our registry.
            </span>
        ),
    },
}
