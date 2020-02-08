import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Things to Do</>,
        SubHeading: () => (
            <>
                We’re so excited to share a few of our favorite places in the
                area with you.
            </>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>Things to Do</>,
        SubHeading: () => (
            <>
                Aquí teniu algunes idees de què fer per les Terres de l'Ebre.
            </>
        ),
    },
}
