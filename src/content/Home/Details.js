import React from "react"

import { LANGUAGE } from "actions/constants"

const hashtag = "lledoisalim"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Salim and Lledó are getting married!</span>,
        Date: () => <span>08/08/2020</span>,
        Location: () => <span>Terres de l&apos;Ebre, Catalonia</span>,
        hashtag,
    },
    [LANGUAGE.CAT]: {
        Title: () => <span>El Salim i la Lledó es casen!</span>,
        Date: () => <span>08/08/2020</span>,
        Location: () => <span>Terres de l&apos;Ebre, Catalunya</span>,
        hashtag,
    },
}
