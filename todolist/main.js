import {getData, postData} from './api.js'
import {bindRows} from './utils.js'

const jobListE = document.querySelector('.job-list')
const inputE = document.querySelector('input')
const btnE = document.querySelector('#save-btn')

const onMounted = async () => {
    // get jobs from api
    const jobs = await getData('jobs')
    // bind data to dom
    bindRows(jobListE, jobs)
}

const onSave = () => {
    // get value from input tag
    const inputValue = inputE.value
    const body = {
        name: inputValue,
        id: 3 // temp id
    }
    console.log(1234)
    postData('jobs', body)
    onMounted()
}

btnE.addEventListener('click', onSave)
onMounted()