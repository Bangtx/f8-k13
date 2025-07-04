const products = [
    {
        "id": 101,
        "name": "Laptop",
        "price": 1200,
        "quantity": 2
    },
    {
        "id": 102,
        "name": "Phone",
        "price": 800,
        "quantity": 1
    },
    {
        "id": 101,
        "name": "Laptop",
        "price": 1200,
        "quantity": 1
    }
]
const groupProducts = (products) => {
    const proObj = {}
    for (const pro of products) {
        if (proObj[pro.id] !== undefined) {
            proObj[pro.id].quantity += pro.quantity
        } else {
            proObj[pro.id] = pro
        }

        // proObj[pro.id] = proObj[pro.id].quantity + pro.quantity
    }
    return Object.values(proObj)
}