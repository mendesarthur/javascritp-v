const mypromise = new Promise((resolve, reject) => {
    let nome = 'arthur'

    if(nome === 'arthur'){
        resolve(`seja bem-vindo`)
    }else{
        reject('Usuário não encontrado!')
    }
}).then((data) => {
    console.log(data)
})