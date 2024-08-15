//Desafio do Jantar especial

let fome = prompt("Você está com fome? (Sim/Não) : ")
let dinheiro = prompt("Você está com dinheiro? (Sim/Não) : ")
let restaurante = prompt("O restaurante está aberto? (Sim/Não) : ")

if(fome === "Não" && dinheiro === "Não"){
    console.log("Hoje a janta sera em casa!!!")
}else if(fome === "Sim" && dinheiro === "Sim" && restaurante === "Sim"){
    console.log("Hoje o jantar será no seu restaurante preferido!")
}else{
    console.log("Peça um delivery!")
}    

//Desafio do Motorista

let nome = prompt("Digite se nome: ")
let idade = Number(prompt("Digite sua idade: "))
let carta = prompt("Possui carta de motorista? (s/n): ")
let carro = prompt("Possui algum carro? (s/n): ")

if (idade <= 17 && carta === "n") {
    console.log(nome + ", você não pode dirigir.")
} else if (idade >= 18 && carta === "s" && carro === "n") {
    console.log(nome + ", você pode dirigir mas não tem um carro.")
} else if (idade >= 18 && carta === "s" && carro === "s") {
    console.log(nome + ", você será o motorista!")
} else {
    console.log(nome + ", algo não está certo com as informações fornecidas.")
}