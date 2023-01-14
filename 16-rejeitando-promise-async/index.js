async function asyncSum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('Arguments for adiction must be of type number')
    }
    return a + b
}

async function asyncSubtract(a, b) {
    if(typeof a || typeof b !== 'number'){
        return Promise.reject('Arguments for subtraction must be of type number')
    }
    return a - b
}

const sumResult = asyncSum(15, 33)
const subtractResult = asyncSubtract(52, null)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})
