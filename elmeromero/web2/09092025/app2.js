
//frutas.push("sandia");
//console.log(frutas);
/* mal
const puerto =3306;
puerto=3308;
console.log(puerto);
*/
const frutas=["Banana"];
frutas.push("mango");//final
frutas.unshift("sandia");//inicio
frutas.push("pera");//final
frutas.unshift("uva");//inicio
console.log(frutas);

//arreglo completo
for(let fruta of frutas){
    console.log(fruta);//nos lista los elementos del arreglo
}

//eliminar
console.log("-------------------------------------------------------------");
frutas.pop();//final


for(let fruta of frutas){
    console.log(fruta);//nos lista los elementos del arreglo
}

console.log("---------------------------------------------------------------");
frutas.shift();//primero

for(let fruta of frutas){
    console.log(fruta);//nos lista los elementos del arreglo
}