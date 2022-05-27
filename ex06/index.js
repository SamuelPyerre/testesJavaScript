const resultado = document.querySelector('#resultado')
resultado.innerHTML = 'teste'
console.log(resultado)

function capturarValores(n1, n2){
    
    return n1 + n2
}


document.addEventListener('click', (e) => {
    
    const lugar = e.target;
    if(lugar.classList.contains('btn')){
        const n1 = document.querySelector('#num1').value
        const n2 = document.querySelector('#num2').value
        const soma = capturarValores(Number(n1), Number(n2))
        console.log(soma)
        resultado.innerHTML = `A soma entre os valores é ${soma}`
    }

})
