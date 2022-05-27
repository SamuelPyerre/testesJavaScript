 
function aleatorio (min = 0, max = 3){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string'){
                reject('Informação inválida')
                return
            }
            resolve(msg.toUpperCase() + ' - Passei na promisse')
            return
        }, tempo)
    
    })
}
/*
esperaAi('Fase 1', aleatorio())
    .then(valor => {
        console.log(valor)
        return esperaAi('Frase 2', aleatorio())
    })
    .then(fase =>{
        console.log(fase)
        return esperaAi('Fase 3', aleatorio())
    })
    .then(fase =>{
        console.log(fase)
    })
    .catch(e => console.log(e))

 */

async function executa(){
    
    try{
        const fase1 = await esperaAi('Fase 1', aleatorio())
        console.log(fase1)
        const fase2 = await esperaAi('Fase 2', aleatorio())
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', aleatorio())
        console.log(fase3)
    }
    catch(e){
        console.log(e)
    }
    
    
}
executa()