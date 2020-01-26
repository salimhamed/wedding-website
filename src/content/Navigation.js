import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        home: () => <span>Home</span>,
    },
    [LANGUAGE.CAT]: {
        home: () => <span>(Catalan) Home</span>,
    },
}
