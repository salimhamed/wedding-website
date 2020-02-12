import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                We're getting married in a region called{" "}
                <strong>Terres de l'Ebre</strong>. Here's info on how to get
                there and where to stay. There are bus and train options;
                however, if you want to enjoy the area, we recommend to
                rent a car.
            </>
        ),
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>Com arribar</>,
        SubHeading: () => (
            <>
                Com arribo a aquesta preciosa regió de Catalunya anomenada les
                Terres de l'Ebre? Es pot arribar amb autobús i tren, tot i que,
                recomanem venir amb cotxe si voleu explorar la zona.
            </>
        ),
    },
}
