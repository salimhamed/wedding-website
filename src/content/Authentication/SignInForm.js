import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
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
        Header: () => <>Per favor, inicieu la sessió</>,
        SubmitButton: () => <>Inicia sessió</>,
        SubmitButtonLoading: () => <>Iniciant sessió...</>,
        NoAccountPrompt: () => (
            <>
                No teniu compte?{" "}
                <Link to="/auth/signup">Registreu-vos aquí.</Link>
            </>
        ),
        emailPlaceholder: "Email",
        passwordPlaceholder: "Contrasenya",
    },
}
