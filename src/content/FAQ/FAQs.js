import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Question: () => <>Are kids invited?</>,
            Answer: () => <>Yeaaaaaaahhhhh. Let us party our faces off.</>,
        },
        {
            Question: () => <>Is there a shuttle?</>,
            Answer: () => (
                <>Yes, because we want you to be able to party your face off</>
            ),
        },
    ],
    [LANGUAGE.CAT]: [
        {
            Question: () => <>Are kids invited?</>,
            Answer: () => <>Yeaaaaaaahhhhh. Let us party our faces off.</>,
        },
        {
            Question: () => <>Is there a shuttle?</>,
            Answer: () => (
                <>Yes, because we want you to be able to party your face off</>
            ),
        },
    ],
}
