// copy
// const a = { id: 1, name: "Dung" }
// let b = a

// shadow copy
// b.name = 'Dung Du Con'
/*
function setId(variable, value) {
    variable.id = value
}
function setName(variable, value) {
    variable.name = value
}

setName(b, 'Trung Du Con')
setId(b, 1234)
console.log(a, b)
*/

// const variable = b
// variable.name = 'Trung Du Con'
// b = variable


// deep copy

// const b = JSON.parse(JSON.stringify(a)) // "{id:1,name:'Dung'}"
// const b = {...a}
// b.id = a.id
// b.name = a.name
// Object.keys(a).forEach((key) => {
//     b[key] = a[key]
// })
// b.name = 'Dung Fe'
// console.log(a, b)
/*
const info = {
    id: 1,
    fullName: 'Do Viet Dung',
    lastName: 'Do',
    firstName: 'Dung',
    age: 20,
    strongPoint: 'Fe',
    bestFriend: {
        id: 2,
        fullName: 'Phan Ngoc Son',
        lastName: 'Phan',
        firstName: 'Son',
        age: 21,
        strongPoint: 'BE',
    },
    girlFriend: null
}
const keys = ['id', 'fullName', 'bestFriend']
const pickupValue = {}
keys.forEach(key => {
    if (typeof info[key] === 'object') pickupValue[key] = { ...info[key] }
    else pickupValue[key] = info[key]
})
console.log(pickupValue)
*/

// array
const a = [1, 2, 3]
const b = [...a]
b[0] = 100
console.log(a, b)























