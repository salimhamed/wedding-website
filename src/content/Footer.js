import React from "react"
import Emoji from "react-emoji-render"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Content: () => <Emoji text="Made with 💚 in Seattle." />,
    },
    [LANGUAGE.CAT]: {
        Content: () => <Emoji text="Made with 💚 in Seattle." />,
    },
}
