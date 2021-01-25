import React from "react"

import { LANGUAGE } from "actions/constants"

const hashtag = "lledoisalim"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Salim and Lledó are getting married!</span>,
        Date: () => (
            <div className="d-flex flex-column">
                <div>
                    <span style={{ textDecoration: "line-through" }}>
                        06/19/2021
                    </span>
                </div>
                <div>Love is patient...</div>
            </div>
        ),
        Location: () => <span>Terres de l&apos;Ebre, Catalonia</span>,
        locationLink: "https://goo.gl/maps/93vJLAEHGgZwUvET9",
        hashtag,
    },
    [LANGUAGE.CAT]: {
        Title: () => <span>El Salim i la Lledó es casen!</span>,
        Date: () => (
            <div className="d-flex flex-column">
                <div>
                    <span style={{ textDecoration: "line-through" }}>
                        19/06/2021
                    </span>
                </div>
                <div>L'amor és pacient...</div>
            </div>
        ),
        Location: () => <span>Terres de l&apos;Ebre, Catalunya</span>,
        locationLink: "https://goo.gl/maps/93vJLAEHGgZwUvET9",
        hashtag,
    },
}
