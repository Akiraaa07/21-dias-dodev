let peso = parseFloat(prompt("Digite seu peso em Kg: "))
let altura = parseFloat(prompt("Digite sua altura em metros: "))

let imc = peso / (altura * altura)

if(imc < 18,5){
    console.log("MAGREZA")
}else if(imc >= 18,5 && imc <= 24,9){
    console.log("NORMAL")
}else if(imc >= 24,9 && imc <= 30){
    console.log("SOBREPESO")
}else{
    console.log("OBESIDADE")
}