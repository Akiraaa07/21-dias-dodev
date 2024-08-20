let peso = parseFloat(prompt("Digite seu peso em Kg: "))
let altura = parseFloat(prompt("Digite sua altura em metros: "))

let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log("MAGREZA")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("NORMAL")
}else if(imc >= 24.9 && imc <= 30){
    console.log("SOBREPESO")
}else{
    console.log("OBESIDADE")
}

//ANO DE NASCIMENTO
let idade = Number(prompt("Digite sua idade: "))

let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log("Você nasceu no ano de " + anoNasc)

//ANOS E IDADE

let anoVivido = anoNasc
let idadeAtual = 0

for(let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++){
    console.log(anoVivido + " - " + idadeAtual + "anos de idade")
    idadeAtual++
}

do{
    let continuar = prompt("Deseja inserir os dados novamente? (s/n): ").toUpperCase(); 
}while(continuar == "s")