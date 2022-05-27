function final(name){
    alert('Olá '+ name);
}

function inicial(callback){
    var name = prompt('Por favor, digite seu nome e ajude um amigo desesperado em Funções de Callback ;)')
    callback(name)
}

inicial(final);