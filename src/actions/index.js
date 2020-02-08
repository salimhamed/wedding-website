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
    dispatch
) => {
    try {
        await signUpWithCognito({
            username: email,
            password,
            attributes: {
                email,
                name,
            },
        })

        const user = await signInWithCognito(email, password)

        console.log(user.attributes)

        dispatch({
            type: APP.SET.USER,
            payload: {
                username: user.getUsername(),
                name: user.attributes.name,
                email: user.attributes.email,
            },
        })
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
