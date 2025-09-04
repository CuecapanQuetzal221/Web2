//Si se ejecutan las funciones si las llamamos al principio y las declaramos despues
/*
saludar();
function saludar(){
    console.log("hola mundo desde la funcion");
}
*/
function saludo(nombreUsuario){
    console.log("Hola, que tranza "+nombreUsuario);
} 

let nombreUsuario=prompt("Dime tu nombre:");
saludo(nombreUsuario);
/*
console.log(saludar());
console.log(saludar);
saludar;

saludar("saludar");
console.log(function saludar());
console.log(function saludar);*/