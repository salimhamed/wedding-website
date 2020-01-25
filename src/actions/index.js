import { APP } from "./constants"

export const switchLanguage = (language, dispatch) => {
    console.log({language, dispatch})
    dispatch({
        type: APP.SET.LANGUAGE,
        payload: language,
    })
}
