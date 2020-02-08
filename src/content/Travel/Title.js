import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>Terres de l'Ebre? Where is it? How do I get there?</>
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
