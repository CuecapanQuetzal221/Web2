// var miCarro=new Object();
// miCarro.marca='Volkswagen';
// miCarro.modelo='pedro';
// miCarro.color='Medio plata medio sucio';
// console.log(miCarro);

// var carro={
//     marca:'mamalon',
//     modelo:'el mas perron',
//     color:'rojo chingame la vista'
// }

//console.log(carro);

var perro={
    nombre:'Percy',
    color:'rubio',
    edad:9,
    talla: 'chico',
    enemigos:["Otro perros","gatos","su deficit de atencion"]
}
console.log(perro);
// console.log(perro.color);
// console.log(perro.enemigos);

perro.raza='perro autista';
console.log(perro);

console.log(perro.edad);

perro.edad=10;
console.log(perro.edad);

delete perro.edad;
console.log(perro);

