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
        zeroLabel: "0 - Can't Attend",
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
        zeroLabel: "0 - Can't Attend",
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
}
