// day la comment
/*
* Bien - variable
* luu tru tam thoi 1 gia tri nao do
* luu tren ram
*
* js co x kieu du lieu
* number
* string
* boolean bool
* null
* object
* bigint
* symbol
* undefined
*
* Toan tu - operator
*  + - * / luu thua (**) % ++ --
*
* phan biet a++ & ++a
* */
var fullName = 'vu xuan giang'
var text = '<input value="duoc"/>'

// bool true false
/*
* true: 1
* false: 0
*
* phép hội (nhân / và)
* phép hội chỉ đúng khi 2 số cùng đúng
*
   phep va (hoi / nhan)
   x     y     x&y
   1     1      1
   1     0      0
   0     1      0
   0     0      0

* phép tuyển (cộng / hoặc)
   phep hoac (tuyen / cong)
   x     y     x|y
   1     1      1
   1     0      1
   0     1      1
   0     0      0
* */

var a = "30"
var b = Number(a)

/*
* dieu kien (condition)
* > < >= <= == === != !==
* */
// console.log(3 < 2 || 4 < 5 && 5 < 6)

// bai toan: cho 1 so cho trc a = x, kiem tra a la so chan hay le

/*
*
   khai bao a
     │
     ▼     = 0
   a % 2 ────────►  chan
     │
     │= 1
     │
     ▼
    le
* */
// console.log(3 !== 2)
//
// var a = 11
// if (a % 2 === 0) {
//     console.log('a la so chan')
// }
// else {
//     console.log('a la so le')
// }


// cho phuong trinh a * x^2 + bx + c = 0
// cho trc a, b, c
// tim x

/*
*
             khoi tao a, b, c
                   │
         <0        ▼             =0
 vo no ◄──── delta = b*b - 4*a*c ────► co nghiem kep
                   │                          -b
                   │ >0                   x = ──
                   ▼                          2a
             co 2 nghiem phan biet

                   -b - can(delta)
             x1 = ─────────────────
                         2a

                   -b + can(delta)
             x1 = ─────────────────
                         2a
* */
// var a = 1, b = -2, c = 1, x1, x2
// var delta = b*b - 4*a*c
//
// if (delta < 0) {
//     console.log('ptvn')
// }
// if (delta === 0) {
//     x1 = -b / (2 * a)
//     x2 = x1
//     console.log('pt co nghiem kep', x1)
// }
// if (delta > 0) {
//     x1 = (-b - delta ** 0.5) / (2 * a)
//     x2 = (-b + delta ** 0.5) / (2 * a)
//     console.log('2 ng pb', x1, x2)
// }

/*
*  luong
*
* */
// var a = 1
// console.log("2" === 2)


/*
*

                   khai bao so dien
                   x = 104
                      │
                      ▼     yes
                   x <= 50 ──────► s = 1.678 * x (vd x = 20 -> s = 1.678 * 20)
                      │
                      │no
                      ▼
                   s = 50 * 1.678   (vd x = 70 -> s = 50 * 1.678 )
                  x2 = x - 50       ( x = 70 -> x bac 2 = 20 )
                      │
                      │
                      ▼                 yes
                  x2 <= 50  (x <= 100) ──────► s = s + 1.734 * x2
                     │                         s = 50 * 1.678 + 20 * 1.734
                     │no
       x = 104       ▼
       x2 = 54   x3 = x2 - 50

* */

// var x = 104, s
// if (x <= 50) {
//     s = 1.678 * x
// }
// else {
//     s = 50 * 1.678
//     x = x - 50
//
//     if (x <= 50) {
//         s = s + 1.734 * x
//     }
//     else {
//         s = s + 50 * 1.734
//         x = x - 50
//     }
// }
//

/*
*
      grossSalary  =  xxx
           ▼
      salaryWithoutEsurance = grossSalary * 0.895
           ▼                        yes
      salaryWithoutEsurance <= 11m───────►netSalary =  salaryWithoutEsurance
           │
           │no
           ▼
      taxSalary  =  salaryWithoutEsurance - 11m
           │
           │
           ▼        yes
      taxSalary <=5──────►net = salaryWithoutEsurance - 0.05 * taxSalary
           │
           │no
           ▼
      ▼net = salaryWithoutEsurance - 0.05 * 5m
      taxSalary =  taxSalary - 5m

* */



































