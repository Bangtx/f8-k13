import {getData} from "./api.js";

const onMounted = async () => {
    const jobs = await getData('jobs')
    console.log(jobs)
    const members = await getData('members')
    console.log(members)

    const data = await Promise.all([
        getData('jobs'), getData('members')
    ])
    console.log(data)
}

onMounted()