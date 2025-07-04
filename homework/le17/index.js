/*
*
  ┌───────────────────────────────────────────────┐
  │ for customer in customers                     │
  │   │                                           │
  │   └─► products = getProductsByCustomerId(id)  │
  │       orders = getOrdersByCustomerId( id )    │
  │       totalAmount = getTotalAmount(orders)    │
  └───────────────────────────────────────────────┘

* getProductsByCustomerId
*  for order in orders
   │
   └─►for customer in customers
      │
      └─► orders  = []
                                           yes
          customer.id === order.customerId────────►order.push (order)
* */

const customers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie Green", email: "charlie@example.com" },
];

const products = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Phone", price: 800 },
    { id: 103, name: "Tablet", price: 500 },
    { id: 104, name: "Smartwatch", price: 300 },
    { id: 105, name: "Headphones", price: 150 },
];

const orders = [
    { id: 1001, customerId: 1, items: [{ productId: 101, quantity: 2 }, { productId: 102, quantity: 1 }] },
    { id: 1002, customerId: 2, items: [{ productId: 102, quantity: 1 }, { productId: 103, quantity: 3 }] },
    { id: 1003, customerId: 3, items: [{ productId: 104, quantity: 5 }, { productId: 105, quantity: 2 }] },
    { id: 1004, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 103, quantity: 2 }] },
    { id: 1005, customerId: 5, items: [{ productId: 105, quantity: 10 }] },
    { id: 1006, customerId: 1, items: [{ productId: 101, quantity: 1 }, { productId: 105, quantity: 3 }] },
    { id: 1007, customerId: 2, items: [{ productId: 104, quantity: 2 }, { productId: 103, quantity: 1 }] },
    { id: 1008, customerId: 3, items: [{ productId: 102, quantity: 2 }] },
    { id: 1009, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 102, quantity: 1 }] },
    { id: 1010, customerId: 5, items: [{ productId: 103, quantity: 4 }, { productId: 104, quantity: 3 }] },
];
// add orders = [] into customer
for (customer of customers) {
    customer.orders = []
    customer.products = []
}

for (const order of orders) {
    for (customer of customers) {
        if (order.customerId === customer.id) {
            customer.orders.push(order)
        }
    }
}

/*
* [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "orders": [
      {
        "id": 1001,
        "customerId": 1,
        "items": [
          {
            "productId": 101,
            "quantity": 2
          },
          {
            "productId": 102,
            "quantity": 1
          }
        ]
      }
    ]
  },
  ......
]
* */

const getProductById = (id) => {
    return products.find(product=> product.id === id)
}

const groupProducts = (products) => {
    const proObj = {}
    for (const pro of products) {
        if (proObj[pro.id]) {
            proObj[pro.id].quantity += pro.quantity
        } else {
            proObj[pro.id] = pro
        }

        // proObj[pro.id] = proObj[pro.id].quantity + pro.quantity
    }
    return Object.values(proObj)
}

for (const customer of customers) {
    for (const order of customer.orders) {
        for (const item of order.items) {
            const product = {...getProductById(item.productId), quantity: item.quantity}
            customer.products.push(product)
        }
    }
    customer.products = groupProducts(customer.products)
    customer.totalAmount = 0
    for (const product of customer.products) {
        product.totalAmount = product.quantity * product.price
        customer.totalAmount += product.totalAmount
    }

}

console.log(customers)

