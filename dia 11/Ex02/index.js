let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0

while(continuar){
    let modelo = prompt("Digite o modelo do carro: ");
    modelos[contador] = modelo;
    let ano = Number(prompt("Digite o ano do carro: "));
    anos[contador] = ano;
    let valor = parseFloat(prompt("Digite o valor do carro: "));
    valores[contador] = valor;
    
    let desejaContinuar = prompt("Deseja continuar inserindo carro? (S/N): ").toUpperCase();
    if(desejaContinuar != "S"){
        console.log("Programa Encerrado")
        continuar = false;
    }

    contador++;
}

console.log("Exibindo os carros cadastrados");

for(i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " , valor: " + valores[i]);
}

console.log("Ordenando por preço");

for(i = 0; i < valores.length - 1; i++){
    for(let j = 0; j < valores.length -i -1; j++){
        if(valores[j] > valores[j + 1]){

            let modeloMaiorValor = modelos[j];
            modelos[j] = modelos[j + 1];
            modelos[j + 1] = modeloMaiorValor;

            let anoMaiorValor = anos[j];
            anos[j] = anos[j + 1];
            anos[j + 1] = anoMaiorValor;

            let maiorValor = valores[j];
            valores[j] = valores[j + 1];
            valores[j + 1] = maiorValor;

        }
    }
}

console.log("Carros ordenados pelo preço: ");

for(i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " , valor: " + valores[i]);
}
