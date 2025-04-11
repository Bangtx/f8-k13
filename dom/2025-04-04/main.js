const [x, y] = [10, 20]

const sum = (a, b) => a + b

const minus = (a, b) => a - b

const times = (a, b) => a * b

const divide = (a, b) => a / b

const factory = {
    sum, minus, times, divide
}

const onClick = (action) => {
    console.log(factory[action](x, y))
}

const input = (event) => {
    console.log('input')
}

const keydown = (event) => {
    console.log('keydoan')
}

const fac = {
    input: input, keydown: keydown
}

const inp = document.querySelector('input')

Object.keys(fac).forEach((key) => {
    console.log(key)
    inp.addEventListener(key, fac[key])
})
