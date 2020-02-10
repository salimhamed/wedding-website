import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Header: () => <>Please Sign Up</>,
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        EmailHelp: () => (
            <>
                Register with the same email address that received the email
                invitation.
            </>
        ),
        passwordPlaceholder: "Password",
        SubmitButton: () => <>Sign Up</>,
        SubmitButtonLoading: () => <>Signing Up...</>,
        HaveAccountPrompt: () => (
            <>
                Already have an account? <Link to="/auth">Sign in here.</Link>
            </>
        ),
    },
    [LANGUAGE.CAT]: {
        Header: () => <>Per favor, registreu-vos</>,
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        EmailHelp: () => (
            <>
                Registreu-vos amb el mateix email on heu rebut la invitació.
            </>
        ),
        passwordPlaceholder: "Password",
        SubmitButton: () => <>Registreu-vos</>,
        SubmitButtonLoading: () => <>Registrant-vos...</>,
        HaveAccountPrompt: () => (
            <>
                Ja teniu un compte? <Link to="/auth">Inicieu la sessió aquí.</Link>
            </>
        ),
    },
}
