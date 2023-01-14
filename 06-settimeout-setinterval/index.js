//setTimeout
// console.log('Programa iniciado')

// const timeoutId = setTimeout(() => {
//     console.log('3 segundos de delay')
// }, 3000)

// clearTimeout(timeoutId)


//setInterval

let seconds = 0

const intervalId = setInterval(() => {
    seconds += 3
    console.log( `Se passaram ${seconds} segundos`)
    if(seconds > 10){
        clearInterval(intervalId)
        console.log('Tempo esgotado...')
    }
}, 3000)



