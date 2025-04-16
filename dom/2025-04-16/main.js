import api from './api.js'
import {isLogin} from './common.js'

const emailE = document.querySelector('input[type="email"]')
const passwordE = document.querySelector('input[type="password"]')
const btnLoginE = document.querySelector('button[type="button"]')

const onLogin = async (email, password) => {
    const response = await api.postData('login', {email, password})
    // save 2 token to localstorage
    localStorage.setItem('access', response.access)
    localStorage.setItem('refresh', response.refresh)
    window.location.href = 'home.html'
}

btnLoginE.addEventListener('click', () => {
    onLogin(emailE.value, passwordE.value)
})

const onMounted = () => {
    if (isLogin()) window.location.href = 'home.html'
}

onMounted()
// https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/
// https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/