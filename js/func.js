/*
* function tenHam (tham so) {
*   code
* }
*
* goi ham (call/invoke)
* */


// vien ham f(x) = 2x + 1
// vien ham f(x) = x^2 + 2x + 1


// function myFunc (x) {
//
//     function test(y) {
//         return `ok ${y} nhi`
//     }
//
//     // return x ** 2 + 2 * x + 1
//     return test
// }
//
// var v = myFunc("hang")("giangf")
// console.log(v)

// function isEvenNum(x) {
//     return x % 2 === 0
// }
//
//
// console.log(isEvenNum(90))


// function sort (myArr) {
//     return sortedArr
// }

/*
* bien toan cuc / cuc bo
* toan cuc: co the truy xuat boi bat ki dau
* cuc bo: chi trong noi bo ham / doi tuong / lop
*
* function co the khai bao trong function khac
* co the dc truyen vao duoi dang tham so (callback)
*
* function co the tra ve gia tri (return) hoac ko
* co the goi den chinh no (de quy)
* */

/*
* var ten-bien
* let / const
* */

// var a
// let b
//
// test()

// const myFunc = function test(myParam) {
//     myParam()
// }
//
// // this is callback function
// const myFun2 = function fun(myParam) {
//     console.log('my fun 2')
//     myParam()
// }
//
// // this is callback function
// const myFun3 = function fun() {
//     console.log('my fun 3')
// }


// function sum(a, b) {
//     let c = a + b
//     console.log(c)
//     sum(c, 10)
// }
//
// sum(1, 5)


const a = [11, 8, 7, 9, 0, 1]
// --> [0, 1, 7, 8]

for (let j = 0; j < a.length; j++) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
            const tmp = a[i]
            a[i] = a[i + 1]
            a[i + 1] = tmp
        }
    }
}

console.log(a)
















