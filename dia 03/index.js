let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Digite o seu nome: ")
idade = parseInt(prompt("Digite a sua idade: "))
altura = Number(prompt("Digite sua altura: "))
peso = Number(prompt("Digite seu peso: "))

let anoNascimento = 0
anoNascimento = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNascimento + ", tem " + altura + " de altura, pesa " + peso + " kg e seu imc é " + imc + "Kg/m2")