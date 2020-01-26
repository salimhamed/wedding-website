import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            question: () => <>Are kids invited?</>,
            answer: () => <>Yeaaaaaaahhhhh. Let us party our faces off.</>,
        },
        {
            question: () => <>Is there a shuttle?</>,
            answer: () => (
                <>Yes, because we want you to be able to party your face off</>
            ),
        },
    ],
    [LANGUAGE.CAT]: [
        {
            question: () => <>Are kids invited?</>,
            answer: () => <>Yeaaaaaaahhhhh. Let us party our faces off.</>,
        },
        {
            question: () => <>Is there a shuttle?</>,
            answer: () => (
                <>Yes, because we want you to be able to party your face off</>
            ),
        },
    ],
}
