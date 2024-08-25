let alunos = [];
let notas = [];
let contador = 0;    
let continuar = true;

while(continuar){
    let nome = prompt("Digite o nome do nome: ");
    alunos[contador] = nome;
    let nota = parseFloat(prompt("Digite a nota da prova: "));
    notas[contador] = nota;
    
    let desejaContinuar = prompt("Deseja continuar inserindo aluno? (S/N)").toUpperCase();
    if(desejaContinuar != "S"){
        console.log("Programa encerrado");
        continuar = false;
    }
    contador++;
}

console.log("Exibindo Informações dos Alunos Cadastrados")

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i] + " - " + notas[i])
}

let somaNotas = 0;
for(let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

let media = somaNotas / alunos.length
console.log("A soma das notas dos alunos cadastrados é: " + somaNotas);
console.log("A média geral da turma é: " + media)