function final(name, valor){
    alert('Olá '+ name + ' N° entre 0 e 1 é =  ' + valor);
}

function inicial(callback){
    var name = prompt('Por favor, digite seu nome e ajude um amigo desesperado em Funções de Callback ;)')
    function valorRandom(max, min){
        const valorRandom = Math.floor(Math.random() * (max - min)) + min
        return callback(name, valorRandom);
    }
    const minimo = prompt('Agora digite um valor minimo: ')
    const maximo = prompt('Agora digite um valor maximo: ')
    return valorRandom(Number(maximo), Number(minimo));
}



inicial(final);