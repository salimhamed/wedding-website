import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        home: () => <span>Home</span>,
        schedule: () => <span>Home</span>,
        travel: () => <span>Home</span>,
        thingsToDo: () => <span>Home</span>,
        faq: () => <span>Home</span>,
    },
    [LANGUAGE.CAT]: {
        home: () => <span>Inici</span>,
        schedule: () => <span>Home</span>,
        travel: () => <span>Home</span>,
        thingsToDo: () => <span>Home</span>,
        faq: () => <span>Home</span>,
    },
}
