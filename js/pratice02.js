
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const customers = Array.from({ length: 3000 }, (_, i) => ({
    id: i + 1,
    name: `customer ${i + 1}`
}));

// Generate orders
const orders = Array.from({ length: 1000000 }, (_, i) => ({
    id: i + 1,
    customer_id: getRandomInt(1, 300000),
    productName: `productName ${i + 1}`
}));

const sortedOrder = orders.sort((a, b) => a.customer_id - b.customer_id);
/*
* orders = [
*   {id: 1, productName: 'productName 1', customer: {id: 1, name: 'customer 1'}},
*   .....
* ]
* */

console.time('doSomething')

let oIdx = 0
let cIdx = 0
// merge join
while (cIdx < customers.length && oIdx < orders.length) {
    if (customers[cIdx].id === orders[oIdx].customer_id) {
        orders[oIdx].customer = customers[cIdx]
        oIdx += 1
    }
    else if (customers[cIdx].id > orders[oIdx].customer_id) {
        cIdx += 1
    }
    else {
        oIdx += 1
    }
}
// hashtable / hashjoin / hashmap
// const customerObj = {}
// customers.forEach((customer) => {
//     customerObj[customer.id] = customer
// })
//
// sortedOrder.forEach((order) => {
//     order.customer = customerObj[order.customer_id]
// })


// nestloop
// orders.forEach((order) => {
//     customers.forEach((customer) => {
//         if (customer.id === order.customer_id) {
//             order.customer = customer
//         }
//     })
// })

console.timeEnd('doSomething')