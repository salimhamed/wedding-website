import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Things to Do</>,
        SubHeading: () => (
            <>
                We’re so excited to share a few of our favorite places in the
                area with you. If you wish to explore them, we recommend enjoy a magic place of Panajachel or travel to other
                magic town by boat in the lake. At dusk, if you are planning to
                be close to the water, we recommend to use mosquito repellent.
            </>
        ),
        link: "https://www.organizotuviaje.com/guatemala-por-libre/lago-atitlan-por-tu-cuenta/",
    },
    [LANGUAGE.ES]: {
        Heading: () => <>¿Qué hacer?</>,
        SubHeading: () => (
            <>
                Estamos emocionados de compartir contigo algunos de nuestros lugares favoritos en el área.
                Si tu deseas explorarlos, te recomendamos disfrutar el publito mágico de Panajachel or viajar
                hacia otro pueblito mágico por medio de lancha.
                Al anochecer, si planeas estar cerca del agua, te recomendamos usar repelente de mosquitos.
            </>
        ),
        link: "https://www.organizotuviaje.com/guatemala-por-libre/lago-atitlan-por-tu-cuenta/",
    },
}
