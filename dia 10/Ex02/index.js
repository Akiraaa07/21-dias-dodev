let array = [];
let arrayInvertido = [];

for(i = 0; i < 5; i++){
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º numero"));
    array[i] = numero;
}

console.log("Array original: " + array)

let contador = 4

for(i = 0; i < 5; i++){
    arrayInvertido[i] = array[contador]
    contador --
}

console.log("Array invertido: " + arrayInvertido);