import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Registry</>,
        SubHeading: () => (
            <span>
                Your presence is more than enough and we're not expecting any
                gifts. But, if you wish to contribute to our married life come
                back soon to see our registry.
            </span>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>Registre</>,
        SubHeading: () => (
            <span>
                La vostra asistència és més que suficient i no esperem cap regal.
                Però, si voleu contribuir a la nostra vida de casats aviat
                penjarem la nostra llista de noces.
            </span>
        ),
    },
}
