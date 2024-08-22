do{
    let idade = Number(prompt("Digite sua idade: "));
    let anoAtual = 2023;   
    let anoNasc = anoAtual - idade;

    for(let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++){
        let idadeAtual = anoVivido - anoNasc;
        console.log(anoVivido + " - " + idadeAtual + " anos de idade.");
        idadeAtual++
    }

    continuar = prompt("Deseja inserir os dados novamente? (s/n): ").toUpperCase(); 
}while(continuar == "s");