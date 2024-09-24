let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

function numerosComuns(arrayUm, arrayDois) {
    let resultado = [];
    let contadorResultado = 0;

    for (let i = 0; i < arrayUm.length; i++) {
        if(arrayDois.includes(arrayUm[i])) {
            let countArrayUm = arrayUm.filter(num => num === arrayUm[i]).length;
            let countArrayDois = arrayDois.filter(num => num === arrayUm[i]).length;

            if (countArrayUm === 1 && countArrayDois === 1) {
                resultado[contadorResultado] = arrayUm[i];
                contadorResultado++;
            }
        }
    }
    return resultado;
}

console.log(numerosComuns(arrayA, arrayB));