const nome = document.querySelector('#inptNome')

document.addEventListener('click', (e) => {
    
    const lugar = e.target;
    if(lugar.classList.contains('btn')){
        
        alert(`Meu nome é ${nome.value}.`)
    }

})
