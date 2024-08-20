let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))
let peso = parseFloat(prompt("Digite seu peso: "))
let altura = parseFloat(prompt("Digite sua altura: "))
let profissão = prompt("Digite sua profissão: ")

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissão + ", tem " + altura.toFixed(2) + "M de altura e pesa " + peso + "Kg.")

if(idade > 18){
    console.log("Está liberado para tomar umas geladas")
}else{
    console.log("Sem gelada para você")
}

let meses = idade * 12
let semana = idade * 52
let dias = idade * 365

console.log("Sua idade em meses é: " + meses);
console.log("Sua idade em semanas é: " + semana);
console.log("Sua idade em dias é: " + dias);