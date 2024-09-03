let nomes = [];
let senhas = [];

function solicitarOpcao(){
    let opcao = prompt("Digite o que deseja fazer:\n1 - Cadastrar\n2 - Login\n3 - Excluir\n4 - Encerrar Programa");
    return opcao;
}

function cadastrarUsuario(){
    nomes.push(prompt("Digite o nome para cadastro: "));
    senhas.push(prompt("Digite sua senha: "));  
    
}

function fazerLogin(nome, senha){
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha){
        return true;
    } else{
        return false;
    }
}

function excluirCadastro(nome){
    let indice = nomes.indexOf(nome);
    if(indice !== -1){
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Cadastro Excluído!");
    } else{
        console.log("Usuario não encontrado!");
    }
}

let continuar = true;

while(continuar){
    let opcao = solicitarOpcao();
    let nome;
    switch (opcao) {
        case "1":
            cadastrarUsuario();
            break;
        case "2":
            nome = prompt("Digite seu nome: ");
            let senha = prompt("Digite sua senha: ");
            let login = fazerLogin(nome, senha);
            if(login){
                console.log("Login Efetuado com sucesso!");
            } else {
                console.log("Nome ou senha incorretos!");
            }
            break;
        case "3":
            nome = prompt("Digite seu nome: ");
            excluirCadastro(nome);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opção Inválida!!!");
            break;
    }
}

