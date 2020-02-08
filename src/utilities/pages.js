export const getPublicURL = pathname => {
    const { href } = new URL(pathname, process.env.REACT_APP_PUBLIC_URL)
    return href
}
