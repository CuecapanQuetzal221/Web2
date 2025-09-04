function saludar(nombre){
    console.log("Hola "+nombre);
}

function sumar(n1,n2){
    return parseInt(n1)+parseInt(n2);
}
function resta(n1,n2){
    return parseInt(n1)-parseInt(n2);
}
function multiplicacion(n1,n2){
    return parseInt(n1)*parseInt(n2);
}
function division(n1,n2){
    return parseInt(n1)/parseInt(n2);
    if(n2==0){
        console.log("Division indefinida");
    }
}

let numero1=parseInt (prompt("Numero 1: "));
let numero2=parseInt( prompt("Numero 2: "));

var resultado=sumar(numero1,numero2);
console.log(resultado);
var resultado=sumar(5,9);
console.log(resultado);
var resultado=sumar(7,98);
console.log(resultado);
