import React from "react"
import Emoji from "react-emoji-render"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Content: () => (
            <>
                <p>
                    <Emoji text="Made with 💚 in Seattle by Salim and Lledó." />
                </p>
                <p>
                    Contact us at{" "}
                    <a href="mailto:hola@lledoisalim">hola@lledoisalim</a>
                </p>
            </>
        ),
    },
    [LANGUAGE.CAT]: {
        Content: () => (
            <>
                <p>
                    <Emoji text="Fet amb 💚 des de Seattle per Salim i Lledó." />
                </p>
                <p>
                    Contact us at{" "}
                    <a href="mailto:hola@lledoisalim">hola@lledoisalim</a>
                </p>
            </>
        ),
    },
}
