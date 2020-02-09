import React from "react"

import {LANGUAGE} from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Things to Do</>,
        SubHeading: () => (
            <>
                We’re so excited to share a few of our favorite places in the area with you. If you wish to explore
                them, we recommend renting a car from Barcelona's airport.
            </>
        ),
        link: "https://terresdelebre.travel/en",
    },
    [LANGUAGE.CAT]: {
        Heading: () => <>Què fer</>,
        SubHeading: () => (
            <>Aquí teniu algunes idees de què fer per les Terres de l'Ebre.</>
        ),
        link: "https://terresdelebre.travel",
    },
}
