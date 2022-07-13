import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Schedule</>,
        SubHeading: () => (
            <span>
                Here's what to expect during our wedding weekend. We can't wait
                to celebrate with you!
            </span>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>El Plan</>,
        SubHeading: () => (
            <span>
                Este es el plan que esperamos durante nuestro fin de semana para nuestra boda.
                No podemos esperar para celebrar contigo!
            </span>
        ),
    },
}
