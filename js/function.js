function sum (a, b) {
    return a + b
}
const square = (a) => {
    return a ** 2
}

// lambda function
// const sum = (a, b) => a + b
// const test = a => a + 1

// const a = test(1)
// console.log(square(square((square(2)))))

const test = (cb) => {
    cb()
}

setTimeout(() => {
    console.log('run')
})

const onClick = () => {
    console.log('on click')
}

// onClick()
// 3s
// di hoc
// 1s
// tot nghiep
// di lam
// 5s
// ve nha
/*
setTimeout(() => {
    console.log('di hoc')
    callback()
}, 3000)

const callback = () => setTimeout(() => {
    console.log('tot nghie hoc')
    totNghiep()
}, 3000)

const totNghiep = () => setTimeout(() => {
    console.log('di l;am')
}, 1000)
*/

let count = 0

setInterval(() => {
    count ++
    console.log(count)
}, 1000)







































