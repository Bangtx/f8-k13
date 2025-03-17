const companyA = [
    {id: 1, name: 'Minh', age: 25},
    {id: 2, name: 'An', age: 30},
    {id: 3, name: 'Bình', age: 28},
    {id: 4, name: 'Dũng', age: 25}
]

const companyB = [
    {id: 5, name: 'Bình', age: 32},
    {id: 6, name: 'Chi', age: 28},
    {id: 7, name: 'An', age: 29},
    {id: 8, name: 'Dũng', age: 25}
]
/*
*   {
*       'Minh': {id: 1, name: 'Minh', age: 25},
*       'An': {id: 2, name: 'An', age: 30}
*   }
* */

// name is unique
// const memberA = []
// companyA.forEach(function (cpn) {
//     memberA.push(cpn.name)
// })
const memberA = companyA.map(function (cpn) {
    return `${cpn.name}-${cpn.age}`
})
console.log(memberA)

companyB.forEach(function (cpn) {
    // check cpn.name in memberA or not
    if (memberA.includes(`${cpn.name}-${cpn.age}`)) {
        console.log(cpn.name)
    }
})


// const a = [1, 3, 4]
// console.log(a.find(function (e) {
//     return e === 0
// }))









