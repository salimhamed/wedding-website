import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            type: () => <>Flight</>,
            title: () => <>BCN</>,
            address: null,
            phone: null,
            details: () => (
                <>
                    <p>
                        This is the best place to fly into. You could go to
                        Oakland or San Jose if it is easier for you to get
                        there.
                    </p>
                </>
            ),
            link: null,
        },
        {
            type: () => <>Lodging for Wedding</>,
            title: () => <>Fairmont San Francisco</>,
            address: (
                <>
                    <p>950 Mason Street</p>
                    <p>San Francisco, CA 94108</p>
                </>
            ),
            phone: <>(415) 772-5000</>,
            details: () => (
                <>
                    <p>
                        This is where we’ll be having our rehearsal dinner and
                        welcome drinks. And it’s not far from our ceremony,
                        either.
                    </p>
                </>
            ),
            link: "https://www.fairmont.com/san-francisco",
        },
    ],
    [LANGUAGE.CAT]: [
        {
            type: () => <>Flight</>,
            title: () => <>BCN</>,
            address: null,
            phone: null,
            details: () => (
                <>
                    <p>
                        This is the best place to fly into. You could go to
                        Oakland or San Jose if it is easier for you to get
                        there.
                    </p>
                </>
            ),
            link: null,
        },
        {
            type: () => <>Lodging for Wedding</>,
            title: () => <>Fairmont San Francisco</>,
            address: (
                <>
                    <p>950 Mason Street</p>
                    <p>San Francisco, CA 94108</p>
                </>
            ),
            phone: <>(415) 772-5000</>,
            details: () => (
                <>
                    <p>
                        This is where we’ll be having our rehearsal dinner and
                        welcome drinks. And it’s not far from our ceremony,
                        either.
                    </p>
                </>
            ),
            link: "https://www.fairmont.com/san-francisco",
        },
    ],
}
