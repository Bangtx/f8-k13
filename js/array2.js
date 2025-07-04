const members = [
    { id: 1, name: 'Dung' },
    { id: 2, name: 'Trung' },
    { id: 3, name: 'Giang' },
    { id: 4, name: 'Vuong' },
    { id: 5, name: 'Trung' },
]

const searchId = 4
// find the name of the record with id is 4
const member = members.find(member => member.id === searchId)
// find the index of the record with id is 4
const memberIdx = members.findIndex(member => {
    return member.id === searchId
})
// find the last index of the record with name is Trung
const lastIdx = members.findLastIndex(member => member.name === 'Trung')
// console.log(lastIdx)

const arr2D = [
    [1, 2, 3],
    [4, 5, 6]
]
// const arr = arr2D.flatMap(e => {
//     console.log(e)
//     return 1
// })
// console.log(arr)
// arr2D.pop()
// console.log(arr2D)


// const names = ['Do', 'Viet', 'Dung']
// console.log(Object.values(names))
// console.log(typeof names)

// const a = {}
// console.log(`a = ${a}`, typeof a) // ''
























