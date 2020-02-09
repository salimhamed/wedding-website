import { APP } from "./constants"
import {
    signUpWithCognito,
    signInWithCognito,
    signOutWithCognito,
    resendConfirmationEmailWithCognito,
} from "services"

export const switchLanguage = (language, dispatch) => {
    dispatch({
        type: APP.SET.LANGUAGE,
        payload: language,
    })
}

export const initializeApp = async () => console.log()

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

        history.push("/")
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
