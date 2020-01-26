import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Welcome Drinks</>,
            Date: () => <>Friday, June 12, 2020</>,
            Time: () => <>8:00 PM to 10:00 PM</>,
            Location: () => <>Fairmont San Francisco</>,
            Address: () => (
                <>
                    <p>950 Mason Street</p>
                    <p>San Francisco, CA 94108</p>
                </>
            ),
            mapLink: "https://www.google.com/maps?cid=932337608444387060",
            Details: () => (
                <>
                    There will be a few light bites in addition to cocktails.
                    Can’t wait to see you!
                </>
            ),
        },
    ],
    [LANGUAGE.CAT]: [
        {
            Title: () => <>Welcome Drinks</>,
            Date: () => <>Friday, June 12, 2020</>,
            Time: () => <>8:00 PM to 10:00 PM</>,
            Location: () => <>Fairmont San Francisco</>,
            Address: () => (
                <>
                    <p>950 Mason Street</p>
                    <p>San Francisco, CA 94108</p>
                </>
            ),
            mapLink: "https://www.google.com/maps?cid=932337608444387060",
            Details: () => (
                <>
                    There will be a few light bites in addition to cocktails.
                    Can’t wait to see you!
                </>
            ),
        },
    ],
}
