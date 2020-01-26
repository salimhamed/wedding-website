import { default as appReducers } from "./app"

export default (state, action) => ({
    ...appReducers(state, action),
})
