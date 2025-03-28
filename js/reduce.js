const array = [11, 22, 33, 44, 54]

/*
array.forEach((e, i) => {
    console.log(e, i)
})
*/

const val = array.reduce((a, b, c) => {
    console.log(a, b, c)
    return a + b
}, 1000)
console.log(val)
/*
vong lap chay 3 lan
o vong lap dau tien nhan 2 gia tri dau tien
vong lap dau tien:
    a = array[0]
    b = array[1]
cac vong lap sau
    a = ????
    b = lap trung phan tu

->
    a = ???,
    b chay tu a[1] den het
    array phai toi thieu 2 phan tu


             [11, 22, 33, 44, 54]
             ───┬───
 a = 11─────────┘ ──┬───
 b = 22             │ ──┬───
 return a + b       │   │ ──┬───
                    │   │   │
    a = 33 ◄────────┘   ▼   └──► a = 110
    b = 33           a = 66      b = 54
   return a+b        b = 44      return a+b
                     return a+b


      1000    [11, 22, 33, 44, 54]
      ───────┬───  ───┬──  ───┬──
  a = 1000◄──┘ ──┬─── │──┬─── │     a = 1110
  b = 11         │    │  │    └────►b = 54
  return a +     │    │  │          val = 1164
                 │    │  │
     a = 1011    │    ▼  └──────► a = 1066
     b = 22  ◄───┘    a = 1033    b = 44
    return a+b        b = 33      return a+b
                      return a+b

*/

const arr = [
    ['id', 1],
    ['name', 'Dung'],
    ['age', 30]
]
/*
{ id: 1, name: 'Dung', age: 30 }

  {} [['id', 1], ['name', 'Dung'], ['age': 30]]
  ──────┬──────  ────────────────┬─────────────
     ───┼─────────┬──────────────┤ a = { id: 1, name: Dung}
        │         │              └►b = ['age', 30]
        ▼         │                key = b[0] = 'age'
a = {}            │                value = b[1] = 30
b = ['id', 1]     │                a[key] = value
key = b[0] = 'id' │                return a ──────┐
value = b[1] = 1  └► a = {id: 1}                  │
a[key] = value       b = ['name', 'dung']         ▼
return a             key = b[0] = 'name'      {
                     value = b[1] = 'Dung'      id: 1,
                     a[key] = value             name: 'Dung',
                     return a                   age:30
                                              }

*/

const result = arr.reduce((a, b) => {
    // const key = b[0]
    // const value = b[1]
    const [key, value] = b
    a[key] = value
    return a
}, {})

/*
js: javascript
lap trinh huong doi tuong (oop)
ts: typescript -> C / Java
--> OOP ngon
*/































