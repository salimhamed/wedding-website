import React from "react"

import combineReducers from "reducers"
import reducerLogger from "utilities/reducerLogger"

export const Store = React.createContext({})

const initialState = {
    app: {
        user: {
            username: null,
            email: null,
            name: null,
            error: null,
            isAuthenticated: false,
        },
        rsvp: {
            allowed: null,
            confirmed: null,
        },
    },
}

let reducer = (state, action) => combineReducers(state, action)[action.type]

if (process.env.NODE_ENV === "development") {
    reducer = reducerLogger(reducer)
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    )
}
