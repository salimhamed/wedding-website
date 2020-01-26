import set from "lodash/fp/set"

import { APP } from "actions/constants"

export default (state, action) => ({
    [APP.SET.LANGUAGE]: set(["app", "language"], action.payload, state),
})
