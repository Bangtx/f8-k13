// const myString = '  he hello anh em   '

// // upper case
// console.log(myString.toUpperCase())
// // ko viet hoa
// console.log(myString.toLowerCase())
//
// // check length
// console.log(myString.length)
//
// // console.log(myString.charCodeAt(0))
// console.log(myString.substring(-4))
// console.log(myString.slice(-4))
//
// // remove the space at first and last
// console.log(myString.trim())
//
// console.log(myString.trim().replace('he', 'helu'))
// console.log(myString.trim().replaceAll('he', 'helu'))

// const string = 'dung-25'
//
// console.log(string.split('-'))
//
// // const name = 'dung', age = 25
// // console.log(name, age)
// const [name, age, job] = ['dung', 25, 'it']
// // let [name, age] = string.split('-')
// // // name = 'test'
// console.log(name, age, job)
//
// console.log(myString.indexOf('hello'))


// let [name, setName] = ['dung', function (value) {
//     name = value
// }]
//
// setName('hihi')
// console.log(name)


// const employees = [
//     { id: 1, name: 'Dung', age: 20 },
//     { id: 1, name: 'Du', age: 21 },
//     { id: 1, name: 'Con', age: 20 }
// ]
//
// const searchStr = '20'
// const filteredEmployees = []
//
// employees.forEach(function (e) {
//     e.searchStr = `${e.id}|${e.name}|${e.age}`
// })
//
// console.log(employees)

// employees.filter(function (employee) {
//     if (employee.searchStr.includes(searchStr)) {
//         filteredEmployees.push(employee)
//     }
// })
// console.log(filteredEmployees)


/*
* array
* */

const myArr = [1, 2, 5, 4, 3]
// myArr.push(45) // add new into last
// myArr.pop() // remove last element
// myArr.shift() // xoa phan tu dau tien - remove first element
// myArr.unshift(-11) // chen phan tu dau tien - insert into frits element
// const spliceArr = myArr.splice(2, 3)
// console.log(spliceArr)
// console.log(myArr)

// sort
// const sortedArr = myArr.toSorted()
// console.log(myArr)
// console.log(sortedArr)

// const isGt5 = myArr.every(function (number) {
//     return number < 2
// })

// console.log(isGt5)


// const myObj = {
//     id: 1, name: 'Dung', age: 30
// }
//
// console.log(Object.keys(myObj))
// console.log(myObj['id'], myObj.id)
//
// Object.keys(myObj).forEach(function (key) {
//     console.log(key, myObj[key])
// })

// const myObj = new Object()
// myObj.id = 1
// console.log(myObj)


























