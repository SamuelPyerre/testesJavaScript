function final(name, valor){
    alert('Olá '+ name + ' N° entre 0 e 1 é =  ' + valor);
}

function inicial(callback){
    var name = prompt('Por favor, digite seu nome e ajude um amigo desesperado em Funções de Callback ;)')
    function valorRandom(){
        return callback(name, Math.random());
    }
    return valorRandom();
}



inicial(final);