//funcion declarativa
function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(numeroAleatorio(1,11));

//funcion expresada

const miNumero=function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(miNumero(2,20));
