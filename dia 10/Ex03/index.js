let array = [];
let arrayInvertido = [];
let quantidade =parseInt(prompt("Digite a quantidade de numeros que deseja colocar no array: "));

for(let i = 0; i < quantidade; i++){
    let numero = parseInt(prompt("Digite o" + (i + 1) + "º numero"));
    array[i] = numero;
}

console.log("Array em ordem: " + array);

let contador = quantidade - 1
for(let i = 0; i < quantidade; i++){
    arrayInvertido[i] = array[contador];
    contador --
}

console.log("Array invertido: " + arrayInvertido)