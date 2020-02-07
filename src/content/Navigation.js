import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        schedule: () => <span>Schedule</span>,
        travel: () => <span>Travel</span>,
        thingsToDo: () => <span>Things to Do</span>,
        faq: () => <span>FAQs</span>,
    },
    [LANGUAGE.CAT]: {
        schedule: () => <span>El Plan</span>,
        travel: () => <span>Com Arribar</span>,
        thingsToDo: () => <span>Què Fer</span>,
        faq: () => <span>Preguntes</span>,
    },
}
