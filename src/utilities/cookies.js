import get from "lodash/get"

import { LANGUAGE } from "actions/constants"

export const selectLanguage = cookies => get(cookies, "language", LANGUAGE.EN)
