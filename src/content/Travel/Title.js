import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                We're getting married in a region called{" "}
                <strong>Panajachel</strong>, one of the most popular place in
                Lake Atitlán. Here's info on how to get
                there and where to stay. There are bus to go there;
                however, if you want to enjoy the area, we recommend to go by
                own car or rent one.
            </>
        ),
    },
    [LANGUAGE.ES]: {
        Heading: () => <>Como llegar!</>,
        SubHeading: () => (
            <>
                Nos casaremos en una región llamada Panajachel, uno de los lugares más
                populares en el lago Atitlán.
                Aquí hay un poco de información y si tu quieres disfrutar el área, te recomendamos
                ir en vehículo propio o rentado.
            </>
        ),
    },
}
