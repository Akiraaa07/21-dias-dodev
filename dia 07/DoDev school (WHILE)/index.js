let mediaGeral = 0
let qtdHomens = 0
let qtdMulheresAcima7 = 0 
let maiorNotaHomens = 0
let contador = 1
let continuar = "S"

while(contador <= 10){
    let nota = parseFloat(prompt("Digite a nota do " + contador + "º aluno: "))
    let sexo = prompt("Digite o seu genero(M/F):  ").toUpperCase();

    if(sexo == "M"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qtdHomens++
    }

    if(sexo == "F" && nota > 7){
        qtdMulheresAcima7++
    }

    mediaGeral += nota

    if(contador <= 10){
        continuar = prompt("Deseja cadastrar outra nota? (S/N): ").toUpperCase();
    }
    contador++
}

mediaGeral = mediaGeral / 10

console.log("A média geral de todos os alunos é: " + mediaGeral)
console.log("A quantidad de homens que enviou as notas foi: " + qtdHomens)
console.log("A quantidade de mulheres com a nota acima de 7 é: " + qtdMulheresAcima7)
console.log("A maior nota entre os homens é: " + maiorNotaHomens)