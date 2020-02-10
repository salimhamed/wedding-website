import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        schedule: () => <span>Schedule</span>,
        travel: () => <span>Travel</span>,
        thingsToDo: () => <span>Things to Do</span>,
        faq: () => <span>FAQs</span>,
        registry: () => <span>Registry</span>,
        rsvp: () => <span>RSVP</span>,
        signOut: () => <span>Sign Out</span>,
        signIn: () => <span>Sign In</span>,
        manageRsvp: () => <span>Manage RSVP</span>,
    },
    [LANGUAGE.CAT]: {
        schedule: () => <span>El Plan</span>,
        travel: () => <span>Com Arribar</span>,
        thingsToDo: () => <span>Què Fer</span>,
        faq: () => <span>Preguntes</span>,
        registry: () => <span>Registre</span>,
        rsvp: () => <span>RSUP</span>,
        signOut: () => <span>Registra't</span>,
        signIn: () => <span>Inicia Sessió</span>,
        manageRsvp: () => <span>Gestiona RSUP</span>,
    },
}
