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
                    <a href="edwardandrea.aculux@gmail.com">
                        edwardandrea.aculux@gmail.com
                    </a>
                    .
                </p>
                <p>
                    <Emoji text="Made with 💚 in Guatemala by Edu and Andre." />
                </p>
                <p>
                    <a
                        href="https://github.com/acuedd/wedding-website"
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
                    Contáctanos a{" "}
                    <a href="mailto:edwardandrea.aculux@gmail.com">
                        edwardandrea.aculux@gmail.com
                    </a>
                    .
                </p>
                <p>
                    <Emoji text="Hecho con 💚 desde Guatemala por Edu y Andre." />
                </p>
                <p>
                    <a
                        href="https://github.com/acuedd/wedding-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Código fuente
                    </a>{" "}
                    disponible en <Octicon icon={MarkGithub} size={11} />
                </p>
            </>
        ),
    },
}
