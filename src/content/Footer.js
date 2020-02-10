import React from "react"
import Emoji from "react-emoji-render"
import Octicon, { MarkGithub } from "@primer/octicons-react"

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
                    <Emoji text="Made with 💚 in Seattle by Salim and Lledó." />
                </p>
                <p>
                    <a
                        href="https://github.com/salimhamed/wedding-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source code
                    </a>{" "}
                    available on <Octicon icon={MarkGithub} size={11} />
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
                    <Emoji text="Fet amb 💚 des de Seattle per Salim i Lledó." />
                </p>
                <p>
                    <a
                        href="https://github.com/salimhamed/wedding-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Codi font
                    </a>{" "}
                    disponible a <Octicon icon={MarkGithub} size={11} />
                </p>
            </>
        ),
    },
}
