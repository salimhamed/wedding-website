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
        travel: () => <span>¿Cómo llegar?</span>,
        thingsToDo: () => <span>¿Qué hacer?</span>,
        faq: () => <span>Preguntas</span>,
        registry: () => <span>Registro</span>,
        rsvp: () => <span>Reservación</span>,
        signOut: () => <span>Cerrar sesión</span>,
        signIn: () => <span>Iniciar Sessión</span>,
        manageRsvp: () => <span>Gestiona reservar</span>,
    },
}
