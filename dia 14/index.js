let nome;
let salario;

function colaborador(){
    nome = prompt("Digite seu nome: ");
    salario = parseFloat(prompt("Digite o seu salário: "));
    
    calcularAumentoSalarial(nome, salario);
}

function calcularAumentoSalarial(nome, salario){
    let aumento = 0;

    if(salario <= 1500){
        aumento = 0.2;
    }else if(salario <= 2000){
        aumento = 0.15;
    }else if(salario <= 3000){
    aumento = 0.1;
    }else{
    aumento = 0.05;
    }

   let novoSalario = salario + (salario * aumento);

    console.log("O nome do colaborador é: " + nome);
    console.log("O salario do colaborador é: R$" + salario);
    console.log("A porcentagem de aumento é: " + (aumento * 100) + "%");
    console.log("O salario reajustado é: R$" + novoSalario);

    calcularNovamente();
}

function calcularNovamente(){
    let resposta = prompt("Deseja calcular novamente: (s/n): ").toLocaleLowerCase();

    if(resposta === "s"){
        colaborador();
    }else{
        console.log("Fim do programa!");
    }
}