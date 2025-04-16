const getA = () => {
    return new Promise((resolve, reject) => {
        return resolve(1)
    })
}

const getB = () => {
    return new Promise((resolve, reject) => {
        return resolve(2)
    })
}



const onMount = async () => {
    Promise.all([getA(), getB()]).then(data => {
        console.log(data)
    })
    // const a = getA()
    // const b = getB()
    // console.log(a, b)
}

onMount()

