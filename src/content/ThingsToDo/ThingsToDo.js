import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            title: () => <>Welcome Drinks</>,
            address: () => (
                <>
                    <p>Golden Gate Bridge</p>
                    <p>San Francisco, CA</p>
                </>
            ),
            details: () => (
                <>
                    <p>
                        We know this is cliché, but it’s a must see. A great
                        walk or bike ride for the rare day that it is sunny out.
                    </p>
                    <p>More text.</p>
                </>
            ),
            link:
                "https://www.google.com/maps/place/Golden+Gate+Bridge,+California/@37.8201012,-122.4807313,17z/data=!3m1!4b1!4m5!3m4!1s0x80858690719d9b63:0x4657f618df61a5c3!8m2!3d37.8201012!4d-122.4785426",
        },
    ],
    [LANGUAGE.CAT]: [
        {
            title: () => <>Welcome Drinks</>,
            address: () => (
                <>
                    <p>Golden Gate Bridge</p>
                    <p>San Francisco, CA</p>
                </>
            ),
            details: () => (
                <>
                    <p>
                        We know this is cliché, but it’s a must see. A great
                        walk or bike ride for the rare day that it is sunny out.
                    </p>
                    <p>More text.</p>
                </>
            ),
            link:
                "https://www.google.com/maps/place/Golden+Gate+Bridge,+California/@37.8201012,-122.4807313,17z/data=!3m1!4b1!4m5!3m4!1s0x80858690719d9b63:0x4657f618df61a5c3!8m2!3d37.8201012!4d-122.4785426",
        },
    ],
}
