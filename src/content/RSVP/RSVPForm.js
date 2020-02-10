import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        AlertNoEmail: () => (
            <>
                Whoops, it looks like we don't have your email address. Email us
                at{" "}
                <strong>
                    <a href="mailto:hola@lledoisalim.com">
                        hola@lledoisalim.com
                    </a>
                </strong>{" "}
                so we can update our records.
            </>
        ),
        submitButtonText: "Submit RSVP",
        updateButtonText: "Update RSVP",
        yesLabel: "Yes",
        noLabel: "No",
        lampollaLabel: "L'Ampolla",
        tortosaLabel: "Tortosa",
        otherLabel: "Other",
        otherLabelExtra: "Reach out if you need help arranging transportation",
        WeddingFormHeader: () => <>Wedding</>,
        NumberOfGuestsLabel: () => <>Number of guests attending</>,
        zeroLabel: "Can't Attend",
        NumberOfGuestsHelp: () => (
            <>
                The number of guests in your party (including yourself) that
                will be in attendance.
            </>
        ),
        TransportationLabel: () => (
            <>Would you like bus transportation to/from the venue?</>
        ),
        TransportationHelp: () => (
            <>
                We'll be providing bus transportation to/from the venue. Let us
                know if you want to reserve spots for your group!
            </>
        ),
        OriginLabel: () => <>Where is your origin?</>,
        OriginHelp: () => (
            <>
                We're only planning on having bus transportation from L'Ampolla
                and Tortosa. Reach out if you need help arranging transportation
                from other locations.
            </>
        ),
        SongsLabel: () => <>Song requests</>,
        SongsHelp: () => (
            <>Let us know which songs will keep you partying all night!</>
        ),
        DinnerFormHeader: () => <>Welcome &ldquo;Pica-pica&ldquo;</>,
        DinnerGuestsLabel: () => <>Number of guests attending</>,
        DinnerGuestsHelp: () => (
            <>
                The number of guests (including yourself) that will be in
                attendance.
            </>
        ),
        AlertRSVPUpdated: () => <>Thanks for your RSVP!</>,
    },
    [LANGUAGE.CAT]: {
        AlertNoEmail: () => (
            <>
                Uups, sembla que no tenim el vostre email. Envieu-nos un email a{" "}
                <strong>
                    <a href="mailto:hola@lledoisalim.com">
                        hola@lledoisalim.com
                    </a>
                </strong>{" "}
                i actualitzarem el nostre registre.
            </>
        ),
        submitButtonText: "Envia RSUP",
        updateButtonText: "Actualitza RSUP",
        yesLabel: "Sí",
        noLabel: "No",
        lampollaLabel: "L'Ampolla",
        tortosaLabel: "Tortosa",
        otherLabel: "Altres",
        otherLabelExtra: "Feu-nos saber si necessiteu ajuda trobant transport.",
        WeddingFormHeader: () => <>Casament</>,
        NumberOfGuestsLabel: () => <>Número de convidats</>,
        zeroLabel: "No podem venir",
        NumberOfGuestsHelp: () => (
            <>Número de convidats (incloen-te a tu) que vindran.</>
        ),
        TransportationLabel: () => (
            <>Necessiteu transport a/de el lloc del casament?</>
        ),
        TransportationHelp: () => (
            <>
                Hi haurà autobús a/de el lloc del casament. Digueu-nos si
                nececessiteu reservar seients per al vostre grup!
            </>
        ),
        OriginLabel: () => <>Des d'on?</>,
        OriginHelp: () => (
            <>
                Només hi haurà autobús des de L'Ampolla i Tortosa. Feu-nos saber
                si necessiteu ajuda trobant transport.
            </>
        ),
        SongsLabel: () => <>Voleu demanar una cançó?</>,
        SongsHelp: () => (
            <>
                Feu-nos saber quines cançons us mantindran de festa tota la nit!
            </>
        ),
        DinnerFormHeader: () => <>Pica-pica de Benvinguda</>,
        DinnerGuestsLabel: () => <>Número de convidats</>,
        DinnerGuestsHelp: () => (
            <>Número de convidats (incloen-te a tu) que vindran.</>
        ),
        AlertRSVPUpdated: () => <>Gràcies pel vostre RSUP!</>,
    },
}
