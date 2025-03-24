const a = {
    id: 1,
    name: 'phone',
    price: 100,
    store: null
}

// const price = a.price
// let price = a.remaining
// if (!price) price = 0

// undefined, null, unknown, false, 0

const defaultRemaining = null
const defaultStore = {
    id: 1, name: 'fake'
}

// const remaining = a.remaining ?? defaultRemaining ?? 1000
// const store = a?.store ? (a?.store?.name ? a?.store?.name: null) : defaultStore.name
// const remaining = null ? 1000 : 100
// console.log(remaining)

// console.log(store)

const arr = [
    [[0, 0, 0],   [255, 0, 0], [0, 0, 0]],
    [[255, 0, 0], [255, 0, 0], [0, 0, 0]],
    [[0, 0, 0],   [255, 0, 0], [0, 0, 0]]
]
console.log(arr)

// rgb (do, xang la,  xanh duong) 0 -> 255