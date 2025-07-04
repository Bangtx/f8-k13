const api = {
    baseUrl: 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com',
    async getNewToken(callback) {
        // invoke to /login/get_new_token/ with POST method
        const data = await this.postData('login/get_new_token/', {
            'refresh': localStorage.getItem('refresh')
        })
        // save token
        localStorage.setItem('access', data.access)
        // call api again
        await callback()
    },
    async getData (endpoint) {
        try {
            const response = await fetch(
                `${this.baseUrl}/${endpoint}`, {
                    headers: {
                        ...this.toHeader(),
                        'Authorization': `Bearer ${localStorage.getItem('access')}`
                    },
                }
            )
            // console.log(response.json())
            const result = await response.json()
            if (result.detail === 'token expired') {
                await this.getNewToken(() => this.getData(endpoint))
            }
            return result
        } catch (e) {
            console.log('vao day dio em')
        }
    },
    async postData (endpoint, body) {
        console.error(this.toBody(body))
        try {
            const response = await fetch(
                `${this.baseUrl}/${endpoint}/`, {
                    method: 'post',
                    headers: this.toHeader(),
                    body: this.toBody(body)
                }
            )
            const result = await response.json()
            if (result.detail === 'token expired') {
                await this.getNewToken(() => this.postData(endpoint, body))
            }
            return result
        } catch (e) {
            console.error(e)
        }
    },
    async putData (endpoint, body) {
        try {
            const response = await fetch(
                `${this.baseUrl}/${endpoint}`, {
                    method: 'put',
                    headers: this.toHeader(),
                    body: this.toBody(body)
                }
            )
            return await response.json()
        } catch (e) {
            console.error(e)
        }
    },
    toBody: (body) => {
        return JSON.stringify(body)
    },
    toHeader() {
        return {
            'Content-Type': 'application/json'
        }
    }
}

export default api