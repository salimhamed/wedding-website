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
}
