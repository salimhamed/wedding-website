import Auth from "@aws-amplify/auth"

export const signUpWithCognito = params => Auth.signUp(params)

export const signInWithCognito = (username, password) =>
    Auth.signIn(username, password)

export const signOutWithCognito = () => Auth.signOut()

export const currentAuthenticatedUserWithCognito = async () => {
    let CognitoUser

    try {
        CognitoUser = await Auth.currentAuthenticatedUser()
    } catch (e) {
        // sign out will clear all existing cognito keys from localStorage
        await signOutWithCognito()
        CognitoUser = null
    }

    return CognitoUser
}
