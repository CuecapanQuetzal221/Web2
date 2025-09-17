var continuar="S";
const frutas=["Banana"];

while(continuar=="S"){
    continuar=(prompt("Quiere agregar una fruta al carrito? S/N"));
        if(continuar=="S"){
            frutas.push(prompt("Que fruta desea agregar? "));
        }
        console.log(frutas);
    }
