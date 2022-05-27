/*function aleatorio (min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}

esperaAi('Frase 1', aleatorio(1, 3))
esperaAi('Frase 2', aleatorio(1, 3))
esperaAi('Frase 3', aleatorio(1, 3))
*/

function aleatorio (min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    
    })
}
esperaAi('Frase 1', aleatorio(1, 3))
    .then(resposta =>{
        console.log(resposta)
        return esperaAi('Frase 2', aleatorio(1, 3))
        .then(resposta =>{
            console.log(resposta)
            return esperaAi('Frase 3', aleatorio(1, 3))
            .then(resposta =>{
                console.log(resposta)
            })
            .catch()
        })
        .catch()
    })
    .catch()



