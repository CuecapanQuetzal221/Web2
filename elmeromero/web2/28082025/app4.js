//tres numeros, cual es menor, cual es mayor, cual es igual
let num1=prompt("Dame un numero: ");
let num2=prompt("Dame otro numero: ");
let num3=prompt("Un numero y ya: ");

console.log(num1);
console.log(num2);
console.log(num3);

if (num1==num2){
    if(num1==num3){
        console.log("Todos los numeros son iguales");
    }else{
        if(num1>num3){
            console.log(num1+" es mayor y "+num3+" es el menor");
        }else{
            console.log(num3+" es el mayor y "+num1+" es el menor");
        }
    }
}else{
    if(num1>num2){
        if(num1>num3){
            if(num2>num3){
                console.log(num1+" es el mayor y "+num3+" es el menor");
            }else{
                console.log(num1+" es el mayor y "+num2+" es el menor");
            }
        }else{
            console.log(num3+" es el mayor y "+num2+" es el menor");
        }
    }else{
        if(num2>num3){
            if(num1>num3){
                console.log(num2+" es el mayor y "+num3+" es el menor");
            }else{
                console.log(num2+" es mayor y "+num1+" es el menor");
            }
        }else{
            console.log(num3+" es el mayor y "+num1+" es el menor");
        }
    }
}
