import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                We're getting married in a region called{" "}
                <strong>Terres de l'Ebre</strong>. Here's info on how to get
                there and where to stay.
            </>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                Com arribo a aquesta preciosa regió de Catalunya anomenada les
                Terres de l'Ebre?
            </>
        ),
    },
}
