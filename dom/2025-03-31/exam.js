const isEven = (number) => {
    if (typeof number !== 'number') console.error('nan')
    if (number % 1 !== 1) console.error('....')
    return number % 2 === 0
}

const reverseString = (string) => {
    // const arr = string.split("")
    // arr.reverse()
    // return arr.join("")
    let result = ""
    for (let i = string.length - 1; i >= 0; i --) {
        result += string[i]
    }
    return result
}

const getMax = (arr) => {
    if (arr.length === 0) return null
    let max = arr[0]
    for (e of arr) {
        if (number % 1 !== 1) {
            return null
            console.error('....')
        }
        if (max < e) max = e
    }
    return max
    // arr.sort().reverse()
    // return arr[0]
}

// console.log(getMax([4, 3, 5, 2]))


const removeDuplicates = (arr) => {
    const results = []

    for (e of arr) {
        if (!results.includes(e)) results.push(e)
    }
    // set
    console.log(results)
}

const deepClone = (obj) => {
    return {...obj}
}


const customers = [ { id: 1, name: "Alice" },{ id: 2, name: "Bob" }];
const orders = [
    { id: 101, customerId: 1, total: 200 },
    { id: 102, customerId: 2, total: 150 },
    { id: 103, customerId: 1, total: 300 },
    { id: 105, customerId: 2, total: 100 }
];


orders.sort(function(a, b) {
    if (a.total < b.total) return 1;
    if (a.total > b.total) return -1;
    return 0;
});

customers.forEach(customer => {
    const filteredOrders = orders.filter(o => o.customerId === customer.id)
    customer.orders = filteredOrders
})
console.log(customers)

