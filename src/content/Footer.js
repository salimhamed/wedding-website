import React from "react"
import Emoji from "react-emoji-render"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Content: () => (
            <>
                <p>
                    Contact us at{" "}
                    <a href="mailto:hola@lledoisalim.com">
                        hola@lledoisalim.com
                    </a>
                    .
                </p>
                <p>
                    <Emoji text="Made with 💚 in Seattle by Salim and Lledó" />
                </p>
            </>
        ),
    },
    [LANGUAGE.CAT]: {
        Content: () => (
            <>
                <p>
                    Contacteu-nos a{" "}
                    <a href="mailto:hola@lledoisalim.com">
                        hola@lledoisalim.com
                    </a>
                    .
                </p>
                <p>
                    <Emoji text="Fet amb 💚 des de Seattle per Salim i Lledó" />
                </p>
            </>
        ),
    },
}
