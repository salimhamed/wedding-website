import React from "react"

import { LANGUAGE } from "actions/constants"

const hashtag = "lledoisalim"

export default {
    [LANGUAGE.EN]: {
        title: () => <span>Salim and Lledó are getting married!</span>,
        date: () => <span>August 22, 2020</span>,
        location: () => <span>L'Ampolla, Catalonia</span>,
        hashtag,
    },
    [LANGUAGE.CAT]: {
        title: () => (
            <span>(Catalan) Salim and Lledó are getting married!</span>
        ),
        date: () => <span>(Catalan)August 22, 2020</span>,
        location: () => <span>(Catalan)L'Ampolla, Catalonia</span>,
        hashtag,
    },
}
