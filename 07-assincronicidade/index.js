function step02(){
    console.log('passo 02')
}

console.log('passo 01')
step02()
console.log('passo 03')

console.log('Passo 04')
setTimeout(() => {
    console.log('Passo 05')
}, 1000)

console.log('Passo 06')