import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>How We Met?</>,
        SubHeading: () => (
            <>
                Andrea y Edward
            </>
        )
    },
    [LANGUAGE.ES]: {
        Heading: () => <>¿Cómo nos conocimos?</>,
        SubHeading: () => (
            <>
                Andrea y Edward
            </>
        )
    }
}