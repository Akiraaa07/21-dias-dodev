const array = [];
const indices = [];
let contadorIndice = 0;

let numeroProcurado = parseInt(prompt("Digite o numero procurado: "));

for(let i = 0; i < 10; i++){
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}: `));
    array[i] = elemento;
}

for(let i = 0; i < 10; i++){
    if(array[i] === numeroProcurado){
        indices[contadorIndice] = i
        contadorIndice++
    }
}

console.log(`O numero procurado ${numeroProcurado} foi encontrado nos índices: ${indices} `);