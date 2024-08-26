let nomes = [];
let senhas = [];
let contador = 0;
let continuar = true;

while(continuar){
    let opcao = prompt("O que deseja fazer: 1 - Cadastro / 2 - Login / 3 - Excluir / 4 - Encerrar");

    switch (opcao) {
        case "1": 
            nomes[contador] = prompt("Digite seu nome: ");
            senhas[contador] = prompt("Digite uma senha: ");
            contador++;
            break;
        case "2": 
            let nome = prompt("Digite seu nome de login: ");
            let senha = prompt("Digite sua senha de login: ");
            let loginValido = false;

            for(let i = 0; i < nomes.length; i++) {
                if(nome == nomes[i] && senha == senhas[i]){
                    loginValido = true;
                    break;
                }
            }
            if(loginValido) {
                console.log("Login efetuado com sucesso!");
            } else {
                console.log("Nome ou senha incorretos!")
            }
            break;
        case "3":
            let nomeExcluir = prompt("Digite o nome que deseja excluir: ");
            let nomesAux = [];
            let senhasAux = [];
            let contadorAux = 0;
            let usuarioEncontrado = false;

            for(let i = 0; i < contador; i++){
                if(nomeExcluir == nomes[i]){
                    usuarioEncontrado = true;
                    console.log("Usuario excluido com sucesso!");
                } else {
                    nomesAux[contadorAux] = nomes[i];
                    senhasAux[contadorAux] = senhas[i];
                    contadorAux++;
                }
            }
            if (!usuarioEncontrado) {
                console.log("Usuário inexistente");
            }

            nomes = nomesAux;
            senhas = senhasAux;
            contador = contadorAux;
            break;
        case "4":
            continuar = false;
            console.log("Programa Encerrado");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }

}

 