import React from "react"

import combineReducers from "reducers"
import { LANGUAGE } from "actions/constants"

export const Store = React.createContext({})

const initialState = {
    app: {
        language: LANGUAGE.EN,
        user: {
            username: null,
            email: null,
            name: null,
            loading: false,
            error: null,
        },
    },
}

const reducer = (state, action) => combineReducers(state, action)[action.type]

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    )
}
