import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        heading: () => <>Schedule</>,
        subHeading: () => (
            <span>
                Here's what to expect during our wedding weekend. There will
                also be a printout of this schedule available in your hotel
                rooms. We can't wait to celebrate with you!
            </span>
        ),
    },
    [LANGUAGE.CAT]: {
        heading: () => <>Schedule</>,
        subHeading: () => (
            <span>
                Here's what to expect during our wedding weekend. There will
                also be a printout of this schedule available in your hotel
                rooms. We can't wait to celebrate with you!
            </span>
        ),
    },
}
