let saldoTotal = 5000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = true;

do {
    const nome = prompt("Digite seu nome: ");
    const cpf = Number(prompt("Digite seu CPF: "));
    const valor = Number(prompt("Digite um valor: "));
    const operacao = prompt("Deseja fazer qual operação? (S/D): ").toUpperCase();

    if (valor <= 0) {
        console.log("Valor inválido.");
    } else if (operacao === "S" && valor > saldoTotal) {
        console.log("Saldo insuficiente.");
    } else if (operacao === "S") {
        console.log("Olá " + nome + ", do CPF " + cpf + ". O seu saldo atual é R$" + saldoTotal);
        saldoTotal -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log("Transação realizada, seu saldo é R$" + saldoTotal);
    } else if (operacao === "D") {
        saldoTotal += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log("Depósito realizado, seu saldo é R$" + saldoTotal);
    } else {
        console.log("Operação inválida.");
    }

    const opcao = prompt("Deseja continuar? (1 para sim / 2 para não): ");
    if (opcao === "1") {
        continuar = true;
    } else if (opcao === "2") {
        continuar = false;
    } else {
        console.log("Opção inválida, programa encerrado.");
        continuar = false;
    }
} while (continuar);

console.log("Saldo final: R$" + saldoTotal);
console.log("Maior valor inserido: R$" + maiorValorInserido);
if (totalTransacoes > 0) {
    console.log("Média dos valores inseridos: R$" + (somaValoresInseridos / totalTransacoes).toFixed(2));
} else {
    console.log("Nenhuma transação realizada.");
}