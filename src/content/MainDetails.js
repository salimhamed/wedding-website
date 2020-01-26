import React from "react"

import { LANGUAGE } from "actions/constants"

const hashtag = "lledoisalim"

export default {
    [LANGUAGE.EN]: {
        title: () => <span>Salim and Lledó are getting married!</span>,
        date: () => <span>08/08/2020</span>,
        location: () => <span>Terres de l&apos;Ebre, Catalonia</span>,
        hashtag,
    },
    [LANGUAGE.CAT]: {
        title: () => (
            <span>El Salim i la Lledó es casen!</span>
        ),
        date: () => <span>08/08/2020</span>,
        location: () => <span>Terres de l&apos;Ebre, Catalunya</span>,
        hashtag,
    },
}
