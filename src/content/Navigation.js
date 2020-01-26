import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        home: () => <span>Home</span>,
        schedule: () => <span>Schedule</span>,
        travel: () => <span>Travel</span>,
        thingsToDo: () => <span>Things to Do</span>,
        faq: () => <span>FAQs</span>,
    },
    [LANGUAGE.CAT]: {
        home: () => <span>Inici</span>,
        schedule: () => <span>Schedule</span>,
        travel: () => <span>Travel</span>,
        thingsToDo: () => <span>Things to Do</span>,
        faq: () => <span>FAQs</span>,
    },
}
