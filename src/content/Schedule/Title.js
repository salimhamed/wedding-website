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
                Aquest és el plan durant el nostre cap de setmana de
                noces. Quines ganes tenim de celebrar-ho amb vosaltres!
            </span>
        ),
    },
}
