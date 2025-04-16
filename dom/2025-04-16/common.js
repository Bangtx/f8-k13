export const isLogin = () => {
    // if (!Boolean(localStorage.getItem('access'))) return false
    // return isValidToken()

    return  Boolean(localStorage.getItem('access'))
}

const isValidToken = () => {
    // gettoken
    const accessToken = localStorage.getItem('access')
    // decode token
    let payload = accessToken.split('.')[1]
    payload = JSON.parse(atob(payload))
    const {exp} = payload

    const curTimestamp = Math.floor(Date.now() / 1000);

    return exp > curTimestamp
}