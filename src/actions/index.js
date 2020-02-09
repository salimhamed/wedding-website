import { APP } from "./constants"
import { signUpWithCognito, signInWithCognito } from "services"

export const switchLanguage = (language, dispatch) => {
    dispatch({
        type: APP.SET.LANGUAGE,
        payload: language,
    })
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
            type: APP.SET.USER,
            payload: {
                username,
                name,
                email,
            },
        })

        history.push("/auth/confirm")
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

export const confirmCode = async (
    { code },
    setSubmitting,
    setStatus,
    dispatch
) => {
    // const user = await signInWithCognito(email, password)
}
