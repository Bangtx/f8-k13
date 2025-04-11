import {test} from './common.js'

const sum = (a, b) => a + b
const minus = (a, b) => a - b

const cback = () => {
    console.log('cb')
}

const log = (cb) => {
    cb()
}
export const log2 = () => log(cback)
export {sum, minus, test}
