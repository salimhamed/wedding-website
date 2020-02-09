import get from "lodash/get"

import {
    signUpWithCognito,
    signInWithCognito,
    signOutWithCognito,
    currentAuthenticatedUserWithCognito,
    resendConfirmationEmailWithCognito,
    getItemFromDynamo,
    putItemToDynamo,
} from "services"

import { APP } from "./constants"

export const switchLanguage = (language, dispatch) => {
    dispatch({
        type: APP.SET.LANGUAGE,
        payload: language,
    })
}

export const initializeApp = async dispatch => {
    const CognitoUser = await currentAuthenticatedUserWithCognito()

    if (CognitoUser) {
        const {
            attributes: { sub: username, name, email },
        } = CognitoUser

        dispatch({
            type: APP.SET.INITIALIZE_USER,
            payload: {
                username,
                name,
                email,
            },
        })
    }
}

export const signUp = async (
    { name, email, password },
    setSubmitting,
    setStatus,
    history,
    dispatch
) => {
    try {
        const { userSub: username } = await signUpWithCognito({
            username: email,
            password,
            attributes: {
                email,
                name,
            },
        })

        dispatch({
            type: APP.SET.USER_SIGN_UP,
            payload: {
                username,
                name,
                email,
            },
        })

        history.push("/auth")
    } catch (error) {
        const { message } = error
        setStatus(message)
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: message,
        })
    }

    setSubmitting(false)
}

export const signIn = async (
    { email: providedEmail, password },
    setSubmitting,
    setStatus,
    history,
    dispatch
) => {
    try {
        const CognitoUser = await signInWithCognito(providedEmail, password)

        const {
            attributes: { sub: username, name, email },
        } = CognitoUser

        dispatch({
            type: APP.SET.USER_SIGN_IN,
            payload: {
                username,
                name,
                email,
            },
        })
    } catch (error) {
        const { code } = error
        let { message } = error

        if (code === "UserNotConfirmedException") {
            resendConfirmationEmailWithCognito(providedEmail)
            message =
                "You haven't confirmed your email. We just sent you an email with a link to confirm your account"
        }

        setStatus(message)
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: message,
        })
    }
    setSubmitting(false)
}

export const signOut = async dispatch => {
    try {
        await signOutWithCognito()
        dispatch({
            type: APP.SET.USER_SIGN_OUT,
        })
    } catch (error) {
        const { message } = error
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: message,
        })
    }
}

export const fetchUserRSVPInformation = async (email, dispatch) => {
    try {
        const { Item } = await getItemFromDynamo({
            Email: email,
            Domain: "RSVP",
        })

        const rsvpData = get(Item, ["Allowed"], null)

        dispatch({
            type: APP.SET.RSVP_ALLOWED,
            payload: rsvpData,
        })
    } catch (error) {
        console.error(error.message)
    }
}

export const putUserRSVPInformation = async (
    { email, weddingGuests, rehearsalGuests },
    setSubmitting,
    setStatus,
    dispatch
) => {
    try {
        await putItemToDynamo({
            Email: email,
            Domain: "RSVP",
            Confirmed: {
                Rehearsal: {
                    ConfirmedGuests: rehearsalGuests,
                },
                Wedding: {
                    ConfirmedGuests: weddingGuests,
                },
            },
        })
        fetchUserRSVPInformation(email, dispatch)
    } catch (error) {
        const { message } = error
        setStatus(message)
    }
    setSubmitting(false)
}
