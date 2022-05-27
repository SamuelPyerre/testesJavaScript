const resultado = document.querySelector('#resultado')
resultado.innerHTML = 'teste'
console.log(resultado)

function calcularDesconto(valor, desconto){
    return (valor - ((valor/100) * desconto)).toFixed(2)
}


document.addEventListener('click', (e) => {
    
    const lugar = e.target;
    if(lugar.classList.contains('btn')){
        const valor = document.querySelector('#valor').value
        const porcentagem = document.querySelector('#desconto').value
        const desconto = calcularDesconto(Number(valor), Number(porcentagem))
        resultado.innerHTML = `Valor total da compra: R$${Number(valor).toFixed(2)}. <br> Valor depois do desconto: R$${desconto}.`
    }

})
