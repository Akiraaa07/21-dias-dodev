let valor
let quantidade
let abastecer = parseInt(prompt("Digite a opção desejada: " + "\n1 = Gasolina; \n2 = Álcool; \n3 = Calibrar os pneus"))

switch(abastecer){
    case 1:
        valor = parseFloat(prompt("Digite o valor que deseja abastecer: "))
        quantidade = valor / 5
        console.log("Foram abstecidos " + quantidade + " litros de Gasolina")
        break;
    case 2:
        valor = parseFloat(prompt("Digite o valor que deseja abastecer: "))
        quantidade = valor / 3
        console.log("Foram abastecidos " + quantidade + " litros de Álcool")
        break;
    case 3:
        console.log("Pneus calibrados com sucesso!")
        break;
    default:
        console.log("Opção invalida")
        break;
}