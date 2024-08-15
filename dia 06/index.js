// EXERCICIO 01
let valor = Number(prompt("Digite um valor inteiro e positivo: "))
for(let contador = 0; contador <= valor; contador++){
    console.log(contador)
}

// EXERCICIO 02
for(let contador = 0; contador <= 50; contador += 5 ){
    console.log(contador)
}

// EXERCICIO 03
for(let contador = 50; contador >= 0; contador -= 5){
    console.log(contador)
}

// EXERCICIO 04
let numero = Number(prompt("Digite um número para a sua tabuada: "))
for(let contador = numero; contador <= numero + 2; contador++){
    console.log(contador)
    for(let contador2 = 0; contador2 <= 10; contador2++){
        console.log(contador + " x " + contador2 + " = " + (contador * contador2))
    }
}
