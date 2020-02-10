import React from "react"
import {Link} from "react-router-dom"

import {LANGUAGE} from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        EmailConfirmationAlert: () => (
            <>
                Check your email for a link to confirm your account. You must
                confirm your account before logging in.
            </>
        ),
        Header: () => <>Please Sign In</>,
        SubmitButton: () => <>Sign In</>,
        SubmitButtonLoading: () => <>Signing In...</>,
        NoAccountPrompt: () => (
            <>
                Don't have an account?{" "}
                <Link to="/auth/signup">Sign up here.</Link>
            </>
        ),
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
    },
    [LANGUAGE.CAT]: {
        EmailConfirmationAlert: () => (
            <>
                Aneu al vostre email i comproveu si hi ha un enllaç per confirmar el vostre compte. Cal que
                confirmeu el compte abans d’iniciar la sessió.
            </>
        ),
        Header: () => <>Per favor, inicieu la sessió</>,
        SubmitButton: () => <>Inicia sessió</>,
        SubmitButtonLoading: () => <>Iniciant sessió...</>,
        NoAccountPrompt: () => (
            <>
                No teniu compte?{" "}
                <Link to="/auth/signup">Registre-vos aquí.</Link>
            </>
        ),
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
    },
}
