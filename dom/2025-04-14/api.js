const baseUrl = 'http://localhost:3000'

const getData = async (endpoint) => {
    // endpoint = 'jobs' -> http://localhost:3000/jopbs
    const response = await fetch(`${baseUrl}/${endpoint}`)
    return await response.json()
}

const postData = async (endpoint, payload) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'post',
        body: JSON.stringify(payload)
    })
    return await response.json()
}


export {
    getData,
    postData
}