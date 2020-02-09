import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Questions?</>,
        SubHeading: () => (
            <>
                If you have any other questions other than what we’ve listed
                here, please reach out to hola@lledoisalim.com.
            </>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>Preguntes?</>,
        SubHeading: () => (
            <>
                Si teniu alguna pregunta, si us plau, escriviu-nos a
                hola@lledoisalim.com.
            </>
        ),
    },
}
