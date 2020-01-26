import React from "react"

import { LANGUAGE } from "actions/constants"

const HeaderEN = () => <span>We&apos;re getting married!</span>

const HeaderCat = () => <span>Ens casem!</span>

export default {
    [LANGUAGE.EN]: HeaderEN,
    [LANGUAGE.CAT]: HeaderCat,
}
