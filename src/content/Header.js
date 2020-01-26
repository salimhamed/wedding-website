import React from "react"

import { LANGUAGE } from "actions/constants"

const HeaderEN = () => <h1>We&apos;re getting married!</h1>

const HeaderCat = () => <h1>Ens casem!</h1>

export default {
    [LANGUAGE.EN]: HeaderEN,
    [LANGUAGE.CAT]: HeaderCat,
}
