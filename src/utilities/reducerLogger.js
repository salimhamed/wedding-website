const logger = reducer => {
    return (state, action) => {
        const nextState = reducer(state, action)
        console.groupCollapsed(action.type)
        console.log(
            "%cPrevious State:",
            "color: #9E9E9E; font-weight: 700;",
            state
        )
        console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action)
        console.log(
            "%cNext State:",
            "color: #47B04B; font-weight: 700;",
            nextState
        )
        console.groupEnd()
        return nextState
    }
}

export default logger
