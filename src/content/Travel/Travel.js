import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Type: () => <>Flight</>,
            Title: () => <>BCN</>,
            Address: null,
            Phone: null,
            Details: () => (
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
            Type: () => <>Lodging for Wedding</>,
            Title: () => <>Fairmont San Francisco</>,
            Address: () => (
                <>
                    <p>950 Mason Street</p>
                    <p>San Francisco, CA 94108</p>
                </>
            ),
            Phone: () => <>(415) 772-5000</>,
            Details: () => (
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
            Type: () => <>Flight</>,
            Title: () => <>BCN</>,
            Address: () => (
                <>
                    <p>950 Mason Street</p>
                    <p>San Francisco, CA 94108</p>
                </>
            ),
            Phone: null,
            Details: () => (
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
            Type: () => <>Lodging for Wedding</>,
            Title: () => <>Fairmont San Francisco</>,
            Address: () => (
                <>
                    <p>950 Mason Street</p>
                    <p>San Francisco, CA 94108</p>
                </>
            ),
            Phone: () => <>(415) 772-5000</>,
            Details: () => (
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
