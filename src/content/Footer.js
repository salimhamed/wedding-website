import React from "react"
import Emoji from "react-emoji-render"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Content: () => (
            <Emoji text="Made with 💚 in Seattle by Salim and Lledó." />
        ),
    },
    [LANGUAGE.CAT]: {
        Content: () => (
            <Emoji text="Fet amb 💚 a Seattle, Salim i Lledó." />
        ),
    },
}
