import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Questions?</>,
        SubHeading: () => (
            <>
                If you have any other questions other than what we’ve listed
                here, please reach out to{" "}
                <a href="mailto:edwardandrea.aculux@gmail.com">edwardandrea.aculux@gmail.com</a>.
            </>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>Preguntas?</>,
        SubHeading: () => (
            <>
                Si tienes otra pregunta puedes también escribirnos a{" "}
                <a href="mailto:edwardandrea.aculux@gmail.com">edwardandrea.aculux@gmail.com</a>.
            </>
        ),
    },
}
