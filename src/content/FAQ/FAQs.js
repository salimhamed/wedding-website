import React from "react"

import {LANGUAGE} from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Question: () => <>Is Chicago coming?</>,
            Answer: () => <>O-B-V-I-O-U-S-L-Y.</>,
        },
        {
            Question: () => <>Is there a bus to and from the wedding site?</>,
            Answer: () => (
                <>Yes, because we want you to be able to party your face off.
                    There will be buses from Tortosa and L'Ampolla to Les Moles.
                    Schedule will be posted soon.</>
            ),
        },
        {
            Question: () => <>What languages do the guests speak?</>,
            Answer: () => (
                <>Half of the people speak Catalan and Spanish (some of them also know English).
                    There will be people visiting from Lebanon that speak Arabic and English.
                    Guests from the States speak English and maybe other languages.
                    Communication goes beyond language, so we're sure everyone is going to have a blast regardless!</>
            ),
        },
        {
            Question: () => <>What is the dress code?</>,
            Answer: () => (
                <>The wedding will be formal. We recommend long or elegant cocktail dresses for ladies and suits for
                    gents. No jeans please. For the Pica-pica party casual attire is preferred.</>
            ),
        },
        {
            Question: () => <>What is the weather like?</>,
            Answer: () => (
                <>The weather during this time of year is usually a sunny and in the 80s during the day and 70s at night
                    (ºF).</>
            ),
        },
    ],
    [LANGUAGE.CAT]: [
        {
            Question: () => <>Chicago ve?</>,
            Answer: () => <>Pos claro!</>,
        },
        {
            Question: () => <>Hi ha autobús que ens porti i ens reculli del lloc del casament?</>,
            Answer: () => (
                <>Sí, perquè volem que ho pugueu donar tot!
                    Hi haurà autobusos des de Tortosa i l’Ampolla fins a Les Moles.
                    Publicarem els horaris aviat.</>
            ),
        },
        {
            Question: () => <>Quins idiomes parlen els convidats?</>,
            Answer: () => (
                <>La meitat de la gent parla català i castellà (alguns també saben anglès).
                    Hi haurà gent que ens visita des del Líban i parlen àrab i anglès.
                    Els convidats dels Estats Units parlen anglès i potser altres idiomes.
                    La comunicació va més enllà de la llengua, així que estem segurs que ens ho pasarem tots molt bé!</>
                    ),
                    },
        {
            Question: () => <>Quina es la vestimenta recomanada?</>,
            Answer: () => (
            <>Recomanem vestits de còctel llargs o elegants per a dones i "traje" per als homes.
                Per al Pica-pica vestits informals.</>
            ),
        },
        {
            Question: () => <>Quin temps ga?</>,
            Answer: () => (
            <>Pos sol i caloreta! Durant el dia les temperatures poden arribar als 30 ºC (20 llargs segur).
                Per la nit refresca una mica (20 i pocs).</>
            ),
        },
        ],
    }
