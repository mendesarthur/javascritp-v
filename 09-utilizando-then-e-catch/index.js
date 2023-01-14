const mypromise = new Promise((resolve, reject) => {
    let nome = 'arthur'

    if(nome === 'arth'){
        resolve(`seja bem-vindo`)
    }else{
        reject('Usuário não encontrado!')
    }
}).then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
}) 