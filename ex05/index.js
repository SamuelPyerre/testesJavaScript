
function capturarNome(){
    return document.querySelector('#inptNome').value
}


document.addEventListener('click', (e) => {
    const nome = capturarNome()
    const lugar = e.target;
    if(lugar.classList.contains('btn')){
        console.log(nome)
        alert(`Meu nome é ${nome.length}.`)
    }

})
