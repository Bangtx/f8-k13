/*
* for / while
* */
// let numbers = [1, 4, 3 ,2]
// let numbers = [1, 2, 3]

// for (let i = 0; i < a.length; i ++) {
//     console.log(a[i])
// }


// numbers.forEach(function (number) {
//     console.log(number)
// })

// for (let number of numbers) {
//     console.log(number)
// }

// for (let student of students) {
//     if (student.id >= 2) filteredStudents.push(student)
// }

// filteredStudents = students.filter(function (student) {
//     return false
// })

/*
*  student = { id: 2, name: 'Dung' } -> 0x02
* filteredStudents = [0x02, 0x03]
* */
// console.log(filteredStudents)

// ids = [1, 2, 3, 4]
// filteredIds = ids.filter(function (id) {
//     return id > 2
// })
// filteredIds[0] = 5
// console.log(ids)
// console.log(filteredIds)
// const a = { id: 2, name: 'Dung' }
// const b = [a]
// b[0].name = '13'
// console.log(a)

/*
* filter lay nhieu gia tri
* gia tri tra ve luon array
*
* neu minh chac chan chi lay 1 gia tri find
* */

students = [
    {
        id: 1, name: 'Trung'
    },
    {
        id: 3, name: 'Luc'
    },
    {
        id: 2, name: 'Dung'
    }
]

filteredStudents = students.filter(function (student) {
    student.id = student.id + 1
    return true
    // if (student.id === 3) return student
})
//
// filteredStudent = students.find(function (student) {
//     return student.id === -2
// })
console.log(filteredStudents)
filteredStudents[0].name = 'huy'
console.log(students)













