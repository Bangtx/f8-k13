/*
OOP: huong doi tuong
class: Lop
attribute: thuoc tinh
property
method: method phuong thuc
*/

const dungObj = {
    id: 12323123,
    name: 'Dung Du Con',
    age: 30,
    speaking: function() {
        console.log(`${this.name} noi gau`)
    },
    eating: function() {
        console.log('nam nam')
    },
    bestFriend: {
        id: 121231,
        name: 'Chu Thanh Huyen',
        age: 25,
        speaking: function() {
            console.log(`${this.name} noi dung oi`)
        },
        eating: function() {
            console.log('nam nam')
        },
    }
}

// dung.speaking()
// dung.bestFriend.speaking()
// const luc = dung

class Person {
    id = null
    name = null
    speaking() {
        console.log(`${this.name} noi gau`)
    }
    eating() {
        console.log('nam nam')
    }
}

const dung = new Person()
dung.id = 1
dung.name = 'Dung du con'
dung.speaking()

const huyen = new Person()
huyen.id = 1
huyen.name = 'huyen'
huyen.speaking()





















