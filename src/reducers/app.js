import set from "lodash/fp/set"
import flow from "lodash/fp/flow"
import get from "lodash/get"

import { APP } from "actions/constants"

export default (state, action) => ({
    [APP.SET.LANGUAGE]: set(["app", "language"], action.payload, state),
    [APP.SET.USER]: flow(
        set(["app", "user", "username"], get(action, ["payload", "username"])),
        set(["app", "user", "email"], get(action, ["payload", "email"])),
        set(["app", "user", "name"], get(action, ["payload", "name"]))
    )(state),
    [APP.SET.USER_ERROR]: set(["app", "user", "error"], action.payload, state),
})
