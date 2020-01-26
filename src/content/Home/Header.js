import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: () => <span>We&apos;re getting married!</span>,
    [LANGUAGE.CAT]: () => <span>Ens casem!</span>,
}
