import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Reg 1</>,
        },
        {
            Title: () => <>Reg 2</>,
        },
    ],
    [LANGUAGE.CAT]: [
        {
            Title: () => <>Rega 1</>,
        },
        {
            Title: () => <>Rega 2</>,
        },
    ],
}
