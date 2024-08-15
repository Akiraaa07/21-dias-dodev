let numero1 = parseInt(prompt("Digite o primeiro numero: "))
let numero2 = parseInt(prompt("Digite o segundo numero: "))
let conta = Number(prompt("Escolha a opção desejada: " + "\n1 = +;\n2 = -;\n3 = *;\n4 = /" ))

switch(conta){
    case 1: 
        console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2))
        break;
    case 2:
        console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2))
        break;
    case 3:
        console.log(numero1 + " x " + numero2 + " = " + (numero1 * numero2))
        break;
    case 4:
        console.log(numero1 + " / " + numero2 + " = " + (numero1 / numero2))
        break;
    default:
        console.log("Opção invalida")
        break;
} 