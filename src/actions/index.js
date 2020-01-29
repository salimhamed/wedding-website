import { APP } from "./constants"
import { signUpWithCognito } from "services"

export const switchLanguage = (language, dispatch) => {
    dispatch({
        type: APP.SET.LANGUAGE,
        payload: language,
    })
}

export const signUp = async ({ name, email, password }, callback, dispatch) => {
    try {
        const { user } = await signUpWithCognito({
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
                username: user.getUsername(),
                name: user.attributes.name,
                email: user.attributes.email,
            },
        })
    } catch (error) {
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: error.message
        })
    }

    callback()
}
