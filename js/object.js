/*
* object trong js
* array la object
* java: object, python: dict
* dung de chua du lieu tap chung (co ve giong array)
* */

const myArr = [1, 2, 3]
const myObj = {
    name: "Giang",
    age: 26,
    address: "f8",
    level: "f9",
    action: {
        id: 1,
        name: "action",
        go() {
            console.log(`di hoc di ${this.name} oi`)
        },
        payment() {
            console.log(`tra tien di ${myObj.name} oi`)
        }
    }
}
/*
* java: Map
* python: dict
* name, age, address, level la cac keys (chia khoa)
* Giang 26 f8 f9 la value (gia tri)
* */
// myObj.action.go()
// myObj.action.payment()

// console.log(myObj, myArr)
// console.log(myObj.name, myArr[0])

// let a = {
//     id: 1,
//     name: "a",
//     info: {
//         fb: "abc"
//     }
// }
// let b = JSON.parse(JSON.stringify(a))
// b.info.fb = "b"
// console.log(a)


const colors = [
    {
        id: 1,
        name: "red"
    },
    {
        id: 2,
        name: "blue"
    },
    {
        id: 3,
        name: "green"
    },
    {
        id: 4,
        name: "yellow"
    },
    {
        id: 5,
        name: "white"
    }
]

const flowers = [
    {
        id: 1,
        name: "rose",
        colorId: 1
    },
    {
        id: 2,
        name: "sunflower",
        colorId: 4
    },
    {
        id: 3,
        name: "lavender",
        colorId: 3
    }
]

// rose -- red
// sunflower -- yellow
// lavender -- green
let fIdx, cIdx, count = 0
const colorObj = {}
for (cIdx = 0; cIdx < colors.length; cIdx++) {
    colorObj[colors[cIdx].id] = colors[cIdx].name
    count ++
}
console.log(colorObj)

for (fIdx = 0; fIdx < flowers.length; fIdx++) {
    const colorId = flowers[fIdx].colorId
    console.log(flowers[fIdx].name, colorObj[colorId])
}
// console.log(count)













