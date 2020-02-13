import set from "lodash/fp/set"
import flow from "lodash/fp/flow"
import get from "lodash/get"

import { APP } from "actions/constants"

export default (state, action) => ({
    [APP.SET.LANGUAGE]: set(["app", "language"], action.payload, state),
    [APP.SET.INITIALIZE_USER]: flow(
        set(["app", "user", "username"], get(action, ["payload", "username"])),
        set(["app", "user", "email"], get(action, ["payload", "email"])),
        set(["app", "user", "name"], get(action, ["payload", "name"])),
        set(["app", "user", "isAuthenticated"], true)
    )(state),
    [APP.SET.USER_SIGN_IN]: flow(
        set(["app", "user", "username"], get(action, ["payload", "username"])),
        set(["app", "user", "email"], get(action, ["payload", "email"])),
        set(["app", "user", "name"], get(action, ["payload", "name"])),
        set(["app", "user", "isAuthenticated"], true)
    )(state),
    [APP.SET.USER_SIGN_OUT]: flow(
        set(["app", "user", "username"], null),
        set(["app", "user", "email"], null),
        set(["app", "user", "name"], null),
        set(["app", "user", "isAuthenticated"], false)
    )(state),
    [APP.SET.USER_ERROR]: set(["app", "user", "error"], action.payload, state),
    [APP.SET.RSVP]: flow(
        set(["app", "rsvp", "allowed"], get(action, ["payload", "allowed"])),
        set(["app", "rsvp", "confirmed"], get(action, ["payload", "confirmed"]))
    )(state),
})
