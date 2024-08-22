let salario;

do {
    let nome = prompt("Digite seu nome: ");
    let idade = Number(prompt("Digite sua idade: "));
    salario = parseFloat(prompt("Digite seu salário: "));
    console.log("nome: " + nome + ", idade: " + idade + ", salario Atual: " + salario);

    confirmacao = prompt("Todas as informações estão corretas? (s/n): ");

} while (confirmacao != "s");

let aumento = 0.015;

for (let ano = 1; ano <= 10; ano++){
    salario += salario * aumento;
    aumento *= 2;

    console.log((2023 + ano) + " = R$ " + Math.round(salario));
}